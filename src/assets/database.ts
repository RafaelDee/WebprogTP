
export class GameItem{

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
  readonly cover? = this.covers?.length<0?this.covers[0]:null
  ratings:number;
  developer?:string;
  publisher?:string;
  releaseDate:Date;
  tags:string[]
}
export const games: GameItem[] = [
  {
    title: 'Genshin Impact',previousPrice:1499,ratings:4.3,releaseDate:new Date('September 28, 2020'),
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
    specification: {
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
    },
    supportedLang: [
      { title:'Audio',content: 'Chinese - Simplified, English, Korean, Japanese' },
      {
        title:'Text',content: `Chinese - Simplified, Chinese - Traditional, English, French, German, Italian, Japanese, Korean, Portuguese,
  Portuguese - Brazil, Russian, Spanish - Spain, Spanish - Latin America, Thai, Turkish, Vietnamese`,
      },
    ],
  },
];
