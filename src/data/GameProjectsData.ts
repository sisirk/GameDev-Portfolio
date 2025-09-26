import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Ninja Froggy", "img/projects/Steam_VerticalCapsule.png",
        `
        <div class="paragraph">
        <strong>Ninja Froggy™</strong> is a semi-open-world endless runner with roguelite progression, where you play as Froggy, a ninja dashing, slashing, and leaping through a procedurally generated world.
        </div>
        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/-p1FVbfQ_WE?si=zjy74sGrAGWuP_Vt" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="paragraph center">
            <a href="https://store.steampowered.com/app/3785230/Ninja_Froggy/" target="_blank"><img src="img/projects/wishlist-steam.png" alt="Steam badge" /></a>
        </div>

        <div class="paragraph">
            Main features :
            <ul>
            <li>Infinite, procedurally generated worlds littered with traps and enemies</li>
            <li>Roguelite progression through collectible relics/sigils that stack in unique ways</li>
            <li>Permanent stat upgrades by spending gold between runs to become more powerful</li>
            <li>Core movement mechanics including dash, sprint, jump, wall-jump, etc.</li>
            <li>Combat system with ranged and melee weapons (more planned for the future)</li>
            <li>Designed for addictive replayability where every run feels different</li>
            </ul>
        </div>

        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/NinjaFroggy_Screenshot1.png" alt="Ninja Froggy Screenshot" />
            <img class="pc-screenshot" src="img/projects/NinjaFroggy_Screenshot2.png" alt="Ninja Froggy Screenshot" />
            <img class="pc-screenshot" src="img/projects/NinjaFroggy_Screenshot3.png" alt="Ninja Froggy Screenshot" />
            <img class="pc-screenshot" src="img/projects/NinjaFroggy_Screenshot4.png" alt="Ninja Froggy Screenshot" />
        </div>

        <!-- ============================= -->
        <!-- Developer Notes (Technical)   -->
        <!-- ============================= -->
        <div class="paragraph">
            <h2>Technical Details<h2/>
        </div>

        <!-- 1) Terrain Generation & World Building -->
        <div class="paragraph">
            <h3>Terrain Generation & World Building</h3>
            <p><em><strong>Chunk design & rules:</strong></em> The world is built from block-based <strong>chunks</strong> that stream in around the player. A height-map driven pass defines base elevation; feature passes (roads, canals, rivers) run as overlays that can carve/paint across chunk boundaries without seams. Feature placement also respects slope constraints, adjacency rules, and reserved volumes. To keep rendering efficient, the terrain meshes are built using a greedy meshing algorithm, which merges adjacent blocks into larger faces. This dramatically reduces polygon count and draw calls while still preserving the block-based structure, making the system scalable for the large, procedurally generated game world.</p>

            <p><em><strong>Asynchronous spawning & hitch-free loading:</strong></em> Terrain features, props, and foliage are enqueued into a <strong>deferred spawn queue</strong> processed across ticks. This avoids burst allocation and reduces frame spikes. All foliage uses <strong>Hierarchical Instanced Static Meshes (HISMs)</strong> for efficient rendering and memory use. Collectibles also rely on HISMs for bulk performance but can be promoted to <strong>Blueprint actors</strong> when special interactions are needed. For example, opening a chest triggers a spawn burst where collectibles jump outward in a circle with temporary physics enabled; once they land on a surface, they enter a <em>magnetized state</em> that pulls them toward the player and deposits them into the inventory. Reusable props (trees, rocks, pickups) are additionally served through an <strong>actor pool</strong> to minimize runtime allocations and component construction costs.</p>

            <p><em><strong>Materials & visual cohesion:</strong></em> A single <strong>master material</strong> drives terrain look using layered noise and vertex/UV variation to break tiling and create organic patchiness (e.g., grass brightness variance). This keeps content data-driven while limiting texture memory growth.</p>

            <p><em><strong>Current limitations & planned upgrades:</strong></em> The blocky terrain silhouette can clash with organic flora/fauna and the current pixelated UI. Planned changes include: <br/>1) smoothing distant silhouettes with LOD variants and/or mesh decimation, <br/>2) height-blended materials for softer transitions, <br/>3) revising UI away from pixelation to better match the environment's style, and <br/>4) expanding async streaming budgets based on device performance tiers.</p>
        </div>
        <div class="tech-gallery">
            <div class="tech-hover-card" data-src="img/projects/NinjaFroggy_GreedyMeshing.gif" data-title="Greedy Meshing Visualization (Wireframe Overlay)">
                <img src="img/projects/NinjaFroggy_GreedyMeshing.gif" alt="Greedy Meshing Visualization (Wireframe Overlay)" />
                <div class="tech-caption">Greedy Meshing Visualization (Wireframe Overlay)</div>
            </div>
            <div class="tech-hover-card" data-src="img/projects/NinjaFroggy_Material.gif" data-title="Pixelated Material Material for Terrain Variation">
                <img src="img/projects/NinjaFroggy_Material.gif" alt="Pixelated Material Material for Terrain Variation" />
                <div class="tech-caption">Pixelated Material Material for Terrain Variation</div>
            </div>
        </div>

        <!-- 2) Jump Mechanic -->
        <div class="paragraph">
            <br/>
            <h3>Jump Mechanic & Movement Feel</h3>
            <p><em><strong>Design goals:</strong></em> The jump is tuned for responsiveness across keyboard/controler/touch input while remaining readable in a blocky world. Systems include <strong>coyote time</strong> (late jump forgiveness), <strong>input buffering</strong> (pre-press acceptance), <strong>variable jump height</strong> (press duration scaling), and <strong>apex assists</strong> (slight gravity modulation near peak for air control).</p>

            <p><em><strong>World interaction:</strong></em> Edge cases are handled through conservative collision sweeps and slope checks on block tops. Wall-jumps and ledge snaps integrate with the state machine so animation blending doesn't fight physics. Camera and FOV nudges at takeoff/landing provide subtle motion cues without causing motion sickness on mobile.</p>

            <p><em><strong>Implementation notes:</strong></em> Movement states (idle/run/jump/fall/wall-interact) are authored as a compact state machine with cached poses. Physics impulses are kept deterministic per tick; input sampling is decoupled from animation update to avoid frame-rate dependent jump height.</p>
        </div>
        <div class="tech-gallery">
            <div class="tech-hover-card" data-src="img/projects/NinjaFroggy_Jump.gif" data-title="Smart Jump System: Forgiveness & Precision">
                <img src="img/projects/NinjaFroggy_Jump.gif" alt="Jump Mechanic with Line Traces" />
                <div class="tech-caption">Smart Jump System: Forgiveness & Precision</div>
            </div>
            <div class="tech-hover-card" data-src="img/projects/NinjaFroggy_FSM.gif" data-title="Multi-Layered State Machines for Responsive Control">
                <img src="img/projects/NinjaFroggy_FSM.gif" alt="Multi-Layered State Machines for Responsive Control" />
                <div class="tech-caption">Multi-Layered State Machines for Responsive Control</div>
            </div>
        </div>

        <!-- 3) Enemy AI & Custom Pathfinding -->
        <div class="paragraph">
            <br/>
            <h3>Enemy AI & Custom Pathfinding</h3>
            <p><em><strong>Why not NavMesh?:</strong></em> The world is fully procedural and streams/changes at runtime; baking and continuously updating a traditional NavMesh is impractical for per-chunk edits. Instead, enemies move on a <strong>grid-aware navigation layer</strong> that mirrors the terrain's block occupancy.</p>

            <p><em><strong>Pathfinding & perception:</strong></em> Navigation uses <strong>A*</strong> over the block grid with dynamic occupancy updates (terrain features, props, and temporary obstacles). AI is organized as lightweight <strong>finite state machines</strong> (e.g., patrol → investigate → chase → recover), with per-enemy behaviors layered on top (e.g., Chest Mimic mirrors player direction within range; Turtle idles until sighted target, then charges). Perception integrates line-of-sight checks and simple heuristic costs for hazards.</p>

            <p><em><strong>Runtime stability & performance:</strong></em> To avoid hitches, path requests are budgeted per frame and processed asynchronously; partial paths are acceptable at long distances and are refined as chunks stream in. This keeps enemies responsive even as the world morphs around the player.</p>
        </div>
        <div class="tech-gallery">
            <div class="tech-hover-card" data-src="img/projects/NinjaFroggy_Mimic.gif" data-title="AI Behavior Showcase (Chest Mimic)">
                <img src="img/projects/NinjaFroggy_Mimic.gif" alt="AI Behavior Showcase (Chest Mimic)" />
                <div class="tech-caption">AI Behavior Showcase (Chest Mimic)</div>
            </div>
            <div class="tech-hover-card" data-src="img/projects/NinjaFroggy_Turtle.gif" data-title="Pathfinding & Perception (Turtle)">
                <img src="img/projects/NinjaFroggy_Turtle.gif" alt="AI Behavior Showcase (Chest Mimic)" />
                <div class="tech-caption">AI Behavior Showcase (Chest Mimic)</div>
            </div>
        </div>
        `, "#009696ff", true, true,
        {
            thumbVideoUrl: "img/projects/NinjaFroggy_Gameplay.mp4",
            thumbPosterUrl: "img/projects/Steam_VerticalCapsule.png"
        }
    ),

    new ProjectData("project-2", "Bubble Bobbler", "img/projects/BubbleBobbler_Thumbnail.png", `
        <div class="paragraph">
            <strong>Bubble Bobbler</strong> is a 3D platformer created for Global Game Jam 2025, where bubbles become tools for solving puzzles and platforming challenges.
            This project is currently on the shelf but there are plans to resume work in the near future.
        </div>
        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/TzFYr8H7fcM?si=6L5NFBltXyqLB4Mj" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="paragraph center">
            <a href="https://galactic-gateway-games.itch.io/bubble-bobbler" target="_blank"><img src="img/projects/itchiobutton.png" alt="Steam/itch badge" /></a>
        </div>

        <div class="paragraph">
            Main features :
            <ul>
            <li>3D platformer where various types of bubbles are used for different challenges</li>
            <li>Physics-driven puzzles solved by creating and manipulating bubbles</li>
            <li>Bubbles used as platforms, lifts, and tools to move objects in creative ways</li>
            </ul>
        </div>

        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/BubbleBobbler_Thumbnail.png" alt="Bubble Bobbler Screenshot" />
            <img class="pc-screenshot" src="img/projects/BubbleBobbler_Screenshot1.png" alt="Bubble Bobbler Screenshot" />
            <img class="pc-screenshot" src="img/projects/BubbleBobbler_Screenshot2.png" alt="Bubble Bobbler Screenshot" />
            <img class="pc-screenshot" src="img/projects/BubbleBobbler_Screenshot3.png" alt="Bubble Bobbler Screenshot" />
        </div>

        <!-- ============================= -->
        <!-- Developer Notes (Technical)   -->
        <!-- ============================= -->
        <div class="paragraph">
            <h2>Technical Details (Early Stage)<h2/>
        </div>

        <!-- 1) Bubble Physics Mechanic -->
        <div class="paragraph">
            <h3>Bubble Physics Mechanic (Prototype)</h3>
            <p><em><strong>Design intent:</strong></em> Bubbles act as physically simulated tools: temporary platforms, lifts, and object manipulators.</p>
            <p><em><strong>Technical approach:</strong></em> Bubbles use physics bodies with tuned mass/drag and constraint-driven interactions. For "platform" behavior, collision channels and one-way collision checks allow the player to stand or bounce while preserving stable stacking. For "lift"/"push," impulses are applied along surface normals with clamped force to avoid jitter. Lifetime, scale, and buoyancy are parameterized for puzzle readability.</p>
            <p><em><strong>Development status:</strong></em> Core feel tuning and interaction edge-cases (stacking stability, tunneling) are the current focus.</p>
        </div>

        <!-- 2) Blockout, Save System, Level Streaming -->
        <div class="paragraph">
            <br/>
            <h3>Blockout & Streaming + Save System (Prototype)</h3>
            <p><em><strong>Blockout-first pipeline:</strong></em> Trailer/gameplay footage reflects a greybox layout used to validate pacing, sightlines, and puzzle beats before art pass.</p>
            <p><em><strong>Streaming architecture:</strong></em> Early work integrates <strong>dynamic level streaming</strong> with <strong>World Partition</strong> to load puzzle chunks and set pieces on demand. The goal is minimal hitching while preserving deterministic puzzle state.</p>
            <p><em><strong>Save/restore:</strong></em> A lightweight save system snapshots player state, puzzle toggles, and streamed sublevels to resume mid-progression without breaking sequencing.</p>
            <p><em><strong>Development Status:</strong></em> Systems exist as prototypes; polish is pending once production resumes.</p>
        </div>

        <!-- 3) AI Foundations: NavMesh/EQS/Behavior Trees -->
        <div class="paragraph">
            <br/>
            <h3>AI Foundations: NavMesh, EQS, and Behavior Trees (Prototype)</h3>
            <p><em><strong>Navigation:</strong></em> AI leverages Unreal <strong>NavMesh</strong> for general traversal within authored spaces. <strong>EQS</strong> queries are used for choosing vantage points/cover and selecting interaction targets. <strong>Behavior Trees</strong> orchestrate high-level behaviors (patrol, pursue, investigate disruptions from bubble interactions).</p>
            <p><em><strong>Development Status:</strong></em> Baseline scaffolding and test behaviors exist; content authoring and tuning remain.</p>
        </div>

        <!-- 4) Enemy Concepts -->
        <div class="paragraph">
            <br/>
            <h3>Enemy Concepts (Robots)</h3>
            <p><em><strong>Pursuer Bot:</strong></em> Mobile robot that spawns at scripted locations/events to block progress. It actively hunts the player via <strong>NavMesh</strong>; intended counters include evasion or trapping with bubbles (e.g., pinning, wedging, or redirecting using bubble forces).</p>
            <p><em><strong>Anti-Bubble Turret:</strong></em> Static defense that prioritizes destroying player bubbles on sight, forcing the player to neutralize it (or stealth past) before proceeding.</p>
            <p><em><strong>Development Status:</strong></em> Concept and behavior specs are drafted; functional prototypes are incomplete due to time constraints.</p>
        </div>
        `, "#009696ff", false, false,
        {
            thumbVideoUrl: "img/projects/BubbleBobbler_Gameplay.mp4",
            thumbPosterUrl: "img/projects/BubbleBobbler_Thumbnail.png"
        }
    ),

    new ProjectData("project-3", "Deal: A Green New Election", "img/projects/deal-icon.png", `
    <div class="paragraph">
        <a href="https://earthgames.org/2019/09/19/deal-a-green-new-election/" target="_blank">Deal: A Green New Election</a>
        is a narrative strategy game about running a campaign for a Green New Deal ballot initiative.
        Players balance messaging, voter outreach, and tough choices while facing opposition from powerful fossil fuel interests.
    </div>
    <div class="paragraph center">
        <img class="youtube" src="img/projects/deal-banner.png" alt="Deal Screenshot" />
    </div>
    <div class="paragraph center">
        <a href="https://earthgamesuw.itch.io/deal-a-green-new-election" target="_blank"><img src="img/projects/play-in-browser.png" alt="Play in Browser" /></a>
        <a href="https://apps.apple.com/us/app/deal-a-green-new-election/id1480168937?ls=1" target="_blank"><img src="img/projects/download-app-store.png" alt="Download on the App Store" /></a>
        <a href="https://play.google.com/store/apps/details?id=org.EarthGames.DealAGNE" target="_blank"><img src="img/projects/get-on-google-play.png" alt="Get on Google Play" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Mobile-first design for iOS and Android, with a browser version also available</li>
        <li>Short campaign format: 15 weeks of strategy playable in 5-10 minutes</li>
        <li>Decision-making system around voter targeting, messaging, and interviews</li>
        <li>Narrative encounters with CEOs, activists, disasters, and press events</li>
        <li>Built collaboratively as part of the <a href="https://earthgames.org/" target="_blank">EarthGames</a> team</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://earthgames.org/wp-content/uploads/2019/09/img_0303.png?w=225" alt="Deal Screenshot" width="225" height="auto" />
        <img class="phone-screenshot" src="https://earthgames.org/wp-content/uploads/2019/09/img_0307.png?w=225" alt="Deal Screenshot" width="225" height="auto" />
        <img class="phone-screenshot" src="img/projects/Deal_Screenshot1.png" alt="Deal Screenshot" width="225" height="auto" />
        <img class="phone-screenshot" src="img/projects/Deal_Screenshot2.png" alt="Deal Screenshot" width="225" height="auto" />
    </div>

    <!-- ============================= -->
    <!-- Developer Notes (Technical)   -->
    <!-- ============================= -->
    <div class="paragraph">
        <h2>Technical Details<h2/>
    </div>
    <div class="paragraph">
        <h3>Cross-Platform Narrative Systems</h3>
        <p>The game was built with a <strong>mobile-first architecture</strong>, supporting iOS, Android, and a WebGL/browser port. This required lightweight assets, efficient UI scaling across devices, and attention to short-session performance. The branching narrative system is <strong>data-driven</strong>, making it straightforward to expand encounters with new characters, voter types, and events without modifying core code. The project achieved <strong>hundreds of downloads</strong> across platforms and received positive player reviews on both Google Play and the App Store.</p>
    </div>

    <div class="paragraph">
        <br/>
        <h3>Decision-Making & Campaign State</h3>
        <p>The 15-week campaign loop is implemented as a <strong>state machine</strong>, with each week representing a discrete state. Player choices update campaign variables such as <em>voter support, press coverage, and funding</em>, which then influence available events. This design emphasizes replayability, as small decisions cascade into diverging narrative outcomes. I also <strong>led multiple playtesting sessions</strong>, iterating on campaign pacing and decision outcomes to keep play sessions polished and engaging.</p>
    </div>

    <div class="paragraph">
        <br/>
        <h3>Collaborative Development & Content Creation</h3>
        <p>This project was built as part of the <a href="https://earthgames.org/" target="_blank">EarthGames</a> team of eight. My contributions focused on <strong>UI/UX flow</strong> and <strong>technical stability across mobile devices</strong>, as well as designing and developing around <strong>20 custom assets, pixel art, and animations</strong> for game elements.</p>
    </div>
    `, "#009696ff"),
];
