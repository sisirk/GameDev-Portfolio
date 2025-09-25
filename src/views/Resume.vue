<template>
  <div>
    <h1>Résumé</h1>

    <div class="paragraph">
      I'm <strong>Sisir Kadiveti</strong>, a software engineer and indie game developer currently based in Seattle, Washington.
      <br/><br/>
      Over the past several years, I've worked professionally as a developer at Microsoft and Amazon, and I've also built
      experience at Intel as an intern. My background spans full-stack software, data engineering, and game development, with a
      strong foundation in C++, Python, C#, Blender, and Unreal Engine.
      <br/><br/>
      In 2025 I founded
      <a href="https://galacticgatewaygames.com/#" target="_blank">Galactic Gateway LLC</a>
      to formalize my indie development, though I've been building
      <a href="https://store.steampowered.com/app/3785230/Ninja_Froggy/" target="_blank">Ninja Froggy™</a>
      for over two years. Ninja Froggy is a semi-open-world roguelite endless runner made in Unreal Engine, where I created every
      major system, from procedural terrain generation to AI pathfinding to a custom movement system with a unique jump mechanic,
      all from the ground up, since the default Unreal Engine templates couldn't support my vision. Alongside the game, I design
      and sell 3D assets (that I also use in my games), participate in game jams, and run a
      <a href="https://www.youtube.com/channel/UCsFRYYdH_maM6EVQYDYJvVg" target="_blank">YouTube</a>
      channel documenting the development process.
      <br/><br/>
      I enjoy building tools and systems that blend creativity with technical depth, whether it's optimizing large-scale software,
      designing procedural mechanics, or inventing new gameplay loops. Outside of coding and game dev, I'm passionate about
      storytelling, world-building, and sharing my creative journey with others.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Sisir_Kadiveti_Resume_GameDev.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download résumé as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Sisir" width="256" height="256" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>
        Indie Developer
        <span class="company-name">
          · Galactic Gateway LLC
        </span>
      </h3>

      <h4>Apr 2023 - Present</h4>

      <div class="experience">
        <ul>
          <li>
            Engineered a procedural world generation system in <strong>Unreal Engine (C++)</strong> for a cross-platform <strong>(Android, iOS, PC, console)</strong>
            3D runner using <strong>layered Perlin Noise, spatial partitioning, seed control, and terrain masks</strong> for biome diversity.
          </li>
          <li>
            Implemented asynchronous chunk streaming with <strong>greedy meshing</strong>, mesh LOD, and multithreaded job queues to
            minimize frame hitches, reduce draw calls, and optimize rendering in large open spaces.
          </li>
          <li>
            Developed a modular <strong>AI</strong> architecture combining <strong>behavior trees, FSMs, and custom A*</strong> pathfinding with
            parameterized heuristics to enable terrain-aware, decision-driven enemies that react intelligently to player behavior.
          </li>
          <li>
            Built core systems for melee and ranged combat, procedurally spawned traps, collectibles, and stat modifiers, with
            Blueprint-integrated gameplay logic and profiling for memory, performance, and tick efficiency.
          </li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: Unreal Engine, Blueprint, C++, Blender, Photoshop, Git, Android/iOS</div>

      <br/>
      <h3>
        Software Design Engineer
        <span class="company-name">
          · Microsoft
        </span>
      </h3>

      <h4>Aug 2023 - Feb 2025</h4>

      <div class="experience">
        <ul>
          <li>
            Oversaw daily TPC-E, TPC-H, and HammerDB workloads on <strong>Windows</strong> and <strong>Linux</strong>, analyzing benchmark data with
            <strong>PowerBi</strong> to identify regression, improving performance monitoring.
          </li>
          <li>
            Developed a self-service web portal using <strong>C#, .NET, JavaScript, React, Node.js, Python, and Flask</strong>, integrating
            automated data pipelines with <strong>ML-ready</strong> anomaly detection support, and reducing manual interventions by 50%.
          </li>
          <li>
            Designed and optimized <strong>SQL</strong> databases in <strong>SSMS</strong>, creating stored procedures and automating data handling to
            enhance query performance, reduce execution times, and improve system reliability.
          </li>
          <li>
            Led regression analysis for <strong>Windows Server 2025</strong> vs. <strong>Windows Server 2022</strong>, automating Xperf and Kernrate data
            collection with <strong>C#</strong> scripts using <strong>.NET</strong> diagnostics tools for deeper performance insights.
          </li>
          <li>
            Tested the impact of memory compression across <strong>SQL</strong> Server instances, using <strong>PowerShell</strong> scripts to optimize memory
            usage and extract telemetry for exploratory data analysis and future use in predictive resource management.
          </li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: C#, Python, PowerShell, JavaScript, SQL, HTML/CSS, .NET, React, Node.js, Flask, Power BI, Linux</div>

      <br/>
      <h3>
        Software Development Engineer
        <span class="company-name">
          · Amazon
        </span>
      </h3>

      <h4>May 2022 - Mar 2023</h4>

      <div class="experience">
        <ul>
          <li>
            Spearheaded the development of innovative Alexa products and services for the Alexa Smart Properties (ASP) team,
            enhancing business processes across diverse verticals including hotels, resorts, and hospitals.
          </li>
          <li>
            Engineered and implemented multiple adapters with <strong>Kotlin</strong>, utilizing <strong>AWS</strong> services and API calls to seamlessly
            integrate Alexa skills into EU-based subscriptions for various Amazon services, boosting user engagement.
          </li>
          <li>
            Optimized ASP's canary test suites using <strong>AWS</strong> tools, ensuring rigorous <strong>NLP-based testing</strong> of "Hey Alexa..."
            utterances across subscriptions, and reducing false positives/negatives in voice recognition by 20-30%.
          </li>
          <li>
            Automated the integration of canary test results with <strong>TestRail</strong> via the <strong>TestRail API</strong>, improving testing efficiency and
            allowing the ASP team to effortlessly monitor the status of each test.
          </li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: Kotlin, Java, Python, AWS, Alexa, TestRail</div>

      <br/>
      <h3>
        Software Developer (Capstone Project)
        <span class="company-name">
          · Microsoft (Mojang Studios)
        </span>
      </h3>

      <h4>Jan 2021 - Jun 2021</h4>

      <div class="experience">
        <ul>
          <li>
            Collaborated with a team of three developers and a senior game designer at Mojang Studios to revolutionize
            Minecraft's pathfinding algorithm, enabling seamless compatibility with actors and paths of various sizes.
          </li>
          <li>
            Led the development of a robust standalone app in <strong>C++</strong>, employing the <strong>A*</strong> algorithm for prototyping and
            meticulously testing diverse pathfinders. This significantly enhanced the performance and navigation capabilities of
            the actor when testing.
          </li>
          <li>
            Developed a dynamic standalone 3D visualizer using <strong>C#</strong> and <strong>Unity</strong> to vividly render custom paths and created tools for thorough
            debugging. This enhanced the team's ability to analyze and optimize paths with higher precision and efficiency.
          </li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: C++, C#, Unity</div>

      <br/>
      <h3>
        Technical Intern
        <span class="company-name">
          · Intel
        </span>
      </h3>

      <h4>Jun 2019 - Sep 2019</h4>

      <div class="experience">
        <ul>
          <li>
            Collaborated with the Firmware team to successfully develop a powerful software interface for the VPU (Vision
            Processing Unit), enabling seamless integration and enhanced functionality.
          </li>
          <li>
            Conducted thorough profiling and analysis of the Windows MCDM driver, identifying key areas for optimization and
            implementing targeted improvements to enhance performance and stability.
          </li>
          <li>
            Led the development of a user-friendly GUI using C# and the .NET framework, facilitating rigorous testing of the
            Movidius MyriadX VPU.
          </li>
          <li>
            Engineered a basic machine learning application capable of face detection and recognition, serving as a crucial tool
            for further VPU testing and validation.
          </li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: C#, PowerShell, .NET, EmguCV</div>

      <br/>
      <h3>
        Software Developer/Graphic Designer
        <span class="company-name">
          · EarthGames Studio
        </span>
      </h3>

      <h4>Jan 2019 - Jun 2019</h4>

      <div class="experience">
        <ul>
          <li>
            Worked in a team of eight to develop Deal: A Green New Election, inspired by the Green New Deal Movement. Achieved remarkable success,
            garnering hundreds of downloads and receiving positive user reviews on Google Play and the App Store.
          </li>
          <li>
            Designed and developed around 20 custom assets, pixel art, and animations for various game elements, using <strong>C#</strong> and
            the <strong>Unity</strong> Game Engine.
          </li>
          <li>
            Led play-testing sessions, and incorporated user feedback, leading to iterative improvements and a polished final product.
          </li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: Unity, C#, Android/iOS, Paint.NET</div>

      <h2>Projects</h2>

      <h3>Bubble Bobbler (Global Game Jam 2025)</h3>

      <div class="experience">
        <ul>
          <li>Built a 3D platformer in Unreal Engine 5 with <strong>C++</strong>, using physics-based bubbles for traversal, and puzzle-solving.</li>
          <li>Engineered a custom Chaos Physics system for buoyancy, elastic collisions, and reactive environmental forces.</li>
          <li>Implemented AI with <strong>Behavior Trees, EQS, and NavMesh</strong> for responsive enemy movement and targeting.</li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: Unreal Engine, Blueprint, C++, Blender, Photoshop</div>

      <br/>
      <h3>Pokémon-Inspired Game</h3>

      <div class="experience">
        <ul>
          <li>Built a <strong>Unity</strong>-based turn-based battle prototype with stat-driven combat, enemy AI, and capture mechanics.</li>
          <li>Integrated <strong>PokéAPI</strong> data using <strong>JSON</strong> parsing and filters to enable dynamic team building across <strong>Android</strong> and <strong>Web</strong>.</li>
          <li>Implemented persistent progression using <strong>SQLite</strong> for session continuity and team management.</li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: Unity, C#, Android, SQLite, JSON</div>

      <br/>
      <h3>Image Processing Application</h3>

      <div class="experience">
        <ul>
          <li>Built a desktop tool in <strong>Python</strong> with a <strong>Tkinter</strong> GUI and OpenCV backend for real-time image transformations.</li>
          <li>Integrated optional <strong>PyTorch/TensorFlow</strong> models to experiment with <strong>ML-based</strong> filters for stylization.</li>
          <li>Used <strong>PySpark</strong> to batch pre-process large image sets and optimized matrix operations with <strong>NumPy</strong> for 30% speedup.</li>
        </ul>
      </div>

      <div class="tech-stack">Tech stack: Python, NumPy, Tkinter, OpenCV, PyTorch, PySpark, TensorFlow</div>


      <h2>Skills</h2>

      <div class="skills-grid">
        <section class="skills-col">
          <h3>Languages</h3>
          <ul class="tags">
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Kotlin</li>
            <li>SQL</li>
            <li>PowerShell</li>
            <li>HLSL/GLSL</li>
          </ul>
        </section>

        <section class="skills-col">
          <h3>Game Engines/Tools</h3>
          <ul class="tags">
            <li>Unreal Engine</li>
            <li>Unity</li>
            <li>Blueprint</li>
            <li>Behavior Trees</li>
            <li>NavMesh</li>
            <li>World Partition</li>
            <li>EQS</li>
          </ul>
        </section>

        <section class="skills-col">
          <h3>3D Art/Design</h3>
          <ul class="tags">
            <li>Blender</li>
            <li>Photoshop</li>
            <li>Substance Painter</li>
            <li>Audacity</li>
            <li>After Effects</li>
            <li>Premiere Pro</li>
          </ul>
        </section>

        <section class="skills-col">
          <h3>Development Tools</h3>
          <ul class="tags">
            <li>Git</li>
            <li>Perforce</li>
            <li>Docker</li>
            <li>Azure</li>
            <li>AWS</li>
            <li>.NET</li>
            <li>Linux/Unix</li>
            <li>Android</li>
            <li>REST APIs</li>
            <li>JSON</li>
          </ul>
        </section>
      </div>


      <h2>Education</h2>

      <h3>University of Washington, Seattle (Sep 2017 - Dec 2021)</h3>
      <h4>Bachelor of Science in Electrical and Computer Engineering</h4>
      <div>Specialty in digital signal processing (DSP)</div>

      <h2>Languages</h2>

      <h3>English, Spanish, Japanese, Hindi, Telugu</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
  opacity: 0.7;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 1000px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
  color: #c2c2c2
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.company-name {
  opacity: 0.7;
  color: #00ffff
}

.experience ul {
  max-width: 1000px;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px 48px;
  margin-top: 12px;
}

/* Two or four columns on wider screens */
@media (min-width: 720px) {
  .skills-grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1080px) {
  .skills-grid { grid-template-columns: repeat(4, 1fr); }
}

.skills-col h3 {
  font-weight: 500;
  font-size: 1.2em;
  margin: 0 0 12px 0;
}

/* Tag list */
.tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Tag pill */
.tags li {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid rgba(220, 220, 220, 0.25);
  border-radius: 8px;
  font-size: 0.95em;
  line-height: 1;
  opacity: 0.9;
  transition: transform 120ms ease, opacity 120ms ease, border-color 120ms ease;
  white-space: nowrap;
}

/* Hover/active feedback */
.tags li:hover {
  opacity: 1;
  transform: translateY(-1px);
  border-color: rgba(0, 255, 255, 0.6);
}

.skills-col { max-width: 700px; }

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>