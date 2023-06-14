
export interface GameItem{
  id:string
  title:string;
  covers?:string[];
  titleCover:string;
  background?:string[];
  shortDesc:string;
  description:string;
  previousPrice:number;
  link:string;
  specification:{recommended:{title:string,content: string}[],minimum:{title:string,content: string}[]}
  supportedLang:{title:string,content: string}[];
  ratings:number;
  developer?:string;
  publisher?:string;
  videoPreviews?:Array<string[]>
  releaseDate:Date;
  tags:string[]
}

export const loremipsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio ut cupiditate, soluta rem error impedit et autem doloribus sit! Minus aspernatur velit neque natus doloribus veniam! Maxime, vitae accusantium.';
const defaultspec = {
  minimum: [
    {
      title:'OS',content: `Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bit (Windows 10 dev builds are not
currently supported)`,
    },{
      title:'Processor',content: `Intel Core i5 or equivalent`,
    },{
      title:'Memory',content: `8 GB`,
    },{
      title:'Storage',content: `30 GB`,
    },{
      title:'Direct X',content: `11`,
    },{
      title:'Graphics',content: `NVIDIA® GeForce® GT 1030 or better`,
    },
  ],
  recommended: [
    {
      title:'OS',content: `Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bit (Windows 10 dev builds are not
currently supported)`,
    },{
      title:'Processor',content: `Intel Core i7 or equivalent`,
    },{
      title:'Memory',content: `16 GB`,
    },{
      title:'Storage',content: `30 GB`,
    },{
      title:'Direct X',content: `11`,
    },{
      title:'Graphics',content: `NVIDIA® GeForce® GTX 1060 6GB or better`,
    },
  ],
}
const defaults = {description:loremipsum,specification: defaultspec,
  supportedLang: [
    { title:'Audio',content: 'Chinese - Simplified, English, Korean, Japanese' },
    {
      title:'Text',content: `Chinese - Simplified, Chinese - Traditional, English, French, German, Italian, Japanese, Korean, Portuguese,
Portuguese - Brazil, Russian, Spanish - Spain, Spanish - Latin America, Thai, Turkish, Vietnamese`,
    },
  ]}
