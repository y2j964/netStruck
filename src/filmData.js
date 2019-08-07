import uuid from 'uuid';

import runningOnEmpty from './images/runningOnEmpty.jpg';
import ordinaryPeople from './images/ordinaryPeople.jpg';
import breakingAway from './images/breakingAway.jpg';
import saturdayNightFever from './images/saturdayNightFever.jpg';
import riskyBusiness from './images/riskyBusiness.jpg';
import clueless from './images/clueless.jpg';
import murmurOfTheHeart from './images/murmurOfTheHeart.jpg';
import carrie from './images/carrie.jpg';
import dazedAndConfused from './images/dazedAndConfused.jpg';
import squidAndTheWhale from './images/squidAndTheWhale.jpg';

import sevenSamurai from './images/sevenSamurai.jpg';
import eightHalf from './images/8half.jpg';
import redShoes from './images/redShoes.jpg';
import mulhollandDrive from './images/mulhollandDrive.jpg';
import annieHall from './images/annieHall.jpg';
import dogtooth from './images/dogtooth2.jpg';
import fireWalkWithMe from './images/fireWalkWithMe.jpg';
import casablanca from './images/casablanca.jpg';
import rebecca from './images/rebecca.jpg';
import moonlight from './images/moonlight.jpg';
import theApartment from './images/theApartment.jpg';
import amadeus from './images/amadeus.jpg';
import vanillaSky from './images/vanillaSky.jpg';
import fromHereToEternity from './images/fromHereToEternity.jpg';
import rocky from './images/rocky.jpg';
import threeWomen from './images/threeWomen.jpg';
import planetOfTheApes from './images/planetOfTheApes.jpg';
import julesEtJim from './images/julesEtJim.jpg';
import masculinFeminin from './images/masculinFeminin.jpg';
import persona from './images/persona.jpg';
import ran from './images/ran.jpg';
import marienbad from './images/lastYearAtMarienbad.jpg';
import vertigo from './images/vertigo.jpg';
import womanInTheDunes from './images/womanInTheDunes.jpg';
import mistressAmerica from './images/mistressAmerica.jpg';
import margotAtTheWedding from './images/margotAtTheWedding.jpg';
import greenberg from './images/greenberg.jpg';
import whileWeWereYoung from './images/whileWeWereYoung.jpg';
import theMeyerowitzStories from './images/theMeyerowitzStories.jpg';
import francesHa from './images/francesHa.jpg';
import kickingAndScreaming from './images/kickingAndScreaming.jpeg';

