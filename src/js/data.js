let characterLocation = "../../src/images/characters/";

const characters = [
  {
    character: {
      name: "The Flash",
      image: characterLocation + "the-flash.jpg",
      alerEgo: "Barry Allen",
    },
    actor: {
      image: characterLocation + "grant-gustin.jpg",
      name: "Grant Gustin",
      link: "https://en.wikipedia.org/wiki/Grant_Gustin",
    },
  },
  {
    character: {
      name: "Mecha Vibe",
      image: characterLocation + "mecha-vibe.jpg",
      alerEgo: "Cisco Ramon",
    },
    actor: {
      image: characterLocation + "carlos-valdes.jpg",
      name: "Carlos Valdes",
      link: "https://en.wikipedia.org/wiki/Carlos_Valdes_(actor)",
    },
  },
  {
    character: {
      name: "Frost",
      image: characterLocation + "frost.webp",
      alerEgo: "Catlin Snow",
    },
    actor: {
      image: characterLocation + "danielle-panabaker.jpg",
      name: "Danielle Panabaker",
      link: "https://en.wikipedia.org/wiki/Danielle_Panabaker",
    },
  },
  {
    character: {
      name: "Iris West Allen",
      image:
        "https://i.pinimg.com/originals/0b/13/9c/0b139cc28461bcd251b47a071ce08a12.jpg",
      alerEgo: "Iris West Allen",
    },
    actor: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Candice_Patton_2017_Paley_Fest.jpg/220px-Candice_Patton_2017_Paley_Fest.jpg",
      name: "Candice Patton",
      link: "",
    },
  },
  {
    character: {
      name: "Harrison Wells",
      image:
        "https://i.pinimg.com/originals/fc/98/da/fc98da4158dceaa0f9289a9ef8479abd.jpg",
      alerEgo: "HR Wells",
    },
    actor: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tom_Cavanagh_by_David_Shankbone.jpg/220px-Tom_Cavanagh_by_David_Shankbone.jpg",
      name: "Tom Cavanagh",
      link: "https://en.wikipedia.org/wiki/Tom_Cavanagh",
    },
  },
  {
    character: {
      name: "Joe West",
      image:
        "https://tv-fanatic-res.cloudinary.com/iu/s---cpG_RtZ--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1618328638/joe-west-the-flash-season-7-episode-7.jpg",
      alerEgo: "Joe West",
    },
    actor: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jesse_L._Martin_at_Paleyfest_2014.jpg/220px-Jesse_L._Martin_at_Paleyfest_2014.jpg",
      name: "Jesse L. Martin",
      link: "https://en.wikipedia.org/wiki/Jesse_L._Martin",
    },
  },
  {
    character: {
      name: "Cecile Horton",
      image: "https://uploads.wornontv.net/2019/10/cecile-white-knit-tank.jpg",
      alerEgo: "Cecile Horton",
    },
    actor: {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvbMocguGQVDvmXdSwBoUjMFNhYWPqVxOUKNXGDGA-C1IBwkb2",
      name: "Danielle Nicolet",
      link: "https://en.wikipedia.org/wiki/Danielle_Nicolet",
    },
  },
  {
    character: {
      name: "Allegra Garcia",
      image:
        "https://static.wikia.nocookie.net/marvel_dc/images/c/c0/Allegra_Garcia_Arrow_0001.png",
      alerEgo: "Allegra Garcia",
    },
    actor: {
      image:
        "https://static.wikia.nocookie.net/arrow/images/a/ac/Kayla_Compton.png",
      name: "Kayla Compton",
      link: "https://en.wikipedia.org/wiki/Kayla_Compton",
    },
  },
  {
    character: {
      name: "Chester P. Runk",
      image:
        "https://uploads.wornontv.net/2021/03/chester-turquoise-corduroy-shirt.jpg",
      alerEgo: "Chunk",
    },
    actor: {
      image:
        "https://static.wikia.nocookie.net/theflash/images/d/d2/Brandon_McKnight.jpg",
      name: "Brandon McKnight",
      link: "https://www.imdb.com/name/nm6475012/",
    },
  },
];