export const games: GameItem[] = [
  {...defaults,id:'gnshnimct',
    title: 'Genshin Impact',previousPrice:1499,ratings:4.3,releaseDate:new Date('September 28, 2020'),
    videoPreviews:[['https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/videoplayback%20(3).mp4?alt=media&token=56a7394c-a94e-47bd-8387-1f2e8e9ee2f8&_gl=1*y2r3ax*_ga*MjA0NTUzMjYwNi4xNjg1MDIxODc4*_ga_CW55HF8NVT*MTY4NjY2NzcyMy4xMS4xLjE2ODY2Njc3NDMuMC4wLjA.','https://cdn2.unrealengine.com/en-pv-cover-image-1920x1080-7297f8665602.jpg']],
    covers: ['https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg','https://cdn2.unrealengine.com/en-1-1920x1080-28aaa8b26eeb.jpg','https://cdn2.unrealengine.com/en-2-1920x1080-d4392c632061.jpg'],
    link: 'https://genshin.hoyoverse.com/en/',tags:['Adventure','Fantasy','Open World','RPG','Cross Platform','MMO','Multiplayer'],
    titleCover:
      'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399',
    shortDesc:
      'Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds...',
    description: `<h5 class="css-1bemwa4">Version 3.7 "Duel! The Summoners' Summit!" is now available!</h5>
        <div class="css-1o9l22h">New Character: Kirara<br>New Event: Version Main Event "Duel! The Summoners'
          Summit!"<br>Genius Invokation TCG Update: New Gameplay, New Character Cards, and New Open World
          Players<br>New Stories: New Story Quest and Hangout Event<br>New Weapon: Ibis Piercer</div>
        <h5 class="css-1bemwa4">MASSIVE OPEN WORLD</h5>
        <div class="css-1o9l22h">Climb any mountain, swim across any river, and glide over the world below, taking in
          the jaw-dropping scenery each step of the way. And if you stop to investigate a wandering Seelie or strange
          mechanism, who knows what you might discover?</div>
        <h5 class="css-1bemwa4">ELEMENTAL COMBAT SYSTEM</h5>
        <div class="css-1o9l22h">Harness the seven elements to unleash elemental reactions. Anemo, Electro, Hydro,
          Pyro, Cryo, Dendro, and Geo interact in all sorts of ways, and Vision wielders have the power to turn this
          to their advantage.</div>
        <div class="css-1o9l22h">Will you vaporize Hydro with Pyro, electro-charge it with Electro, or freeze it with
          Cryo? Your mastery of the elements will give you the upper hand in battle and exploration.</div>
        <h5 class="css-1bemwa4">BEAUTIFUL VISUALS</h5>
        <div class="css-1o9l22h">Feast your eyes on the world around you, with a stunning art style, real-time
          rendering, and finely tuned character animations delivering you a truly immersive visual experience.
          Lighting and weather all change naturally over time, bringing every detail of this world to life.</div>
        <h5 class="css-1bemwa4">SOOTHING SOUNDTRACK</h5>
        <div class="css-1o9l22h">Let the beautiful sounds of Teyvat draw you in as you explore the expansive world
          around you. Performed by the world's top orchestras such as London Philharmonic Orchestra and Shanghai
          Symphony Orchestra, the soundtrack changes seamlessly with the time and gameplay to match the mood.</div>
        <h5 class="css-1bemwa4">BUILD YOUR DREAM TEAM</h5>
        <div class="css-1o9l22h">Team up with a diverse cast of characters in Teyvat, each with their own unique
          personalities, stories, and abilities. Discover your favorite party combinations and level up your
          characters to help you conquer even the most daunting of enemies and domains.</div>
        <h5 class="css-1bemwa4">JOURNEY WITH FRIENDS</h5>
        <div class="css-1o9l22h">Team up with friends across various platforms to trigger more elemental action,
          tackle tricky boss fights, and conquer challenging domains together to reap rich rewards.</div>
        <div class="css-1o9l22h">As you stand atop the peaks of Jueyun Karst and take in the rolling clouds and vast
          terrain stretching out before you, you may wish to stay in Teyvat a little longer... But until you are
          reunited with your lost sibling, how can you rest? Go forth, Traveler, and begin your adventure!</div>
        <h5 class="css-1bemwa4">SUPPORT</h5>
        <div class="css-1o9l22h">If you encounter any issues during the game, you can send us feedback via the in-game
          Customer Service Center.<br>Customer Service Email: genshin_cs@hoyoverse.com</div>`,
    },
  {...defaults,id:'pydy',
    title: 'PAYDAY 2',previousPrice:299.95,ratings:4.5,releaseDate:new Date('08/13/13'),
    covers: ['https://cdn.akamai.steamstatic.com/steam/apps/218620/capsule_616x353.jpg?t=1685520689','https://images.nintendolife.com/b6cf2e05d937f/payday-7.large.jpg','https://www.gamespot.com/a/uploads/original/1535/15354745/2862589-2585525533-21295.jpg'],
    link: 'https://store.epicgames.com/en-US/p/payday-2-c66369',tags:['Action',
    'First Person',
    'Shooter'],
    titleCover:
      'https://cdn1.epicgames.com/spt-assets/14eb3477a6084940b49de5aa73c60f98/mammoth-logo-i1ks4.png?h=270&quality=medium&resize=1&w=480',
    shortDesc:
      'PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.',
    description: `
    <div id="about-long-description" class="css-i6bazn" data-testid="expand-collapse-content"><span class="css-119zqif"><div class="css-1lwib6p"><div class="css-1o9l22h">PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree. </div><div class="css-1o9l22h">The CRIMENET network offers a huge range of dynamic contracts, and players are free to choose anything from small-time convenience store hits or kidnappings, to big league cyber-crime or emptying out major bank vaults for that epic PAYDAY. While in DC, why not participate in the local community, and run a few political errands?</div><div class="css-1o9l22h"><strong>Key Features</strong></div><ul class="css-11q24in"><li class="css-1r2f04i"><div class="css-1o9l22h">Rob Banks, Get Paid – Players must choose their crew carefully, because when the job goes down they will need the right mix of skills on their side.</div></li><li class="css-1r2f04i"><div class="css-1o9l22h">CRIMENET – The dynamic contract database lets gamers pick and choose from available jobs by connecting with local contacts such as Vlad the Ukrainian, shady politician "The Elephant", and South American drug trafficker Hector, all with their own agenda and best interests in mind.</div></li><li class="css-1r2f04i"><div class="css-1o9l22h">PAYDAY Gunplay and Mechanics on a New Level </div></li><li class="css-1r2f04i"><div class="css-1o9l22h">Firing weapons and zip tying civilians never felt so good.</div></li><li class="css-1r2f04i"><div class="css-1o9l22h">Dynamic Scenarios<br>No heist ever plays out the same way twice. Every single scenario has random geometry or even rare events.</div></li><li class="css-1r2f04i"><div class="css-1o9l22h">Choose Your Skills<br>As players progress they can invest in any of five special Skill Trees: Mastermind, Enforcer, Ghost, Technician and Fugitive. Each features a deep customization tree of associated skills and equipment to master, and they can be mixed and matched to create the ultimate heister.</div></li><li class="css-1r2f04i"><div class="css-1o9l22h">More Masks than Ever<br>PAYDAY 2 features a completely new mask system, giving players the ability to craft their own unique mask with a pattern and color of their choice, resulting in millions of different combinations.</div></li></ul></div></span><ul class="css-nb0gvl"><li class="css-oqj5s0" data-testid="pdp-gallery-image-row-0"><ul class="css-1xd3dbk"></ul></li></ul></div><div class="css-44ejyq"></div>`,
    specification:
    {minimum:[
      {title:'OS Version',content:'Windows 7'},
      {title:'CPU',content:'2 GHz Intel Dual Core Processor'},
      {title:'Memory',content:'4 GB'},
      {title:'GPU',content:'Nvidia & AMD (512MB VRAM)'},
      {title:'DirectX',content:'DirectX 9'},
      {title:'Storage',content:'83'},
      {title:'Additional input device',content:'Gamepad'},
      ],recommended:[
        {title:'OS Version',content:'Windows 10'},
        {title:'CPU',content:'2.3 GHz Intel Quad Core Processor'},
        {title:'Memory',content:'8 GB'},
        {title:'GPU',content:'Nvidia & AMD (1GB VRAM)'},
        {title:'DirectX',content:'DirectX 9'},
        {title:'Storage',content:'83'},
        ]},},
  {...defaults,id:'rcktluge',
    title: 'Rocket Leauge',previousPrice:499.60,ratings:4.5,releaseDate:new Date('09/23/20'),
    covers: ['https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-00-1920x1080-647e0e25974c.jpg','https://rocketleague.media.zestyio.com/rl_s11_tierslider_1-10_7.HkcpknL8h.jpg?width=1920&optimize=high','https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-01-1920x1080-b0f93e21a656.jpg'],
    link: 'https://store.epicgames.com/en-US/p/rocket-league',tags:['Racing',
    'Achievements',
    'Cloud Saves',
    'Co-op',
    'Competitive',
    'Controller Support',
    'Cross Platform',
    'Multiplayer',
    'Single Player',
  ],
    titleCover:
      'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-ic1-200x200-b568f1f92797.png?h=270&quality=medium&resize=1&w=480',
    shortDesc:
      'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.',
    description: `
    <div id="about-long-description" class="css-i6bazn" data-testid="expand-collapse-content"><span class="css-119zqif"><div class="css-1lwib6p"><h2 class="css-1bemwa4">Rocket League®</h2><div class="css-1o9l22h">PLAY ROCKET LEAGUE FOR FREE!</div><div class="css-1o9l22h">Download and compete in the high-octane hybrid of arcade-style soccer and vehicular mayhem! customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time! Download and take your shot!</div><div class="css-1o9l22h">Hit the field by yourself or with friends in 1v1, 2v2, and 3v3 Online Modes, or enjoy Extra Modes like Rumble, Snow Day, or Hoops. Unlock items in Rocket Pass, climb the Competitive Ranks, compete in Competitive Tournaments, complete Challenges, enjoy cross-platform progression and more! The field is waiting. Take your shot! </div><h2 class="css-1bemwa4">New Challenges</h2><div class="css-1o9l22h">Complete Weekly and season-long Challenges to unlock customization items for free!</div><div class="css-1o9l22h"><div data-testid="picture"><img alt="rl_s1_section_challenges.jpg" src="https://cdn2.unrealengine.com/rl-s1-section-challenges-3840x2160-073994219.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/rl-s1-section-challenges-3840x2160-073994219.jpg" data-testid="picture-image"></div></div><h2 class="css-1bemwa4">Tournaments</h2><div class="css-1o9l22h">Feel the competitive energy! Join free Tournaments and compete all season against teams at your Rank! Win and earn new rewards! </div><div class="css-1o9l22h"><div data-testid="picture"><img alt="rl_s10 tournament" src="https://cdn2.unrealengine.com/rl-s10-tournamentrewards-4000x2250-9cf641760845.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/rl-s10-tournamentrewards-4000x2250-9cf641760845.jpg" data-testid="picture-image"></div></div><h2 class="css-1bemwa4">In-Game Events and Limited Time Modes</h2><div class="css-1o9l22h">From Haunted Hallows to Frosty Fest, enjoy limited time events that feature festive in-game items that can be unlocked by playing online! Keep on the lookout for Limited Time Modes and arenas.</div><div class="css-1o9l22h"><div data-testid="picture"><img alt="rl_home_f2p-launch_event.jpg" src="https://cdn2.unrealengine.com/rl-home-f2p-launch-event-3840x2160-073793665.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/rl-home-f2p-launch-event-3840x2160-073793665.jpg" data-testid="picture-image"></div></div><h2 class="css-1bemwa4">Cross-Platform Progression</h2><div class="css-1o9l22h">Share your Rocket League Inventory, Competitive Rank, and Rocket Pass Tier on any connected platform!</div><div class="css-1o9l22h"><div data-testid="picture"><img alt="rl_home_f2p-launch_cross.jpg" src="https://cdn2.unrealengine.com/rl-home-f2p-launch-cross-3840x2160-073994250.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/rl-home-f2p-launch-cross-3840x2160-073994250.jpg" data-testid="picture-image"></div></div><h2 class="css-1bemwa4">Item Shop &amp; Blueprints</h2><div class="css-1o9l22h">Make your car your own with nearly endless customization possibilities! Get in-game items for completing challenges, browse the Item Shop, or build Blueprints for premium content for your car. </div><div class="css-1o9l22h"><div data-testid="picture"><img alt="rl_s6_section_keyart" src="https://cdn2.unrealengine.com/rl-playerschoice-bundle-3840x2160-723248b32611.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/rl-playerschoice-bundle-3840x2160-723248b32611.jpg" data-testid="picture-image"></div></div></div></span></div>
    `,...defaults,specification:
    {minimum:[
      {title:'OS Version',content:'Windows 7'},
      {title:'CPU',content:'2 GHz Intel Dual Core Processor'},
      {title:'Memory',content:'4 GB'},
      {title:'GPU',content:'Nvidia & AMD (512MB VRAM)'},
      {title:'DirectX',content:'DirectX 9'},
      {title:'Storage',content:'83'},
      {title:'Additional input device',content:'Gamepad'},
      ],recommended:[
        {title:'OS Version',content:'Windows 10'},
        {title:'CPU',content:'2.3 GHz Intel Quad Core Processor'},
        {title:'Memory',content:'8 GB'},
        {title:'GPU',content:'Nvidia & AMD (1GB VRAM)'},
        {title:'DirectX',content:'DirectX 9'},
        {title:'Storage',content:'83'},
        ]},developer:'Psyonix LLC',publisher:'Psyonix LLC'
  },
  {...defaults,id:'vlornt',
    title: 'VALORANT',previousPrice:800,ratings:4.7,releaseDate:new Date('06/03/20'),
    covers: ['https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg','https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-02-1920x1080-580683fffe0f.jpg','https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-03-1920x1080-f34bc7b4f1b5.jpg'],
    link: 'https://playvalorant.com/',tags:['Shooter','FPS','Action'],
    videoPreviews:[['https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/videoplayback%20(4).mp4?alt=media&token=c9d56c11-747a-470c-a427-84451ad7f14d&_gl=1*gcvkeu*_ga*MjA0NTUzMjYwNi4xNjg1MDIxODc4*_ga_CW55HF8NVT*MTY4NjY2NzcyMy4xMS4xLjE2ODY2Njc5ODkuMC4wLjA.','https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/hqdefault.jpg?alt=media&token=c95e1958-945f-4ae5-b103-f1d15b62897d&_gl=1*17qqc9v*_ga*MjA0NTUzMjYwNi4xNjg1MDIxODc4*_ga_CW55HF8NVT*MTY4NjY2NzcyMy4xMS4xLjE2ODY2NjgxMzEuMC4wLjA.']],
    titleCover:
      'https://cdn2.unrealengine.com/egs-valorant-riotgames-ic1-400x270-ee924f75e8d4.png?h=270&quality=medium&resize=1&w=480',
    shortDesc:
      'VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.',
    description: ``,
    },{...defaults,id:'nfsunbnd',
    title: 'NFS Unbound',previousPrice:2999.00,ratings:3.5,releaseDate:new Date('29 Apr, 2021'),
    videoPreviews:[['https://cdn.akamai.steamstatic.com/steam/apps/256936856/movie480_vp9.webm','https://cdn.akamai.steamstatic.com/steam/apps/256936856/movie.293x165.jpg'],['https://cdn.akamai.steamstatic.com/steam/apps/256913263/movie480_vp9.webm','https://cdn.akamai.steamstatic.com/steam/apps/256913263/movie.293x165.jpg']],
    covers: ['https://cdn.akamai.steamstatic.com/steam/apps/1846380/ss_ae0004502b96876a5a897a0d4e117bc2d5a864e3.600x338.jpg','https://cdn.akamai.steamstatic.com/steam/apps/1846380/ss_9974a58ee8832aecf93219096fa749267c420dbf.600x338.jpg?t=1686590991','https://cdn.akamai.steamstatic.com/steam/apps/1846380/ss_9016b82a61f66882c9227ad30ded6ee7c9feb26e.600x338.jpg'],
    link: 'https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/',tags:[
      'Racing',
      'Action',
      'Multiplayer',
      'Open World',
      'Anime',
    ],
    titleCover:
      'https://cdn.akamai.steamstatic.com/steam/apps/1846380/header.jpg?t=1686590991',
    shortDesc:
      'Work together to crush intense stunt-based challenges against the clock, as Need for Speed™ Unbound Vol 3 brings new ways to earn XP and Bank.',
    description: `
    <div id="about-long-description" class="css-i6bazn" data-testid="expand-collapse-content"><span class="css-119zqif"><div class="css-1lwib6p"><div class="css-1o9l22h"><div data-testid="picture"><img alt="Image table" src="https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g2-table-00-1920x1080-8b64709da76a.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g2-table-00-1920x1080-8b64709da76a.jpg" data-testid="picture-image"></div></div><h2 class="css-1bemwa4">TEAR UP THE STREETS, CONTROL THE CHASE.</h2><div class="css-1o9l22h">Tear up the streets with friends as Need for Speed™ Unbound brings new ways to compare and compete with the squad in Lakeshore Online. Duck the cops to earn your way to dope new upgrades, and smash new events and Daily Challenges for the chance to gain XP, Bank, and new rides such as the luxurious Mercedes-Maybach S 680 2021, and hot new Custom Build, Lotus Emira Balmain Edition 2021.</div><div class="css-1o9l22h"><div data-testid="picture"><img alt="Image banner" src="https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g2-00-1700x3888-c9f12b9cdb04.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g2-00-1700x3888-c9f12b9cdb04.jpg" data-testid="picture-image"></div></div><h2 class="css-1bemwa4">Boost your PC experience with Need for Speed™ Unbound</h2><div class="css-1o9l22h"><div data-testid="picture"><img alt="Image features" src="https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g2-01-1700x700-31d862f57736.jpg" class="css-1szsppl" data-image="https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g2-01-1700x700-31d862f57736.jpg" data-testid="picture-image"></div></div></div></span></div>`,
    }, {...defaults,id:'btlbitrmstrd',
    title: 'BattleBit Remastered',previousPrice:795.34,ratings:4.6,releaseDate:new Date('15 Jun, 2023'),
    videoPreviews:[['https://cdn.akamai.steamstatic.com/steam/apps/256951968/movie480_vp9.webm?t=1686350007','https://cdn.akamai.steamstatic.com/steam/apps/256951968/movie.184x123.jpg?t=1686350007']],
    covers: ['https://cdn.akamai.steamstatic.com/steam/apps/671860/header.jpg?t=1686579365','https://cdn.akamai.steamstatic.com/steam/apps/671860/ss_08558f0aa02d2c03c47971cfb39e4af207ac18ff.600x338.jpg?t=1686579365','https://cdn.akamai.steamstatic.com/steam/apps/671860/ss_a239c8b441c208285961c371e31d464cb89ca281.600x338.jpg?t=1686579365','https://cdn.akamai.steamstatic.com/steam/apps/671860/ss_894fb4283c024f09e204baca4955c9f287ec7f42.116x65.jpg?t=1686579365','https://cdn.akamai.steamstatic.com/steam/apps/671860/ss_7fde577d854cb5651522fa9229b76ed42a83fd43.116x65.jpg?t=1686579365'],
    link: 'https://store.steampowered.com/app/671860/BattleBit_Remastered/',tags:['Shooter','FPS','Desctruction','Multiplayer','Action'],
    titleCover:
      'https://cdn.akamai.steamstatic.com/steam/apps/671860/header.jpg?t=1686579365',
    shortDesc:
      'BattleBit Remastered aims for a chaotic, massively multiplayer online first-person shooter experience.',
    description: `<div id="game_area_description" class="game_area_description">
    <h2>About This Game</h2>
    BattleBit Remastered aims for a <strong>chaotic</strong>, <strong>massively multiplayer</strong> online <strong>first-person shooter</strong> experience.<h2 class="bb_tag">PRIMARY FEATURES</h2><ul class="bb_ul"> <li> Destructible environment &amp; levolution.<br></li><li> Exhaustively optimized for high frames-per-second gameplay.<br></li><li> Proximity-based voice chat for real-time communication with friendlies and enemies.<br></li><li> Enhanced netcode for an FPS game, supporting 254 players per server, with high tickrate performance.</li></ul><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/671860/extras/Icon_01.png?t=1686579365"><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/671860/extras/Video01_Compressed_Cropped.gif?t=1686579365"><h2 class="bb_tag">FEATURES</h2><ul class="bb_ul"> <li> Vehicular combat with tanks, helicopters, transports, and sea vehicles.<br></li><li> 45+ weapons with extensive customization options for tailored combat.<br></li><li> Classic class system with Assault, Medic, Engineer, Support, and Recon roles.<br></li><li> Experience dynamic day and night gameplay across 19+ strategically designed maps</li></ul><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/671860/extras/Icon_02.png?t=1686579365"><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/671860/extras/Video02_Compressed_Cropped.gif?t=1686579365"><h2 class="bb_tag">Discord Community</h2><ul class="bb_ul"> <li> We utilize Discord as our preferred communication platform for bug fixes and suggestions within our community.<br></li><li> Join a clan and fight along with your clan members.</li></ul><a href="https://steamcommunity.com/linkfilter/?url=http://discord.gg/battlebit" target="_blank" rel=" noopener"> <img src="https://cdn.akamai.steamstatic.com/steam/apps/671860/extras/JoinDiscord.png?t=1686579365"> </a>						</div>`,developer:'SgtOkiDoki, Vilaskis, TheLiquidHorse',publisher:'SgtOkiDoki',
    },{...defaults,id:'snsoffrst',
    title: 'Sons of Forest',previousPrice:910.00,ratings:4.5,releaseDate:new Date('29 Apr, 2021'),
    videoPreviews:[['https://cdn.akamai.steamstatic.com/steam/apps/256932123/movie480_vp9.webm?t=1677175226','https://cdn.akamai.steamstatic.com/steam/apps/256932123/movie.jpg']],
    covers: ['https://cdn.akamai.steamstatic.com/steam/apps/1326470/header.jpg?t=1679677298'],
    link: 'https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/',tags:[
      'Survival',
      'Open World',
      'Multiplayer',
      'Survival Horror',
    ],
    titleCover:
      'https://cdn.akamai.steamstatic.com/steam/apps/1326470/header.jpg?t=1679677298',
    shortDesc:
      'Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.',
    description: `<div id="game_area_description" class="game_area_description">
    <h2>About This Game</h2>
    An entirely new experience from the makers of the ‘The Forest’<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1326470/extras/VirginiaWaterfall.gif?t=1679677298"><br><br>Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.<h2 class="bb_tag"><strong>A Survival Horror Simulator</strong></h2><br>Experience complete freedom to tackle the world how you want. You decide what you do, where to go and how best to survive. There are no NPC's barking orders at you or giving you missions you don't want to do. You give the orders, you choose what happens next.<h2 class="bb_tag"><strong>Fight Demons</strong></h2><br>Enter a world where nowhere is safe and fight against a range of mutated creatures, some who are almost human like, and others who are like nothing you have ever seen before. Armed with pistols, axes, stun batons and more, protect yourself and those you care for.<h2 class="bb_tag"><strong>Build and Craft</strong></h2><br>Feel every interaction; Break sticks to make fires. Use an axe to cut out windows and floors. Build a small cabin, or a sea-side compound, the choice is yours.<h2 class="bb_tag"><strong>Changing Seasons</strong></h2><br>Pluck fresh salmon directly from streams in spring and summer. Collect and store meat for the cold winter months. You're not alone on this island, so as winter rolls in and food and resources become scarce you won't be the only one looking for a meal.<h2 class="bb_tag"><strong>Co-op Gameplay</strong></h2><br>Survive alone, or with friends. Share items and work together to build defenses. Bring back-up to explore above and below ground.						</div>`,
    },  {
    ...defaults,
    id:'wot',
    title: 'World of Tanks',previousPrice:1140,ratings:4.3,releaseDate:new Date('29 Apr, 2021'),
    covers: ['https://cdn.akamai.steamstatic.com/steam/apps/1407200/header.jpg?t=1686643209','https://cdn.akamai.steamstatic.com/steam/apps/1407200/ss_6c0053268e7f60b2171c658af6c9b5621ac4a998.600x338.jpg?t=1686643209','https://cdn.akamai.steamstatic.com/steam/apps/1407200/ss_395cf5ca01d4ef118d1b2e507d57ea609d9957e5.1920x1080.jpg?t=1686643209'],
    videoPreviews:[['https://cdn.akamai.steamstatic.com/steam/apps/256819202/movie480_vp9.webm?t=1619679271','https://cdn.akamai.steamstatic.com/steam/apps/256819202/movie.184x123.jpg?t=1619679271'],['https://cdn.akamai.steamstatic.com/steam/apps/256817242/movie480_vp9.webm?t=1612466827','https://cdn.akamai.steamstatic.com/steam/apps/256817242/movie.184x123.jpg?t=1612466827']],
    link: 'https://store.steampowered.com/app/1407200/World_of_Tanks/',tags:['Tanks','Free to Play','Action','Vehicular Combat'],
    titleCover:
      'https://cdn.akamai.steamstatic.com/steam/apps/1407200/header.jpg?t=1686643209',
    shortDesc:
      'Command over 600 machines from World War II through the mid-20th century and prove yourself against players from around the world. Dive into the ultimate action experience with epic PvP clashes, measured tactical decisions and thoughtful cooperation in your pursuit of victory!',
    description: `<div id="game_area_description" class="game_area_description">
    <h2>About This Game</h2>
    Command over 600 machines from World War II through the mid-20th century and prove yourself against players from around the world. Dive into the ultimate action experience with epic PvP clashes, measured tactical decisions and thoughtful cooperation in your pursuit of victory! <br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1407200/extras/EqPQMY@630x260.gif?t=1686643209"><h2 class="bb_tag">PICK YOUR TANK </h2><br>More than 600 tanks and military vehicles from history’s greatest tank-building nations are waiting for you! Choose from one of five vehicle types and familiarize yourself with their unique features and specialties. Find the perfect combination of vehicle and nation that fits your playstyle and be unstoppable!<h2 class="bb_tag">MASTER YOUR SKILLS </h2><br>Explore maps to find the best positions for your machine. Learn to aim for the opponents’ weak spots and to hide your own. Consider opposing vehicles and their tactical roles. Use it all to develop the best-fitting strategy to be the triumphant winner! <br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1407200/extras/79AJRr@630x259.gif?t=1686643209"><h2 class="bb_tag">PLAY ALONE OR TEAM UP </h2><br>Roll out and match up with random players or organize yourself a platoon and enjoy the exciting experience of playing with friends. Whichever you choose, have fun!<h2 class="bb_tag">UPGRADE AND CUSTOMIZE </h2><br>Unlock new modules, pick your equipment, and make vehicles truly yours with lots of customization options. Personalize your vehicles with historical camo, custom color schemes, emblems, and personal numbers. <br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1407200/extras/nRzJ3R@630x257.gif?t=1686643209"><h2 class="bb_tag">PLAY MULTIPLE GAME MODES </h2><br>Play on your own or join team clashes. Strive for fame and recognition and climb the leaderboards. Create your own clan and gather a company of playmates. Take part in special events and claim unique rewards. In World of Tanks, there's a mode for every playstyle and every player!<h2 class="bb_tag">160 MILLION PEOPLE CAN’T BE WRONG </h2><br>Millions of players are having a blast in World of Tanks every day. Join the ever-growing community and meet new friends!<h2 class="bb_tag">START YOUR JOURNEY NOW </h2><br>Excitement and fun are just a few clicks away! Enter the code “<strong>GOWOTSTEAM</strong>” to receive a Premium tank and a bunch of useful resources, complete several Bootcamp missions to learn the basics and jump right into the action!						</div>`,

  }, /* {...defaults,id:'',
    title: '',previousPrice:,ratings:,releaseDate:new Date(''),
    covers: [''],
    link: '',tags:[''],
    titleCover:
      '',
    shortDesc:
      '',
    description: ``,
    }, */
];
export enum FileType{
  image,video,other
}
export function getFileType(file:string):FileType {
  var imageRegex = /^image\//i;
  var videoRegex = /^video\//i;

  if (imageRegex.test(file)) {
      // Display the image
      return FileType.image;
  } else if (videoRegex.test(file)) {
      // Display the video
      return FileType.video;
  } else {
      // Invalid URL type
      return FileType.other;
  }
}
