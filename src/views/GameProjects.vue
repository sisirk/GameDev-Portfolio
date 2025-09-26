<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      Here's a look at the games I've worked on - solo, jam, and team projects.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!-- Lightbox Overlay -->
    <div
      v-if="lightbox.open"
      class="tech-lightbox"
      @click.self="closeLightbox"
      role="dialog"
      aria-modal="true"
    >
      <div class="tech-lightbox-content">
        <button class="tech-lightbox-close" @click="closeLightbox" aria-label="Close">×</button>
        <div class="tech-lightbox-title">{{ lightbox.title }}</div>
        <img :src="lightbox.src" :alt="lightbox.title || 'Image'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: { ProjectsList },
  data() {
    return {
      projects: gameProjectsData,
      lightbox: { open: false, src: "", title: "" },
      scrollLockY: 0, // for teleport scroll restore
    };
  },
  mounted() {
    // Delegated click handler:
    // 1) Existing .tech-hover-card (GIFs).
    // 2) Any other IMG inside project content (except low-res Deal images and images inside links).
    const onClick = (ev: Event) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;

      // ---------- Case 1: tech-hover-card (already used for GIFs) ----------
      const card = (target.closest && target.closest(".tech-hover-card")) as HTMLElement | null;
      if (card) {
        const src =
          card.getAttribute("data-src") ||
          (card.querySelector("img") as HTMLImageElement | null)?.getAttribute("src") ||
          "";
        const title =
          card.getAttribute("data-title") ||
          (card.querySelector(".tech-caption")?.textContent || "").trim();
        if (src) {
          this.openLightbox(src, title || "");
          return;
        }
      }

      // ---------- Case 2: Any other IMG in the content ----------
      const img = (target.closest && target.closest("img")) as HTMLImageElement | null;
      if (!img) return;

      // Ignore images inside links (badges / external buttons)
      const anchor = img.closest("a");
      if (anchor) return;

      const src = img.getAttribute("src") || "";
      const alt = img.getAttribute("alt") || "";

      // Exclude Deal (low-res) images:
      // - banner class="youtube"
      // - external earthgames images
      // - local Deal_Screenshot*.png
      // - alt mentions Deal
      const isDeal =
        img.classList.contains("youtube") ||
        /earthgames\.org/i.test(src) ||
        /Deal_Screenshot/i.test(src) ||
        /Deal/i.test(alt);

      if (isDeal) return;

      if (src) {
        this.openLightbox(src, alt || "");
      }
    };

    this.$el.addEventListener("click", onClick);
    (this as any)._galleryClickHandler = onClick;

    // ESC to close the lightbox
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && this.lightbox.open) this.closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    (this as any)._galleryKeyHandler = onKey;
  },
  beforeDestroy() {
    if ((this as any)._galleryClickHandler) {
      this.$el.removeEventListener("click", (this as any)._galleryClickHandler);
    }
    if ((this as any)._galleryKeyHandler) {
      window.removeEventListener("keydown", (this as any)._galleryKeyHandler);
    }
  },
  methods: {
    openLightbox(src: string, title: string) {
      this.lightbox = { open: true, src, title };
      this.enableScrollTrap();
    },

    closeLightbox() {
      this.disableScrollTrap();
      this.lightbox.open = false;
      this.lightbox.src = "";
      this.lightbox.title = "";
    },

    // ===== Scroll trap (prevents background scroll while modal is open) =====
    enableScrollTrap() {
      if ((this as any)._scrollTrapEnabled) return;

      const blockWheel = (e: Event) => {
        if (!this.lightbox.open) return;
        e.preventDefault();
      };
      const blockTouch = (e: TouchEvent) => {
        if (!this.lightbox.open) return;
        e.preventDefault();
      };
      const blockKeys = (e: KeyboardEvent) => {
        if (!this.lightbox.open) return;
        // Keys that scroll the page
        const scrollers = [" ", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"];
        if (scrollers.includes(e.key)) e.preventDefault();
      };

      // Capture while modal is open
      window.addEventListener("wheel", blockWheel, { passive: false });
      window.addEventListener("touchmove", blockTouch, { passive: false });
      window.addEventListener("keydown", blockKeys, { passive: false });

      (this as any)._trapWheel = blockWheel;
      (this as any)._trapTouch = blockTouch;
      (this as any)._trapKeys = blockKeys;
      (this as any)._scrollTrapEnabled = true;
    },

    disableScrollTrap() {
      if (!(this as any)._scrollTrapEnabled) return;

      window.removeEventListener("wheel", (this as any)._trapWheel, { passive: false } as any);
      window.removeEventListener("touchmove", (this as any)._trapTouch, { passive: false } as any);
      window.removeEventListener("keydown", (this as any)._trapKeys, { passive: false } as any);

      (this as any)._trapWheel = null;
      (this as any)._trapTouch = null;
      (this as any)._trapKeys = null;
      (this as any)._scrollTrapEnabled = false;
    },
  }
});
</script>

<style lang="less">
@import "@/css/variables.less";

/* ---------- Hover gallery (row of images with overlay caption) ---------- */
.tech-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  max-width: 980px;
  margin: 18px auto 0;
}

.tech-hover-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
  cursor: zoom-in;
}

.tech-hover-card img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform .3s ease;
}

.tech-hover-card:hover img {
  transform: scale(1.05);
}

.tech-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 8px 10px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  font-weight: 600;
  font-size: .9em;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity .3s ease, transform .3s ease;
}

.tech-hover-card:hover .tech-caption {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- Lightbox styles (dim + centered) ---------- */
.tech-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75); /* dim only; don't blur overlay itself */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9990;
  padding: 24px;
  overflow: auto; /* internal scroll if content exceeds viewport */
  overscroll-behavior: contain;
  touch-action: none;
}

.tech-lightbox-content {
  position: relative;
  max-width: ~"min(1100px, 92vw)";
  max-height: 90vh;
  background: @contentBgColor;
  border-radius: 12px;
  padding: 16px 16px 12px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
}

.tech-lightbox-title {
  font-weight: 700;
  color: #ffffff;
  margin: 4px 42px 10px 6px;
  text-align: left;
}

.tech-lightbox img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  max-height: 78vh;
}

/* Close button */
.tech-lightbox-close {
  position: absolute;
  top: 6px;
  right: 8px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  color: #fff;
  background: rgba(0,0,0,.45);
  transition: background .2s ease, transform .1s ease;
}
.tech-lightbox-close:hover { background: rgba(0,0,0,.6); }
.tech-lightbox-close:active { transform: scale(.96); }

.paragraph.center img.pc-screenshot {
  cursor: -webkit-zoom-in; /* Safari fallback */
  cursor: zoom-in;
}

/* Mobile single-column fallback */
@media (max-width: 420px) {
  .tech-gallery { grid-template-columns: 1fr; }
}
</style>