const enemies = [
  {
    character: {
      name: "Reverse Flash",
      image: characterLocation + "reverse-flash.jpg",
      alerEgo: "Eobard Thawne",
    },
    actor: {
      image: characterLocation + "tom-cavanagh.jpg",
      name: "Tom Cavanagh",
      link: "https://en.wikipedia.org/wiki/Tom_Cavanagh",
    },
  },
  {
    character: {
      name: "Reverse Flash",
      image:
        "https://static.wikia.nocookie.net/marvel_dc/images/4/43/Matt_Letscher_Mug_1.jpg",
      alerEgo: "Eobard Thawne",
    },
    actor: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Matt_Letscher.jpg/220px-Matt_Letscher.jpg",
      name: "Matt Letscher",
      link: "https://en.wikipedia.org/wiki/Matt_Letscher",
    },
  },
  {
    character: {
      name: "Zoom",
      image: characterLocation + "zoom.jpg",
      alerEgo: "Hunter Zoloman",
    },
    actor: {
      image: characterLocation + "teddy-sears.jpg",
      name: "Teddy Sears",
      link: "https://en.wikipedia.org/wiki/Teddy_Sears",
    },
  },
  {
    character: {
      name: "Savitar",
      image: characterLocation + "savitar.webp",
      alerEgo: "Barry Allen(T.R.)",
    },
    actor: { ...characters[0].actor },
  },
  {
    character: {
      name: "Clifford DeVoe",
      image:
        "https://static.wikia.nocookie.net/villains/images/3/3e/DeVoeWalks.jpg",
      alerEgo: "The Thinker",
    },
    actor: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EqwrCBKC2JN4aDe10AMf7VC-32T74JA90YujEqhkU-Cvg7r4",
      name: "Neil Sandilands",
      link: "https://en.wikipedia.org/wiki/Neil_Sandilands",
    },
  },

  {
    character: {
      name: "Cicada",
      image:
        "https://tv-fanatic-res.cloudinary.com/iu/s--iIN6y07B--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1550003101/intimidating-cicada-the-flash-s5e14.jpg",
      alerEgo: "David Hersch",
    },
    actor: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chris_Klein_2012.jpg/220px-Chris_Klein_2012.jpg",
      name: "Chris Klein",
      link: "https://en.wikipedia.org/wiki/Chris_Klein_(actor)",
    },
  },

  {
    character: {
      name: "Dr. Ramsey Rosso",
      image:
        "https://tv-fanatic-res.cloudinary.com/iu/s--z8FnUcdu--/c_scale,f_auto,h_927,q_auto,w_696/v1571761104/ramsey-rosso-the-flash-season-6-episode-3",
      alerEgo: "Bloodwork",
    },
    actor: {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgRjz2C6QTfh6tG1XO__uFDdIVwe0YFRAtU1ppUbIBBG8qn_aB",
      name: "Sendhil Ramamurthy",
      link: "https://en.wikipedia.org/wiki/Sendhil_Ramamurthy",
    },
  },

  {
    character: {
      name: "Eva McCulloch",
      image:
        "https://static.wikia.nocookie.net/villains/images/3/3e/DeVoeWalks.jpg",
      alerEgo: "Mirror Monarch",
    },
    actor: {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzRkZmRhNzEtMjAzYy00OWQ5LThkNmItZTBhODMxNTcwOWFhXkEyXkFqcGdeQXVyMjIyMjk4MTY@._V1_.jpg",
      name: "Efrat Dor",
      link: "https://en.wikipedia.org/wiki/Efrat_Dor",
    },
  },

  {
    character: {
      name: "GodSpeed",
      image:
        "https://www.usajacket.com/wp-content/uploads/2019/03/The-Flash-S05-Costume-Godspeed-Jacket.jpg",
      alerEgo: "August Heart",
    },
    actor: {
      image:
        "https://i.pinimg.com/originals/44/99/98/4499989db20956c74153597069b99f53.jpg",
      name: "karan oberoi",
      link: "https://www.imdb.com/name/nm2913946/",
    },
  },
];

