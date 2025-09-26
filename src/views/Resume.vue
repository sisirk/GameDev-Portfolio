<template>
  <div>
    <h1>Résumé</h1>

    <nav class="section-nav" aria-label="Section navigation">
      <a href="#game-dev" @click.prevent="scrollTo('game-dev')">Game Dev Experience</a>
      <a href="#additional-exp" @click.prevent="scrollTo('additional-exp')">Additional Experience</a>
      <a href="#skills-education" @click.prevent="scrollTo('skills-education')">Skills & Education</a>
    </nav>

    <!-- Intro / Summary -->
    <div class="paragraph">
      I'm <strong>Sisir Kadiveti</strong>, an indie game developer and founder of
      <a href="https://galacticgatewaygames.com/#" target="_blank">Galactic Gateway LLC</a>,
      based in Seattle, Washington.
      <br/><br/>
      I specialize in designing and engineering gameplay systems in Unreal Engine (C++ and Blueprint), creating procedural
      mechanics, AI-driven behaviors, and stylized 3D assets. My flagship project is
      <a href="https://store.steampowered.com/app/3785230/Ninja_Froggy/" target="_blank">Ninja Froggy™</a>,
      a semi-open-world roguelite endless runner built entirely from the ground up because the default engine templates
      couldn't support my vision. For a deeper look at Ninja Froggy and my jam projects, see the
      <router-link to="/game-projects">Games</router-link>
      page. I also create stylized 3D assets used in my games; examples are on the
      <router-link to="/other-projects">Showcase</router-link>
      page.
      <br/><br/>
      Before founding Galactic Gateway, I worked as a software engineer at <strong>Microsoft, Amazon, and Intel</strong>,
      building large-scale systems, automation pipelines, and performance tools—experience I now apply to game development with
      an emphasis on reliability and performance.

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

      <!-- ========================= -->
      <!-- 1) GAME DEVELOPMENT Exp   -->
      <!-- ========================= -->
      <h2 id="game-dev">Game Development Experience</h2>
      <h4>(Additional Professional Experience Listed Below)</h4>

      <h3>
        Indie Developer
        <span class="company-name"> · Galactic Gateway LLC</span>
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

      <!-- Past Game Roles -->
      <br/>
      <h3>
        Software Developer (Capstone Project)
        <span class="company-name"> · Microsoft (Mojang Studios)</span>
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
            meticulously testing diverse pathfinders.
          </li>
          <li>
            Built a standalone 3D visualizer in <strong>C#</strong>/<strong>Unity</strong> to render paths and create debugging tools for analysis and optimization.
          </li>
        </ul>
      </div>
      <div class="tech-stack">Tech stack: C++, C#, Unity</div>

      <br/>
      <h3>
        Software Developer/Graphic Designer
        <span class="company-name"> · EarthGames Studio</span>
      </h3>
      <h4>Jan 2019 - Jun 2019</h4>
      <div class="experience">
        <ul>
          <li>
            Contributed to <em>Deal: A Green New Election</em> as part of an 8-person team; shipped to Google Play and the App Store with positive reviews.
          </li>
          <li>
            Created ~20 custom assets, pixel art, and animations using <strong>C#</strong> and <strong>Unity</strong>.
          </li>
          <li>
            Led playtesting and incorporated feedback for iterative polish and improved UX.
          </li>
        </ul>
      </div>
      <div class="tech-stack">Tech stack: Unity, C#, Android/iOS, Paint.NET</div>

      <!-- Selected Game Projects -->
      <h2>Selected Game Projects</h2>

      <h3>Bubble Bobbler (Global Game Jam 2025)</h3>
      <div class="experience">
        <ul>
          <li>Built a 3D platformer in Unreal Engine 5 with <strong>C++</strong>, using physics-based bubbles for traversal and puzzle-solving.</li>
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

      <!-- ================================================ -->
      <!-- 2) NON-GAME DEV (Collapsed "Additional" section) -->
      <!-- ================================================ -->
      <br/>
      <details class="accordion" id="additional-exp">
        <summary>
          <span class="additional-exp-title">Additional Professional Experience (Non-Game Dev)</span>
          <span class="hint">Click to expand</span>
        </summary>

        <!-- Microsoft -->
        <br/>
        <h3>
          Software Design Engineer
          <span class="company-name"> · Microsoft</span>
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

        <br/><br/>
        <!-- Amazon -->
        <h3>
          Software Development Engineer
          <span class="company-name"> · Amazon</span>
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

        <br/><br/>
        <!-- Intel -->
        <h3>
          Technical Intern
          <span class="company-name"> · Intel</span>
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
        <h2 style="padding-top: 30px;">Other Projects (Non-Game)</h2>
        <h3>Image Processing Application</h3>
        <div class="experience">
          <ul>
            <li>Built a desktop tool in <strong>Python</strong> with a <strong>Tkinter</strong> GUI and OpenCV backend for real-time image transformations.</li>
            <li>Integrated optional <strong>PyTorch/TensorFlow</strong> models to experiment with <strong>ML-based</strong> filters for stylization.</li>
            <li>Used <strong>PySpark</strong> to batch pre-process large image sets and optimized matrix operations with <strong>NumPy</strong> for 30% speedup.</li>
          </ul>
        </div>
        <div class="tech-stack">Tech stack: Python, NumPy, Tkinter, OpenCV, PyTorch, PySpark, TensorFlow</div>
      </details>

      <!-- ======= -->
      <!-- Skills  -->
      <!-- ======= -->
      <br/>
      <h2 id="skills-education">Skills</h2>
      <div class="skills-grid">
        <section class="skills-col">
          <h3>Languages</h3>
          <ul class="tags">
            <li>C++</li><li>C#</li><li>Python</li><li>Java</li><li>JavaScript</li><li>TypeScript</li>
            <li>Kotlin</li><li>SQL</li><li>PowerShell</li><li>HLSL/GLSL</li>
          </ul>
        </section>

        <section class="skills-col">
          <h3>Game Engines/Tools</h3>
          <ul class="tags">
            <li>Unreal Engine</li><li>Unity</li><li>Blueprint</li><li>Behavior Trees</li><li>NavMesh</li>
            <li>World Partition</li><li>EQS</li>
          </ul>
        </section>

        <section class="skills-col">
          <h3>3D Art/Design</h3>
          <ul class="tags">
            <li>Blender</li><li>Photoshop</li><li>Substance Painter</li><li>Audacity</li><li>After Effects</li><li>Premiere Pro</li>
          </ul>
        </section>

        <section class="skills-col">
          <h3>Development Tools</h3>
          <ul class="tags">
            <li>Git</li><li>Perforce</li><li>Docker</li><li>Azure</li><li>AWS</li><li>.NET</li>
            <li>Linux/Unix</li><li>Android</li><li>REST APIs</li><li>JSON</li>
          </ul>
        </section>
      </div>

      <!-- ========= -->
      <!-- Education -->
      <!-- ========= -->
      <h2>Education</h2>
      <h3>University of Washington, Seattle (Sep 2017 - Dec 2021)</h3>
      <h4>Bachelor of Science in Electrical and Computer Engineering</h4>
      <div>Specialty in digital signal processing (DSP)</div>

      <br/><br/><br/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Resume",
  methods: {
    scrollTo(id: string) {
      const el = document.getElementById(id);
      if (el) {
        // Ensure headings don't hide under fixed headers (if any)
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
});

</script>

<style scoped>
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

#game-dev,
#additional-exp,
#skills-education {
  scroll-margin-top: 80px; /* adjust if you add a sticky header later */
}

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
  padding-top: 5px;
  font-style: italic;
  opacity: 0.7;
}