const films = {
  'I GUESS THIS IS GROWING UP': [
    {
      title: 'Running on Empty',
      duration: '116 minutes',
      year: 1988,
      director: 'Sidney Lumet',
      actors: ['River Phoenix, Christine Lahti, Judd Hirsch'],
      img: runningOnEmpty,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Ordinary People',
      duration: '124 minutes',
      year: 1980,
      director: 'Robert Redford',
      actors: [' Donald Sutherland, Mary Tyler Moore, Judd Hirsch'],
      img: ordinaryPeople,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Breaking Away',
      duration: '101 minutes',
      year: 1979,
      director: 'Peter Yates',
      actors: [' Dennis Christopher, Dennis Quaid, Daniel Stern'],
      img: breakingAway,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Saturday Night Fever',
      duration: '118 minutes',
      year: 1977,
      director: 'John Badham',
      actors: ['John Travolta, Karen Lynn Gorney, Barry Miller'],
      img: saturdayNightFever,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Risky Business',
      duration: '99 minutes',
      year: 1983,
      director: 'Paul Brickman',
      actors: ['Tom Cruise, Rebecca De Mornay, Joe Pantoliano'],
      img: riskyBusiness,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Clueless',
      duration: '97 minutes',
      year: 1995,
      director: 'Amy Heckerling',
      actors: ['Alicia Silverstone, Stacey Dash, Brittany Murphy'],
      img: clueless,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Murmur of the Heart',
      duration: '118 minutes',
      year: 1971,
      director: 'Louis Malle',
      actors: ['Lea Massari, Benoît Ferreux, Daniel Gélin'],
      img: murmurOfTheHeart,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Carrie',
      duration: '98 minutes',
      year: 1976,
      director: 'Brian De Palma',
      actors: ['Sissy Spacek, Piper Laurie, Amy Irving'],
      img: carrie,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Dazed and Confused',
      duration: '102 minutes',
      year: 1993,
      director: 'Richard Linklater',
      actors: ['Jason London, Wiley Wiggins, Matthew McConaughey'],
      img: dazedAndConfused,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'The Squid and the Whale',
      duration: '81 minutes',
      year: 2005,
      director: 'Noah Baumbach',
      actors: ['Owen Kline, Jeff Daniels, Laura Linney'],
      img: squidAndTheWhale,
      id: uuid.v4(),
      addedToMyList: false,
    },
  ],
  'ESSENTIAL ART-HOUSE': [
    {
      title: '8½',
      duration: '138 minutes',
      year: 1963,
      director: 'Federico Fellini',
      actors: ['Marcello Mastroianni', 'Anouk Aimée', 'Claudia Cardinale'],
      img: eightHalf,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Woman in the Dunes',
      duration: '123 minutes',
      year: 1964,
      director: 'Hiroshi Teshigahara',
      actors: ['Eiji Okada, Kyôko Kishida, Hiroko Itô'],
      img: womanInTheDunes,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'The Red Shoes',
      duration: '134 minutes',
      year: 1948,
      director: 'Michael Powell and Emeric Pressburger',
      actors: ['Anton Walbrook, Marius Goring, Moira Shearer'],
      img: redShoes,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Ran',
      duration: ' minutes',
      year: 1985,
      director: 'Akira Kurosawa',
      actors: ['Tatsuya Nakadai, Akira Terao, Jinpachi Nezu '],
      img: ran,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Vertigo',
      duration: '128 minutes',
      year: 1958,
      director: 'Alfred Hitchcock',
      actors: ['James Stewart, Kim Novak, Barbara Bel Geddes'],
      img: vertigo,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Jules et Jim',
      duration: '105 minutes',
      year: 1962,
      director: 'Francois Truffaut',
      actors: ['Jeanne Moreau, Oskar Werner, Henri Serre'],
      img: julesEtJim,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Masculin Féminin',
      duration: '103 minutes',
      year: 1966,
      director: 'Jean-Luc Godard',
      actors: ['Jean-Pierre Léaud, Chantal Goya, Marlène Jobert'],
      img: masculinFeminin,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Seven Samurai',
      duration: '307 minutes',
      year: 1954,
      director: 'Akira Kurosawa',
      actors: ['Toshirô Mifune, Takashi Shimura, Keiko Tsushima'],
      img: sevenSamurai,
      id: uuid.v4(),
      addedToMyList: false,
    },
  ],
  'SOMETHING WEIRD IS GOING ON': [
    {
      title: 'Persona',
      duration: '83 minutes',
      year: 1966,
      director: 'Ingmar Bergman',
      actors: ['Bibi Andersson, Liv Ullmann, Margaretha Krook'],
      img: persona,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Last Year at Marienbad',
      duration: '94 minutes',
      year: 1961,
      director: 'Alain Resnais',
      actors: ['Delphine Seyrig, Giorgio Albertazzi, Sacha Pitoëff '],
      img: marienbad,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Twin Peaks: Fire Walk with Me',
      duration: '134 minutes',
      year: 1992,
      director: 'David Lynch',
      actors: ['Sheryl Lee, Ray Wise, Mädchen Amick'],
      img: fireWalkWithMe,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Dogtooth',
      duration: '97 minutes',
      year: 2009,
      director: 'Yorgos Lanthimos',
      actors: ['Christos Stergioglou, Michele Valley, Angeliki Papoulia'],
      img: dogtooth,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Mulholland Drive',
      duration: '147 minutes',
      year: 2001,
      director: 'David Lynch',
      actors: ['Naomi Watts, Laura Harring, Justin Theroux'],
      img: mulhollandDrive,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: '3 Women',
      duration: '127 minutes',
      year: 1977,
      director: 'Robert Altman',
      actors: ['Shelley Duvall, Sissy Spacek, Janice Rule'],
      img: threeWomen,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Planet of the Apes',
      duration: '112 minutes',
      year: 1969,
      director: 'Franklin J. Schaffner',
      actors: ['Charlton Heston, Roddy McDowall, Kim Hunter'],
      img: planetOfTheApes,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Vanilla Sky',
      duration: '136 minutes',
      year: 2001,
      director: 'Cameron Crowe',
      actors: ['Tom Cruise, Penélope Cruz, Cameron Diaz'],
      img: vanillaSky,
      id: uuid.v4(),
      addedToMyList: false,
    },
  ],
  'OSCAR WINNERS THAT ARE ACTUALLY GOOD': [
    {
      title: 'Rebecca',
      duration: '130 minutes',
      year: 1940,
      director: 'Alfred Hitchcock',
      actors: ['Laurence Olivier, Joan Fontaine, George Sanders'],
      img: rebecca,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Casablanca',
      duration: '102 minutes',
      year: 1942,
      director: 'Michael Curtiz',
      actors: ['Humphrey Bogart, Ingrid Bergman, Paul Henreid'],
      img: casablanca,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Moonlight',
      duration: '111 minutes',
      year: 2016,
      director: 'Barry Jenkins',
      actors: ['Mahershala Ali, Naomie Harris, Trevante Rhodes'],
      img: moonlight,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Rocky',
      duration: '120 minutes',
      year: 1976,
      director: 'John G. Avildsen',
      actors: ['Sylvester Stallone, Talia Shire, Burt Young'],
      img: rocky,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'The Apartment',
      duration: '125 minutes',
      year: 1960,
      director: 'Billy Wilder',
      actors: ['Jack Lemmon, Shirley MacLaine, Fred MacMurray'],
      img: theApartment,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Amadeus',
      duration: '160 minutes',
      year: 1984,
      director: 'Milos Forman',
      actors: ['F. Murray Abraham, Tom Hulce, Elizabeth Berridge'],
      img: amadeus,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'From Here To Eternity',
      duration: '118 minutes',
      year: 1953,
      director: 'Fred Zinnemann',
      actors: ['Burt Lancaster, Montgomery Clift, Deborah Kerr'],
      img: fromHereToEternity,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Annie Hall',
      duration: '93 minutes',
      year: 1977,
      director: 'Woody Allen',
      actors: ['Woody Allen, Diane Keaton, Tony Roberts'],
      img: annieHall,
      id: uuid.v4(),
      addedToMyList: false,
    },
  ],
  'DIRECTED BY NOAH BAUMBACH': [
    {
      title: 'Frances Ha',
      duration: '86 minutes',
      year: 2012,
      director: 'Noah Baumbach',
      actors: ['Greta Gerwig, Mickey Sumner, Adam Driver'],
      img: francesHa,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'The Squid and the Whale',
      duration: '81 minutes',
      year: 2005,
      director: 'Noah Baumbach',
      actors: ['Owen Kline, Jeff Daniels, Laura Linney'],
      img: squidAndTheWhale,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Mistress America',
      duration: '84 minutes',
      year: 2015,
      director: 'Noah Baumbach',
      actors: ['Greta Gerwig, Lola Kirke, Shana Dowdeswell'],
      img: mistressAmerica,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Kicking and Screaming',
      duration: '96 minutes',
      year: 1995,
      director: 'Noah Baumbach',
      actors: ['Josh Hamilton, Eric Stoltz, Samuel Gould'],
      img: kickingAndScreaming,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Greenberg',
      duration: '107 minutes',
      year: 2010,
      director: 'Noah Baumbach',
      actors: ['Ben Stiller, Greta Gerwig, Jennifer Jason Leigh'],
      img: greenberg,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'Margot at the Wedding',
      duration: '91 minutes',
      year: 2007,
      director: 'Noah Baumbach',
      actors: ['Nicole Kidman, Jennifer Jason Leigh, Flora Cross'],
      img: margotAtTheWedding,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'The Meyerowitz Stories (New and Selected)',
      duration: '112 minutes',
      year: 2017,
      director: 'Noah Baumbach',
      actors: ['Adam Sandler, Grace Van Patten, Dustin Hoffman'],
      img: theMeyerowitzStories,
      id: uuid.v4(),
      addedToMyList: false,
    },
    {
      title: 'While We Were Young',
      duration: '97 minutes',
      year: 2014,
      director: 'Noah Baumbach',
      actors: ['Ben Stiller, Naomi Watts, Adam Driver'],
      img: whileWeWereYoung,
      id: uuid.v4(),
      addedToMyList: false,
    },
  ],
};

export default films;
