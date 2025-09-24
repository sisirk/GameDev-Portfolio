<template>
  <div>
    <div class="projects-list">
      <template v-for="project in projects">
        <div
          :key="project.id"
          @click="showDetails(project)"
          class="project-item"
          :class="{ 'wide': project.isWide, 'high': project.isHigh }"
        >
          <!-- Media: video or image fallback -->
          <div class="project-item-media">
            <template v-if="project.thumbVideoUrl">
              <video
                class="project-media zoomable"
                autoplay
                loop
                muted
                playsinline
                :poster="project.thumbPosterUrl || project.iconUrl"
              >
                <source :src="project.thumbVideoUrl" type="video/mp4" />
              </video>
            </template>
            <template v-else>
              <div
                class="project-item-image zoomable"
                :style="{ backgroundImage: 'url(' + project.iconUrl + ')' }"
              ></div>
            </template>
          </div>

          <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
            <div class="title-text">
              {{ project.name }}
            </div>
          </div>
        </div>
      </template>
    </div>

    <ProjectDetailsOverlay
      v-on:close="showPopup = false"
      :visible="showPopup"
      :title="popupTitle"
      :htmlContent="popupContent"
      :color="popupColor"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data() {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails(item: ProjectData) {
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0, 0);
    },
  },
});
</script>

<style scoped>
.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* Media wrapper fills card */
.project-item-media {
  height: 100%;
  width: 100%;
  position: relative;
}

/* Image (background) version */
.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: transform 0.2s ease;
}

/* Video version */
.project-media {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;            /* crop to fill like background-size: cover */
  transition: transform 0.2s ease;
  /* Ensure clicks still hit the card for the overlay */
  pointer-events: none;
}

/* Unified hover zoom for both image and video */
.project-item:hover .zoomable {
  transform: scale(1.1);
}

.project-item:hover {
  filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
}

@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}
</style>