.paragraph { max-width: 700px; }
.download-link { float:left; margin-right: 50px; }
.full-content div { max-width: 1000px; }
.skill-set h3 { padding-bottom: 10px; }

.photo img { height: 300px; width: 300px; }
.photo { margin-top: -50px; text-align: center; }

.tech-stack { font-style: italic; color: #c2c2c2 }

.company-name { opacity: 0.7; color: #00ffff }

.experience ul { max-width: 1000px; }

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px 48px;
  margin-top: 12px;
}

/* Two or four columns on wider screens */
@media (min-width: 720px) { .skills-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1080px) { .skills-grid { grid-template-columns: repeat(4, 1fr); } }

.skills-col h3 {
  font-weight: 500;
  font-size: 1.2em;
  margin: 0 0 12px 0;
}

/* Tag list */
.tags {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-wrap: wrap; gap: 10px;
}
/* Tag pill */
.tags li {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid rgba(220, 220, 220, 0.25);
  border-radius: 8px;
  font-size: 0.95em; line-height: 1;
  opacity: 0.9;
  transition: transform 120ms ease, opacity 120ms ease, border-color 120ms ease;
  white-space: nowrap;
}
.tags li:hover {
  opacity: 1; transform: translateY(-1px);
  border-color: rgba(0, 255, 255, 0.6);
}

.skills-col { max-width: 700px; }

/* Layout on wider screens */
@media only screen and (min-width: 620px){
  .paragraph { float: left; }
  .photo { float: left; padding: 30px; padding-left: 80px; }
  .skill-set { float: left; padding-right: 60px; }
}

/* Simple accordion for non-game section */
.accordion {
  margin-top: 28px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 0;
  width: 1000px;
}
.accordion > summary {
  cursor: pointer;
  list-style: none;
  padding: 14px 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
}
.accordion > summary::-webkit-details-marker { display: none; }
.accordion[open] { border-color: rgba(255,255,255,0.2); }
.accordion[open] > summary { border-bottom: 1px solid rgba(255,255,255,0.12); }
.hint { opacity: 0.6; font-size: 0.9em; }
.accordion > *:not(summary) {
  padding: 0 16px 4px 20px;  /* top=0, right=16px, bottom=16px, left=20px */
}

.additional-exp-title {
  color: #00ffff;
}
</style>
