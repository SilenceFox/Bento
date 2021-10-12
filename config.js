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
  weatherIcons: 'Nord', // 'Onedark', 'Dark', 'White'
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
      link: 'https://google.mail.com/',
    },
    {
      id: '3',
      name: 'Reddit',
      icon: 'table_chart',
      link: 'https://reddit.com',
    },
    {
      id: '4',
      name: 'Animes',
      icon: 'movie',
      link: 'https://animeshouse.net',
    },
    {
      id: '5',
      name: 'Manga',
      icon: 'table_chart',
      link: 'https://mangalivre.net',
    },
    {
      id: '6',
      name: 'Mercado Livre',
      icon: 'local_shipping',
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
        name: 'Inspirational',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Classic',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Oldies',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
