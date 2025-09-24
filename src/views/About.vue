<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Sisir Kadiveti</strong>, a software engineer turned indie game developer.<br/>
      </div>

      <div>
        I run
        <a href="https://galacticgatewaygames.com/#" target="_blank">Galactic Gateway LLC</a>
        where I'm building
        <a href="https://store.steampowered.com/app/3785230/Ninja_Froggy/" target="_blank">Ninja Froggy™</a>,
        a semi-open-world endless runner with roguelite chaos. I also dabble in jam projects like
        <a href="https://galactic-gateway-games.itch.io/bubble-bobbler" target="_blank">Bubble Bobbler</a>
        (a working title... unless people actually like it, in which case I'll pretend it was intentional).
      </div>

      <div style="margin-top: 20px;">
        Before diving diving full-time into game dev, I worked as a software engineer at Microsoft and Amazon, which means I can debug a memory leak... and
        accidentally create one in the same day. Now, I use those skills to wrangle procedural generation, enemy AI, and sometimes gravity itself.
      </div>

      <div style="margin-top: 20px;">
        When I'm not teaching a frog how to swing a katana at unsuspecting enemies, I create stylized 3D assets and occasionally
        lose track of time in Blender (we've all been there).
      </div>

      <div style="margin-top: 40px;">
        Right now it's just me, endless lines of code, and questionable life choices at 2 AM. If you'd like to chat about games, swap ideas, or team up on
        something cool, you can reach me at
        <a href="mailto:contact@galacticgatewaygames.com">contact@galacticgatewaygames.com</a>
        or connect with me
        <router-link to="/contact">here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/BrainRotFroggy.png" alt="Avatar of Froggy" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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