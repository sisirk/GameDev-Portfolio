<template>
  <div class="footer">
    <div class="footer__inner">
      <div class="left">Portfolio by Sisir</div>
      <div class="right">
        Reach me at <a href="mailto:sisirkadiveti@gmail.com">sisirkadiveti@gmail.com</a>
        or <router-link to="/contact">through here</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.footer {
  position: absolute;      /* sit at the bottom of .app-content */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  border-top: 1px solid rgba(255,255,255,0.08);
  will-change: backdrop-filter;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.footer { border-top: 1px solid rgba(255,255,255,0.08); }

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.left, .right {
  opacity: 0.5;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .left, .right {
    padding: 8px 0;
  }

  .left { text-align: left; }
  .right { text-align: right; }
}
</style>