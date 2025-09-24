<template>
  <div id="app">
    <!-- particles layer (behind everything) -->
    <div id="particles-js"></div>

    <!-- app content -->
    <div class="app-content">
      <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

      <Header />
      <div class="main">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: { Header, Footer },
  mounted() {
    // Only initialize if the CDN loaded successfully
    if (window.particlesJS) {
      const config: Record<string, unknown> = {
        particles: {
          number: { value: 300, density: { enable: true, ['value_area']: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.8, random: true },
          size: { value: 2.5, random: true },
          move: { enable: true, speed: 0.9 },
          ['line_linked']: { enable: false }
        },
        interactivity: {
          ['detect_on']: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { ['particles_nb']: 10 }
          }
        },
        ['retina_detect']: true
      };

      window.particlesJS('particles-js', config);
    }
  },
  beforeDestroy() {
    const list = window.pJSDom;
    if (Array.isArray(list) && list.length) {
      for (const item of list) {
        item?.pJS?.fn?.vendors?.destroypJS?.();
      }
      window.pJSDom = [];
    }
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  'img/projects/Steam_VerticalCapsule.png',
  'img/projects/BubbleBobbler_Thumbnail.png',
  'img/projects/deal-icon.png'
]);
</script>


<style lang="less">
@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background: url('/GameDev-Portfolio/img/SpaceBackgroundAlt.png') no-repeat center center fixed;
  background-size: cover;
}

#app {
  position: relative; /* so the particles child can sit behind */
  background: url('/GameDev-Portfolio/img/SpaceBackground.png') no-repeat center center fixed;
  background-size: cover;
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

/* particles canvas fills viewport behind content */
#particles-js {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none; /* don't block clicks */
}

.app-content {
  position: relative;
  z-index: 1; /* sits above the particles */
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: #00ffff;
  text-decoration: none;
  opacity: 0.5;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
  color: #00ffff;
}

.main {
  padding: 12px;
}

@media only screen and (min-width: 620px){
  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 20px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
