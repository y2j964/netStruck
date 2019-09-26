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
import fannyAndAlexander from './images/fannyAndAlexander.jpg';
import chungkingExpress from './images/chungkingExpress.jpg';
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
import apocalypseNow from './images/apocalypseNow.jpg';
import theConversation from './images/theConversation.jpg';
import pulpFiction from './images/pulpFiction.jpg';
import parisTexas from './images/parisTexas.jpg';
import missJulie from './images/missJulie.jpg';
import taxiDriver from './images/taxiDriver.jpg';
import newYorkNewYork from './images/newYorkNewYork.jpg';
import dancerInTheDark from './images/dancerInTheDark.jpg';
import kingOfComedy from './images/kingOfComedy.jpg';
import ifEllipsis from './images/ifEllipsis.jpg';
import meanStreets from './images/meanStreets.jpg';
import casino from './images/casino.jpg';
import wagesOfFear from './images/wagesOfFear.jpg';
import goodfellas from './images/goodfellas.jpg';
import allThatJazz from './images/allThatJazz.jpg';
import kagemusha from './images/kagemusha.jpg';
import thereWillBeBlood from './images/thereWillBeBlood.jpg';
import fishTank from './images/fishTank.jpg';
import magnolia from './images/magnolia.jpg';
import onceUponATimeInAmerica from './images/onceUponATimeInAmerica.jpg';
import brokenEmbraces from './images/brokenEmbraces.jpg';
import bottleRocket from './images/bottleRocket.jpg';
import jackieBrown from './images/jackieBrown.jpg';
import iGuessThisIsGrowingUp from './images/iGuessThisIsGrowingUp.jpg';
import essentialArtHouse from './images/essentialArtHouse.jpg';
import NoahBaumbach from './images/noahBaumbach.jpg';
import somethingWeirdIsGoingOn from './images/somethingWeirdIsGoingOn.jpg';
import favoritePalmeDorWinners from './images/favoritePalmeDorWinners.jpg';
import filmsOfTheWeek from './images/filmsOfTheWeek.jpg';
import scorseseDeNiro from './images/scorseseDeNiro.jpg';
import oscarWinnersThatAreActuallyGood from './images/oscarWinnersThatAreActuallyGood.jpg';

