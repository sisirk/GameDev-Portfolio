<template>
  <div class="other-page-root">
    <!-- Page content (this gets blurred when lightbox is open) -->
    <div class="other-page" :class="{ blurred: lightbox.open }">
      <h1>Showcase</h1>

      <!-- Intro -->
      <p class="intro">
        A curated collection of 3D models, animations, VFX, published assets, and creative experiments.
      </p>

      <!-- Section jump nav -->
      <nav class="section-nav" aria-label="Section navigation">
        <a href="#models" @click.prevent="scrollTo('models')">3D Models/Animations</a>
        <a href="#vfx" @click.prevent="scrollTo('vfx')">Visual Effects</a>
        <a href="#assets" @click.prevent="scrollTo('assets')">Published Assets</a>
        <a href="#videos" @click.prevent="scrollTo('videos')">Timelapses</a>
        <a href="#other" @click.prevent="scrollTo('other')">Extras</a>
      </nav>

      <!-- 3D Models -->
      <section id="models" class="section">
        <header class="section-header">
          <br/>
          <h2>3D Models/Animations</h2>
        </header>

        <div class="gallery">
          <!-- Froggy animations -->
          <p class="section-sub" style="grid-column: span 12;">Froggy Animation Set (Used in Ninja Froggy for the main character)</p>
          <article class="card span-2">
            <div class="card-media" data-title="Froggy Animation Set">
              <video autoplay loop muted playsinline width="100%" height="auto" loading="lazy">
                <source src="img/projects/Froggy_Animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>

          <!-- Enemies animations -->
          <p class="section-sub" style="grid-column: span 12;"><br/>Enemies Animation Set (A few enemies from Ninja Froggy)</p>
          <article class="card span-2">
            <div class="card-media" data-title="Enemies Animation Set">
              <video autoplay loop muted playsinline width="100%" height="auto" loading="lazy">
                <source src="img/projects/Enemies_Animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>

          <!-- Other animations -->
          <p class="section-sub" style="grid-column: span 12;"><br/>Other Animations (Coins, valuables, and in-game effects) </p>
          <article class="card span-2">
            <div class="card-media" data-title="Other Animations">
              <video autoplay loop muted playsinline width="100%" height="auto" loading="lazy">
                <source src="img/projects/Valuables_Animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>
        </div>
      </section>

      <!-- VFX -->
      <section id="vfx" class="section">
        <header class="section-header">
          <br/>
          <h2>Particle Effects</h2>
        </header>

        <div class="gallery">
          <p class="section-sub" style="grid-column: span 12;">VFX Set (Niagara particle effects and shader-based visuals)</p>
          <article class="card span-2">
            <div class="card-media" data-title="VFX Set">
              <video autoplay loop muted playsinline width="100%" height="auto" loading="lazy">
                <source src="img/projects/VFX.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>
        </div>
      </section>

      <!-- Published Assets -->
      <section id="assets" class="section">
        <header class="section-header">
          <br/>
          <h2>Published Assets</h2>
          <p class="section-sub">
            Published stylized asset packs and singles available on the
            <a href="https://www.fab.com/sellers/NinjaFroggy" target="_blank" rel="noopener noreferrer">Fab</a>
            marketplace
          </p>
        </header>

        <div class="gallery">
          <article
            v-for="asset in publishedAssets"
            :key="asset.id"
            class="card"
            :class="{ 'span-2': asset.span === 2 }"
          >
            <div class="card-media" :data-title="asset.alt || 'Asset'">
              <img :src="asset.thumb" :alt="asset.alt || 'Asset image'" loading="lazy" />
            </div>
          </article>
        </div>
      </section>

      <!-- Timelapses -->
      <section id="videos" class="section">
        <header class="section-header">
          <br/>
          <h2>Timelapses</h2>
          <p class="section-sub">
            Watch the full playlist of modeling timelapses on my
            <a href="https://www.youtube.com/channel/UCsFRYYdH_maM6EVQYDYJvVg" target="_blank" rel="noopener noreferrer">YouTube</a>
            channel
          </p>
        </header>

        <div class="video-grid">
          <div class="video-embed">
            <iframe
              src="https://www.youtube.com/embed/videoseries?si=oa59tro5M3nD1-IX&amp;list=PLU6d9DbUVNtwFlI-aVxRwEkMSRHMuqktK"
              title="Modeling Timelapse Playlist"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div class="video-embed">
            <iframe
              src="https://www.youtube.com/embed/videoseries?si=d2foj7ennLzGt1d0&amp;list=PLU6d9DbUVNtzGG1nwuUQRGSRjbvNqDwmp"
              title="Enemy Modeling/Animation Playlist"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <!-- Other -->
      <section id="other" class="section">
        <header class="section-header">
          <br/>
          <h2>Extras</h2>
        </header>

        <!-- SolidWorks -->
        <p class="section-sub gallery-sub">SolidWorks Models (CAD models built using industry-standard workflows)</p>
        <div class="gallery">
          <!-- Large card (left) -->
          <article class="card span-2">
            <div class="card-media" data-title="SolidWorks Hairdryer model">
              <img
                src="img/projects/Hairdryer.png"
                alt="SolidWorks Hairdryer model"
                loading="lazy"
              />
              <a
                class="media-link-badge"
                href="https://www.dropbox.com/scl/fi/47vhrfjdd6pokc9hjhu5f/HairDryer.SLDPRT?rlkey=67r7ac6uq09tpuu0ofpj84z9q&e=1&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Dropbox for SolidWorks HairDryer model pieces"
              >
                Dropbox link
              </a>
            </div>
          </article>

          <!-- Right stack (two smaller cards) -->
          <div class="stack">
            <article class="card">
              <div class="card-media" data-title="SolidWorks Hammer model">
                <img
                  src="img/projects/Hammer.png"
                  alt="SolidWorks Hammer model"
                  loading="lazy"
                />
                <a
                  class="media-link-badge"
                  href="https://www.dropbox.com/scl/fi/x9nyo23yx9f7xhd0xm9sy/Hammer.7z?dl=0&e=1&file_subpath=%2FHammer&rlkey=hb4hc5235s73omkz65pqjvbsr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Dropbox for SolidWorks Hammer model pieces"
                >
                  Dropbox link
                </a>
              </div>
            </article>

            <article class="card">
              <div class="card-media" data-title="SolidWorks Toothpaste Tube model">
                <img
                  src="img/projects/ToothpasteTube.png"
                  alt="SolidWorks Toothpaste Tube model"
                  loading="lazy"
                />
                <a
                  class="media-link-badge"
                  href="https://www.dropbox.com/scl/fi/7fdvqom41flp6evecz83x/ToothpasteTube.SLDPRT?rlkey=nfyj9yz996wxguqrh5oirj6er&e=1&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Dropbox for SolidWorks Toothpaste Tube model pieces"
                >
                  Dropbox link
                </a>
              </div>
            </article>
          </div>
        </div>

        <!-- Sigils -->
        <br/>
        <p class="section-sub gallery-sub">Some of my pixel art</p>
        <div class="gallery">
          <article class="card span-2">
            <div class="card-media" data-title="Sigils for Ninja Froggy">
              <img
                src="img/projects/Sigils.png"
                alt="Sigils for Ninja Froggy"
                loading="lazy"
              />
            </div>
          </article>
        </div>
        <br/><br/>
      </section>
    </div>

    <!-- Lightbox Overlay (sibling to page, so it's not blurred) -->
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

        <img v-if="lightbox.kind === 'image'" :src="lightbox.src" :alt="lightbox.title || 'Image'" />
        <video
          v-else
          :src="lightbox.src"
          autoplay
          controls
          playsinline
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherPage",
  data() {
    return {
      // published assets
      publishedAssets: [
        { id: "environment-pack", thumb: "img/projects/Environment_Pack.png", alt: "Stylized Environment Pack cover" },
        { id: "trees-pack",       thumb: "img/projects/Trees_Pack.png",       alt: "Stylized Trees Pack cover" },
        { id: "plants-pack",      thumb: "img/projects/Plants_Pack.png",      alt: "Stylized Plants Pack cover" },
        { id: "rocks-pack",       thumb: "img/projects/Rocks_Pack.png",       alt: "Stylized Rocks Pack cover" },
        { id: "land-vehicles",    thumb: "img/projects/Vehicles_Land_Pack.png", alt: "Stylized Land Vehicles Pack cover" },
        { id: "sea-vehicles",     thumb: "img/projects/Vehicles_Sea_Pack.png",  alt: "Stylized Sea Vehicles Pack cover" },
      ],

      // lightbox state
      lightbox: { open: false, kind: "image", src: "", title: "" },
      scrollLockY: 0,
    };
  },
  mounted() {
    // Delegated click handler for any IMG/VIDEO inside .card-media
    const onClick = (ev) => {
      const target = ev.target;
      if (!target) return;

      // Ignore Dropbox badges
      const badge = target.closest && target.closest(".media-link-badge");
      if (badge) return;

      // Must be inside a media card
      const cardMedia = target.closest && target.closest(".card-media");
      if (!cardMedia) return;

      // Ignore iframes (YouTube)
      if (target.tagName === "IFRAME") return;

      // Find the media element
      let mediaEl = null;
      if (target.tagName === "IMG" || target.tagName === "VIDEO") {
        mediaEl = target;
      } else {
        mediaEl = cardMedia.querySelector("img,video");
      }
      if (!mediaEl) return;

      // Title
      const title =
        cardMedia.getAttribute("data-title") ||
        (mediaEl.getAttribute && mediaEl.getAttribute("alt")) ||
        "";

      // Source & kind
      let src = "";
      let kind = "image";

      if (mediaEl.tagName === "IMG") {
        src = mediaEl.getAttribute("src") || "";
        kind = "image";
      } else if (mediaEl.tagName === "VIDEO") {
        src = mediaEl.currentSrc || "";
        if (!src) {
          const sourceEl = mediaEl.querySelector("source");
          src = (sourceEl && sourceEl.getAttribute("src")) || "";
        }
        kind = "video";
      }

      if (src) this.openLightbox(kind, src, title);
    };

    this.$el.addEventListener("click", onClick);
    this._otherGalleryClickHandler = onClick;

    // ESC to close
    const onKey = (e) => {
      if (e.key === "Escape" && this.lightbox.open) this.closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    this._otherGalleryKeyHandler = onKey;
  },
  beforeDestroy() {
    if (this._otherGalleryClickHandler) {
      this.$el.removeEventListener("click", this._otherGalleryClickHandler);
    }
    if (this._otherGalleryKeyHandler) {
      window.removeEventListener("keydown", this._otherGalleryKeyHandler);
    }
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    },

    openLightbox(kind, src, title) {
      this.lightbox = { open: true, kind, src, title };

      // Freeze background without losing scroll position
      this.scrollLockY = window.scrollY || window.pageYOffset || 0;
      const body = document.body;

      body.style.position = 'fixed';
      body.style.top = `-${this.scrollLockY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflowY = 'scroll';
    },

    closeLightbox() {
      const body = document.body;
      const y = this.scrollLockY || 0;

      // Unfreeze
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflowY = '';

      // Restore scroll
      window.scrollTo({
        top: y,
        left: 0,
        behavior: 'instant'
      });

      // Clear state
      this.lightbox.open = false;
      this.lightbox.src = '';
      this.lightbox.title = '';
    }
  },
};
</script>

<style scoped>
/* Root wraps page + overlay sibling */
.other-page-root {
  position: relative;
}

/* ===== Page layout ===== */
.other-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem;
  color: #eaeaea;
}

/* Blur ONLY the page when modal open */
.other-page.blurred {
  filter: blur(6px);
  transition: filter .2s ease;
}

.intro {
  margin: 0.25rem 0 1rem 0;
  color: #bbbdc0;
}

.section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  margin: 0.5rem 0 1.25rem 0;
}

.section-nav a {
  font-size: 0.95rem;
  text-decoration: none;
  padding: 0.35rem 0.65rem;
  border: 1px solid #bbbdc0;
  border-radius: 9999px;
  color: #ffffff;
  transition: transform 120ms ease, opacity 120ms ease, border-color 120ms ease;
}

.section-nav a:hover {
  transform: translateY(-1px);
  opacity: 0.95;
  border-color: rgba(0, 255, 255, 0.6);
}

.section {
  margin: 2rem 0;
}

.main-header h1 {
  color: #ffffff;
}

.section-header h2 {
  margin: 0;
  color: #ffffff;
}

.section-sub {
  margin: 0.35rem 0 1rem 0;
  color: #bbbdc0;
}

/* ===== Card grid ===== */
.gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}

.gallery > .section-sub,
.gallery-sub {
  grid-column: span 12;
  margin: 0.25rem 0 0.5rem 0;
  color: #bbbdc0;
}

.gallery > .card {
  grid-column: span 12;
}

@media (min-width: 640px) {
  .gallery > .card { grid-column: span 6; }
}
@media (min-width: 1024px) {
  .gallery > .card { grid-column: span 4; }
}

/* Wider feature card (8/12 on large screens) */
.gallery > .card.span-2 { grid-column: span 12; }
@media (min-width: 1024px) {
  .gallery > .card.span-2 { grid-column: span 8; }
}

/* Right-hand vertical stack next to a span-2 card */
.stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
  grid-column: span 12;
}
@media (min-width: 1024px) {
  .stack { grid-column: span 4; }
}

/* Card base */
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

/* Media container enforces 16:9 and anchors overlays */
.card-media {
  position: relative;
  background: #f3f4f6;
  aspect-ratio: 16/9;
  overflow: hidden;
  cursor: zoom-in; /* indicates click-to-zoom */
}

/* Absolute-fill media prevents white strips/gaps */
.card-media img,
.card-media video,
.card-media iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .2s ease;
}

.card-media:hover img,
.card-media:hover video {
  transform: scale(1.02);
}

/* YouTube embeds */
.video-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}
.video-embed { grid-column: span 12; }
@media (min-width: 768px) {
  .video-embed { grid-column: span 6; }
}
.video-embed iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border: 0;
}

/* Badge for Dropbox link */
.media-link-badge {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 2;

  padding: 6px 10px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;

  color: #fff;
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: saturate(120%) blur(2px);

  transition: transform 120ms ease, opacity 120ms ease;
}
.media-link-badge:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

/* links inside gray subtitles: force a brighter link than the body text */
.section-sub a {
  color: #00ffff;
}

/* ===== Lightbox (overlay) ===== */
.tech-lightbox {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.75); /* dim only; don't blur overlay itself */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  padding: 24px;
  overflow: auto; /* internal scroll if content exceeds viewport */
}

.tech-lightbox-content {
  position: relative;
  max-width: min(1100px, 92vw);
  max-height: 90vh;
  background: #434348; /* matches your @contentBgColor */
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

.tech-lightbox img,
.tech-lightbox video {
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
</style>
