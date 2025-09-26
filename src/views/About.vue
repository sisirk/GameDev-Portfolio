<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Sisir Kadiveti</strong>, a software engineer turned indie game developer.
        <br/><br/>
      </div>

      <div>
        I run
        <a href="https://galacticgatewaygames.com/#" target="_blank">Galactic Gateway LLC</a>,
        where I'm building
        <a href="https://store.steampowered.com/app/3785230/Ninja_Froggy/" target="_blank">Ninja Froggy™</a>,
        a semi-open-world endless runner with roguelite chaos. You can read more about Ninja Froggy and my other projects on the
        <router-link to="/game-projects">Games</router-link> page.
      </div>

      <div style="margin-top: 20px;">
        Before diving full-time into game dev, I worked as a software engineer at <strong>Microsoft</strong> and <strong>Amazon</strong>,
        which means I can debug a memory leak... and accidentally create one in the same day. Now, those skills help me wrangle procedural
        generation, enemy AI, and occasionally, gravity itself.
      </div>

      <div style="margin-top: 20px;">
        When I'm not teaching a frog how to swing a katana at unsuspecting enemies, I create stylized 3D assets
        (check out my <router-link to="/other-projects">Showcase</router-link>),
        occasionally lose track of time in Blender, and document the chaos on my
        <a href="https://www.youtube.com/channel/UCsFRYYdH_maM6EVQYDYJvVg" target="_blank">YouTube</a> channel.
      </div>

      <div style="margin-top: 40px;">
        Right now it's just me, endless lines of code, and late-night caffeine experiments.
        If you'd like to chat about games, swap ideas, or team up on something cool, you can reach me at
        <a href="mailto:sisirkadiveti@gmail.com">sisirkadiveti@gmail.com</a>
        or connect with me <router-link to="/contact">here</router-link>.
      </div>
    </div>


    <div class="photo">
      <img src="img/Froggy_Profile.png" alt="Avatar of Froggy" width="256" height="256" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: -30px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>