const netStruckData = {
  films: [
    {
      title: 'Running on Empty',
      duration: '116 minutes',
      year: 1988,
      genres: ['I Guess This is Growing Up'],
      director: 'Sidney Lumet',
      actors: ['River Phoenix, Christine Lahti, Judd Hirsch'],
      description:
        "The Popes are a family who haven't been able to use their real identity for years. In the late sixties, the parents set a weapons lab afire in an effort to hinder the government's Vietnam war campaign. Ever since then, the Popes have been on the run with the authorities never far behind.",
      img: runningOnEmpty,
      alt: '',
      id: uuid.v4(),
      slug: 'running-on-empty',
      isAddedToMyList: false,
    },
    {
      title: 'Ordinary People',
      duration: '124 minutes',
      year: 1980,
      genres: ['I Guess This is Growing Up'],
      director: 'Robert Redford',
      actors: [' Donald Sutherland, Mary Tyler Moore, Judd Hirsch'],
      description:
        'Beth, Calvin, and their son Conrad are living in the aftermath of the death of the other son. Conrad is overcome by grief and misplaced guilt to the extent of a suicide attempt. He is in therapy. Beth had always preferred his brother and is having difficulty being supportive to Conrad. Calvin is trapped between the two trying to hold the family together.',
      img: ordinaryPeople,
      alt: '',
      id: uuid.v4(),
      slug: 'ordinary-people',
      isAddedToMyList: false,
    },
    {
      title: 'Breaking Away',
      duration: '101 minutes',
      year: 1979,
      genres: ['I Guess This is Growing Up'],
      director: 'Peter Yates',
      actors: [' Dennis Christopher, Dennis Quaid, Daniel Stern'],
      description:
        'Dave, nineteen, has just graduated high school, with his 3 friends, The comical Cyril, the warm hearted but short-tempered Moocher, and the athletic, spiteful but good-hearted Mike. Now, Dave enjoys racing bikes and hopes to race the Italians one day, and even takes up the Italian culture, much to his friends and parents annoyance.',
      img: breakingAway,
      id: uuid.v4(),
      alt: '',
      slug: 'breaking-away',
      isAddedToMyList: false,
    },
    {
      title: 'Saturday Night Fever',
      duration: '118 minutes',
      year: 1977,
      genres: ['I Guess This is Growing Up'],
      director: 'John Badham',
      actors: ['John Travolta, Karen Lynn Gorney, Barry Miller'],
      description:
        "Tony Manero is a Brooklyn paint-store clerk who'd give anything to break out of his dead-end existence. In life, Tony is a peasant; on the disco dance floor, he's a king. As the soundtrack plays one Bee Gees hit after another, white-suited Tony struts his stuff amidst flashing lights and sweaty, undulating bodies. Tony's class aspirations are mirrored in his relationship with his dance partner, a secretary eager to move into the glamorous world of Manhattan.",
      img: saturdayNightFever,
      alt: '',
      id: uuid.v4(),
      slug: 'saturday-night-fever',
      isAddedToMyList: false,
    },
    {
      title: 'Risky Business',
      duration: '99 minutes',
      year: 1983,
      genres: ['I Guess This is Growing Up'],
      director: 'Paul Brickman',
      actors: ['Tom Cruise, Rebecca De Mornay, Joe Pantoliano'],
      description:
        'Meet Joel Goodson, an industrious, college-bound 17-year-old and a responsible, trustworthy son. However, when his parents go away and leave him home alone in the wealthy Chicago suburbs with the Porsche at his disposal he quickly decides he has been good for too long and it is time to enjoy himself. After an unfortunate incident with the Porsche Joel must raise some cash, in a risky way.',
      img: riskyBusiness,
      alt: '',
      id: uuid.v4(),
      slug: 'risky-business',
      isAddedToMyList: false,
    },
    {
      title: 'Clueless',
      duration: '97 minutes',
      year: 1995,
      genres: ['I Guess This is Growing Up'],
      director: 'Amy Heckerling',
      actors: ['Alicia Silverstone, Stacey Dash, Brittany Murphy'],
      description:
        "Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school's pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other. Emboldened by her success, she decides to give hopelessly klutzy new student Tai a makeover. When Tai becomes more popular than she is, Cher realizes that her disapproving ex-stepbrother was right about how misguided she was -- and falls for him.",
      img: clueless,
      id: uuid.v4(),
      alt: '',
      slug: 'clueless',
      isAddedToMyList: false,
    },
    {
      title: 'Murmur of the Heart',
      duration: '118 minutes',
      year: 1971,
      genres: ['I Guess This is Growing Up'],
      director: 'Louis Malle',
      actors: ['Lea Massari, Benoît Ferreux, Daniel Gélin'],
      description:
        'This loosely plotted coming-of-age tale follows the life of 15-year-old Laurent Chevalier as he stumbles his way over the burgeoning swell of adolescence in 1950s France. After having his first sexual experience with a prostitute and dodging the lips of a priest, Chevalier contracts a case of scarlet fever. When the fever leaves him with a heart murmur, Chevalier is placed in a sanatorium, along with his over-attentive and adulterous mother.',
      img: murmurOfTheHeart,
      alt: '',
      id: uuid.v4(),
      slug: 'murmur-of-the-heart',
      isAddedToMyList: false,
    },
    {
      title: 'Carrie',
      duration: '98 minutes',
      year: 1976,
      genres: ['I Guess This is Growing Up'],
      director: 'Brian De Palma',
      actors: ['Sissy Spacek, Piper Laurie, Amy Irving'],
      description:
        'Carrie White, a shy and troubled teenage girl who is tormented by her high school peers and her fanatically religious mother, begins to use her powers of telekinesis to exact revenge upon them.',
      img: carrie,
      id: uuid.v4(),
      alt: '',
      slug: 'carrie',
      isAddedToMyList: false,
    },
    {
      title: 'Dazed and Confused',
      duration: '102 minutes',
      year: 1993,
      genres: ['I Guess This is Growing Up'],
      director: 'Richard Linklater',
      actors: ['Jason London, Wiley Wiggins, Matthew McConaughey'],
      description:
        "The adventures of a group of Texas teens on their last day of school in 1976, centering on student Randall Floyd, who moves easily among stoners, jocks and geeks. Floyd is a star athlete, but he also likes smoking weed, which presents a conundrum when his football coach demands he sign a 'no drugs' pledge.",
      img: dazedAndConfused,
      id: uuid.v4(),
      alt: '',
      slug: 'dazed-and-confused',
      isAddedToMyList: false,
    },
    {
      title: 'The Squid and the Whale',
      duration: '81 minutes',
      year: 2005,
      genres: ['I Guess This is Growing Up', 'Directed By Noah Baumbach'],
      description:
        "Based on the true childhood experiences of Noah Baumbach and his brother, The Squid and the Whale tells the touching story of two young boys dealing with their parents divorce in Brooklyn in the 1980's.",
      director: 'Noah Baumbach',
      actors: ['Owen Kline, Jeff Daniels, Laura Linney'],
      img: squidAndTheWhale,
      id: uuid.v4(),
      alt: '',
      slug: 'the-squid-and-the-whale',
      isAddedToMyList: false,
    },
    {
      title: '8½',
      duration: '138 minutes',
      year: 1963,
      genres: ['Essential Art-House'],
      director: 'Federico Fellini',
      actors: ['Marcello Mastroianni', 'Anouk Aimée', 'Claudia Cardinale'],
      description:
        'Guido Anselmi, a film director, finds himself creatively barren at the peak of his career. Urged by his doctors to rest, Anselmi heads for a luxurious resort, but a sorry group gathers—his producer, staff, actors, wife, mistress, and relatives—each one begging him to get on with the show. In retreat from their dependency, he fantasizes about past women and dreams of his childhood.',
      img: eightHalf,
      id: uuid.v4(),
      slug: '8½',
      isAddedToMyList: false,
    },
    {
      title: 'Fanny and Alexander',
      duration: '188 minutes',
      year: 1982,
      genres: ['Essential Art-House'],
      director: 'Ingmar Bergman',
      actors: ['Bertil Guve, Pernilla Allwin, Kristina Adolphson'],
      description:
        'As children in the loving Ekdahl family, Fanny and Alexander enjoy a happy life with their parents, who run a theater company. After their father dies unexpectedly, however, the siblings end up in a joyless home when their mother, Emilie, marries a stern bishop. The bleak situation gradually grows worse as the bishop becomes more controlling, but dedicated relatives make a valiant attempt to aid Emilie, Fanny and Alexander.',
      img: fannyAndAlexander,
      id: uuid.v4(),
      slug: 'fanny-and-alexander',
      isAddedToMyList: false,
    },
    {
      title: 'Woman in the Dunes',
      duration: '123 minutes',
      year: 1964,
      genres: ['Essential Art-House'],
      director: 'Hiroshi Teshigahara',
      actors: ['Eiji Okada, Kyôko Kishida, Hiroko Itô'],
      description:
        'An entomologist suffers extreme psychological and sexual torture after being taken captive by the residents of a poor seaside village.',
      img: womanInTheDunes,
      id: uuid.v4(),
      slug: 'woman-in-the-dunes',
      isAddedToMyList: false,
    },
    {
      title: 'The Red Shoes',
      duration: '134 minutes',
      year: 1948,
      genres: ['Essential Art-House'],
      director: 'Michael Powell and Emeric Pressburger',
      actors: ['Anton Walbrook, Marius Goring, Moira Shearer'],
      description:
        'In this classic drama, Vicky Page is an aspiring ballerina torn between her dedication to dance and her desire to love. While her imperious instructor, Boris Lermontov, urges to her to forget anything but ballet, Vicky begins to fall for the charming young composer Julian Craster. Eventually Vicky, under great emotional stress, must choose to pursue either her art or her romance, a decision that carries serious consequences.',
      img: redShoes,
      id: uuid.v4(),
      slug: 'the-red-shoes',
      isAddedToMyList: false,
    },
    {
      title: 'Ran',
      duration: ' minutes',
      year: 1985,
      genres: ['Essential Art-House'],
      director: 'Akira Kurosawa',
      actors: ['Tatsuya Nakadai, Akira Terao, Jinpachi Nezu '],
      description:
        "With Ran, legendary director Akira Kurosawa reimagines Shakespeare's King Lear as a singular historical epic set in sixteenth-century Japan. Majestic in scope, the film is Kurosawa's late-life masterpiece, a profound examination of the folly of war and the crumbling of one family under the weight of betrayal, greed, and the insatiable thirst for power.",
      img: ran,
      id: uuid.v4(),
      slug: 'ran',
      isAddedToMyList: false,
    },
    {
      title: 'Vertigo',
      duration: '128 minutes',
      year: 1958,
      genres: ['Essential Art-House'],
      director: 'Alfred Hitchcock',
      actors: ['James Stewart, Kim Novak, Barbara Bel Geddes'],
      description:
        "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
      img: vertigo,
      id: uuid.v4(),
      slug: 'vertigo',
      isAddedToMyList: false,
    },
    {
      title: 'Jules et Jim',
      duration: '105 minutes',
      year: 1962,
      genres: ['Essential Art-House'],
      director: 'Francois Truffaut',
      actors: ['Jeanne Moreau, Oskar Werner, Henri Serre'],
      description:
        "In the carefree days before World War I, introverted Austrian author Jules strikes up a friendship with the exuberant Frenchman Jim. Both men fall for the impulsive and beautiful Catherine, but it's Jules who wins her hand. After the war, Jim visits Jules, Catherine and their daughter in their Austrian home and discovers not only that his feelings for Catherine are unchanged, but also that they're reciprocated.",
      img: julesEtJim,
      id: uuid.v4(),
      slug: 'jules-et-jim',
      isAddedToMyList: false,
    },
    {
      title: 'Masculin Féminin',
      duration: '103 minutes',
      genres: ['Essential Art-House'],
      year: 1966,
      director: 'Jean-Luc Godard',
      actors: ['Jean-Pierre Léaud, Chantal Goya, Marlène Jobert'],
      description:
        "With Masculin féminin, ruthless stylist and iconoclast Jean-Luc Godard introduces the world to 'the children of Marx and Coca-Cola', through a gang of restless youths engaged in hopeless love affairs with music, revolution, and each other. French new wave icon Jean-Pierre Leaud stars as Paul, an idealistic would-be intellectual struggling to forge a relationship with the adorable pop star Madeleine. Through their tempestuous affair, Godard fashions a candid and wildly funny free-form examination of youth culture in throbbing 1960s Paris, mixing satire and tragedy as only Godard can.",
      img: masculinFeminin,
      id: uuid.v4(),
      slug: 'masculin-féminin',
      isAddedToMyList: false,
    },
    {
      title: 'Seven Samurai',
      duration: '307 minutes',
      year: 1954,
      genres: ['Essential Art-House'],
      director: 'Akira Kurosawa',
      actors: ['Toshirô Mifune, Takashi Shimura, Keiko Tsushima'],
      description:
        "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
      img: sevenSamurai,
      id: uuid.v4(),
      slug: 'seven-samurai',
      isAddedToMyList: false,
    },
    {
      title: 'Persona',
      duration: '83 minutes',
      year: 1966,
      genres: ['Something Weird is Going On'],
      director: 'Ingmar Bergman',
      actors: ['Bibi Andersson, Liv Ullmann, Margaretha Krook'],
      description:
        "A young nurse, Alma, is put in charge of Elisabeth Vogler: an actress who is seemingly healthy in all respects, but will not talk. As they spend time together, Alma speaks to Elisabeth constantly, never receiving any answer. Alma eventually confesses her secrets to a seemingly sympathetic Elisabeth and finds that her own personality is being submerged into Elisabeth's persona.",
      img: persona,
      id: uuid.v4(),
      slug: 'persona',
      isAddedToMyList: false,
    },
    {
      title: 'Chungking Express',
      duration: '102 minutes',
      year: 1996,
      genres: ['Something Weird is Going On'],
      director: 'Kar-Wai Wong',
      actors: ['Brigitte Lin, Takeshi Kaneshiro, Tony Chiu-Wai Leung'],
      img: chungkingExpress,
      id: uuid.v4(),
      slug: 'chungking-express',
      isAddedToMyList: false,
    },
    {
      title: 'Last Year at Marienbad',
      duration: '94 minutes',
      year: 1961,
      genres: ['Something Weird is Going On'],
      director: 'Alain Resnais',
      actors: ['Delphine Seyrig, Giorgio Albertazzi, Sacha Pitoëff '],
      description:
        'Takes place in a chateau, an ambiguous story of a man and a woman who may or may not have met last year at Marienbad.',
      img: marienbad,
      id: uuid.v4(),
      slug: 'last-year-at-marienbad',
      isAddedToMyList: false,
    },
    {
      title: 'Twin Peaks: Fire Walk with Me',
      duration: '134 minutes',
      year: 1992,
      genres: ['Something Weird is Going On'],
      director: 'David Lynch',
      actors: ['Sheryl Lee, Ray Wise, Mädchen Amick'],
      description:
        'In the questionable town of Deer Meadow, Washington, FBI Agent Desmond inexplicably disappears while hunting for the man who murdered a teen girl. The killer is never apprehended, and, after experiencing dark visions and supernatural encounters, Agent Dale Cooper chillingly predicts that the culprit will claim another life. Meanwhile, in the more cozy town of Twin Peaks, hedonistic beauty Laura Palmer hangs with lowlifes and seems destined for a grisly fate.',
      img: fireWalkWithMe,
      id: uuid.v4(),
      slug: 'fire-walk-with-me',
      isAddedToMyList: false,
    },
    {
      title: 'Dogtooth',
      duration: '97 minutes',
      year: 2009,
      genres: ['Something Weird is Going On'],
      director: 'Yorgos Lanthimos',
      actors: ['Christos Stergioglou, Michele Valley, Angeliki Papoulia'],
      description:
        "Three teenagers are confined to an isolated country estate that could very well be on another planet. The trio spend their days listening to endless homemade tapes that teach them a whole new vocabulary. Any word that comes from beyond their family abode is instantly assigned a new meaning. Hence 'the sea' refers to a large armchair and 'zombies' are little yellow flowers. Having invented a brother whom they claim to have ostracized for his disobedience, the uber-controlling parents terrorize their offspring into submission.",
      img: dogtooth,
      id: uuid.v4(),
      slug: 'dogtooth',
      isAddedToMyList: false,
    },
    {
      title: 'Mulholland Drive',
      duration: '147 minutes',
      year: 2001,
      genres: ['Something Weird is Going On'],
      director: 'David Lynch',
      actors: ['Naomi Watts, Laura Harring, Justin Theroux'],
      description:
        "Blonde Betty Elms has only just arrived in Hollywood to become a movie star when she meets an enigmatic brunette with amnesia. Meanwhile, as the two set off to solve the second woman's identity, filmmaker Adam Kesher runs into ominous trouble while casting his latest project.",
      img: mulhollandDrive,
      id: uuid.v4(),
      slug: 'mulholland-drive',
      isAddedToMyList: false,
    },
    {
      title: '3 Women',
      duration: '127 minutes',
      year: 1977,
      genres: ['Something Weird is Going On'],
      director: 'Robert Altman',
      actors: ['Shelley Duvall, Sissy Spacek, Janice Rule'],
      description:
        "An awkward young teen working at a spa becomes overly attached to her fellow worker, a lonely outcast. They hang out at a bar owned by a strange pregnant artist and her has-been cowboy husband. Amid emotional crises, the three woman steal and trade one another's personalities.",
      img: threeWomen,
      id: uuid.v4(),
      slug: '3-women',
      isAddedToMyList: false,
    },
    {
      title: 'Planet of the Apes',
      duration: '112 minutes',
      year: 1969,
      genres: ['Something Weird is Going On'],
      director: 'Franklin J. Schaffner',
      actors: ['Charlton Heston, Roddy McDowall, Kim Hunter'],
      description:
        'An U.S. Spaceship lands on a desolate planet, stranding astronaut Taylor in a world dominated by apes, 2000 years into the future, who use a primitive race of humans for experimentation and sport. Soon Taylor finds himself among the hunted, his life in the hands of a benevolent chimpanzee scientist.',
      img: planetOfTheApes,
      id: uuid.v4(),
      slug: 'planet-of-the-apes',
      isAddedToMyList: false,
    },
    {
      title: 'Vanilla Sky',
      duration: '136 minutes',
      year: 2001,
      genres: ['Something Weird is Going On'],
      director: 'Cameron Crowe',
      actors: ['Tom Cruise, Penélope Cruz, Cameron Diaz'],
      description:
        "David Aames has it all: wealth, good looks and gorgeous women on his arm. But just as he begins falling for the warmhearted Sofia, his face is horribly disfigured in a car accident. That's just the beginning of his troubles as the lines between illusion and reality, between life and death, are blurred.",
      img: vanillaSky,
      id: uuid.v4(),
      slug: 'vanilla-sky',
      isAddedToMyList: false,
    },
    {
      title: 'Rebecca',
      duration: '130 minutes',
      year: 1940,
      genres: ['Oscar Winners That are Actually Good'],
      director: 'Alfred Hitchcock',
      actors: ['Laurence Olivier, Joan Fontaine, George Sanders'],
      description:
        'Story of a young woman who marries a fascinating widower only to find out that she must live in the shadow of his former wife, Rebecca, who died mysteriously several years earlier. The young wife must come to grips with the terrible secret of her handsome, cold husband, Max De Winter. She must also deal with the jealous, obsessed Mrs. Danvers, the housekeeper, who will not accept her as the mistress of the house.',
      img: rebecca,
      id: uuid.v4(),
      slug: 'rebecca',
      isAddedToMyList: false,
    },
    {
      title: 'Casablanca',
      duration: '102 minutes',
      year: 1942,
      genres: ['Oscar Winners That are Actually Good'],
      director: 'Michael Curtiz',
      actors: ['Humphrey Bogart, Ingrid Bergman, Paul Henreid'],
      description:
        'In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.',
      img: casablanca,
      id: uuid.v4(),
      slug: 'casablanca',
      isAddedToMyList: false,
    },
    {
      title: 'Moonlight',
      duration: '111 minutes',
      year: 2016,
      genres: ['Oscar Winners That are Actually Good'],
      director: 'Barry Jenkins',
      actors: ['Mahershala Ali, Naomie Harris, Trevante Rhodes'],
      description:
        'The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.',
      img: moonlight,
      id: uuid.v4(),
      slug: 'moonlight',
      isAddedToMyList: false,
    },
    {
      title: 'Rocky',
      duration: '120 minutes',
      year: 1976,
      genres: ['Oscar Winners That are Actually Good'],
      director: 'John G. Avildsen',
      actors: ['Sylvester Stallone, Talia Shire, Burt Young'],
      description:
        'When world heavyweight boxing champion, Apollo Creed wants to give an unknown fighter a shot at the title as a publicity stunt, his handlers choose palooka Rocky Balboa, an uneducated collector for a Philadelphia loan shark. Rocky teams up with trainer Mickey Goldmill to make the most of this once in a lifetime break.',
      img: rocky,
      id: uuid.v4(),
      slug: 'rocky',
      isAddedToMyList: false,
    },
    {
      title: 'The Apartment',
      duration: '125 minutes',
      year: 1960,
      genres: ['Oscar Winners That are Actually Good'],
      director: 'Billy Wilder',
      actors: ['Jack Lemmon, Shirley MacLaine, Fred MacMurray'],
      description:
        "Bud Baxter is a minor clerk in a huge New York insurance company, until he discovers a quick way to climb the corporate ladder. He lends out his apartment to the executives as a place to take their mistresses. Although he often has to deal with the aftermath of their visits, one night he's left with a major problem to solve.",
      img: theApartment,
      id: uuid.v4(),
      slug: 'the-apartment',
      isAddedToMyList: false,
    },
    {
      title: 'Amadeus',
      duration: '160 minutes',
      year: 1984,
      genres: ['Oscar Winners That are Actually Good'],
      director: 'Milos Forman',
      actors: ['F. Murray Abraham, Tom Hulce, Elizabeth Berridge'],
      description:
        'The incredible story of genius musician Wolfgang Amadeus Mozart, told in flashback by his peer and secret rival, Antonio Salieri—now confined to an insane asylum.',
      img: amadeus,
      id: uuid.v4(),
      slug: 'amadeus',
      isAddedToMyList: false,
    },
    {
      title: 'From Here To Eternity',
      duration: '118 minutes',
      year: 1953,
      genres: ['Oscar Winners That are Actually Good'],
      director: 'Fred Zinnemann',
      actors: ['Burt Lancaster, Montgomery Clift, Deborah Kerr'],
      description:
        "In 1941 Hawaii, a private is cruelly punished for not boxing on his unit's team, while his captain's wife and second in command are falling in love.",
      img: fromHereToEternity,
      id: uuid.v4(),
      slug: 'from-here-to-eternity',
      isAddedToMyList: false,
    },
    {
      title: 'Annie Hall',
      duration: '93 minutes',
      year: 1977,
      director: 'Woody Allen',
      genres: ['Oscar Winners That are Actually Good'],
      actors: ['Woody Allen, Diane Keaton, Tony Roberts'],
      description:
        'New York comedian Alvy Singer falls in love with the ditsy Annie Hall.',
      img: annieHall,
      id: uuid.v4(),
      slug: 'annie-hall',
      isAddedToMyList: false,
    },
    {
      title: 'Frances Ha',
      duration: '86 minutes',
      year: 2012,
      genres: ['Directed By Noah Baumbach'],
      director: 'Noah Baumbach',
      actors: ['Greta Gerwig, Mickey Sumner, Adam Driver'],
      description:
        'An aspiring dancer moves to New York City and becomes caught up in a whirlwind of flighty fair-weather friends, diminishing fortunes and career setbacks.',
      img: francesHa,
      id: uuid.v4(),
      slug: 'frances-ha',
      isAddedToMyList: false,
    },
    {
      title: 'Mistress America',
      duration: '84 minutes',
      year: 2015,
      genres: ['Directed By Noah Baumbach'],
      director: 'Noah Baumbach',
      actors: ['Greta Gerwig, Lola Kirke, Shana Dowdeswell'],
      description:
        'Tracy, a lonely college freshman in New York, is rescued from her solitude by her soon-to-be stepsister Brooke, an adventurous gal about town who entangles her in alluringly mad schemes.',
      img: mistressAmerica,
      id: uuid.v4(),
      slug: 'mistress-america',
      isAddedToMyList: false,
    },
    {
      title: 'Kicking and Screaming',
      duration: '96 minutes',
      year: 1995,
      genres: ['Directed By Noah Baumbach'],
      director: 'Noah Baumbach',
      actors: ['Josh Hamilton, Eric Stoltz, Samuel Gould'],
      description:
        "After college graduation, Grover's girlfriend Jane tells him she's moving to Prague to study writing. Grover declines to accompany her, deciding instead to move in with several friends, all of whom can't quite work up the inertia to escape their university's pull. Nobody wants to make any big decisions that would radically alter his life, yet none of them wants to end up like Chet, the professional student who tends bar and is in his tenth year of university studies.",
      img: kickingAndScreaming,
      id: uuid.v4(),
      slug: 'kicking-and-screaming',
      isAddedToMyList: false,
    },
    {
      title: 'Greenberg',
      duration: '107 minutes',
      year: 2010,
      genres: ['Directed By Noah Baumbach'],
      director: 'Noah Baumbach',
      actors: ['Ben Stiller, Greta Gerwig, Jennifer Jason Leigh'],
      description:
        "A New Yorker moves to Los Angeles in order to figure out his life while he housesits for his brother, and he soon sparks with his brother's assistant.",
      img: greenberg,
      id: uuid.v4(),
      slug: 'greenberg',
      isAddedToMyList: false,
    },
    {
      title: 'Margot at the Wedding',
      duration: '91 minutes',
      year: 2007,
      genres: ['Directed By Noah Baumbach'],
      director: 'Noah Baumbach',
      actors: ['Nicole Kidman, Jennifer Jason Leigh, Flora Cross'],
      description:
        'Margot and her son Claude decide to visit her sister Pauline after she announces that she is getting married to less-than-impressive Malcolm. In short order, the storm the sisters create leaves behind a mess of thrashed relationships and exposed family secrets.',
      img: margotAtTheWedding,
      id: uuid.v4(),
      slug: 'margot-at-the-wedding',
      isAddedToMyList: false,
    },
    {
      title: 'The Meyerowitz Stories (New and Selected)',
      duration: '112 minutes',
      year: 2017,
      genres: ['Directed By Noah Baumbach'],
      director: 'Noah Baumbach',
      actors: ['Adam Sandler, Grace Van Patten, Dustin Hoffman'],
      description:
        'An estranged family gathers together in New York for an event celebrating the artistic work of their father.',
      img: theMeyerowitzStories,
      id: uuid.v4(),
      slug: 'the-meyerowitz-stories',
      isAddedToMyList: false,
    },
    {
      title: 'While We Were Young',
      duration: '97 minutes',
      year: 2014,
      genres: ['Directed By Noah Baumbach'],
      director: 'Noah Baumbach',
      actors: ['Ben Stiller, Naomi Watts, Adam Driver'],
      description:
        'An uptight documentary filmmaker and his wife find their lives loosened up a bit after befriending a free-spirited younger couple.',
      img: whileWeWereYoung,
      id: uuid.v4(),
      slug: 'while-we-were-young',
      isAddedToMyList: false,
    },
    {
      title: 'Apocalypse Now',
      duration: '147 minutes',
      year: 1979,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Francis Ford Coppola',
      actors: ['Martin Sheen, Marlon Brando, Robert Duvall'],
      description:
        "At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, 'does not exist, nor will it ever exist'. His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.",
      img: apocalypseNow,
      id: uuid.v4(),
      slug: 'apocalypse-now',
      isAddedToMyList: false,
    },
    {
      title: 'All That Jazz',
      duration: '123 minutes',
      year: 1979,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Bob Fosse',
      actors: ['Roy Scheider, Jessica Lange, Leland Palmer'],
      description:
        'Joe Gideon is at the top of the heap, one of the most successful directors and choreographers in musical theater. But he can feel his world slowly collapsing around him - his obsession with work has almost destroyed his personal life, and only his bottles of pills keep him going.',
      img: allThatJazz,
      id: uuid.v4(),
      slug: 'all-that-jazz',
      isAddedToMyList: false,
    },
    {
      title: 'Pulp Fiction',
      duration: '154 minutes',
      year: 1994,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Quentin Tarantino',
      actors: [' John Travolta, Uma Thurman, Samuel L. Jackson'],
      description:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      img: pulpFiction,
      id: uuid.v4(),
      slug: 'pulp-fiction',
      isAddedToMyList: false,
    },
    {
      title: 'Miss Julie',
      duration: '90 minutes',
      year: 1951,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Alf Sjöberg',
      actors: ['Anita Björk, Ulf Palme, Märta Dorff'],
      description:
        "Based on the play by August Strindberg, Miss Julie vividly depicts the battle of the sexes and classes that ensues when Julie, a wealthy businessman's daughter, falls for Jean, her father's bitter servant.",
      img: missJulie,
      id: uuid.v4(),
      slug: 'miss-julie',
      isAddedToMyList: false,
    },
    {
      title: 'The Conversation',
      duration: '113 minutes',
      year: 1974,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Francis Ford Coppola',
      actors: ['Gene Hackman, John Cazale, Allen Garfield'],
      description:
        "Surveillance expert Harry Caul is hired by a mysterious client's brusque aide to tail a young couple. Tracking the pair through San Francisco's Union Square, Caul and his associate Stan manage to record a cryptic conversation between them. Tormented by memories of a previous case that ended badly, Caul becomes obsessed with the resulting tape, trying to determine if the couple are in danger.",
      img: theConversation,
      id: uuid.v4(),
      slug: 'the-conversation',
      isAddedToMyList: false,
    },
    {
      title: 'Wages of Fear',
      duration: '131 minutes',
      year: 1953,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Henri-Georges Clouzot',
      actors: ['Yves Montand, Charles Vanel, Peter van Eyck'],
      description:
        'In the South American jungle, supplies of nitroglycerine are needed at a remote oil field. The oil company pays four men to deliver the supplies in two trucks. A tense rivalry develops between the two sets of drivers on the rough remote roads where the slightest jolt can result in death.',
      img: wagesOfFear,
      id: uuid.v4(),
      slug: 'wages-of-fear',
      isAddedToMyList: false,
    },
    {
      title: 'If....',
      duration: '111 minutes',
      year: 1968,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Lindsay Anderson',
      actors: [' Malcolm McDowell, David Wood, Richard Warwick '],
      description:
        "Satire about a traditional English boys' boarding school, where social hierarchy reigns supreme and power remains in the hands of distanced and ineffectual teachers and callously vicious prefects in the Upper Sixth. But three Lower Sixth students, leader Mick Travis, Wallace and Johnny decide on a shocking course of action to redress the balance of privilege once and for all.",
      img: ifEllipsis,
      id: uuid.v4(),
      slug: 'if',
      isAddedToMyList: false,
    },
    {
      title: 'Kagemusha',
      duration: '97 minutes',
      year: 2014,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Akira Kurosawa ',
      actors: ["Tatsuya Nakadai, Tsutomu Yamazaki, Ken'ichi Hagiwara"],
      description:
        "Akira Kurosawa's lauded feudal epic presents the tale of a petty thief who is recruited to impersonate Shingen, an aging warlord, in order to avoid attacks by competing clans. When Shingen dies, his generals reluctantly agree to have the impostor take over as the powerful ruler. He soon begins to appreciate life as Shingen, but his commitment to the role is tested when he must lead his troops into battle against the forces of a rival warlord.",
      img: kagemusha,
      id: uuid.v4(),
      slug: 'kagemusha',
      isAddedToMyList: false,
    },
    {
      title: 'Paris, Texas',
      duration: '145 minutes',
      year: 1984,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Wim Wenders',
      actors: ['Harry Dean Stanton, Nastassja Kinski, Dean Stockwell'],
      description:
        'A man wanders out of the desert not knowing who he is. His brother finds him, and helps to pull his memory back of the life he led before he walked out on his family and disappeared four years earlier.',
      img: parisTexas,
      id: uuid.v4(),
      slug: 'paris-texas',
      isAddedToMyList: false,
    },
    {
      title: 'Dancer in the Dark',
      duration: '140 minutes',
      year: 2000,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Lars von Trier',
      actors: ['Björk, Catherine Deneuve, David Morse'],
      description:
        "Selma, a Czech immigrant on the verge of blindness, struggles to make ends meet for herself and her son, who has inherited the same genetic disorder and will suffer the same fate without an expensive operation. When life gets too difficult, Selma learns to cope through her love of musicals, escaping life's troubles - even if just for a moment - by dreaming up little numbers to the rhythmic beats of her surroundings.",
      img: dancerInTheDark,
      id: uuid.v4(),
      slug: 'dancer-in-the-dark',
      isAddedToMyList: false,
    },
    {
      title: 'Taxi Driver',
      duration: '114 minutes',
      year: 1976,
      genres: ['Scorsese and De Niro', "Favorite Palme d'Or Winners"],
      director: 'Martin Scorsese',
      actors: ['Robert De Niro, Jodie Foster, Cybill Shepherd'],
      description:
        'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
      img: taxiDriver,
      id: uuid.v4(),
      slug: 'taxi-driver',
      isAddedToMyList: false,
    },
    {
      title: 'Casino',
      duration: '178 minutes',
      year: 1995,
      genres: ['Scorsese and De Niro'],
      director: 'Martin Scorsese',
      actors: ['Robert De Niro, Sharon Stone, Joe Pesci'],
      description:
        "In early-1970s Las Vegas, low-level mobster Sam 'Ace' Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro, his ex-hustler wife Ginger, her con-artist ex Lester Diamond and a handful of corrupt politicians put Sam in ever-increasing danger.",
      img: casino,
      id: uuid.v4(),
      slug: 'casino',
      isAddedToMyList: false,
    },
    {
      title: 'Mean Streets',
      duration: '112 minutes',
      year: 1973,
      genres: ['Scorsese and De Niro'],
      director: 'Martin Scorsese',
      actors: ['Robert De Niro, Harvey Keitel, David Proval'],
      description:
        'A small-time hood must choose from among love, friendship and the chance to rise within the mob.',
      img: meanStreets,
      id: uuid.v4(),
      slug: 'mean-streets',
      isAddedToMyList: false,
    },
    {
      title: 'King of Comedy',
      duration: '109 minutes',
      year: 1982,
      genres: ['Scorsese and De Niro'],
      director: 'Martin Scorsese',
      actors: ['Robert De Niro, Jerry Lewis, Diahnne Abbott'],
      description:
        'Aspiring comic Rupert Pupkin attempts to achieve success in show business by stalking his idol, a late night talk-show host who craves his own privacy.',
      img: kingOfComedy,
      id: uuid.v4(),
      slug: 'king-of-comedy',
      isAddedToMyList: false,
    },
    {
      title: 'New York, New York',
      duration: '155 minutes',
      year: 1977,
      genres: ['Scorsese and De Niro'],
      director: 'Martin Scorsese',
      actors: ['Liza Minnelli, Robert De Niro, Lionel Stander'],
      description:
        'An egotistical saxophone player and a young singer meet on V-J Day and embark upon a strained and rocky romance, even as their careers begin a long uphill climb.',
      img: newYorkNewYork,
      id: uuid.v4(),
      slug: 'new-york-new-york',
      isAddedToMyList: false,
    },
    {
      title: 'Goodfellas',
      duration: '97 minutes',
      year: 1990,
      genres: ['Scorsese and De Niro'],
      director: 'Martin Scorsese',
      actors: ['Robert De Niro, Ray Liotta, Joe Pesci'],
      description:
        'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
      img: goodfellas,
      id: uuid.v4(),
      slug: 'goodfellas',
      isAddedToMyList: false,
    },
    {
      title: 'Magnolia',
      duration: '188 minutes',
      year: 1999,
      genres: ['Films of the Week'],
      director: 'Paul Thomas Anderson',
      actors: [' Tom Cruise, Jason Robards, Julianne Moore'],
      description:
        'An epic mosaic of many interrelated characters in search of happiness, forgiveness, and meaning in the San Fernando Valley.',
      img: magnolia,
      id: uuid.v4(),
      slug: 'magnolia',
      isAddedToMyList: false,
    },
    {
      title: 'Fish Tank',
      duration: '123 minutes',
      year: 2009,
      genres: ['Films of the Week'],
      director: 'Andrea Arnold',
      actors: ['Katie Jarvis, Michael Fassbender, Kierston Wareing'],
      description:
        'Everything changes for 15-year-old Mia when her mum brings home a new boyfriend.',
      img: fishTank,
      id: uuid.v4(),
      slug: 'fish-tank',
      isAddedToMyList: false,
    },
    {
      title: 'Bottle Rocket',
      duration: '91 minutes',
      year: 1996,
      genres: ['Films of the Week'],
      director: 'Wes Anderson',
      actors: ['Luke Wilson, Owen Wilson, Ned Dowd'],
      description:
        'Upon his release from a mental hospital following a nervous breakdown, the directionless Anthony joins his friend Dignan, who seems far less sane than the former. Dignan has hatched a hair-brained scheme for an as-yet-unspecified crime spree that somehow involves his former boss, the (supposedly) legendary Mr. Henry.',
      img: bottleRocket,
      id: uuid.v4(),
      slug: 'bottle-rocket',
      isAddedToMyList: false,
    },
    {
      title: 'Jackie Brown',
      duration: '154 minutes',
      year: 1997,
      genres: ['Films of the Week'],
      director: 'Quentin Tarantino',
      actors: ['Pam Grier, Samuel L. Jackson, Robert Forster'],
      description:
        "Jackie Brown is a flight attendant who gets caught in the middle of smuggling cash into the country for her gunrunner boss. When the cops try to use Jackie to get to her boss, she hatches a plan—with help from a bail bondsman—to keep the money for herself. Based on Elmore Leonard's novel “Rum Punch”.",
      img: jackieBrown,
      id: uuid.v4(),
      slug: 'jackie-brown',
      isAddedToMyList: false,
    },
    {
      title: 'Once Upon a Time in America',
      duration: '229 minutes',
      year: 1984,
      genres: ['Films of the Week'],
      director: 'Sergio Leone',
      actors: ['Robert De Niro, James Woods, Elizabeth McGovern'],
      description:
        'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
      img: onceUponATimeInAmerica,
      id: uuid.v4(),
      slug: 'once-upon-a-time-in-america',
      isAddedToMyList: false,
    },
    {
      title: 'Broken Embraces',
      duration: '127 minutes',
      year: 2009,
      genres: ['Films of the Week'],
      director: 'Pedro Almodóvar',
      actors: ['Penélope Cruz, Lluís Homar, Blanca Portillo'],
      description:
        'Harry Caine, a blind writer, reaches this moment in time when he has to heal his wounds from 14 years back. He was then still known by his real name, Mateo Blanco, and directing his last movie.',
      img: brokenEmbraces,
      id: uuid.v4(),
      slug: 'broken-embraces',
      isAddedToMyList: false,
    },
    {
      title: 'There Will Be Blood',
      duration: '158 minutes',
      year: 2007,
      genres: ['Films of the Week'],
      director: 'Paul Thomas Anderson',
      actors: ['Daniel Day-Lewis, Paul Dano, Ciarán Hinds'],
      description:
        'Ruthless silver miner, turned oil prospector, Daniel Plainview moves to oil-rich California. Using his adopted son to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainviews motives and intentions, starting a slow-burning feud that threatens both their lives.',
      img: thereWillBeBlood,
      id: uuid.v4(),
      slug: 'there-will-be-blood',
      isAddedToMyList: false,
    },
  ],
  featuredGenres: [
    {
      name: 'I Guess This is Growing Up',
      slug: 'i-guess-this-is-growing-up',
      id: uuid.v4(),
      description:
        'Some call it coming of age, we—with a respectful nod to Blink 182—call it, I Guess This is Growing Up. In this collection, we present films that represent the weirdness and existential doubt that accompany budding adolescence.',
      poster: iGuessThisIsGrowingUp,
      alt: 'teenage boy and girl sitting on bench and smoking',
    },
    {
      name: 'Directed By Noah Baumbach',
      slug: 'directed-by-noah-baumbach',
      id: uuid.v4(),
      description:
        "The author of this website is hard pressed to find a Noah Baumbach movie that he doesn't find great. We submit to you that Baumbach is the best dialogue man in the biz. You will be quoting lines from these movies for the rest of your life, that is, when you're not thinking about how authentic and compelling his characters are.",
      poster: NoahBaumbach,
    },
    {
      name: 'Essential Art-House',
      slug: 'essential-art-house',
      id: uuid.v4(),
      description:
        'What is an art film? We like to think of an art film as a movie that challenges your expectations of what a movie is and can be. Take a tour through cinematic history with some of favorite films that opened such doors in our mind.',
      poster: essentialArtHouse,
    },
    {
      name: 'Something Weird is Going On',
      slug: 'something-weird-is-going-on',
      id: uuid.v4(),
      description: 'No description is necessary here. Nothing would suffice.',
      poster: somethingWeirdIsGoingOn,
    },
    {
      name: 'Oscar Winners That are Actually Good',
      slug: 'oscar-winners-that-are-actually-good',
      id: uuid.v4(),
      description:
        "Just because a film wins the best film oscar, doesn't mean that film is pandering rubbish. Sometimes the Oscar committee does a good film justice. Here are such cases.",
      poster: oscarWinnersThatAreActuallyGood,
    },
    {
      name: "Favorite Palme d'Or Winners",
      slug: 'favorite-palme-dor-winner',
      id: uuid.v4(),
      description:
        "The Palme d'Or is the arguably the most honorable prize a film can receive. It is bestowed by the Cannes film festival in Cannes, France every year. Here are some of our favorite winners.",
      poster: favoritePalmeDorWinners,
    },
    {
      name: 'Scorsese and De Niro',
      slug: 'scorsese-and-de-niro',
      id: uuid.v4(),
      description:
        'Martin Scorsese is one of the United States finest directors to date. Robert De Niro is one of the United States finest actors to date. When you put them together, you get something special. When you put them together, you get these movies.',
      poster: scorseseDeNiro,
    },
    {
      name: 'Films of the Week',
      slug: 'films-of-the-week',
      id: uuid.v4(),
      description:
        'Here is a weekly roundup of films that just happen to be bouncing around our head at this given time. They also happen to be great.',
      poster: filmsOfTheWeek,
    },
  ],
};

export default netStruckData;
