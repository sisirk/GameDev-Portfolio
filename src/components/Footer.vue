<template>
  <div class="footer">

    <div class="left">Portfolio by Sisir</div>
    <div class="right">Reach me at <a href="mailto:sisirkadiveti@gmail.com">sisirkadiveti@gmail.com</a> or <router-link to="/contact">through here</router-link></div>
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
  width: 100%;
  font-size: 0.8em;
  padding: 20px 40px;
}

.left, .right {
  opacity: 0.7;
  padding-top: 10px;
  text-align: center;
}

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>