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
            <img class="phone-screenshot" src="img/projects/NinjaFroggy_Screenshot1.png" alt="Ninja Froggy Screenshot" />
            <img class="phone-screenshot" src="img/projects/NinjaFroggy_Screenshot2.png" alt="Ninja Froggy Screenshot" />
            <img class="phone-screenshot" src="img/projects/NinjaFroggy_Screenshot3.png" alt="Ninja Froggy Screenshot" />
            <img class="phone-screenshot" src="img/projects/NinjaFroggy_Screenshot4.png" alt="Ninja Froggy Screenshot" />
        </div>
        `, "#588700", true, true,
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
            <a href="https://galactic-gateway-games.itch.io/bubble-bobbler" target="_blank"><img src="img/projects/itchiobutton.png" alt="Steam badge" /></a>
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
        `, "#d17d00", false, false,
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
    `, "#269dde"),
];