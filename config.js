// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Doot',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Bom dia Guri!',
  greetingAfternoon: 'Boa tarde guri!,',
  greetingEvening: 'Boa noite guri!,',
  greetingNight: 'Vá mimir guri!!',

  // Weather
  weatherKey: '2032b8ae2be3384073c76152ca8ec8bd',
  weatherIcons: 'Onedark', // 'Onedark', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'pt_br', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '29.996320',
  defaultLongitude: '-51.058500',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Reddit',
      icon: 'layout',
      link: 'https://reddit.com',
    },
    {
      id: '4',
      name: 'Notion',
      icon: 'edit',
      link: 'https://notion.so',
    },
    {
      id: '5',
      name: 'Manga',
      icon: 'book-open',
      link: 'https://mangaeffect.com',
    },
    {
      id: '6',
      name: 'Mercado Livre',
      icon: 'shopping-bag',
      link: 'https://mercadolivre.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Gaucho',
        link: 'https://www.youtube.com/watch?v=EtTbS-KdcrE',
      },
      {
        name: 'Mimir :3',
        link: 'https://www.youtube.com/watch?v=q-GMkHwaKuQ&list=PLSNh_SUIqq68CHJSHqEngCJUmqy4Im1OR&index=1&',
      },
      {
        name: 'Powerwolf',
        link: 'https://open.spotify.com/track/11DjaJRDstJpTC0VfuFDlz?si=ebf5d46b1d4b4bcd',
      },
      {
        name: 'Rock',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Whatsapp',
        link: 'https://web.whatsapp.com',
      },
      {
        name: 'IGG-Games',
        link: 'https://igg-games.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
