<template>
  <div class="header">
    <div class="header-inner">
      <!-- Left side -->
      <div class="header-left">
        GameDev Portfolio
      </div>

      <!-- Right side -->
      <div class="nav-bar">
        <router-link to="/">About me</router-link>
        <router-link to="/game-projects">Games</router-link>
        <router-link to="/other-projects">Showcase</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  position: sticky;   /* stick to top while scrolling */
  top: 0;
  z-index: 10;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  will-change: backdrop-filter;
  background: rgba(0, 0, 0, 0.5);  /* needed for backdrop-filter to display */
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  font-weight: 700;
  font-size: 2rem;
  margin-left: 40px;
  color: #00ffff;
  white-space: nowrap;
}

.nav-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding: 14px 40px;
  line-height: 2.2em;
}

a {
  text-transform: uppercase;
  margin: 0;          /* gap handles spacing now */
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    gap: 16px;
    padding: 10px 16px;
    line-height: 2em;
  }

  a {
    padding-bottom: 0px;
  }
}

</style>