const seasons = [
  {
    name: "Season 1",
    trailer: "https://www.youtube.com/embed/Yj0l7iGKh8g",
    images: [
      "https://tvline.com/wp-content/uploads/2014/09/the-flash-season-1-photos-318.jpg",
      "https://static.onecms.io/wp-content/uploads/sites/6/2015/05/the-flash-recap-2000.jpg",
      "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/10/06/the_flash.jpg",
      "http://4.bp.blogspot.com/-ufaGYfpMMVQ/VNvLLi9RjeI/AAAAAAAAQDo/o5pOEIFQq94/s1600/the-flash-%2B13%2B.1.jpg",
    ],
  },

  {
    name: "Season 2",
    trailer: "https://www.youtube.com/embed/UMRBs0-OXCA",
    images: [
      "https://comicvine.gamespot.com/a/uploads/screen_kubrick/0/40/4840139-flashs2e1sp_1280.jpg",
      "https://cdn3.whatculture.com/images/2015/10/m5pbtYAT.jpg",
      "https://cdn.seat42f.com/wp-content/uploads/2015/09/11082312/FLA201b_0084b.jpg",
      "https://variety.com/wp-content/uploads/2016/05/fla223b_0234br.jpg",
    ],
  },

  {
    name: "Season 3",
    trailer: "https://www.youtube.com/embed/Pz8JSgMERiQ",
    images: [
      "https://m.media-amazon.com/images/M/MV5BNDI4NjI3NDE2MF5BMl5BanBnXkFtZTgwODA0Nzg4OTE@._V1_.jpg",
      "https://www.denofgeek.com/wp-content/uploads/2016/10/the-flash-season-3-episode-1-flashpoint-kid-flash-1.jpg",
      "https://tvline.com/wp-content/uploads/2016/11/the-flash-season-3-julian-is-alchemy.jpg",
      "https://www.showbizjunkies.com/wp-content/uploads/2017/04/flash-season3-episode20-2.jpeg",
    ],
  },

  {
    name: "Season 4",
    trailer: "https://www.youtube.com/embed/xpmX4awpEgk",
    images: [
      "https://www.showbizjunkies.com/wp-content/uploads/2017/09/the-flash-season4-episode1b.jpg",
      "https://www.denofgeek.com/wp-content/uploads/2017/10/Flash401.jpg",
      "https://cdn.seat42f.com/wp-content/uploads/2018/02/06023844/The-Flash-Episode-13-Season-4-True-Colors-09.jpg",
      "https://tv-fanatic-res.cloudinary.com/iu/s--fwOEMqj6--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1523929824/the-thinkers-lair-the-flash.jpg",
    ],
  },

  {
    name: "Season 5",
    trailer: "https://www.youtube.com/embed/Eunrm_b_EWs",
    images: [
      "https://assets0.minhaserie.com.br/uploads/editor_pictures/000/068/992/content_pic.jpg",
      "https://www.comingsoon.net/assets/uploads/2019/05/The-Flash-Season-5-Episode-20-Image-1-1280x720.jpg",
      "https://tv-fanatic-res.cloudinary.com/iu/s--gbe04laV--/t_xlarge_l/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1539729078/team-flash-at-star-labs-the-flash-s5e2.jpg",
      "https://tvline.com/wp-content/uploads/2019/05/the-flash-season-5-photos-17.jpg",
    ],
  },

  {
    name: "Season 6",
    trailer: "https://www.youtube.com/embed/4jwROC6JfcI",
    images: [
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F08%2Ffla601b_0257b-2000.jpg",
      "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fhiddenremote.com%2Ffiles%2Fimage-exchange%2F2016%2F04%2Fie_24982-850x560.jpeg",
      "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/10/06/the_flash.jpg",
      "https://www.showbizjunkies.com/wp-content/uploads/2019/10/the-flash-season6-episode1b.jpg",
    ],
  },

  {
    name: "Season 7",
    trailer: "https://www.youtube.com/embed/83hko04N3qA",
    images: [
      "https://i2.wp.com/filmreviewonline.com/wp-content/uploads/2021/04/Flash-707-FRO_0003a.jpg",
      "https://bleedingcool.com/wp-content/uploads/2021/05/FLA708a_0186r.jpg",
      "https://media.comicbook.com/2021/02/flash-7x01-1-1257118.jpeg",
      "https://tvline.com/wp-content/uploads/2021/02/the-flash-season-7-photos-8-14.jpg",
    ],
  },
];
