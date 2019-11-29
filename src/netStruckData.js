// data mostly pulled from https://www.themoviedb.org/
import uuid from 'uuid';
import runningOnEmptyWebp400 from './images/responsive/runningOnEmpty-400.webp';
import runningOnEmptyWebp640 from './images/responsive/runningOnEmpty-640.webp';
import runningOnEmptyWebp800 from './images/responsive/runningOnEmpty-800.webp';
import runningOnEmptyWebp1024 from './images/responsive/runningOnEmpty-1024.webp';
import runningOnEmptyWebp1200 from './images/responsive/runningOnEmpty-1200.webp';
import runningOnEmptyWebp1366 from './images/responsive/runningOnEmpty-1366.webp';
import runningOnEmptyWebp1600 from './images/responsive/runningOnEmpty-1600.webp';
import runningOnEmptyWebp1920 from './images/responsive/runningOnEmpty-1920.webp';
import runningOnEmptyJpg400 from './images/responsive/runningOnEmpty-400.jpg';
import runningOnEmptyJpg640 from './images/responsive/runningOnEmpty-640.jpg';
import runningOnEmptyJpg800 from './images/responsive/runningOnEmpty-800.jpg';
import runningOnEmptyJpg1024 from './images/responsive/runningOnEmpty-1024.jpg';
import runningOnEmptyJpg1200 from './images/responsive/runningOnEmpty-1200.jpg';
import runningOnEmptyJpg1366 from './images/responsive/runningOnEmpty-1366.jpg';
import runningOnEmptyJpg1600 from './images/responsive/runningOnEmpty-1600.jpg';
import runningOnEmptyJpg1920 from './images/responsive/runningOnEmpty-1920.jpg';
import ordinaryPeopleWebp400 from './images/responsive/ordinaryPeople-400.webp';
import ordinaryPeopleWebp640 from './images/responsive/ordinaryPeople-640.webp';
import ordinaryPeopleWebp800 from './images/responsive/ordinaryPeople-800.webp';
import ordinaryPeopleWebp1024 from './images/responsive/ordinaryPeople-1024.webp';
import ordinaryPeopleWebp1200 from './images/responsive/ordinaryPeople-1200.webp';
import ordinaryPeopleWebp1366 from './images/responsive/ordinaryPeople-1366.webp';
import ordinaryPeopleWebp1600 from './images/responsive/ordinaryPeople-1600.webp';
import ordinaryPeopleWebp1920 from './images/responsive/ordinaryPeople-1920.webp';
import ordinaryPeopleJpg400 from './images/responsive/ordinaryPeople-400.jpg';
import ordinaryPeopleJpg640 from './images/responsive/ordinaryPeople-640.jpg';
import ordinaryPeopleJpg800 from './images/responsive/ordinaryPeople-800.jpg';
import ordinaryPeopleJpg1024 from './images/responsive/ordinaryPeople-1024.jpg';
import ordinaryPeopleJpg1200 from './images/responsive/ordinaryPeople-1200.jpg';
import ordinaryPeopleJpg1366 from './images/responsive/ordinaryPeople-1366.jpg';
import ordinaryPeopleJpg1600 from './images/responsive/ordinaryPeople-1600.jpg';
import ordinaryPeopleJpg1920 from './images/responsive/ordinaryPeople-1920.jpg';
import breakingAwayWebp400 from './images/responsive/breakingAway-400.webp';
import breakingAwayWebp640 from './images/responsive/breakingAway-640.webp';
import breakingAwayWebp800 from './images/responsive/breakingAway-800.webp';
import breakingAwayWebp1024 from './images/responsive/breakingAway-1024.webp';
import breakingAwayWebp1200 from './images/responsive/breakingAway-1200.webp';
import breakingAwayWebp1366 from './images/responsive/breakingAway-1366.webp';
import breakingAwayWebp1600 from './images/responsive/breakingAway-1600.webp';
import breakingAwayWebp1920 from './images/responsive/breakingAway-1920.webp';
import breakingAwayJpg400 from './images/responsive/breakingAway-400.jpg';
import breakingAwayJpg640 from './images/responsive/breakingAway-640.jpg';
import breakingAwayJpg800 from './images/responsive/breakingAway-800.jpg';
import breakingAwayJpg1024 from './images/responsive/breakingAway-1024.jpg';
import breakingAwayJpg1200 from './images/responsive/breakingAway-1200.jpg';
import breakingAwayJpg1366 from './images/responsive/breakingAway-1366.jpg';
import breakingAwayJpg1600 from './images/responsive/breakingAway-1600.jpg';
import breakingAwayJpg1920 from './images/responsive/breakingAway-1920.jpg';
import saturdayNightFeverWebp400 from './images/responsive/saturdayNightFever-400.webp';
import saturdayNightFeverWebp640 from './images/responsive/saturdayNightFever-640.webp';
import saturdayNightFeverWebp800 from './images/responsive/saturdayNightFever-800.webp';
import saturdayNightFeverWebp1024 from './images/responsive/saturdayNightFever-1024.webp';
import saturdayNightFeverWebp1200 from './images/responsive/saturdayNightFever-1200.webp';
import saturdayNightFeverWebp1366 from './images/responsive/saturdayNightFever-1366.webp';
import saturdayNightFeverWebp1600 from './images/responsive/saturdayNightFever-1600.webp';
import saturdayNightFeverWebp1920 from './images/responsive/saturdayNightFever-1920.webp';
import saturdayNightFeverJpg400 from './images/responsive/saturdayNightFever-400.jpg';
import saturdayNightFeverJpg640 from './images/responsive/saturdayNightFever-640.jpg';
import saturdayNightFeverJpg800 from './images/responsive/saturdayNightFever-800.jpg';
import saturdayNightFeverJpg1024 from './images/responsive/saturdayNightFever-1024.jpg';
import saturdayNightFeverJpg1200 from './images/responsive/saturdayNightFever-1200.jpg';
import saturdayNightFeverJpg1366 from './images/responsive/saturdayNightFever-1366.jpg';
import saturdayNightFeverJpg1600 from './images/responsive/saturdayNightFever-1600.jpg';
import saturdayNightFeverJpg1920 from './images/responsive/saturdayNightFever-1920.jpg';
import riskyBusinessWebp400 from './images/responsive/riskyBusiness-400.webp';
import riskyBusinessWebp640 from './images/responsive/riskyBusiness-640.webp';
import riskyBusinessWebp800 from './images/responsive/riskyBusiness-800.webp';
import riskyBusinessWebp1024 from './images/responsive/riskyBusiness-1024.webp';
import riskyBusinessWebp1200 from './images/responsive/riskyBusiness-1200.webp';
import riskyBusinessWebp1366 from './images/responsive/riskyBusiness-1366.webp';
import riskyBusinessWebp1600 from './images/responsive/riskyBusiness-1600.webp';
import riskyBusinessWebp1920 from './images/responsive/riskyBusiness-1920.webp';
import riskyBusinessJpg400 from './images/responsive/riskyBusiness-400.jpg';
import riskyBusinessJpg640 from './images/responsive/riskyBusiness-640.jpg';
import riskyBusinessJpg800 from './images/responsive/riskyBusiness-800.jpg';
import riskyBusinessJpg1024 from './images/responsive/riskyBusiness-1024.jpg';
import riskyBusinessJpg1200 from './images/responsive/riskyBusiness-1200.jpg';
import riskyBusinessJpg1366 from './images/responsive/riskyBusiness-1366.jpg';
import riskyBusinessJpg1600 from './images/responsive/riskyBusiness-1600.jpg';
import riskyBusinessJpg1920 from './images/responsive/riskyBusiness-1920.jpg';
import cluelessWebp400 from './images/responsive/clueless-400.webp';
import cluelessWebp640 from './images/responsive/clueless-640.webp';
import cluelessWebp800 from './images/responsive/clueless-800.webp';
import cluelessWebp1024 from './images/responsive/clueless-1024.webp';
import cluelessWebp1200 from './images/responsive/clueless-1200.webp';
import cluelessWebp1366 from './images/responsive/clueless-1366.webp';
import cluelessWebp1600 from './images/responsive/clueless-1600.webp';
import cluelessWebp1920 from './images/responsive/clueless-1920.webp';
import cluelessJpg400 from './images/responsive/clueless-400.jpg';
import cluelessJpg640 from './images/responsive/clueless-640.jpg';
import cluelessJpg800 from './images/responsive/clueless-800.jpg';
import cluelessJpg1024 from './images/responsive/clueless-1024.jpg';
import cluelessJpg1200 from './images/responsive/clueless-1200.jpg';
import cluelessJpg1366 from './images/responsive/clueless-1366.jpg';
import cluelessJpg1600 from './images/responsive/clueless-1600.jpg';
import cluelessJpg1920 from './images/responsive/clueless-1920.jpg';
import murmurOfTheHeartWebp400 from './images/responsive/murmurOfTheHeart-400.webp';
import murmurOfTheHeartWebp640 from './images/responsive/murmurOfTheHeart-640.webp';
import murmurOfTheHeartWebp800 from './images/responsive/murmurOfTheHeart-800.webp';
import murmurOfTheHeartWebp1024 from './images/responsive/murmurOfTheHeart-1024.webp';
import murmurOfTheHeartWebp1200 from './images/responsive/murmurOfTheHeart-1200.webp';
import murmurOfTheHeartWebp1366 from './images/responsive/murmurOfTheHeart-1366.webp';
import murmurOfTheHeartWebp1600 from './images/responsive/murmurOfTheHeart-1600.webp';
import murmurOfTheHeartWebp1920 from './images/responsive/murmurOfTheHeart-1920.webp';
import murmurOfTheHeartJpg400 from './images/responsive/murmurOfTheHeart-400.jpg';
import murmurOfTheHeartJpg640 from './images/responsive/murmurOfTheHeart-640.jpg';
import murmurOfTheHeartJpg800 from './images/responsive/murmurOfTheHeart-800.jpg';
import murmurOfTheHeartJpg1024 from './images/responsive/murmurOfTheHeart-1024.jpg';
import murmurOfTheHeartJpg1200 from './images/responsive/murmurOfTheHeart-1200.jpg';
import murmurOfTheHeartJpg1366 from './images/responsive/murmurOfTheHeart-1366.jpg';
import murmurOfTheHeartJpg1600 from './images/responsive/murmurOfTheHeart-1600.jpg';
import murmurOfTheHeartJpg1920 from './images/responsive/murmurOfTheHeart-1920.jpg';
import carrieWebp400 from './images/responsive/carrie-400.webp';
import carrieWebp640 from './images/responsive/carrie-640.webp';
import carrieWebp800 from './images/responsive/carrie-800.webp';
import carrieWebp1024 from './images/responsive/carrie-1024.webp';
import carrieWebp1200 from './images/responsive/carrie-1200.webp';
import carrieWebp1366 from './images/responsive/carrie-1366.webp';
import carrieWebp1600 from './images/responsive/carrie-1600.webp';
import carrieWebp1920 from './images/responsive/carrie-1920.webp';
import carrieJpg400 from './images/responsive/carrie-400.jpg';
import carrieJpg640 from './images/responsive/carrie-640.jpg';
import carrieJpg800 from './images/responsive/carrie-800.jpg';
import carrieJpg1024 from './images/responsive/carrie-1024.jpg';
import carrieJpg1200 from './images/responsive/carrie-1200.jpg';
import carrieJpg1366 from './images/responsive/carrie-1366.jpg';
import carrieJpg1600 from './images/responsive/carrie-1600.jpg';
import carrieJpg1920 from './images/responsive/carrie-1920.jpg';
import dazedAndConfusedWebp400 from './images/responsive/dazedAndConfused-400.webp';
import dazedAndConfusedWebp640 from './images/responsive/dazedAndConfused-640.webp';
import dazedAndConfusedWebp800 from './images/responsive/dazedAndConfused-800.webp';
import dazedAndConfusedWebp1024 from './images/responsive/dazedAndConfused-1024.webp';
import dazedAndConfusedWebp1200 from './images/responsive/dazedAndConfused-1200.webp';
import dazedAndConfusedWebp1366 from './images/responsive/dazedAndConfused-1366.webp';
import dazedAndConfusedWebp1600 from './images/responsive/dazedAndConfused-1600.webp';
import dazedAndConfusedWebp1920 from './images/responsive/dazedAndConfused-1920.webp';
import dazedAndConfusedJpg400 from './images/responsive/dazedAndConfused-400.jpg';
import dazedAndConfusedJpg640 from './images/responsive/dazedAndConfused-640.jpg';
import dazedAndConfusedJpg800 from './images/responsive/dazedAndConfused-800.jpg';
import dazedAndConfusedJpg1024 from './images/responsive/dazedAndConfused-1024.jpg';
import dazedAndConfusedJpg1200 from './images/responsive/dazedAndConfused-1200.jpg';
import dazedAndConfusedJpg1366 from './images/responsive/dazedAndConfused-1366.jpg';
import dazedAndConfusedJpg1600 from './images/responsive/dazedAndConfused-1600.jpg';
import dazedAndConfusedJpg1920 from './images/responsive/dazedAndConfused-1920.jpg';
import squidAndTheWhaleWebp400 from './images/responsive/squidAndTheWhale-400.webp';
import squidAndTheWhaleWebp640 from './images/responsive/squidAndTheWhale-640.webp';
import squidAndTheWhaleWebp800 from './images/responsive/squidAndTheWhale-800.webp';
import squidAndTheWhaleWebp1024 from './images/responsive/squidAndTheWhale-1024.webp';
import squidAndTheWhaleWebp1200 from './images/responsive/squidAndTheWhale-1200.webp';
import squidAndTheWhaleWebp1366 from './images/responsive/squidAndTheWhale-1366.webp';
import squidAndTheWhaleWebp1600 from './images/responsive/squidAndTheWhale-1600.webp';
import squidAndTheWhaleWebp1920 from './images/responsive/squidAndTheWhale-1920.webp';
import squidAndTheWhaleJpg400 from './images/responsive/squidAndTheWhale-400.jpg';
import squidAndTheWhaleJpg640 from './images/responsive/squidAndTheWhale-640.jpg';
import squidAndTheWhaleJpg800 from './images/responsive/squidAndTheWhale-800.jpg';
import squidAndTheWhaleJpg1024 from './images/responsive/squidAndTheWhale-1024.jpg';
import squidAndTheWhaleJpg1200 from './images/responsive/squidAndTheWhale-1200.jpg';
import squidAndTheWhaleJpg1366 from './images/responsive/squidAndTheWhale-1366.jpg';
import squidAndTheWhaleJpg1600 from './images/responsive/squidAndTheWhale-1600.jpg';
import squidAndTheWhaleJpg1920 from './images/responsive/squidAndTheWhale-1920.jpg';
import sevenSamuraiWebp400 from './images/responsive/sevenSamurai-400.webp';
import sevenSamuraiWebp640 from './images/responsive/sevenSamurai-640.webp';
import sevenSamuraiWebp800 from './images/responsive/sevenSamurai-800.webp';
import sevenSamuraiWebp1024 from './images/responsive/sevenSamurai-1024.webp';
import sevenSamuraiWebp1200 from './images/responsive/sevenSamurai-1200.webp';
import sevenSamuraiWebp1366 from './images/responsive/sevenSamurai-1366.webp';
import sevenSamuraiWebp1600 from './images/responsive/sevenSamurai-1600.webp';
import sevenSamuraiWebp1920 from './images/responsive/sevenSamurai-1920.webp';
import sevenSamuraiJpg400 from './images/responsive/sevenSamurai-400.jpg';
import sevenSamuraiJpg640 from './images/responsive/sevenSamurai-640.jpg';
import sevenSamuraiJpg800 from './images/responsive/sevenSamurai-800.jpg';
import sevenSamuraiJpg1024 from './images/responsive/sevenSamurai-1024.jpg';
import sevenSamuraiJpg1200 from './images/responsive/sevenSamurai-1200.jpg';
import sevenSamuraiJpg1366 from './images/responsive/sevenSamurai-1366.jpg';
import sevenSamuraiJpg1600 from './images/responsive/sevenSamurai-1600.jpg';
import sevenSamuraiJpg1920 from './images/responsive/sevenSamurai-1920.jpg';
import eightHalfWebp400 from './images/responsive/eightHalf-400.webp';
import eightHalfWebp640 from './images/responsive/eightHalf-640.webp';
import eightHalfWebp800 from './images/responsive/eightHalf-800.webp';
import eightHalfWebp1024 from './images/responsive/eightHalf-1024.webp';
import eightHalfWebp1200 from './images/responsive/eightHalf-1200.webp';
import eightHalfWebp1366 from './images/responsive/eightHalf-1366.webp';
import eightHalfWebp1600 from './images/responsive/eightHalf-1600.webp';
import eightHalfWebp1920 from './images/responsive/eightHalf-1920.webp';
import eightHalfJpg400 from './images/responsive/eightHalf-400.jpg';
import eightHalfJpg640 from './images/responsive/eightHalf-640.jpg';
import eightHalfJpg800 from './images/responsive/eightHalf-800.jpg';
import eightHalfJpg1024 from './images/responsive/eightHalf-1024.jpg';
import eightHalfJpg1200 from './images/responsive/eightHalf-1200.jpg';
import eightHalfJpg1366 from './images/responsive/eightHalf-1366.jpg';
import eightHalfJpg1600 from './images/responsive/eightHalf-1600.jpg';
import eightHalfJpg1920 from './images/responsive/eightHalf-1920.jpg';
import redShoesWebp400 from './images/responsive/redShoes-400.webp';
import redShoesWebp640 from './images/responsive/redShoes-640.webp';
import redShoesWebp800 from './images/responsive/redShoes-800.webp';
import redShoesWebp1024 from './images/responsive/redShoes-1024.webp';
import redShoesWebp1200 from './images/responsive/redShoes-1200.webp';
import redShoesWebp1366 from './images/responsive/redShoes-1366.webp';
import redShoesWebp1600 from './images/responsive/redShoes-1600.webp';
import redShoesWebp1920 from './images/responsive/redShoes-1920.webp';
import redShoesJpg400 from './images/responsive/redShoes-400.jpg';
import redShoesJpg640 from './images/responsive/redShoes-640.jpg';
import redShoesJpg800 from './images/responsive/redShoes-800.jpg';
import redShoesJpg1024 from './images/responsive/redShoes-1024.jpg';
import redShoesJpg1200 from './images/responsive/redShoes-1200.jpg';
import redShoesJpg1366 from './images/responsive/redShoes-1366.jpg';
import redShoesJpg1600 from './images/responsive/redShoes-1600.jpg';
import redShoesJpg1920 from './images/responsive/redShoes-1920.jpg';
import mulhollandDriveWebp400 from './images/responsive/mulhollandDrive-400.webp';
import mulhollandDriveWebp640 from './images/responsive/mulhollandDrive-640.webp';
import mulhollandDriveWebp800 from './images/responsive/mulhollandDrive-800.webp';
import mulhollandDriveWebp1024 from './images/responsive/mulhollandDrive-1024.webp';
import mulhollandDriveWebp1200 from './images/responsive/mulhollandDrive-1200.webp';
import mulhollandDriveWebp1366 from './images/responsive/mulhollandDrive-1366.webp';
import mulhollandDriveWebp1600 from './images/responsive/mulhollandDrive-1600.webp';
import mulhollandDriveWebp1920 from './images/responsive/mulhollandDrive-1920.webp';
import mulhollandDriveJpg400 from './images/responsive/mulhollandDrive-400.jpg';
import mulhollandDriveJpg640 from './images/responsive/mulhollandDrive-640.jpg';
import mulhollandDriveJpg800 from './images/responsive/mulhollandDrive-800.jpg';
import mulhollandDriveJpg1024 from './images/responsive/mulhollandDrive-1024.jpg';
import mulhollandDriveJpg1200 from './images/responsive/mulhollandDrive-1200.jpg';
import mulhollandDriveJpg1366 from './images/responsive/mulhollandDrive-1366.jpg';
import mulhollandDriveJpg1600 from './images/responsive/mulhollandDrive-1600.jpg';
import mulhollandDriveJpg1920 from './images/responsive/mulhollandDrive-1920.jpg';
import annieHallWebp400 from './images/responsive/annieHall-400.webp';
import annieHallWebp640 from './images/responsive/annieHall-640.webp';
import annieHallWebp800 from './images/responsive/annieHall-800.webp';
import annieHallWebp1024 from './images/responsive/annieHall-1024.webp';
import annieHallWebp1200 from './images/responsive/annieHall-1200.webp';
import annieHallWebp1366 from './images/responsive/annieHall-1366.webp';
import annieHallWebp1600 from './images/responsive/annieHall-1600.webp';
import annieHallWebp1920 from './images/responsive/annieHall-1920.webp';
import annieHallJpg400 from './images/responsive/annieHall-400.jpg';
import annieHallJpg640 from './images/responsive/annieHall-640.jpg';
import annieHallJpg800 from './images/responsive/annieHall-800.jpg';
import annieHallJpg1024 from './images/responsive/annieHall-1024.jpg';
import annieHallJpg1200 from './images/responsive/annieHall-1200.jpg';
import annieHallJpg1366 from './images/responsive/annieHall-1366.jpg';
import annieHallJpg1600 from './images/responsive/annieHall-1600.jpg';
import annieHallJpg1920 from './images/responsive/annieHall-1920.jpg';
import dogtoothWebp400 from './images/responsive/dogtooth-400.webp';
import dogtoothWebp640 from './images/responsive/dogtooth-640.webp';
import dogtoothWebp800 from './images/responsive/dogtooth-800.webp';
import dogtoothWebp1024 from './images/responsive/dogtooth-1024.webp';
import dogtoothWebp1200 from './images/responsive/dogtooth-1200.webp';
import dogtoothWebp1366 from './images/responsive/dogtooth-1366.webp';
import dogtoothWebp1600 from './images/responsive/dogtooth-1600.webp';
import dogtoothWebp1920 from './images/responsive/dogtooth-1920.webp';
import dogtoothJpg400 from './images/responsive/dogtooth-400.jpg';
import dogtoothJpg640 from './images/responsive/dogtooth-640.jpg';
import dogtoothJpg800 from './images/responsive/dogtooth-800.jpg';
import dogtoothJpg1024 from './images/responsive/dogtooth-1024.jpg';
import dogtoothJpg1200 from './images/responsive/dogtooth-1200.jpg';
import dogtoothJpg1366 from './images/responsive/dogtooth-1366.jpg';
import dogtoothJpg1600 from './images/responsive/dogtooth-1600.jpg';
import dogtoothJpg1920 from './images/responsive/dogtooth-1920.jpg';
import fireWalkWithMeWebp400 from './images/responsive/fireWalkWithMe-400.webp';
import fireWalkWithMeWebp640 from './images/responsive/fireWalkWithMe-640.webp';
import fireWalkWithMeWebp800 from './images/responsive/fireWalkWithMe-800.webp';
import fireWalkWithMeWebp1024 from './images/responsive/fireWalkWithMe-1024.webp';
import fireWalkWithMeWebp1200 from './images/responsive/fireWalkWithMe-1200.webp';
import fireWalkWithMeWebp1366 from './images/responsive/fireWalkWithMe-1366.webp';
import fireWalkWithMeWebp1600 from './images/responsive/fireWalkWithMe-1600.webp';
import fireWalkWithMeWebp1920 from './images/responsive/fireWalkWithMe-1920.webp';
import fireWalkWithMeJpg400 from './images/responsive/fireWalkWithMe-400.jpg';
import fireWalkWithMeJpg640 from './images/responsive/fireWalkWithMe-640.jpg';
import fireWalkWithMeJpg800 from './images/responsive/fireWalkWithMe-800.jpg';
import fireWalkWithMeJpg1024 from './images/responsive/fireWalkWithMe-1024.jpg';
import fireWalkWithMeJpg1200 from './images/responsive/fireWalkWithMe-1200.jpg';
import fireWalkWithMeJpg1366 from './images/responsive/fireWalkWithMe-1366.jpg';
import fireWalkWithMeJpg1600 from './images/responsive/fireWalkWithMe-1600.jpg';
import fireWalkWithMeJpg1920 from './images/responsive/fireWalkWithMe-1920.jpg';
import casablancaWebp400 from './images/responsive/casablanca-400.webp';
import casablancaWebp640 from './images/responsive/casablanca-640.webp';
import casablancaWebp800 from './images/responsive/casablanca-800.webp';
import casablancaWebp1024 from './images/responsive/casablanca-1024.webp';
import casablancaWebp1200 from './images/responsive/casablanca-1200.webp';
import casablancaWebp1366 from './images/responsive/casablanca-1366.webp';
import casablancaWebp1600 from './images/responsive/casablanca-1600.webp';
import casablancaWebp1920 from './images/responsive/casablanca-1920.webp';
import casablancaJpg400 from './images/responsive/casablanca-400.jpg';
import casablancaJpg640 from './images/responsive/casablanca-640.jpg';
import casablancaJpg800 from './images/responsive/casablanca-800.jpg';
import casablancaJpg1024 from './images/responsive/casablanca-1024.jpg';
import casablancaJpg1200 from './images/responsive/casablanca-1200.jpg';
import casablancaJpg1366 from './images/responsive/casablanca-1366.jpg';
import casablancaJpg1600 from './images/responsive/casablanca-1600.jpg';
import casablancaJpg1920 from './images/responsive/casablanca-1920.jpg';
import rebeccaWebp400 from './images/responsive/rebecca-400.webp';
import rebeccaWebp640 from './images/responsive/rebecca-640.webp';
import rebeccaWebp800 from './images/responsive/rebecca-800.webp';
import rebeccaWebp1024 from './images/responsive/rebecca-1024.webp';
import rebeccaWebp1200 from './images/responsive/rebecca-1200.webp';
import rebeccaWebp1366 from './images/responsive/rebecca-1366.webp';
import rebeccaWebp1600 from './images/responsive/rebecca-1600.webp';
import rebeccaWebp1920 from './images/responsive/rebecca-1920.webp';
import rebeccaJpg400 from './images/responsive/rebecca-400.jpg';
import rebeccaJpg640 from './images/responsive/rebecca-640.jpg';
import rebeccaJpg800 from './images/responsive/rebecca-800.jpg';
import rebeccaJpg1024 from './images/responsive/rebecca-1024.jpg';
import rebeccaJpg1200 from './images/responsive/rebecca-1200.jpg';
import rebeccaJpg1366 from './images/responsive/rebecca-1366.jpg';
import rebeccaJpg1600 from './images/responsive/rebecca-1600.jpg';
import rebeccaJpg1920 from './images/responsive/rebecca-1920.jpg';
import moonlightWebp400 from './images/responsive/moonlight-400.webp';
import moonlightWebp640 from './images/responsive/moonlight-640.webp';
import moonlightWebp800 from './images/responsive/moonlight-800.webp';
import moonlightWebp1024 from './images/responsive/moonlight-1024.webp';
import moonlightWebp1200 from './images/responsive/moonlight-1200.webp';
import moonlightWebp1366 from './images/responsive/moonlight-1366.webp';
import moonlightWebp1600 from './images/responsive/moonlight-1600.webp';
import moonlightWebp1920 from './images/responsive/moonlight-1920.webp';
import moonlightJpg400 from './images/responsive/moonlight-400.jpg';
import moonlightJpg640 from './images/responsive/moonlight-640.jpg';
import moonlightJpg800 from './images/responsive/moonlight-800.jpg';
import moonlightJpg1024 from './images/responsive/moonlight-1024.jpg';
import moonlightJpg1200 from './images/responsive/moonlight-1200.jpg';
import moonlightJpg1366 from './images/responsive/moonlight-1366.jpg';
import moonlightJpg1600 from './images/responsive/moonlight-1600.jpg';
import moonlightJpg1920 from './images/responsive/moonlight-1920.jpg';
import theApartmentWebp400 from './images/responsive/theApartment-400.webp';
import theApartmentWebp640 from './images/responsive/theApartment-640.webp';
import theApartmentWebp800 from './images/responsive/theApartment-800.webp';
import theApartmentWebp1024 from './images/responsive/theApartment-1024.webp';
import theApartmentWebp1200 from './images/responsive/theApartment-1200.webp';
import theApartmentWebp1366 from './images/responsive/theApartment-1366.webp';
import theApartmentWebp1600 from './images/responsive/theApartment-1600.webp';
import theApartmentWebp1920 from './images/responsive/theApartment-1920.webp';
import theApartmentJpg400 from './images/responsive/theApartment-400.jpg';
import theApartmentJpg640 from './images/responsive/theApartment-640.jpg';
import theApartmentJpg800 from './images/responsive/theApartment-800.jpg';
import theApartmentJpg1024 from './images/responsive/theApartment-1024.jpg';
import theApartmentJpg1200 from './images/responsive/theApartment-1200.jpg';
import theApartmentJpg1366 from './images/responsive/theApartment-1366.jpg';
import theApartmentJpg1600 from './images/responsive/theApartment-1600.jpg';
import theApartmentJpg1920 from './images/responsive/theApartment-1920.jpg';
import amadeusWebp400 from './images/responsive/amadeus-400.webp';
import amadeusWebp640 from './images/responsive/amadeus-640.webp';
import amadeusWebp800 from './images/responsive/amadeus-800.webp';
import amadeusWebp1024 from './images/responsive/amadeus-1024.webp';
import amadeusWebp1200 from './images/responsive/amadeus-1200.webp';
import amadeusWebp1366 from './images/responsive/amadeus-1366.webp';
import amadeusWebp1600 from './images/responsive/amadeus-1600.webp';
import amadeusWebp1920 from './images/responsive/amadeus-1920.webp';
import amadeusJpg400 from './images/responsive/amadeus-400.jpg';
import amadeusJpg640 from './images/responsive/amadeus-640.jpg';
import amadeusJpg800 from './images/responsive/amadeus-800.jpg';
import amadeusJpg1024 from './images/responsive/amadeus-1024.jpg';
import amadeusJpg1200 from './images/responsive/amadeus-1200.jpg';
import amadeusJpg1366 from './images/responsive/amadeus-1366.jpg';
import amadeusJpg1600 from './images/responsive/amadeus-1600.jpg';
import amadeusJpg1920 from './images/responsive/amadeus-1920.jpg';
import vanillaSkyWebp400 from './images/responsive/vanillaSky-400.webp';
import vanillaSkyWebp640 from './images/responsive/vanillaSky-640.webp';
import vanillaSkyWebp800 from './images/responsive/vanillaSky-800.webp';
import vanillaSkyWebp1024 from './images/responsive/vanillaSky-1024.webp';
import vanillaSkyWebp1200 from './images/responsive/vanillaSky-1200.webp';
import vanillaSkyWebp1366 from './images/responsive/vanillaSky-1366.webp';
import vanillaSkyWebp1600 from './images/responsive/vanillaSky-1600.webp';
import vanillaSkyWebp1920 from './images/responsive/vanillaSky-1920.webp';
import vanillaSkyJpg400 from './images/responsive/vanillaSky-400.jpg';
import vanillaSkyJpg640 from './images/responsive/vanillaSky-640.jpg';
import vanillaSkyJpg800 from './images/responsive/vanillaSky-800.jpg';
import vanillaSkyJpg1024 from './images/responsive/vanillaSky-1024.jpg';
import vanillaSkyJpg1200 from './images/responsive/vanillaSky-1200.jpg';
import vanillaSkyJpg1366 from './images/responsive/vanillaSky-1366.jpg';
import vanillaSkyJpg1600 from './images/responsive/vanillaSky-1600.jpg';
import vanillaSkyJpg1920 from './images/responsive/vanillaSky-1920.jpg';
import fromHereToEternityWebp400 from './images/responsive/fromHereToEternity-400.webp';
import fromHereToEternityWebp640 from './images/responsive/fromHereToEternity-640.webp';
import fromHereToEternityWebp800 from './images/responsive/fromHereToEternity-800.webp';
import fromHereToEternityWebp1024 from './images/responsive/fromHereToEternity-1024.webp';
import fromHereToEternityWebp1200 from './images/responsive/fromHereToEternity-1200.webp';
import fromHereToEternityWebp1366 from './images/responsive/fromHereToEternity-1366.webp';
import fromHereToEternityWebp1600 from './images/responsive/fromHereToEternity-1600.webp';
import fromHereToEternityWebp1920 from './images/responsive/fromHereToEternity-1920.webp';
import fromHereToEternityJpg400 from './images/responsive/fromHereToEternity-400.jpg';
import fromHereToEternityJpg640 from './images/responsive/fromHereToEternity-640.jpg';
import fromHereToEternityJpg800 from './images/responsive/fromHereToEternity-800.jpg';
import fromHereToEternityJpg1024 from './images/responsive/fromHereToEternity-1024.jpg';
import fromHereToEternityJpg1200 from './images/responsive/fromHereToEternity-1200.jpg';
import fromHereToEternityJpg1366 from './images/responsive/fromHereToEternity-1366.jpg';
import fromHereToEternityJpg1600 from './images/responsive/fromHereToEternity-1600.jpg';
import fromHereToEternityJpg1920 from './images/responsive/fromHereToEternity-1920.jpg';
import fannyAndAlexanderWebp400 from './images/responsive/fannyAndAlexander-400.webp';
import fannyAndAlexanderWebp640 from './images/responsive/fannyAndAlexander-640.webp';
import fannyAndAlexanderWebp800 from './images/responsive/fannyAndAlexander-800.webp';
import fannyAndAlexanderWebp1024 from './images/responsive/fannyAndAlexander-1024.webp';
import fannyAndAlexanderWebp1200 from './images/responsive/fannyAndAlexander-1200.webp';
import fannyAndAlexanderWebp1366 from './images/responsive/fannyAndAlexander-1366.webp';
import fannyAndAlexanderWebp1600 from './images/responsive/fannyAndAlexander-1600.webp';
import fannyAndAlexanderWebp1920 from './images/responsive/fannyAndAlexander-1920.webp';
import fannyAndAlexanderJpg400 from './images/responsive/fannyAndAlexander-400.jpg';
import fannyAndAlexanderJpg640 from './images/responsive/fannyAndAlexander-640.jpg';
import fannyAndAlexanderJpg800 from './images/responsive/fannyAndAlexander-800.jpg';
import fannyAndAlexanderJpg1024 from './images/responsive/fannyAndAlexander-1024.jpg';
import fannyAndAlexanderJpg1200 from './images/responsive/fannyAndAlexander-1200.jpg';
import fannyAndAlexanderJpg1366 from './images/responsive/fannyAndAlexander-1366.jpg';
import fannyAndAlexanderJpg1600 from './images/responsive/fannyAndAlexander-1600.jpg';
import fannyAndAlexanderJpg1920 from './images/responsive/fannyAndAlexander-1920.jpg';
import chungkingExpressWebp400 from './images/responsive/chungkingExpress-400.webp';
import chungkingExpressWebp640 from './images/responsive/chungkingExpress-640.webp';
import chungkingExpressWebp800 from './images/responsive/chungkingExpress-800.webp';
import chungkingExpressWebp1024 from './images/responsive/chungkingExpress-1024.webp';
import chungkingExpressWebp1200 from './images/responsive/chungkingExpress-1200.webp';
import chungkingExpressWebp1366 from './images/responsive/chungkingExpress-1366.webp';
import chungkingExpressWebp1600 from './images/responsive/chungkingExpress-1600.webp';
import chungkingExpressWebp1920 from './images/responsive/chungkingExpress-1920.webp';
import chungkingExpressJpg400 from './images/responsive/chungkingExpress-400.jpg';
import chungkingExpressJpg640 from './images/responsive/chungkingExpress-640.jpg';
import chungkingExpressJpg800 from './images/responsive/chungkingExpress-800.jpg';
import chungkingExpressJpg1024 from './images/responsive/chungkingExpress-1024.jpg';
import chungkingExpressJpg1200 from './images/responsive/chungkingExpress-1200.jpg';
import chungkingExpressJpg1366 from './images/responsive/chungkingExpress-1366.jpg';
import chungkingExpressJpg1600 from './images/responsive/chungkingExpress-1600.jpg';
import chungkingExpressJpg1920 from './images/responsive/chungkingExpress-1920.jpg';
import rockyWebp400 from './images/responsive/rocky-400.webp';
import rockyWebp640 from './images/responsive/rocky-640.webp';
import rockyWebp800 from './images/responsive/rocky-800.webp';
import rockyWebp1024 from './images/responsive/rocky-1024.webp';
import rockyWebp1200 from './images/responsive/rocky-1200.webp';
import rockyWebp1366 from './images/responsive/rocky-1366.webp';
import rockyWebp1600 from './images/responsive/rocky-1600.webp';
import rockyWebp1920 from './images/responsive/rocky-1920.webp';
import rockyJpg400 from './images/responsive/rocky-400.jpg';
import rockyJpg640 from './images/responsive/rocky-640.jpg';
import rockyJpg800 from './images/responsive/rocky-800.jpg';
import rockyJpg1024 from './images/responsive/rocky-1024.jpg';
import rockyJpg1200 from './images/responsive/rocky-1200.jpg';
import rockyJpg1366 from './images/responsive/rocky-1366.jpg';
import rockyJpg1600 from './images/responsive/rocky-1600.jpg';
import rockyJpg1920 from './images/responsive/rocky-1920.jpg';
import threeWomenWebp400 from './images/responsive/threeWomen-400.webp';
import threeWomenWebp640 from './images/responsive/threeWomen-640.webp';
import threeWomenWebp800 from './images/responsive/threeWomen-800.webp';
import threeWomenWebp1024 from './images/responsive/threeWomen-1024.webp';
import threeWomenWebp1200 from './images/responsive/threeWomen-1200.webp';
import threeWomenWebp1366 from './images/responsive/threeWomen-1366.webp';
import threeWomenWebp1600 from './images/responsive/threeWomen-1600.webp';
import threeWomenWebp1920 from './images/responsive/threeWomen-1920.webp';
import threeWomenJpg400 from './images/responsive/threeWomen-400.jpg';
import threeWomenJpg640 from './images/responsive/threeWomen-640.jpg';
import threeWomenJpg800 from './images/responsive/threeWomen-800.jpg';
import threeWomenJpg1024 from './images/responsive/threeWomen-1024.jpg';
import threeWomenJpg1200 from './images/responsive/threeWomen-1200.jpg';
import threeWomenJpg1366 from './images/responsive/threeWomen-1366.jpg';
import threeWomenJpg1600 from './images/responsive/threeWomen-1600.jpg';
import threeWomenJpg1920 from './images/responsive/threeWomen-1920.jpg';
import planetOfTheApesWebp400 from './images/responsive/planetOfTheApes-400.webp';
import planetOfTheApesWebp640 from './images/responsive/planetOfTheApes-640.webp';
import planetOfTheApesWebp800 from './images/responsive/planetOfTheApes-800.webp';
import planetOfTheApesWebp1024 from './images/responsive/planetOfTheApes-1024.webp';
import planetOfTheApesWebp1200 from './images/responsive/planetOfTheApes-1200.webp';
import planetOfTheApesWebp1366 from './images/responsive/planetOfTheApes-1366.webp';
import planetOfTheApesWebp1600 from './images/responsive/planetOfTheApes-1600.webp';
import planetOfTheApesWebp1920 from './images/responsive/planetOfTheApes-1920.webp';
import planetOfTheApesJpg400 from './images/responsive/planetOfTheApes-400.jpg';
import planetOfTheApesJpg640 from './images/responsive/planetOfTheApes-640.jpg';
import planetOfTheApesJpg800 from './images/responsive/planetOfTheApes-800.jpg';
import planetOfTheApesJpg1024 from './images/responsive/planetOfTheApes-1024.jpg';
import planetOfTheApesJpg1200 from './images/responsive/planetOfTheApes-1200.jpg';
import planetOfTheApesJpg1366 from './images/responsive/planetOfTheApes-1366.jpg';
import planetOfTheApesJpg1600 from './images/responsive/planetOfTheApes-1600.jpg';
import planetOfTheApesJpg1920 from './images/responsive/planetOfTheApes-1920.jpg';
import julesEtJimWebp400 from './images/responsive/julesEtJim-400.webp';
import julesEtJimWebp640 from './images/responsive/julesEtJim-640.webp';
import julesEtJimWebp800 from './images/responsive/julesEtJim-800.webp';
import julesEtJimWebp1024 from './images/responsive/julesEtJim-1024.webp';
import julesEtJimWebp1200 from './images/responsive/julesEtJim-1200.webp';
import julesEtJimWebp1366 from './images/responsive/julesEtJim-1366.webp';
import julesEtJimWebp1600 from './images/responsive/julesEtJim-1600.webp';
import julesEtJimWebp1920 from './images/responsive/julesEtJim-1920.webp';
import julesEtJimJpg400 from './images/responsive/julesEtJim-400.jpg';
import julesEtJimJpg640 from './images/responsive/julesEtJim-640.jpg';
import julesEtJimJpg800 from './images/responsive/julesEtJim-800.jpg';
import julesEtJimJpg1024 from './images/responsive/julesEtJim-1024.jpg';
import julesEtJimJpg1200 from './images/responsive/julesEtJim-1200.jpg';
import julesEtJimJpg1366 from './images/responsive/julesEtJim-1366.jpg';
import julesEtJimJpg1600 from './images/responsive/julesEtJim-1600.jpg';
import julesEtJimJpg1920 from './images/responsive/julesEtJim-1920.jpg';
import masculinFemininWebp400 from './images/responsive/masculinFeminin-400.webp';
import masculinFemininWebp640 from './images/responsive/masculinFeminin-640.webp';
import masculinFemininWebp800 from './images/responsive/masculinFeminin-800.webp';
import masculinFemininWebp1024 from './images/responsive/masculinFeminin-1024.webp';
import masculinFemininWebp1200 from './images/responsive/masculinFeminin-1200.webp';
import masculinFemininWebp1366 from './images/responsive/masculinFeminin-1366.webp';
import masculinFemininWebp1600 from './images/responsive/masculinFeminin-1600.webp';
import masculinFemininWebp1920 from './images/responsive/masculinFeminin-1920.webp';
import masculinFemininJpg400 from './images/responsive/masculinFeminin-400.jpg';
import masculinFemininJpg640 from './images/responsive/masculinFeminin-640.jpg';
import masculinFemininJpg800 from './images/responsive/masculinFeminin-800.jpg';
import masculinFemininJpg1024 from './images/responsive/masculinFeminin-1024.jpg';
import masculinFemininJpg1200 from './images/responsive/masculinFeminin-1200.jpg';
import masculinFemininJpg1366 from './images/responsive/masculinFeminin-1366.jpg';
import masculinFemininJpg1600 from './images/responsive/masculinFeminin-1600.jpg';
import masculinFemininJpg1920 from './images/responsive/masculinFeminin-1920.jpg';
import personaWebp400 from './images/responsive/persona-400.webp';
import personaWebp640 from './images/responsive/persona-640.webp';
import personaWebp800 from './images/responsive/persona-800.webp';
import personaWebp1024 from './images/responsive/persona-1024.webp';
import personaWebp1200 from './images/responsive/persona-1200.webp';
import personaWebp1366 from './images/responsive/persona-1366.webp';
import personaWebp1600 from './images/responsive/persona-1600.webp';
import personaWebp1920 from './images/responsive/persona-1920.webp';
import personaJpg400 from './images/responsive/persona-400.jpg';
import personaJpg640 from './images/responsive/persona-640.jpg';
import personaJpg800 from './images/responsive/persona-800.jpg';
import personaJpg1024 from './images/responsive/persona-1024.jpg';
import personaJpg1200 from './images/responsive/persona-1200.jpg';
import personaJpg1366 from './images/responsive/persona-1366.jpg';
import personaJpg1600 from './images/responsive/persona-1600.jpg';
import personaJpg1920 from './images/responsive/persona-1920.jpg';
import ranWebp400 from './images/responsive/ran-400.webp';
import ranWebp640 from './images/responsive/ran-640.webp';
import ranWebp800 from './images/responsive/ran-800.webp';
import ranWebp1024 from './images/responsive/ran-1024.webp';
import ranWebp1200 from './images/responsive/ran-1200.webp';
import ranWebp1366 from './images/responsive/ran-1366.webp';
import ranWebp1600 from './images/responsive/ran-1600.webp';
import ranWebp1920 from './images/responsive/ran-1920.webp';
import ranJpg400 from './images/responsive/ran-400.jpg';
import ranJpg640 from './images/responsive/ran-640.jpg';
import ranJpg800 from './images/responsive/ran-800.jpg';
import ranJpg1024 from './images/responsive/ran-1024.jpg';
import ranJpg1200 from './images/responsive/ran-1200.jpg';
import ranJpg1366 from './images/responsive/ran-1366.jpg';
import ranJpg1600 from './images/responsive/ran-1600.jpg';
import ranJpg1920 from './images/responsive/ran-1920.jpg';
import lastYearAtMarienbadWebp400 from './images/responsive/lastYearAtMarienbad-400.webp';
import lastYearAtMarienbadWebp640 from './images/responsive/lastYearAtMarienbad-640.webp';
import lastYearAtMarienbadWebp800 from './images/responsive/lastYearAtMarienbad-800.webp';
import lastYearAtMarienbadWebp1024 from './images/responsive/lastYearAtMarienbad-1024.webp';
import lastYearAtMarienbadWebp1200 from './images/responsive/lastYearAtMarienbad-1200.webp';
import lastYearAtMarienbadWebp1366 from './images/responsive/lastYearAtMarienbad-1366.webp';
import lastYearAtMarienbadWebp1600 from './images/responsive/lastYearAtMarienbad-1600.webp';
import lastYearAtMarienbadWebp1920 from './images/responsive/lastYearAtMarienbad-1920.webp';
import lastYearAtMarienbadJpg400 from './images/responsive/lastYearAtMarienbad-400.jpg';
import lastYearAtMarienbadJpg640 from './images/responsive/lastYearAtMarienbad-640.jpg';
import lastYearAtMarienbadJpg800 from './images/responsive/lastYearAtMarienbad-800.jpg';
import lastYearAtMarienbadJpg1024 from './images/responsive/lastYearAtMarienbad-1024.jpg';
import lastYearAtMarienbadJpg1200 from './images/responsive/lastYearAtMarienbad-1200.jpg';
import lastYearAtMarienbadJpg1366 from './images/responsive/lastYearAtMarienbad-1366.jpg';
import lastYearAtMarienbadJpg1600 from './images/responsive/lastYearAtMarienbad-1600.jpg';
import lastYearAtMarienbadJpg1920 from './images/responsive/lastYearAtMarienbad-1920.jpg';
import vertigoWebp400 from './images/responsive/vertigo-400.webp';
import vertigoWebp640 from './images/responsive/vertigo-640.webp';
import vertigoWebp800 from './images/responsive/vertigo-800.webp';
import vertigoWebp1024 from './images/responsive/vertigo-1024.webp';
import vertigoWebp1200 from './images/responsive/vertigo-1200.webp';
import vertigoWebp1366 from './images/responsive/vertigo-1366.webp';
import vertigoWebp1600 from './images/responsive/vertigo-1600.webp';
import vertigoWebp1920 from './images/responsive/vertigo-1920.webp';
import vertigoJpg400 from './images/responsive/vertigo-400.jpg';
import vertigoJpg640 from './images/responsive/vertigo-640.jpg';
import vertigoJpg800 from './images/responsive/vertigo-800.jpg';
import vertigoJpg1024 from './images/responsive/vertigo-1024.jpg';
import vertigoJpg1200 from './images/responsive/vertigo-1200.jpg';
import vertigoJpg1366 from './images/responsive/vertigo-1366.jpg';
import vertigoJpg1600 from './images/responsive/vertigo-1600.jpg';
import vertigoJpg1920 from './images/responsive/vertigo-1920.jpg';
import womanInTheDunesWebp400 from './images/responsive/womanInTheDunes-400.webp';
import womanInTheDunesWebp640 from './images/responsive/womanInTheDunes-640.webp';
import womanInTheDunesWebp800 from './images/responsive/womanInTheDunes-800.webp';
import womanInTheDunesWebp1024 from './images/responsive/womanInTheDunes-1024.webp';
import womanInTheDunesWebp1200 from './images/responsive/womanInTheDunes-1200.webp';
import womanInTheDunesWebp1366 from './images/responsive/womanInTheDunes-1366.webp';
import womanInTheDunesWebp1600 from './images/responsive/womanInTheDunes-1600.webp';
import womanInTheDunesWebp1920 from './images/responsive/womanInTheDunes-1920.webp';
import womanInTheDunesJpg400 from './images/responsive/womanInTheDunes-400.jpg';
import womanInTheDunesJpg640 from './images/responsive/womanInTheDunes-640.jpg';
import womanInTheDunesJpg800 from './images/responsive/womanInTheDunes-800.jpg';
import womanInTheDunesJpg1024 from './images/responsive/womanInTheDunes-1024.jpg';
import womanInTheDunesJpg1200 from './images/responsive/womanInTheDunes-1200.jpg';
import womanInTheDunesJpg1366 from './images/responsive/womanInTheDunes-1366.jpg';
import womanInTheDunesJpg1600 from './images/responsive/womanInTheDunes-1600.jpg';
import womanInTheDunesJpg1920 from './images/responsive/womanInTheDunes-1920.jpg';
import mistressAmericaWebp400 from './images/responsive/mistressAmerica-400.webp';
import mistressAmericaWebp640 from './images/responsive/mistressAmerica-640.webp';
import mistressAmericaWebp800 from './images/responsive/mistressAmerica-800.webp';
import mistressAmericaWebp1024 from './images/responsive/mistressAmerica-1024.webp';
import mistressAmericaWebp1200 from './images/responsive/mistressAmerica-1200.webp';
import mistressAmericaWebp1366 from './images/responsive/mistressAmerica-1366.webp';
import mistressAmericaWebp1600 from './images/responsive/mistressAmerica-1600.webp';
import mistressAmericaWebp1920 from './images/responsive/mistressAmerica-1920.webp';
import mistressAmericaJpg400 from './images/responsive/mistressAmerica-400.jpg';
import mistressAmericaJpg640 from './images/responsive/mistressAmerica-640.jpg';
import mistressAmericaJpg800 from './images/responsive/mistressAmerica-800.jpg';
import mistressAmericaJpg1024 from './images/responsive/mistressAmerica-1024.jpg';
import mistressAmericaJpg1200 from './images/responsive/mistressAmerica-1200.jpg';
import mistressAmericaJpg1366 from './images/responsive/mistressAmerica-1366.jpg';
import mistressAmericaJpg1600 from './images/responsive/mistressAmerica-1600.jpg';
import mistressAmericaJpg1920 from './images/responsive/mistressAmerica-1920.jpg';
import margotAtTheWeddingWebp400 from './images/responsive/margotAtTheWedding-400.webp';
import margotAtTheWeddingWebp640 from './images/responsive/margotAtTheWedding-640.webp';
import margotAtTheWeddingWebp800 from './images/responsive/margotAtTheWedding-800.webp';
import margotAtTheWeddingWebp1024 from './images/responsive/margotAtTheWedding-1024.webp';
import margotAtTheWeddingWebp1200 from './images/responsive/margotAtTheWedding-1200.webp';
import margotAtTheWeddingWebp1366 from './images/responsive/margotAtTheWedding-1366.webp';
import margotAtTheWeddingWebp1600 from './images/responsive/margotAtTheWedding-1600.webp';
import margotAtTheWeddingWebp1920 from './images/responsive/margotAtTheWedding-1920.webp';
import margotAtTheWeddingJpg400 from './images/responsive/margotAtTheWedding-400.jpg';
import margotAtTheWeddingJpg640 from './images/responsive/margotAtTheWedding-640.jpg';
import margotAtTheWeddingJpg800 from './images/responsive/margotAtTheWedding-800.jpg';
import margotAtTheWeddingJpg1024 from './images/responsive/margotAtTheWedding-1024.jpg';
import margotAtTheWeddingJpg1200 from './images/responsive/margotAtTheWedding-1200.jpg';
import margotAtTheWeddingJpg1366 from './images/responsive/margotAtTheWedding-1366.jpg';
import margotAtTheWeddingJpg1600 from './images/responsive/margotAtTheWedding-1600.jpg';
import margotAtTheWeddingJpg1920 from './images/responsive/margotAtTheWedding-1920.jpg';
import greenbergWebp400 from './images/responsive/greenberg-400.webp';
import greenbergWebp640 from './images/responsive/greenberg-640.webp';
import greenbergWebp800 from './images/responsive/greenberg-800.webp';
import greenbergWebp1024 from './images/responsive/greenberg-1024.webp';
import greenbergWebp1200 from './images/responsive/greenberg-1200.webp';
import greenbergWebp1366 from './images/responsive/greenberg-1366.webp';
import greenbergWebp1600 from './images/responsive/greenberg-1600.webp';
import greenbergWebp1920 from './images/responsive/greenberg-1920.webp';
import greenbergJpg400 from './images/responsive/greenberg-400.jpg';
import greenbergJpg640 from './images/responsive/greenberg-640.jpg';
import greenbergJpg800 from './images/responsive/greenberg-800.jpg';
import greenbergJpg1024 from './images/responsive/greenberg-1024.jpg';
import greenbergJpg1200 from './images/responsive/greenberg-1200.jpg';
import greenbergJpg1366 from './images/responsive/greenberg-1366.jpg';
import greenbergJpg1600 from './images/responsive/greenberg-1600.jpg';
import greenbergJpg1920 from './images/responsive/greenberg-1920.jpg';
import whileWeWereYoungWebp400 from './images/responsive/whileWeWereYoung-400.webp';
import whileWeWereYoungWebp640 from './images/responsive/whileWeWereYoung-640.webp';
import whileWeWereYoungWebp800 from './images/responsive/whileWeWereYoung-800.webp';
import whileWeWereYoungWebp1024 from './images/responsive/whileWeWereYoung-1024.webp';
import whileWeWereYoungWebp1200 from './images/responsive/whileWeWereYoung-1200.webp';
import whileWeWereYoungWebp1366 from './images/responsive/whileWeWereYoung-1366.webp';
import whileWeWereYoungWebp1600 from './images/responsive/whileWeWereYoung-1600.webp';
import whileWeWereYoungWebp1920 from './images/responsive/whileWeWereYoung-1920.webp';
import whileWeWereYoungJpg400 from './images/responsive/whileWeWereYoung-400.jpg';
import whileWeWereYoungJpg640 from './images/responsive/whileWeWereYoung-640.jpg';
import whileWeWereYoungJpg800 from './images/responsive/whileWeWereYoung-800.jpg';
import whileWeWereYoungJpg1024 from './images/responsive/whileWeWereYoung-1024.jpg';
import whileWeWereYoungJpg1200 from './images/responsive/whileWeWereYoung-1200.jpg';
import whileWeWereYoungJpg1366 from './images/responsive/whileWeWereYoung-1366.jpg';
import whileWeWereYoungJpg1600 from './images/responsive/whileWeWereYoung-1600.jpg';
import whileWeWereYoungJpg1920 from './images/responsive/whileWeWereYoung-1920.jpg';
import theMeyerowitzStoriesWebp400 from './images/responsive/theMeyerowitzStories-400.webp';
import theMeyerowitzStoriesWebp640 from './images/responsive/theMeyerowitzStories-640.webp';
import theMeyerowitzStoriesWebp800 from './images/responsive/theMeyerowitzStories-800.webp';
import theMeyerowitzStoriesWebp1024 from './images/responsive/theMeyerowitzStories-1024.webp';
import theMeyerowitzStoriesWebp1200 from './images/responsive/theMeyerowitzStories-1200.webp';
import theMeyerowitzStoriesWebp1366 from './images/responsive/theMeyerowitzStories-1366.webp';
import theMeyerowitzStoriesWebp1600 from './images/responsive/theMeyerowitzStories-1600.webp';
import theMeyerowitzStoriesWebp1920 from './images/responsive/theMeyerowitzStories-1920.webp';
import theMeyerowitzStoriesJpg400 from './images/responsive/theMeyerowitzStories-400.jpg';
import theMeyerowitzStoriesJpg640 from './images/responsive/theMeyerowitzStories-640.jpg';
import theMeyerowitzStoriesJpg800 from './images/responsive/theMeyerowitzStories-800.jpg';
import theMeyerowitzStoriesJpg1024 from './images/responsive/theMeyerowitzStories-1024.jpg';
import theMeyerowitzStoriesJpg1200 from './images/responsive/theMeyerowitzStories-1200.jpg';
import theMeyerowitzStoriesJpg1366 from './images/responsive/theMeyerowitzStories-1366.jpg';
import theMeyerowitzStoriesJpg1600 from './images/responsive/theMeyerowitzStories-1600.jpg';
import theMeyerowitzStoriesJpg1920 from './images/responsive/theMeyerowitzStories-1920.jpg';
import francesHaWebp400 from './images/responsive/francesHa-400.webp';
import francesHaWebp640 from './images/responsive/francesHa-640.webp';
import francesHaWebp800 from './images/responsive/francesHa-800.webp';
import francesHaWebp1024 from './images/responsive/francesHa-1024.webp';
import francesHaWebp1200 from './images/responsive/francesHa-1200.webp';
import francesHaWebp1366 from './images/responsive/francesHa-1366.webp';
import francesHaWebp1600 from './images/responsive/francesHa-1600.webp';
import francesHaWebp1920 from './images/responsive/francesHa-1920.webp';
import francesHaJpg400 from './images/responsive/francesHa-400.jpg';
import francesHaJpg640 from './images/responsive/francesHa-640.jpg';
import francesHaJpg800 from './images/responsive/francesHa-800.jpg';
import francesHaJpg1024 from './images/responsive/francesHa-1024.jpg';
import francesHaJpg1200 from './images/responsive/francesHa-1200.jpg';
import francesHaJpg1366 from './images/responsive/francesHa-1366.jpg';
import francesHaJpg1600 from './images/responsive/francesHa-1600.jpg';
import francesHaJpg1920 from './images/responsive/francesHa-1920.jpg';
import kickingAndScreamingWebp400 from './images/responsive/kickingAndScreaming-400.webp';
import kickingAndScreamingWebp640 from './images/responsive/kickingAndScreaming-640.webp';
import kickingAndScreamingWebp800 from './images/responsive/kickingAndScreaming-800.webp';
import kickingAndScreamingWebp1024 from './images/responsive/kickingAndScreaming-1024.webp';
import kickingAndScreamingWebp1200 from './images/responsive/kickingAndScreaming-1200.webp';
import kickingAndScreamingWebp1366 from './images/responsive/kickingAndScreaming-1366.webp';
import kickingAndScreamingWebp1600 from './images/responsive/kickingAndScreaming-1600.webp';
import kickingAndScreamingWebp1920 from './images/responsive/kickingAndScreaming-1920.webp';
import kickingAndScreamingJpg400 from './images/responsive/kickingAndScreaming-400.jpg';
import kickingAndScreamingJpg640 from './images/responsive/kickingAndScreaming-640.jpg';
import kickingAndScreamingJpg800 from './images/responsive/kickingAndScreaming-800.jpg';
import kickingAndScreamingJpg1024 from './images/responsive/kickingAndScreaming-1024.jpg';
import kickingAndScreamingJpg1200 from './images/responsive/kickingAndScreaming-1200.jpg';
import kickingAndScreamingJpg1366 from './images/responsive/kickingAndScreaming-1366.jpg';
import kickingAndScreamingJpg1600 from './images/responsive/kickingAndScreaming-1600.jpg';
import kickingAndScreamingJpg1920 from './images/responsive/kickingAndScreaming-1920.jpg';
import apocalypseNowWebp400 from './images/responsive/apocalypseNow-400.webp';
import apocalypseNowWebp640 from './images/responsive/apocalypseNow-640.webp';
import apocalypseNowWebp800 from './images/responsive/apocalypseNow-800.webp';
import apocalypseNowWebp1024 from './images/responsive/apocalypseNow-1024.webp';
import apocalypseNowWebp1200 from './images/responsive/apocalypseNow-1200.webp';
import apocalypseNowWebp1366 from './images/responsive/apocalypseNow-1366.webp';
import apocalypseNowWebp1600 from './images/responsive/apocalypseNow-1600.webp';
import apocalypseNowWebp1920 from './images/responsive/apocalypseNow-1920.webp';
import apocalypseNowJpg400 from './images/responsive/apocalypseNow-400.jpg';
import apocalypseNowJpg640 from './images/responsive/apocalypseNow-640.jpg';
import apocalypseNowJpg800 from './images/responsive/apocalypseNow-800.jpg';
import apocalypseNowJpg1024 from './images/responsive/apocalypseNow-1024.jpg';
import apocalypseNowJpg1200 from './images/responsive/apocalypseNow-1200.jpg';
import apocalypseNowJpg1366 from './images/responsive/apocalypseNow-1366.jpg';
import apocalypseNowJpg1600 from './images/responsive/apocalypseNow-1600.jpg';
import apocalypseNowJpg1920 from './images/responsive/apocalypseNow-1920.jpg';
import theConversationWebp400 from './images/responsive/theConversation-400.webp';
import theConversationWebp640 from './images/responsive/theConversation-640.webp';
import theConversationWebp800 from './images/responsive/theConversation-800.webp';
import theConversationWebp1024 from './images/responsive/theConversation-1024.webp';
import theConversationWebp1200 from './images/responsive/theConversation-1200.webp';
import theConversationWebp1366 from './images/responsive/theConversation-1366.webp';
import theConversationWebp1600 from './images/responsive/theConversation-1600.webp';
import theConversationWebp1920 from './images/responsive/theConversation-1920.webp';
import theConversationJpg400 from './images/responsive/theConversation-400.jpg';
import theConversationJpg640 from './images/responsive/theConversation-640.jpg';
import theConversationJpg800 from './images/responsive/theConversation-800.jpg';
import theConversationJpg1024 from './images/responsive/theConversation-1024.jpg';
import theConversationJpg1200 from './images/responsive/theConversation-1200.jpg';
import theConversationJpg1366 from './images/responsive/theConversation-1366.jpg';
import theConversationJpg1600 from './images/responsive/theConversation-1600.jpg';
import theConversationJpg1920 from './images/responsive/theConversation-1920.jpg';
import pulpFictionWebp400 from './images/responsive/pulpFiction-400.webp';
import pulpFictionWebp640 from './images/responsive/pulpFiction-640.webp';
import pulpFictionWebp800 from './images/responsive/pulpFiction-800.webp';
import pulpFictionWebp1024 from './images/responsive/pulpFiction-1024.webp';
import pulpFictionWebp1200 from './images/responsive/pulpFiction-1200.webp';
import pulpFictionWebp1366 from './images/responsive/pulpFiction-1366.webp';
import pulpFictionWebp1600 from './images/responsive/pulpFiction-1600.webp';
import pulpFictionWebp1920 from './images/responsive/pulpFiction-1920.webp';
import pulpFictionJpg400 from './images/responsive/pulpFiction-400.jpg';
import pulpFictionJpg640 from './images/responsive/pulpFiction-640.jpg';
import pulpFictionJpg800 from './images/responsive/pulpFiction-800.jpg';
import pulpFictionJpg1024 from './images/responsive/pulpFiction-1024.jpg';
import pulpFictionJpg1200 from './images/responsive/pulpFiction-1200.jpg';
import pulpFictionJpg1366 from './images/responsive/pulpFiction-1366.jpg';
import pulpFictionJpg1600 from './images/responsive/pulpFiction-1600.jpg';
import pulpFictionJpg1920 from './images/responsive/pulpFiction-1920.jpg';
import parisTexasWebp400 from './images/responsive/parisTexas-400.webp';
import parisTexasWebp640 from './images/responsive/parisTexas-640.webp';
import parisTexasWebp800 from './images/responsive/parisTexas-800.webp';
import parisTexasWebp1024 from './images/responsive/parisTexas-1024.webp';
import parisTexasWebp1200 from './images/responsive/parisTexas-1200.webp';
import parisTexasWebp1366 from './images/responsive/parisTexas-1366.webp';
import parisTexasWebp1600 from './images/responsive/parisTexas-1600.webp';
import parisTexasWebp1920 from './images/responsive/parisTexas-1920.webp';
import parisTexasJpg400 from './images/responsive/parisTexas-400.jpg';
import parisTexasJpg640 from './images/responsive/parisTexas-640.jpg';
import parisTexasJpg800 from './images/responsive/parisTexas-800.jpg';
import parisTexasJpg1024 from './images/responsive/parisTexas-1024.jpg';
import parisTexasJpg1200 from './images/responsive/parisTexas-1200.jpg';
import parisTexasJpg1366 from './images/responsive/parisTexas-1366.jpg';
import parisTexasJpg1600 from './images/responsive/parisTexas-1600.jpg';
import parisTexasJpg1920 from './images/responsive/parisTexas-1920.jpg';
import missJulieWebp400 from './images/responsive/missJulie-400.webp';
import missJulieWebp640 from './images/responsive/missJulie-640.webp';
import missJulieWebp800 from './images/responsive/missJulie-800.webp';
import missJulieWebp1024 from './images/responsive/missJulie-1024.webp';
import missJulieWebp1200 from './images/responsive/missJulie-1200.webp';
import missJulieWebp1366 from './images/responsive/missJulie-1366.webp';
import missJulieWebp1600 from './images/responsive/missJulie-1600.webp';
import missJulieWebp1920 from './images/responsive/missJulie-1920.webp';
import missJulieJpg400 from './images/responsive/missJulie-400.jpg';
import missJulieJpg640 from './images/responsive/missJulie-640.jpg';
import missJulieJpg800 from './images/responsive/missJulie-800.jpg';
import missJulieJpg1024 from './images/responsive/missJulie-1024.jpg';
import missJulieJpg1200 from './images/responsive/missJulie-1200.jpg';
import missJulieJpg1366 from './images/responsive/missJulie-1366.jpg';
import missJulieJpg1600 from './images/responsive/missJulie-1600.jpg';
import missJulieJpg1920 from './images/responsive/missJulie-1920.jpg';
import taxiDriverWebp400 from './images/responsive/taxiDriver-400.webp';
import taxiDriverWebp640 from './images/responsive/taxiDriver-640.webp';
import taxiDriverWebp800 from './images/responsive/taxiDriver-800.webp';
import taxiDriverWebp1024 from './images/responsive/taxiDriver-1024.webp';
import taxiDriverWebp1200 from './images/responsive/taxiDriver-1200.webp';
import taxiDriverWebp1366 from './images/responsive/taxiDriver-1366.webp';
import taxiDriverWebp1600 from './images/responsive/taxiDriver-1600.webp';
import taxiDriverWebp1920 from './images/responsive/taxiDriver-1920.webp';
import taxiDriverJpg400 from './images/responsive/taxiDriver-400.jpg';
import taxiDriverJpg640 from './images/responsive/taxiDriver-640.jpg';
import taxiDriverJpg800 from './images/responsive/taxiDriver-800.jpg';
import taxiDriverJpg1024 from './images/responsive/taxiDriver-1024.jpg';
import taxiDriverJpg1200 from './images/responsive/taxiDriver-1200.jpg';
import taxiDriverJpg1366 from './images/responsive/taxiDriver-1366.jpg';
import taxiDriverJpg1600 from './images/responsive/taxiDriver-1600.jpg';
import taxiDriverJpg1920 from './images/responsive/taxiDriver-1920.jpg';
import newYorkNewYorkWebp400 from './images/responsive/newYorkNewYork-400.webp';
import newYorkNewYorkWebp640 from './images/responsive/newYorkNewYork-640.webp';
import newYorkNewYorkWebp800 from './images/responsive/newYorkNewYork-800.webp';
import newYorkNewYorkWebp1024 from './images/responsive/newYorkNewYork-1024.webp';
import newYorkNewYorkWebp1200 from './images/responsive/newYorkNewYork-1200.webp';
import newYorkNewYorkWebp1366 from './images/responsive/newYorkNewYork-1366.webp';
import newYorkNewYorkWebp1600 from './images/responsive/newYorkNewYork-1600.webp';
import newYorkNewYorkWebp1920 from './images/responsive/newYorkNewYork-1920.webp';
import newYorkNewYorkJpg400 from './images/responsive/newYorkNewYork-400.jpg';
import newYorkNewYorkJpg640 from './images/responsive/newYorkNewYork-640.jpg';
import newYorkNewYorkJpg800 from './images/responsive/newYorkNewYork-800.jpg';
import newYorkNewYorkJpg1024 from './images/responsive/newYorkNewYork-1024.jpg';
import newYorkNewYorkJpg1200 from './images/responsive/newYorkNewYork-1200.jpg';
import newYorkNewYorkJpg1366 from './images/responsive/newYorkNewYork-1366.jpg';
import newYorkNewYorkJpg1600 from './images/responsive/newYorkNewYork-1600.jpg';
import newYorkNewYorkJpg1920 from './images/responsive/newYorkNewYork-1920.jpg';
import dancerInTheDarkWebp400 from './images/responsive/dancerInTheDark-400.webp';
import dancerInTheDarkWebp640 from './images/responsive/dancerInTheDark-640.webp';
import dancerInTheDarkWebp800 from './images/responsive/dancerInTheDark-800.webp';
import dancerInTheDarkWebp1024 from './images/responsive/dancerInTheDark-1024.webp';
import dancerInTheDarkWebp1200 from './images/responsive/dancerInTheDark-1200.webp';
import dancerInTheDarkWebp1366 from './images/responsive/dancerInTheDark-1366.webp';
import dancerInTheDarkWebp1600 from './images/responsive/dancerInTheDark-1600.webp';
import dancerInTheDarkWebp1920 from './images/responsive/dancerInTheDark-1920.webp';
import dancerInTheDarkJpg400 from './images/responsive/dancerInTheDark-400.jpg';
import dancerInTheDarkJpg640 from './images/responsive/dancerInTheDark-640.jpg';
import dancerInTheDarkJpg800 from './images/responsive/dancerInTheDark-800.jpg';
import dancerInTheDarkJpg1024 from './images/responsive/dancerInTheDark-1024.jpg';
import dancerInTheDarkJpg1200 from './images/responsive/dancerInTheDark-1200.jpg';
import dancerInTheDarkJpg1366 from './images/responsive/dancerInTheDark-1366.jpg';
import dancerInTheDarkJpg1600 from './images/responsive/dancerInTheDark-1600.jpg';
import dancerInTheDarkJpg1920 from './images/responsive/dancerInTheDark-1920.jpg';
import kingOfComedyWebp400 from './images/responsive/kingOfComedy-400.webp';
import kingOfComedyWebp640 from './images/responsive/kingOfComedy-640.webp';
import kingOfComedyWebp800 from './images/responsive/kingOfComedy-800.webp';
import kingOfComedyWebp1024 from './images/responsive/kingOfComedy-1024.webp';
import kingOfComedyWebp1200 from './images/responsive/kingOfComedy-1200.webp';
import kingOfComedyWebp1366 from './images/responsive/kingOfComedy-1366.webp';
import kingOfComedyWebp1600 from './images/responsive/kingOfComedy-1600.webp';
import kingOfComedyWebp1920 from './images/responsive/kingOfComedy-1920.webp';
import kingOfComedyJpg400 from './images/responsive/kingOfComedy-400.jpg';
import kingOfComedyJpg640 from './images/responsive/kingOfComedy-640.jpg';
import kingOfComedyJpg800 from './images/responsive/kingOfComedy-800.jpg';
import kingOfComedyJpg1024 from './images/responsive/kingOfComedy-1024.jpg';
import kingOfComedyJpg1200 from './images/responsive/kingOfComedy-1200.jpg';
import kingOfComedyJpg1366 from './images/responsive/kingOfComedy-1366.jpg';
import kingOfComedyJpg1600 from './images/responsive/kingOfComedy-1600.jpg';
import kingOfComedyJpg1920 from './images/responsive/kingOfComedy-1920.jpg';
import ifEllipsisWebp400 from './images/responsive/ifEllipsis-400.webp';
import ifEllipsisWebp640 from './images/responsive/ifEllipsis-640.webp';
import ifEllipsisWebp800 from './images/responsive/ifEllipsis-800.webp';
import ifEllipsisWebp1024 from './images/responsive/ifEllipsis-1024.webp';
import ifEllipsisWebp1200 from './images/responsive/ifEllipsis-1200.webp';
import ifEllipsisWebp1366 from './images/responsive/ifEllipsis-1366.webp';
import ifEllipsisWebp1600 from './images/responsive/ifEllipsis-1600.webp';
import ifEllipsisWebp1920 from './images/responsive/ifEllipsis-1920.webp';
import ifEllipsisJpg400 from './images/responsive/ifEllipsis-400.jpg';
import ifEllipsisJpg640 from './images/responsive/ifEllipsis-640.jpg';
import ifEllipsisJpg800 from './images/responsive/ifEllipsis-800.jpg';
import ifEllipsisJpg1024 from './images/responsive/ifEllipsis-1024.jpg';
import ifEllipsisJpg1200 from './images/responsive/ifEllipsis-1200.jpg';
import ifEllipsisJpg1366 from './images/responsive/ifEllipsis-1366.jpg';
import ifEllipsisJpg1600 from './images/responsive/ifEllipsis-1600.jpg';
import ifEllipsisJpg1920 from './images/responsive/ifEllipsis-1920.jpg';
import meanStreetsWebp400 from './images/responsive/meanStreets-400.webp';
import meanStreetsWebp640 from './images/responsive/meanStreets-640.webp';
import meanStreetsWebp800 from './images/responsive/meanStreets-800.webp';
import meanStreetsWebp1024 from './images/responsive/meanStreets-1024.webp';
import meanStreetsWebp1200 from './images/responsive/meanStreets-1200.webp';
import meanStreetsWebp1366 from './images/responsive/meanStreets-1366.webp';
import meanStreetsWebp1600 from './images/responsive/meanStreets-1600.webp';
import meanStreetsWebp1920 from './images/responsive/meanStreets-1920.webp';
import meanStreetsJpg400 from './images/responsive/meanStreets-400.jpg';
import meanStreetsJpg640 from './images/responsive/meanStreets-640.jpg';
import meanStreetsJpg800 from './images/responsive/meanStreets-800.jpg';
import meanStreetsJpg1024 from './images/responsive/meanStreets-1024.jpg';
import meanStreetsJpg1200 from './images/responsive/meanStreets-1200.jpg';
import meanStreetsJpg1366 from './images/responsive/meanStreets-1366.jpg';
import meanStreetsJpg1600 from './images/responsive/meanStreets-1600.jpg';
import meanStreetsJpg1920 from './images/responsive/meanStreets-1920.jpg';
import casinoWebp400 from './images/responsive/casino-400.webp';
import casinoWebp640 from './images/responsive/casino-640.webp';
import casinoWebp800 from './images/responsive/casino-800.webp';
import casinoWebp1024 from './images/responsive/casino-1024.webp';
import casinoWebp1200 from './images/responsive/casino-1200.webp';
import casinoWebp1366 from './images/responsive/casino-1366.webp';
import casinoWebp1600 from './images/responsive/casino-1600.webp';
import casinoWebp1920 from './images/responsive/casino-1920.webp';
import casinoJpg400 from './images/responsive/casino-400.jpg';
import casinoJpg640 from './images/responsive/casino-640.jpg';
import casinoJpg800 from './images/responsive/casino-800.jpg';
import casinoJpg1024 from './images/responsive/casino-1024.jpg';
import casinoJpg1200 from './images/responsive/casino-1200.jpg';
import casinoJpg1366 from './images/responsive/casino-1366.jpg';
import casinoJpg1600 from './images/responsive/casino-1600.jpg';
import casinoJpg1920 from './images/responsive/casino-1920.jpg';
import wagesOfFearWebp400 from './images/responsive/wagesOfFear-400.webp';
import wagesOfFearWebp640 from './images/responsive/wagesOfFear-640.webp';
import wagesOfFearWebp800 from './images/responsive/wagesOfFear-800.webp';
import wagesOfFearWebp1024 from './images/responsive/wagesOfFear-1024.webp';
import wagesOfFearWebp1200 from './images/responsive/wagesOfFear-1200.webp';
import wagesOfFearWebp1366 from './images/responsive/wagesOfFear-1366.webp';
import wagesOfFearWebp1600 from './images/responsive/wagesOfFear-1600.webp';
import wagesOfFearWebp1920 from './images/responsive/wagesOfFear-1920.webp';
import wagesOfFearJpg400 from './images/responsive/wagesOfFear-400.jpg';
import wagesOfFearJpg640 from './images/responsive/wagesOfFear-640.jpg';
import wagesOfFearJpg800 from './images/responsive/wagesOfFear-800.jpg';
import wagesOfFearJpg1024 from './images/responsive/wagesOfFear-1024.jpg';
import wagesOfFearJpg1200 from './images/responsive/wagesOfFear-1200.jpg';
import wagesOfFearJpg1366 from './images/responsive/wagesOfFear-1366.jpg';
import wagesOfFearJpg1600 from './images/responsive/wagesOfFear-1600.jpg';
import wagesOfFearJpg1920 from './images/responsive/wagesOfFear-1920.jpg';
import goodfellasWebp400 from './images/responsive/goodfellas-400.webp';
import goodfellasWebp640 from './images/responsive/goodfellas-640.webp';
import goodfellasWebp800 from './images/responsive/goodfellas-800.webp';
import goodfellasWebp1024 from './images/responsive/goodfellas-1024.webp';
import goodfellasWebp1200 from './images/responsive/goodfellas-1200.webp';
import goodfellasWebp1366 from './images/responsive/goodfellas-1366.webp';
import goodfellasWebp1600 from './images/responsive/goodfellas-1600.webp';
import goodfellasWebp1920 from './images/responsive/goodfellas-1920.webp';
import goodfellasJpg400 from './images/responsive/goodfellas-400.jpg';
import goodfellasJpg640 from './images/responsive/goodfellas-640.jpg';
import goodfellasJpg800 from './images/responsive/goodfellas-800.jpg';
import goodfellasJpg1024 from './images/responsive/goodfellas-1024.jpg';
import goodfellasJpg1200 from './images/responsive/goodfellas-1200.jpg';
import goodfellasJpg1366 from './images/responsive/goodfellas-1366.jpg';
import goodfellasJpg1600 from './images/responsive/goodfellas-1600.jpg';
import goodfellasJpg1920 from './images/responsive/goodfellas-1920.jpg';
import allThatJazzWebp400 from './images/responsive/allThatJazz-400.webp';
import allThatJazzWebp640 from './images/responsive/allThatJazz-640.webp';
import allThatJazzWebp800 from './images/responsive/allThatJazz-800.webp';
import allThatJazzWebp1024 from './images/responsive/allThatJazz-1024.webp';
import allThatJazzWebp1200 from './images/responsive/allThatJazz-1200.webp';
import allThatJazzWebp1366 from './images/responsive/allThatJazz-1366.webp';
import allThatJazzWebp1600 from './images/responsive/allThatJazz-1600.webp';
import allThatJazzWebp1920 from './images/responsive/allThatJazz-1920.webp';
import allThatJazzJpg400 from './images/responsive/allThatJazz-400.jpg';
import allThatJazzJpg640 from './images/responsive/allThatJazz-640.jpg';
import allThatJazzJpg800 from './images/responsive/allThatJazz-800.jpg';
import allThatJazzJpg1024 from './images/responsive/allThatJazz-1024.jpg';
import allThatJazzJpg1200 from './images/responsive/allThatJazz-1200.jpg';
import allThatJazzJpg1366 from './images/responsive/allThatJazz-1366.jpg';
import allThatJazzJpg1600 from './images/responsive/allThatJazz-1600.jpg';
import allThatJazzJpg1920 from './images/responsive/allThatJazz-1920.jpg';
import kagemushaWebp400 from './images/responsive/kagemusha-400.webp';
import kagemushaWebp640 from './images/responsive/kagemusha-640.webp';
import kagemushaWebp800 from './images/responsive/kagemusha-800.webp';
import kagemushaWebp1024 from './images/responsive/kagemusha-1024.webp';
import kagemushaWebp1200 from './images/responsive/kagemusha-1200.webp';
import kagemushaWebp1366 from './images/responsive/kagemusha-1366.webp';
import kagemushaWebp1600 from './images/responsive/kagemusha-1600.webp';
import kagemushaWebp1920 from './images/responsive/kagemusha-1920.webp';
import kagemushaJpg400 from './images/responsive/kagemusha-400.jpg';
import kagemushaJpg640 from './images/responsive/kagemusha-640.jpg';
import kagemushaJpg800 from './images/responsive/kagemusha-800.jpg';
import kagemushaJpg1024 from './images/responsive/kagemusha-1024.jpg';
import kagemushaJpg1200 from './images/responsive/kagemusha-1200.jpg';
import kagemushaJpg1366 from './images/responsive/kagemusha-1366.jpg';
import kagemushaJpg1600 from './images/responsive/kagemusha-1600.jpg';
import kagemushaJpg1920 from './images/responsive/kagemusha-1920.jpg';
import thereWillBeBloodWebp400 from './images/responsive/thereWillBeBlood-400.webp';
import thereWillBeBloodWebp640 from './images/responsive/thereWillBeBlood-640.webp';
import thereWillBeBloodWebp800 from './images/responsive/thereWillBeBlood-800.webp';
import thereWillBeBloodWebp1024 from './images/responsive/thereWillBeBlood-1024.webp';
import thereWillBeBloodWebp1200 from './images/responsive/thereWillBeBlood-1200.webp';
import thereWillBeBloodWebp1366 from './images/responsive/thereWillBeBlood-1366.webp';
import thereWillBeBloodWebp1600 from './images/responsive/thereWillBeBlood-1600.webp';
import thereWillBeBloodWebp1920 from './images/responsive/thereWillBeBlood-1920.webp';
import thereWillBeBloodJpg400 from './images/responsive/thereWillBeBlood-400.jpg';
import thereWillBeBloodJpg640 from './images/responsive/thereWillBeBlood-640.jpg';
import thereWillBeBloodJpg800 from './images/responsive/thereWillBeBlood-800.jpg';
import thereWillBeBloodJpg1024 from './images/responsive/thereWillBeBlood-1024.jpg';
import thereWillBeBloodJpg1200 from './images/responsive/thereWillBeBlood-1200.jpg';
import thereWillBeBloodJpg1366 from './images/responsive/thereWillBeBlood-1366.jpg';
import thereWillBeBloodJpg1600 from './images/responsive/thereWillBeBlood-1600.jpg';
import thereWillBeBloodJpg1920 from './images/responsive/thereWillBeBlood-1920.jpg';
import fishTankWebp400 from './images/responsive/fishTank-400.webp';
import fishTankWebp640 from './images/responsive/fishTank-640.webp';
import fishTankWebp800 from './images/responsive/fishTank-800.webp';
import fishTankWebp1024 from './images/responsive/fishTank-1024.webp';
import fishTankWebp1200 from './images/responsive/fishTank-1200.webp';
import fishTankWebp1366 from './images/responsive/fishTank-1366.webp';
import fishTankWebp1600 from './images/responsive/fishTank-1600.webp';
import fishTankWebp1920 from './images/responsive/fishTank-1920.webp';
import fishTankJpg400 from './images/responsive/fishTank-400.jpg';
import fishTankJpg640 from './images/responsive/fishTank-640.jpg';
import fishTankJpg800 from './images/responsive/fishTank-800.jpg';
import fishTankJpg1024 from './images/responsive/fishTank-1024.jpg';
import fishTankJpg1200 from './images/responsive/fishTank-1200.jpg';
import fishTankJpg1366 from './images/responsive/fishTank-1366.jpg';
import fishTankJpg1600 from './images/responsive/fishTank-1600.jpg';
import fishTankJpg1920 from './images/responsive/fishTank-1920.jpg';
import magnoliaWebp400 from './images/responsive/magnolia-400.webp';
import magnoliaWebp640 from './images/responsive/magnolia-640.webp';
import magnoliaWebp800 from './images/responsive/magnolia-800.webp';
import magnoliaWebp1024 from './images/responsive/magnolia-1024.webp';
import magnoliaWebp1200 from './images/responsive/magnolia-1200.webp';
import magnoliaWebp1366 from './images/responsive/magnolia-1366.webp';
import magnoliaWebp1600 from './images/responsive/magnolia-1600.webp';
import magnoliaWebp1920 from './images/responsive/magnolia-1920.webp';
import magnoliaJpg400 from './images/responsive/magnolia-400.jpg';
import magnoliaJpg640 from './images/responsive/magnolia-640.jpg';
import magnoliaJpg800 from './images/responsive/magnolia-800.jpg';
import magnoliaJpg1024 from './images/responsive/magnolia-1024.jpg';
import magnoliaJpg1200 from './images/responsive/magnolia-1200.jpg';
import magnoliaJpg1366 from './images/responsive/magnolia-1366.jpg';
import magnoliaJpg1600 from './images/responsive/magnolia-1600.jpg';
import magnoliaJpg1920 from './images/responsive/magnolia-1920.jpg';
import onceUponATimeInAmericaWebp400 from './images/responsive/onceUponATimeInAmerica-400.webp';
import onceUponATimeInAmericaWebp640 from './images/responsive/onceUponATimeInAmerica-640.webp';
import onceUponATimeInAmericaWebp800 from './images/responsive/onceUponATimeInAmerica-800.webp';
import onceUponATimeInAmericaWebp1024 from './images/responsive/onceUponATimeInAmerica-1024.webp';
import onceUponATimeInAmericaWebp1200 from './images/responsive/onceUponATimeInAmerica-1200.webp';
import onceUponATimeInAmericaWebp1366 from './images/responsive/onceUponATimeInAmerica-1366.webp';
import onceUponATimeInAmericaWebp1600 from './images/responsive/onceUponATimeInAmerica-1600.webp';
import onceUponATimeInAmericaWebp1920 from './images/responsive/onceUponATimeInAmerica-1920.webp';
import onceUponATimeInAmericaJpg400 from './images/responsive/onceUponATimeInAmerica-400.jpg';
import onceUponATimeInAmericaJpg640 from './images/responsive/onceUponATimeInAmerica-640.jpg';
import onceUponATimeInAmericaJpg800 from './images/responsive/onceUponATimeInAmerica-800.jpg';
import onceUponATimeInAmericaJpg1024 from './images/responsive/onceUponATimeInAmerica-1024.jpg';
import onceUponATimeInAmericaJpg1200 from './images/responsive/onceUponATimeInAmerica-1200.jpg';
import onceUponATimeInAmericaJpg1366 from './images/responsive/onceUponATimeInAmerica-1366.jpg';
import onceUponATimeInAmericaJpg1600 from './images/responsive/onceUponATimeInAmerica-1600.jpg';
import onceUponATimeInAmericaJpg1920 from './images/responsive/onceUponATimeInAmerica-1920.jpg';
import brokenEmbracesWebp400 from './images/responsive/brokenEmbraces-400.webp';
import brokenEmbracesWebp640 from './images/responsive/brokenEmbraces-640.webp';
import brokenEmbracesWebp800 from './images/responsive/brokenEmbraces-800.webp';
import brokenEmbracesWebp1024 from './images/responsive/brokenEmbraces-1024.webp';
import brokenEmbracesWebp1200 from './images/responsive/brokenEmbraces-1200.webp';
import brokenEmbracesWebp1366 from './images/responsive/brokenEmbraces-1366.webp';
import brokenEmbracesWebp1600 from './images/responsive/brokenEmbraces-1600.webp';
import brokenEmbracesWebp1920 from './images/responsive/brokenEmbraces-1920.webp';
import brokenEmbracesJpg400 from './images/responsive/brokenEmbraces-400.jpg';
import brokenEmbracesJpg640 from './images/responsive/brokenEmbraces-640.jpg';
import brokenEmbracesJpg800 from './images/responsive/brokenEmbraces-800.jpg';
import brokenEmbracesJpg1024 from './images/responsive/brokenEmbraces-1024.jpg';
import brokenEmbracesJpg1200 from './images/responsive/brokenEmbraces-1200.jpg';
import brokenEmbracesJpg1366 from './images/responsive/brokenEmbraces-1366.jpg';
import brokenEmbracesJpg1600 from './images/responsive/brokenEmbraces-1600.jpg';
import brokenEmbracesJpg1920 from './images/responsive/brokenEmbraces-1920.jpg';
import bottleRocketWebp400 from './images/responsive/bottleRocket-400.webp';
import bottleRocketWebp640 from './images/responsive/bottleRocket-640.webp';
import bottleRocketWebp800 from './images/responsive/bottleRocket-800.webp';
import bottleRocketWebp1024 from './images/responsive/bottleRocket-1024.webp';
import bottleRocketWebp1200 from './images/responsive/bottleRocket-1200.webp';
import bottleRocketWebp1366 from './images/responsive/bottleRocket-1366.webp';
import bottleRocketWebp1600 from './images/responsive/bottleRocket-1600.webp';
import bottleRocketWebp1920 from './images/responsive/bottleRocket-1920.webp';
import bottleRocketJpg400 from './images/responsive/bottleRocket-400.jpg';
import bottleRocketJpg640 from './images/responsive/bottleRocket-640.jpg';
import bottleRocketJpg800 from './images/responsive/bottleRocket-800.jpg';
import bottleRocketJpg1024 from './images/responsive/bottleRocket-1024.jpg';
import bottleRocketJpg1200 from './images/responsive/bottleRocket-1200.jpg';
import bottleRocketJpg1366 from './images/responsive/bottleRocket-1366.jpg';
import bottleRocketJpg1600 from './images/responsive/bottleRocket-1600.jpg';
import bottleRocketJpg1920 from './images/responsive/bottleRocket-1920.jpg';
import jackieBrownWebp400 from './images/responsive/jackieBrown-400.webp';
import jackieBrownWebp640 from './images/responsive/jackieBrown-640.webp';
import jackieBrownWebp800 from './images/responsive/jackieBrown-800.webp';
import jackieBrownWebp1024 from './images/responsive/jackieBrown-1024.webp';
import jackieBrownWebp1200 from './images/responsive/jackieBrown-1200.webp';
import jackieBrownWebp1366 from './images/responsive/jackieBrown-1366.webp';
import jackieBrownWebp1600 from './images/responsive/jackieBrown-1600.webp';
import jackieBrownWebp1920 from './images/responsive/jackieBrown-1920.webp';
import jackieBrownJpg400 from './images/responsive/jackieBrown-400.jpg';
import jackieBrownJpg640 from './images/responsive/jackieBrown-640.jpg';
import jackieBrownJpg800 from './images/responsive/jackieBrown-800.jpg';
import jackieBrownJpg1024 from './images/responsive/jackieBrown-1024.jpg';
import jackieBrownJpg1200 from './images/responsive/jackieBrown-1200.jpg';
import jackieBrownJpg1366 from './images/responsive/jackieBrown-1366.jpg';
import jackieBrownJpg1600 from './images/responsive/jackieBrown-1600.jpg';
import jackieBrownJpg1920 from './images/responsive/jackieBrown-1920.jpg';
import murmurOfTheHeartPosterWebp400 from './images/responsive/murmurOfTheHeartPoster-400.webp';
import murmurOfTheHeartPosterWebp640 from './images/responsive/murmurOfTheHeartPoster-640.webp';
import murmurOfTheHeartPosterWebp800 from './images/responsive/murmurOfTheHeartPoster-800.webp';
import murmurOfTheHeartPosterWebp1024 from './images/responsive/murmurOfTheHeartPoster-1024.webp';
import murmurOfTheHeartPosterWebp1200 from './images/responsive/murmurOfTheHeartPoster-1200.webp';
import murmurOfTheHeartPosterWebp1366 from './images/responsive/murmurOfTheHeartPoster-1366.webp';
import murmurOfTheHeartPosterWebp1600 from './images/responsive/murmurOfTheHeartPoster-1600.webp';
import murmurOfTheHeartPosterWebp1920 from './images/responsive/murmurOfTheHeartPoster-1920.webp';
import murmurOfTheHeartPosterJpg400 from './images/responsive/murmurOfTheHeartPoster-400.jpg';
import murmurOfTheHeartPosterJpg640 from './images/responsive/murmurOfTheHeartPoster-640.jpg';
import murmurOfTheHeartPosterJpg800 from './images/responsive/murmurOfTheHeartPoster-800.jpg';
import murmurOfTheHeartPosterJpg1024 from './images/responsive/murmurOfTheHeartPoster-1024.jpg';
import murmurOfTheHeartPosterJpg1200 from './images/responsive/murmurOfTheHeartPoster-1200.jpg';
import murmurOfTheHeartPosterJpg1366 from './images/responsive/murmurOfTheHeartPoster-1366.jpg';
import murmurOfTheHeartPosterJpg1600 from './images/responsive/murmurOfTheHeartPoster-1600.jpg';
import murmurOfTheHeartPosterJpg1920 from './images/responsive/murmurOfTheHeartPoster-1920.jpg';
import eightHalfPosterWebp400 from './images/responsive/eightHalfPoster-400.webp';
import eightHalfPosterWebp640 from './images/responsive/eightHalfPoster-640.webp';
import eightHalfPosterWebp800 from './images/responsive/eightHalfPoster-800.webp';
import eightHalfPosterWebp1024 from './images/responsive/eightHalfPoster-1024.webp';
import eightHalfPosterWebp1200 from './images/responsive/eightHalfPoster-1200.webp';
import eightHalfPosterWebp1366 from './images/responsive/eightHalfPoster-1366.webp';
import eightHalfPosterWebp1600 from './images/responsive/eightHalfPoster-1600.webp';
import eightHalfPosterWebp1920 from './images/responsive/eightHalfPoster-1920.webp';
import eightHalfPosterJpg400 from './images/responsive/eightHalfPoster-400.jpg';
import eightHalfPosterJpg640 from './images/responsive/eightHalfPoster-640.jpg';
import eightHalfPosterJpg800 from './images/responsive/eightHalfPoster-800.jpg';
import eightHalfPosterJpg1024 from './images/responsive/eightHalfPoster-1024.jpg';
import eightHalfPosterJpg1200 from './images/responsive/eightHalfPoster-1200.jpg';
import eightHalfPosterJpg1366 from './images/responsive/eightHalfPoster-1366.jpg';
import eightHalfPosterJpg1600 from './images/responsive/eightHalfPoster-1600.jpg';
import eightHalfPosterJpg1920 from './images/responsive/eightHalfPoster-1920.jpg';
import noahBaumbachWebp400 from './images/responsive/noahBaumbach-400.webp';
import noahBaumbachWebp640 from './images/responsive/noahBaumbach-640.webp';
import noahBaumbachWebp800 from './images/responsive/noahBaumbach-800.webp';
import noahBaumbachWebp1024 from './images/responsive/noahBaumbach-1024.webp';
import noahBaumbachWebp1200 from './images/responsive/noahBaumbach-1200.webp';
import noahBaumbachWebp1366 from './images/responsive/noahBaumbach-1366.webp';
import noahBaumbachWebp1600 from './images/responsive/noahBaumbach-1600.webp';
import noahBaumbachWebp1920 from './images/responsive/noahBaumbach-1920.webp';
import noahBaumbachJpg400 from './images/responsive/noahBaumbach-400.jpg';
import noahBaumbachJpg640 from './images/responsive/noahBaumbach-640.jpg';
import noahBaumbachJpg800 from './images/responsive/noahBaumbach-800.jpg';
import noahBaumbachJpg1024 from './images/responsive/noahBaumbach-1024.jpg';
import noahBaumbachJpg1200 from './images/responsive/noahBaumbach-1200.jpg';
import noahBaumbachJpg1366 from './images/responsive/noahBaumbach-1366.jpg';
import noahBaumbachJpg1600 from './images/responsive/noahBaumbach-1600.jpg';
import noahBaumbachJpg1920 from './images/responsive/noahBaumbach-1920.jpg';
import apocalypseNowPosterWebp400 from './images/responsive/apocalypseNowPoster-400.webp';
import apocalypseNowPosterWebp640 from './images/responsive/apocalypseNowPoster-640.webp';
import apocalypseNowPosterWebp800 from './images/responsive/apocalypseNowPoster-800.webp';
import apocalypseNowPosterWebp1024 from './images/responsive/apocalypseNowPoster-1024.webp';
import apocalypseNowPosterWebp1200 from './images/responsive/apocalypseNowPoster-1200.webp';
import apocalypseNowPosterWebp1366 from './images/responsive/apocalypseNowPoster-1366.webp';
import apocalypseNowPosterWebp1600 from './images/responsive/apocalypseNowPoster-1600.webp';
import apocalypseNowPosterWebp1920 from './images/responsive/apocalypseNowPoster-1920.webp';
import apocalypseNowPosterJpg400 from './images/responsive/apocalypseNowPoster-400.jpg';
import apocalypseNowPosterJpg640 from './images/responsive/apocalypseNowPoster-640.jpg';
import apocalypseNowPosterJpg800 from './images/responsive/apocalypseNowPoster-800.jpg';
import apocalypseNowPosterJpg1024 from './images/responsive/apocalypseNowPoster-1024.jpg';
import apocalypseNowPosterJpg1200 from './images/responsive/apocalypseNowPoster-1200.jpg';
import apocalypseNowPosterJpg1366 from './images/responsive/apocalypseNowPoster-1366.jpg';
import apocalypseNowPosterJpg1600 from './images/responsive/apocalypseNowPoster-1600.jpg';
import apocalypseNowPosterJpg1920 from './images/responsive/apocalypseNowPoster-1920.jpg';
import fishTankPosterWebp400 from './images/responsive/fishTankPoster-400.webp';
import fishTankPosterWebp640 from './images/responsive/fishTankPoster-640.webp';
import fishTankPosterWebp800 from './images/responsive/fishTankPoster-800.webp';
import fishTankPosterWebp1024 from './images/responsive/fishTankPoster-1024.webp';
import fishTankPosterWebp1200 from './images/responsive/fishTankPoster-1200.webp';
import fishTankPosterWebp1366 from './images/responsive/fishTankPoster-1366.webp';
import fishTankPosterWebp1600 from './images/responsive/fishTankPoster-1600.webp';
import fishTankPosterWebp1920 from './images/responsive/fishTankPoster-1920.webp';
import fishTankPosterJpg400 from './images/responsive/fishTankPoster-400.jpg';
import fishTankPosterJpg640 from './images/responsive/fishTankPoster-640.jpg';
import fishTankPosterJpg800 from './images/responsive/fishTankPoster-800.jpg';
import fishTankPosterJpg1024 from './images/responsive/fishTankPoster-1024.jpg';
import fishTankPosterJpg1200 from './images/responsive/fishTankPoster-1200.jpg';
import fishTankPosterJpg1366 from './images/responsive/fishTankPoster-1366.jpg';
import fishTankPosterJpg1600 from './images/responsive/fishTankPoster-1600.jpg';
import fishTankPosterJpg1920 from './images/responsive/fishTankPoster-1920.jpg';
import scorseseDeNiroWebp400 from './images/responsive/scorseseDeNiro-400.webp';
import scorseseDeNiroWebp640 from './images/responsive/scorseseDeNiro-640.webp';
import scorseseDeNiroWebp800 from './images/responsive/scorseseDeNiro-800.webp';
import scorseseDeNiroWebp1024 from './images/responsive/scorseseDeNiro-1024.webp';
import scorseseDeNiroWebp1200 from './images/responsive/scorseseDeNiro-1200.webp';
import scorseseDeNiroWebp1366 from './images/responsive/scorseseDeNiro-1366.webp';
import scorseseDeNiroWebp1600 from './images/responsive/scorseseDeNiro-1600.webp';
import scorseseDeNiroWebp1920 from './images/responsive/scorseseDeNiro-1920.webp';
import scorseseDeNiroJpg400 from './images/responsive/scorseseDeNiro-400.jpg';
import scorseseDeNiroJpg640 from './images/responsive/scorseseDeNiro-640.jpg';
import scorseseDeNiroJpg800 from './images/responsive/scorseseDeNiro-800.jpg';
import scorseseDeNiroJpg1024 from './images/responsive/scorseseDeNiro-1024.jpg';
import scorseseDeNiroJpg1200 from './images/responsive/scorseseDeNiro-1200.jpg';
import scorseseDeNiroJpg1366 from './images/responsive/scorseseDeNiro-1366.jpg';
import scorseseDeNiroJpg1600 from './images/responsive/scorseseDeNiro-1600.jpg';
import scorseseDeNiroJpg1920 from './images/responsive/scorseseDeNiro-1920.jpg';
import annieHallPosterWebp400 from './images/responsive/annieHallPoster-400.webp';
import annieHallPosterWebp640 from './images/responsive/annieHallPoster-640.webp';
import annieHallPosterWebp800 from './images/responsive/annieHallPoster-800.webp';
import annieHallPosterWebp1024 from './images/responsive/annieHallPoster-1024.webp';
import annieHallPosterWebp1200 from './images/responsive/annieHallPoster-1200.webp';
import annieHallPosterWebp1366 from './images/responsive/annieHallPoster-1366.webp';
import annieHallPosterWebp1600 from './images/responsive/annieHallPoster-1600.webp';
import annieHallPosterWebp1920 from './images/responsive/annieHallPoster-1920.webp';
import annieHallPosterJpg400 from './images/responsive/annieHallPoster-400.jpg';
import annieHallPosterJpg640 from './images/responsive/annieHallPoster-640.jpg';
import annieHallPosterJpg800 from './images/responsive/annieHallPoster-800.jpg';
import annieHallPosterJpg1024 from './images/responsive/annieHallPoster-1024.jpg';
import annieHallPosterJpg1200 from './images/responsive/annieHallPoster-1200.jpg';
import annieHallPosterJpg1366 from './images/responsive/annieHallPoster-1366.jpg';
import annieHallPosterJpg1600 from './images/responsive/annieHallPoster-1600.jpg';
import annieHallPosterJpg1920 from './images/responsive/annieHallPoster-1920.jpg';
import somethingWeirdIsGoingOnWebp400 from './images/responsive/somethingWeirdIsGoingOn-400.webp';
import somethingWeirdIsGoingOnWebp640 from './images/responsive/somethingWeirdIsGoingOn-640.webp';
import somethingWeirdIsGoingOnWebp800 from './images/responsive/somethingWeirdIsGoingOn-800.webp';
import somethingWeirdIsGoingOnWebp1024 from './images/responsive/somethingWeirdIsGoingOn-1024.webp';
import somethingWeirdIsGoingOnWebp1200 from './images/responsive/somethingWeirdIsGoingOn-1200.webp';
import somethingWeirdIsGoingOnWebp1366 from './images/responsive/somethingWeirdIsGoingOn-1366.webp';
import somethingWeirdIsGoingOnWebp1600 from './images/responsive/somethingWeirdIsGoingOn-1600.webp';
import somethingWeirdIsGoingOnWebp1920 from './images/responsive/somethingWeirdIsGoingOn-1920.webp';
import somethingWeirdIsGoingOnJpg400 from './images/responsive/somethingWeirdIsGoingOn-400.jpg';
import somethingWeirdIsGoingOnJpg640 from './images/responsive/somethingWeirdIsGoingOn-640.jpg';
import somethingWeirdIsGoingOnJpg800 from './images/responsive/somethingWeirdIsGoingOn-800.jpg';
import somethingWeirdIsGoingOnJpg1024 from './images/responsive/somethingWeirdIsGoingOn-1024.jpg';
import somethingWeirdIsGoingOnJpg1200 from './images/responsive/somethingWeirdIsGoingOn-1200.jpg';
import somethingWeirdIsGoingOnJpg1366 from './images/responsive/somethingWeirdIsGoingOn-1366.jpg';
import somethingWeirdIsGoingOnJpg1600 from './images/responsive/somethingWeirdIsGoingOn-1600.jpg';
import somethingWeirdIsGoingOnJpg1920 from './images/responsive/somethingWeirdIsGoingOn-1920.jpg';

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
      img: {
        webp400: runningOnEmptyWebp400,
        webp640: runningOnEmptyWebp640,
        webp800: runningOnEmptyWebp800,
        webp1024: runningOnEmptyWebp1024,
        webp1200: runningOnEmptyWebp1200,
        webp1366: runningOnEmptyWebp1366,
        webp1600: runningOnEmptyWebp1600,
        webp1920: runningOnEmptyWebp1920,
        jpg400: runningOnEmptyJpg400,
        jpg640: runningOnEmptyJpg640,
        jpg800: runningOnEmptyJpg800,
        jpg1024: runningOnEmptyJpg1024,
        jpg1200: runningOnEmptyJpg1200,
        jpg1366: runningOnEmptyJpg1366,
        jpg1600: runningOnEmptyJpg1600,
        jpg1920: runningOnEmptyJpg1920,
      },
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
      img: {
        webp400: ordinaryPeopleWebp400,
        webp640: ordinaryPeopleWebp640,
        webp800: ordinaryPeopleWebp800,
        webp1024: ordinaryPeopleWebp1024,
        webp1200: ordinaryPeopleWebp1200,
        webp1366: ordinaryPeopleWebp1366,
        webp1600: ordinaryPeopleWebp1600,
        webp1920: ordinaryPeopleWebp1920,
        jpg400: ordinaryPeopleJpg400,
        jpg640: ordinaryPeopleJpg640,
        jpg800: ordinaryPeopleJpg800,
        jpg1024: ordinaryPeopleJpg1024,
        jpg1200: ordinaryPeopleJpg1200,
        jpg1366: ordinaryPeopleJpg1366,
        jpg1600: ordinaryPeopleJpg1600,
        jpg1920: ordinaryPeopleJpg1920,
      },
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
      img: {
        webp400: breakingAwayWebp400,
        webp640: breakingAwayWebp640,
        webp800: breakingAwayWebp800,
        webp1024: breakingAwayWebp1024,
        webp1200: breakingAwayWebp1200,
        webp1366: breakingAwayWebp1366,
        webp1600: breakingAwayWebp1600,
        webp1920: breakingAwayWebp1920,
        jpg400: breakingAwayJpg400,
        jpg640: breakingAwayJpg640,
        jpg800: breakingAwayJpg800,
        jpg1024: breakingAwayJpg1024,
        jpg1200: breakingAwayJpg1200,
        jpg1366: breakingAwayJpg1366,
        jpg1600: breakingAwayJpg1600,
        jpg1920: breakingAwayJpg1920,
      },
      alt: '',
      id: uuid.v4(),
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
      img: {
        webp400: saturdayNightFeverWebp400,
        webp640: saturdayNightFeverWebp640,
        webp800: saturdayNightFeverWebp800,
        webp1024: saturdayNightFeverWebp1024,
        webp1200: saturdayNightFeverWebp1200,
        webp1366: saturdayNightFeverWebp1366,
        webp1600: saturdayNightFeverWebp1600,
        webp1920: saturdayNightFeverWebp1920,
        jpg400: saturdayNightFeverJpg400,
        jpg640: saturdayNightFeverJpg640,
        jpg800: saturdayNightFeverJpg800,
        jpg1024: saturdayNightFeverJpg1024,
        jpg1200: saturdayNightFeverJpg1200,
        jpg1366: saturdayNightFeverJpg1366,
        jpg1600: saturdayNightFeverJpg1600,
        jpg1920: saturdayNightFeverJpg1920,
      },
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
      img: {
        webp400: riskyBusinessWebp400,
        webp640: riskyBusinessWebp640,
        webp800: riskyBusinessWebp800,
        webp1024: riskyBusinessWebp1024,
        webp1200: riskyBusinessWebp1200,
        webp1366: riskyBusinessWebp1366,
        webp1600: riskyBusinessWebp1600,
        webp1920: riskyBusinessWebp1920,
        jpg400: riskyBusinessJpg400,
        jpg640: riskyBusinessJpg640,
        jpg800: riskyBusinessJpg800,
        jpg1024: riskyBusinessJpg1024,
        jpg1200: riskyBusinessJpg1200,
        jpg1366: riskyBusinessJpg1366,
        jpg1600: riskyBusinessJpg1600,
        jpg1920: riskyBusinessJpg1920,
      },
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
      img: {
        webp400: cluelessWebp400,
        webp640: cluelessWebp640,
        webp800: cluelessWebp800,
        webp1024: cluelessWebp1024,
        webp1200: cluelessWebp1200,
        webp1366: cluelessWebp1366,
        webp1600: cluelessWebp1600,
        webp1920: cluelessWebp1920,
        jpg400: cluelessJpg400,
        jpg640: cluelessJpg640,
        jpg800: cluelessJpg800,
        jpg1024: cluelessJpg1024,
        jpg1200: cluelessJpg1200,
        jpg1366: cluelessJpg1366,
        jpg1600: cluelessJpg1600,
        jpg1920: cluelessJpg1920,
      },
      alt: '',
      id: uuid.v4(),
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
      img: {
        webp400: murmurOfTheHeartWebp400,
        webp640: murmurOfTheHeartWebp640,
        webp800: murmurOfTheHeartWebp800,
        webp1024: murmurOfTheHeartWebp1024,
        webp1200: murmurOfTheHeartWebp1200,
        webp1366: murmurOfTheHeartWebp1366,
        webp1600: murmurOfTheHeartWebp1600,
        webp1920: murmurOfTheHeartWebp1920,
        jpg400: murmurOfTheHeartJpg400,
        jpg640: murmurOfTheHeartJpg640,
        jpg800: murmurOfTheHeartJpg800,
        jpg1024: murmurOfTheHeartJpg1024,
        jpg1200: murmurOfTheHeartJpg1200,
        jpg1366: murmurOfTheHeartJpg1366,
        jpg1600: murmurOfTheHeartJpg1600,
        jpg1920: murmurOfTheHeartJpg1920,
      },
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
      img: {
        webp400: carrieWebp400,
        webp640: carrieWebp640,
        webp800: carrieWebp800,
        webp1024: carrieWebp1024,
        webp1200: carrieWebp1200,
        webp1366: carrieWebp1366,
        webp1600: carrieWebp1600,
        webp1920: carrieWebp1920,
        jpg400: carrieJpg400,
        jpg640: carrieJpg640,
        jpg800: carrieJpg800,
        jpg1024: carrieJpg1024,
        jpg1200: carrieJpg1200,
        jpg1366: carrieJpg1366,
        jpg1600: carrieJpg1600,
        jpg1920: carrieJpg1920,
      },
      alt: '',
      id: uuid.v4(),
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
      img: {
        webp400: dazedAndConfusedWebp400,
        webp640: dazedAndConfusedWebp640,
        webp800: dazedAndConfusedWebp800,
        webp1024: dazedAndConfusedWebp1024,
        webp1200: dazedAndConfusedWebp1200,
        webp1366: dazedAndConfusedWebp1366,
        webp1600: dazedAndConfusedWebp1600,
        webp1920: dazedAndConfusedWebp1920,
        jpg400: dazedAndConfusedJpg400,
        jpg640: dazedAndConfusedJpg640,
        jpg800: dazedAndConfusedJpg800,
        jpg1024: dazedAndConfusedJpg1024,
        jpg1200: dazedAndConfusedJpg1200,
        jpg1366: dazedAndConfusedJpg1366,
        jpg1600: dazedAndConfusedJpg1600,
        jpg1920: dazedAndConfusedJpg1920,
      },
      alt: '',
      id: uuid.v4(),
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
      img: {
        webp400: squidAndTheWhaleWebp400,
        webp640: squidAndTheWhaleWebp640,
        webp800: squidAndTheWhaleWebp800,
        webp1024: squidAndTheWhaleWebp1024,
        webp1200: squidAndTheWhaleWebp1200,
        webp1366: squidAndTheWhaleWebp1366,
        webp1600: squidAndTheWhaleWebp1600,
        webp1920: squidAndTheWhaleWebp1920,
        jpg400: squidAndTheWhaleJpg400,
        jpg640: squidAndTheWhaleJpg640,
        jpg800: squidAndTheWhaleJpg800,
        jpg1024: squidAndTheWhaleJpg1024,
        jpg1200: squidAndTheWhaleJpg1200,
        jpg1366: squidAndTheWhaleJpg1366,
        jpg1600: squidAndTheWhaleJpg1600,
        jpg1920: squidAndTheWhaleJpg1920,
      },
      alt: '',
      id: uuid.v4(),
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
      img: {
        webp400: eightHalfWebp400,
        webp640: eightHalfWebp640,
        webp800: eightHalfWebp800,
        webp1024: eightHalfWebp1024,
        webp1200: eightHalfWebp1200,
        webp1366: eightHalfWebp1366,
        webp1600: eightHalfWebp1600,
        webp1920: eightHalfWebp1920,
        jpg400: eightHalfJpg400,
        jpg640: eightHalfJpg640,
        jpg800: eightHalfJpg800,
        jpg1024: eightHalfJpg1024,
        jpg1200: eightHalfJpg1200,
        jpg1366: eightHalfJpg1366,
        jpg1600: eightHalfJpg1600,
        jpg1920: eightHalfJpg1920,
      },
      alt: '',
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
      img: {
        webp400: fannyAndAlexanderWebp400,
        webp640: fannyAndAlexanderWebp640,
        webp800: fannyAndAlexanderWebp800,
        webp1024: fannyAndAlexanderWebp1024,
        webp1200: fannyAndAlexanderWebp1200,
        webp1366: fannyAndAlexanderWebp1366,
        webp1600: fannyAndAlexanderWebp1600,
        webp1920: fannyAndAlexanderWebp1920,
        jpg400: fannyAndAlexanderJpg400,
        jpg640: fannyAndAlexanderJpg640,
        jpg800: fannyAndAlexanderJpg800,
        jpg1024: fannyAndAlexanderJpg1024,
        jpg1200: fannyAndAlexanderJpg1200,
        jpg1366: fannyAndAlexanderJpg1366,
        jpg1600: fannyAndAlexanderJpg1600,
        jpg1920: fannyAndAlexanderJpg1920,
      },
      alt: '',
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
      img: {
        webp400: womanInTheDunesWebp400,
        webp640: womanInTheDunesWebp640,
        webp800: womanInTheDunesWebp800,
        webp1024: womanInTheDunesWebp1024,
        webp1200: womanInTheDunesWebp1200,
        webp1366: womanInTheDunesWebp1366,
        webp1600: womanInTheDunesWebp1600,
        webp1920: womanInTheDunesWebp1920,
        jpg400: womanInTheDunesJpg400,
        jpg640: womanInTheDunesJpg640,
        jpg800: womanInTheDunesJpg800,
        jpg1024: womanInTheDunesJpg1024,
        jpg1200: womanInTheDunesJpg1200,
        jpg1366: womanInTheDunesJpg1366,
        jpg1600: womanInTheDunesJpg1600,
        jpg1920: womanInTheDunesJpg1920,
      },
      alt: '',
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
      img: {
        webp400: redShoesWebp400,
        webp640: redShoesWebp640,
        webp800: redShoesWebp800,
        webp1024: redShoesWebp1024,
        webp1200: redShoesWebp1200,
        webp1366: redShoesWebp1366,
        webp1600: redShoesWebp1600,
        webp1920: redShoesWebp1920,
        jpg400: redShoesJpg400,
        jpg640: redShoesJpg640,
        jpg800: redShoesJpg800,
        jpg1024: redShoesJpg1024,
        jpg1200: redShoesJpg1200,
        jpg1366: redShoesJpg1366,
        jpg1600: redShoesJpg1600,
        jpg1920: redShoesJpg1920,
      },
      alt: '',
      id: uuid.v4(),
      slug: 'the-red-shoes',
      isAddedToMyList: false,
    },
    {
      title: 'Ran',
      duration: '162 minutes',
      year: 1985,
      genres: ['Essential Art-House'],
      director: 'Akira Kurosawa',
      actors: ['Tatsuya Nakadai, Akira Terao, Jinpachi Nezu '],
      description:
        "With Ran, legendary director Akira Kurosawa reimagines Shakespeare's King Lear as a singular historical epic set in sixteenth-century Japan. Majestic in scope, the film is Kurosawa's late-life masterpiece, a profound examination of the folly of war and the crumbling of one family under the weight of betrayal, greed, and the insatiable thirst for power.",
      img: {
        webp400: ranWebp400,
        webp640: ranWebp640,
        webp800: ranWebp800,
        webp1024: ranWebp1024,
        webp1200: ranWebp1200,
        webp1366: ranWebp1366,
        webp1600: ranWebp1600,
        webp1920: ranWebp1920,
        jpg400: ranJpg400,
        jpg640: ranJpg640,
        jpg800: ranJpg800,
        jpg1024: ranJpg1024,
        jpg1200: ranJpg1200,
        jpg1366: ranJpg1366,
        jpg1600: ranJpg1600,
        jpg1920: ranJpg1920,
      },
      alt: '',
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
      img: {
        webp400: vertigoWebp400,
        webp640: vertigoWebp640,
        webp800: vertigoWebp800,
        webp1024: vertigoWebp1024,
        webp1200: vertigoWebp1200,
        webp1366: vertigoWebp1366,
        webp1600: vertigoWebp1600,
        webp1920: vertigoWebp1920,
        jpg400: vertigoJpg400,
        jpg640: vertigoJpg640,
        jpg800: vertigoJpg800,
        jpg1024: vertigoJpg1024,
        jpg1200: vertigoJpg1200,
        jpg1366: vertigoJpg1366,
        jpg1600: vertigoJpg1600,
        jpg1920: vertigoJpg1920,
      },
      alt: '',
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
      img: {
        webp400: julesEtJimWebp400,
        webp640: julesEtJimWebp640,
        webp800: julesEtJimWebp800,
        webp1024: julesEtJimWebp1024,
        webp1200: julesEtJimWebp1200,
        webp1366: julesEtJimWebp1366,
        webp1600: julesEtJimWebp1600,
        webp1920: julesEtJimWebp1920,
        jpg400: julesEtJimJpg400,
        jpg640: julesEtJimJpg640,
        jpg800: julesEtJimJpg800,
        jpg1024: julesEtJimJpg1024,
        jpg1200: julesEtJimJpg1200,
        jpg1366: julesEtJimJpg1366,
        jpg1600: julesEtJimJpg1600,
        jpg1920: julesEtJimJpg1920,
      },
      alt: '',
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
      img: {
        webp400: masculinFemininWebp400,
        webp640: masculinFemininWebp640,
        webp800: masculinFemininWebp800,
        webp1024: masculinFemininWebp1024,
        webp1200: masculinFemininWebp1200,
        webp1366: masculinFemininWebp1366,
        webp1600: masculinFemininWebp1600,
        webp1920: masculinFemininWebp1920,
        jpg400: masculinFemininJpg400,
        jpg640: masculinFemininJpg640,
        jpg800: masculinFemininJpg800,
        jpg1024: masculinFemininJpg1024,
        jpg1200: masculinFemininJpg1200,
        jpg1366: masculinFemininJpg1366,
        jpg1600: masculinFemininJpg1600,
        jpg1920: masculinFemininJpg1920,
      },
      alt: '',
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
      img: {
        webp400: sevenSamuraiWebp400,
        webp640: sevenSamuraiWebp640,
        webp800: sevenSamuraiWebp800,
        webp1024: sevenSamuraiWebp1024,
        webp1200: sevenSamuraiWebp1200,
        webp1366: sevenSamuraiWebp1366,
        webp1600: sevenSamuraiWebp1600,
        webp1920: sevenSamuraiWebp1920,
        jpg400: sevenSamuraiJpg400,
        jpg640: sevenSamuraiJpg640,
        jpg800: sevenSamuraiJpg800,
        jpg1024: sevenSamuraiJpg1024,
        jpg1200: sevenSamuraiJpg1200,
        jpg1366: sevenSamuraiJpg1366,
        jpg1600: sevenSamuraiJpg1600,
        jpg1920: sevenSamuraiJpg1920,
      },
      alt: '',
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
      img: {
        webp400: personaWebp400,
        webp640: personaWebp640,
        webp800: personaWebp800,
        webp1024: personaWebp1024,
        webp1200: personaWebp1200,
        webp1366: personaWebp1366,
        webp1600: personaWebp1600,
        webp1920: personaWebp1920,
        jpg400: personaJpg400,
        jpg640: personaJpg640,
        jpg800: personaJpg800,
        jpg1024: personaJpg1024,
        jpg1200: personaJpg1200,
        jpg1366: personaJpg1366,
        jpg1600: personaJpg1600,
        jpg1920: personaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: chungkingExpressWebp400,
        webp640: chungkingExpressWebp640,
        webp800: chungkingExpressWebp800,
        webp1024: chungkingExpressWebp1024,
        webp1200: chungkingExpressWebp1200,
        webp1366: chungkingExpressWebp1366,
        webp1600: chungkingExpressWebp1600,
        webp1920: chungkingExpressWebp1920,
        jpg400: chungkingExpressJpg400,
        jpg640: chungkingExpressJpg640,
        jpg800: chungkingExpressJpg800,
        jpg1024: chungkingExpressJpg1024,
        jpg1200: chungkingExpressJpg1200,
        jpg1366: chungkingExpressJpg1366,
        jpg1600: chungkingExpressJpg1600,
        jpg1920: chungkingExpressJpg1920,
      },
      alt: '',
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
        'Takes place in a chateau, an ambiguous story of a man and a woman who may or may not have met last year at lastYearAtMarienbad.',
      img: {
        webp400: lastYearAtMarienbadWebp400,
        webp640: lastYearAtMarienbadWebp640,
        webp800: lastYearAtMarienbadWebp800,
        webp1024: lastYearAtMarienbadWebp1024,
        webp1200: lastYearAtMarienbadWebp1200,
        webp1366: lastYearAtMarienbadWebp1366,
        webp1600: lastYearAtMarienbadWebp1600,
        webp1920: lastYearAtMarienbadWebp1920,
        jpg400: lastYearAtMarienbadJpg400,
        jpg640: lastYearAtMarienbadJpg640,
        jpg800: lastYearAtMarienbadJpg800,
        jpg1024: lastYearAtMarienbadJpg1024,
        jpg1200: lastYearAtMarienbadJpg1200,
        jpg1366: lastYearAtMarienbadJpg1366,
        jpg1600: lastYearAtMarienbadJpg1600,
        jpg1920: lastYearAtMarienbadJpg1920,
      },
      alt: '',
      id: uuid.v4(),
      slug: 'last-year-at-lastYearAtMarienbad',
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
      img: {
        webp400: fireWalkWithMeWebp400,
        webp640: fireWalkWithMeWebp640,
        webp800: fireWalkWithMeWebp800,
        webp1024: fireWalkWithMeWebp1024,
        webp1200: fireWalkWithMeWebp1200,
        webp1366: fireWalkWithMeWebp1366,
        webp1600: fireWalkWithMeWebp1600,
        webp1920: fireWalkWithMeWebp1920,
        jpg400: fireWalkWithMeJpg400,
        jpg640: fireWalkWithMeJpg640,
        jpg800: fireWalkWithMeJpg800,
        jpg1024: fireWalkWithMeJpg1024,
        jpg1200: fireWalkWithMeJpg1200,
        jpg1366: fireWalkWithMeJpg1366,
        jpg1600: fireWalkWithMeJpg1600,
        jpg1920: fireWalkWithMeJpg1920,
      },
      alt: '',
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
      img: {
        webp400: dogtoothWebp400,
        webp640: dogtoothWebp640,
        webp800: dogtoothWebp800,
        webp1024: dogtoothWebp1024,
        webp1200: dogtoothWebp1200,
        webp1366: dogtoothWebp1366,
        webp1600: dogtoothWebp1600,
        webp1920: dogtoothWebp1920,
        jpg400: dogtoothJpg400,
        jpg640: dogtoothJpg640,
        jpg800: dogtoothJpg800,
        jpg1024: dogtoothJpg1024,
        jpg1200: dogtoothJpg1200,
        jpg1366: dogtoothJpg1366,
        jpg1600: dogtoothJpg1600,
        jpg1920: dogtoothJpg1920,
      },
      alt: '',
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
      img: {
        webp400: mulhollandDriveWebp400,
        webp640: mulhollandDriveWebp640,
        webp800: mulhollandDriveWebp800,
        webp1024: mulhollandDriveWebp1024,
        webp1200: mulhollandDriveWebp1200,
        webp1366: mulhollandDriveWebp1366,
        webp1600: mulhollandDriveWebp1600,
        webp1920: mulhollandDriveWebp1920,
        jpg400: mulhollandDriveJpg400,
        jpg640: mulhollandDriveJpg640,
        jpg800: mulhollandDriveJpg800,
        jpg1024: mulhollandDriveJpg1024,
        jpg1200: mulhollandDriveJpg1200,
        jpg1366: mulhollandDriveJpg1366,
        jpg1600: mulhollandDriveJpg1600,
        jpg1920: mulhollandDriveJpg1920,
      },
      alt: '',
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
      img: {
        webp400: threeWomenWebp400,
        webp640: threeWomenWebp640,
        webp800: threeWomenWebp800,
        webp1024: threeWomenWebp1024,
        webp1200: threeWomenWebp1200,
        webp1366: threeWomenWebp1366,
        webp1600: threeWomenWebp1600,
        webp1920: threeWomenWebp1920,
        jpg400: threeWomenJpg400,
        jpg640: threeWomenJpg640,
        jpg800: threeWomenJpg800,
        jpg1024: threeWomenJpg1024,
        jpg1200: threeWomenJpg1200,
        jpg1366: threeWomenJpg1366,
        jpg1600: threeWomenJpg1600,
        jpg1920: threeWomenJpg1920,
      },
      alt: '',
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
      img: {
        webp400: planetOfTheApesWebp400,
        webp640: planetOfTheApesWebp640,
        webp800: planetOfTheApesWebp800,
        webp1024: planetOfTheApesWebp1024,
        webp1200: planetOfTheApesWebp1200,
        webp1366: planetOfTheApesWebp1366,
        webp1600: planetOfTheApesWebp1600,
        webp1920: planetOfTheApesWebp1920,
        jpg400: planetOfTheApesJpg400,
        jpg640: planetOfTheApesJpg640,
        jpg800: planetOfTheApesJpg800,
        jpg1024: planetOfTheApesJpg1024,
        jpg1200: planetOfTheApesJpg1200,
        jpg1366: planetOfTheApesJpg1366,
        jpg1600: planetOfTheApesJpg1600,
        jpg1920: planetOfTheApesJpg1920,
      },
      alt: '',
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
      img: {
        webp400: vanillaSkyWebp400,
        webp640: vanillaSkyWebp640,
        webp800: vanillaSkyWebp800,
        webp1024: vanillaSkyWebp1024,
        webp1200: vanillaSkyWebp1200,
        webp1366: vanillaSkyWebp1366,
        webp1600: vanillaSkyWebp1600,
        webp1920: vanillaSkyWebp1920,
        jpg400: vanillaSkyJpg400,
        jpg640: vanillaSkyJpg640,
        jpg800: vanillaSkyJpg800,
        jpg1024: vanillaSkyJpg1024,
        jpg1200: vanillaSkyJpg1200,
        jpg1366: vanillaSkyJpg1366,
        jpg1600: vanillaSkyJpg1600,
        jpg1920: vanillaSkyJpg1920,
      },
      alt: '',
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
      img: {
        webp400: rebeccaWebp400,
        webp640: rebeccaWebp640,
        webp800: rebeccaWebp800,
        webp1024: rebeccaWebp1024,
        webp1200: rebeccaWebp1200,
        webp1366: rebeccaWebp1366,
        webp1600: rebeccaWebp1600,
        webp1920: rebeccaWebp1920,
        jpg400: rebeccaJpg400,
        jpg640: rebeccaJpg640,
        jpg800: rebeccaJpg800,
        jpg1024: rebeccaJpg1024,
        jpg1200: rebeccaJpg1200,
        jpg1366: rebeccaJpg1366,
        jpg1600: rebeccaJpg1600,
        jpg1920: rebeccaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: casablancaWebp400,
        webp640: casablancaWebp640,
        webp800: casablancaWebp800,
        webp1024: casablancaWebp1024,
        webp1200: casablancaWebp1200,
        webp1366: casablancaWebp1366,
        webp1600: casablancaWebp1600,
        webp1920: casablancaWebp1920,
        jpg400: casablancaJpg400,
        jpg640: casablancaJpg640,
        jpg800: casablancaJpg800,
        jpg1024: casablancaJpg1024,
        jpg1200: casablancaJpg1200,
        jpg1366: casablancaJpg1366,
        jpg1600: casablancaJpg1600,
        jpg1920: casablancaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: moonlightWebp400,
        webp640: moonlightWebp640,
        webp800: moonlightWebp800,
        webp1024: moonlightWebp1024,
        webp1200: moonlightWebp1200,
        webp1366: moonlightWebp1366,
        webp1600: moonlightWebp1600,
        webp1920: moonlightWebp1920,
        jpg400: moonlightJpg400,
        jpg640: moonlightJpg640,
        jpg800: moonlightJpg800,
        jpg1024: moonlightJpg1024,
        jpg1200: moonlightJpg1200,
        jpg1366: moonlightJpg1366,
        jpg1600: moonlightJpg1600,
        jpg1920: moonlightJpg1920,
      },
      alt: '',
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
      img: {
        webp400: rockyWebp400,
        webp640: rockyWebp640,
        webp800: rockyWebp800,
        webp1024: rockyWebp1024,
        webp1200: rockyWebp1200,
        webp1366: rockyWebp1366,
        webp1600: rockyWebp1600,
        webp1920: rockyWebp1920,
        jpg400: rockyJpg400,
        jpg640: rockyJpg640,
        jpg800: rockyJpg800,
        jpg1024: rockyJpg1024,
        jpg1200: rockyJpg1200,
        jpg1366: rockyJpg1366,
        jpg1600: rockyJpg1600,
        jpg1920: rockyJpg1920,
      },
      alt: '',
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
      img: {
        webp400: theApartmentWebp400,
        webp640: theApartmentWebp640,
        webp800: theApartmentWebp800,
        webp1024: theApartmentWebp1024,
        webp1200: theApartmentWebp1200,
        webp1366: theApartmentWebp1366,
        webp1600: theApartmentWebp1600,
        webp1920: theApartmentWebp1920,
        jpg400: theApartmentJpg400,
        jpg640: theApartmentJpg640,
        jpg800: theApartmentJpg800,
        jpg1024: theApartmentJpg1024,
        jpg1200: theApartmentJpg1200,
        jpg1366: theApartmentJpg1366,
        jpg1600: theApartmentJpg1600,
        jpg1920: theApartmentJpg1920,
      },
      alt: '',
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
      img: {
        webp400: amadeusWebp400,
        webp640: amadeusWebp640,
        webp800: amadeusWebp800,
        webp1024: amadeusWebp1024,
        webp1200: amadeusWebp1200,
        webp1366: amadeusWebp1366,
        webp1600: amadeusWebp1600,
        webp1920: amadeusWebp1920,
        jpg400: amadeusJpg400,
        jpg640: amadeusJpg640,
        jpg800: amadeusJpg800,
        jpg1024: amadeusJpg1024,
        jpg1200: amadeusJpg1200,
        jpg1366: amadeusJpg1366,
        jpg1600: amadeusJpg1600,
        jpg1920: amadeusJpg1920,
      },
      alt: '',
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
      img: {
        webp400: fromHereToEternityWebp400,
        webp640: fromHereToEternityWebp640,
        webp800: fromHereToEternityWebp800,
        webp1024: fromHereToEternityWebp1024,
        webp1200: fromHereToEternityWebp1200,
        webp1366: fromHereToEternityWebp1366,
        webp1600: fromHereToEternityWebp1600,
        webp1920: fromHereToEternityWebp1920,
        jpg400: fromHereToEternityJpg400,
        jpg640: fromHereToEternityJpg640,
        jpg800: fromHereToEternityJpg800,
        jpg1024: fromHereToEternityJpg1024,
        jpg1200: fromHereToEternityJpg1200,
        jpg1366: fromHereToEternityJpg1366,
        jpg1600: fromHereToEternityJpg1600,
        jpg1920: fromHereToEternityJpg1920,
      },
      alt: '',
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
      img: {
        webp400: annieHallWebp400,
        webp640: annieHallWebp640,
        webp800: annieHallWebp800,
        webp1024: annieHallWebp1024,
        webp1200: annieHallWebp1200,
        webp1366: annieHallWebp1366,
        webp1600: annieHallWebp1600,
        webp1920: annieHallWebp1920,
        jpg400: annieHallJpg400,
        jpg640: annieHallJpg640,
        jpg800: annieHallJpg800,
        jpg1024: annieHallJpg1024,
        jpg1200: annieHallJpg1200,
        jpg1366: annieHallJpg1366,
        jpg1600: annieHallJpg1600,
        jpg1920: annieHallJpg1920,
      },
      alt: '',
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
      img: {
        webp400: francesHaWebp400,
        webp640: francesHaWebp640,
        webp800: francesHaWebp800,
        webp1024: francesHaWebp1024,
        webp1200: francesHaWebp1200,
        webp1366: francesHaWebp1366,
        webp1600: francesHaWebp1600,
        webp1920: francesHaWebp1920,
        jpg400: francesHaJpg400,
        jpg640: francesHaJpg640,
        jpg800: francesHaJpg800,
        jpg1024: francesHaJpg1024,
        jpg1200: francesHaJpg1200,
        jpg1366: francesHaJpg1366,
        jpg1600: francesHaJpg1600,
        jpg1920: francesHaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: mistressAmericaWebp400,
        webp640: mistressAmericaWebp640,
        webp800: mistressAmericaWebp800,
        webp1024: mistressAmericaWebp1024,
        webp1200: mistressAmericaWebp1200,
        webp1366: mistressAmericaWebp1366,
        webp1600: mistressAmericaWebp1600,
        webp1920: mistressAmericaWebp1920,
        jpg400: mistressAmericaJpg400,
        jpg640: mistressAmericaJpg640,
        jpg800: mistressAmericaJpg800,
        jpg1024: mistressAmericaJpg1024,
        jpg1200: mistressAmericaJpg1200,
        jpg1366: mistressAmericaJpg1366,
        jpg1600: mistressAmericaJpg1600,
        jpg1920: mistressAmericaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: kickingAndScreamingWebp400,
        webp640: kickingAndScreamingWebp640,
        webp800: kickingAndScreamingWebp800,
        webp1024: kickingAndScreamingWebp1024,
        webp1200: kickingAndScreamingWebp1200,
        webp1366: kickingAndScreamingWebp1366,
        webp1600: kickingAndScreamingWebp1600,
        webp1920: kickingAndScreamingWebp1920,
        jpg400: kickingAndScreamingJpg400,
        jpg640: kickingAndScreamingJpg640,
        jpg800: kickingAndScreamingJpg800,
        jpg1024: kickingAndScreamingJpg1024,
        jpg1200: kickingAndScreamingJpg1200,
        jpg1366: kickingAndScreamingJpg1366,
        jpg1600: kickingAndScreamingJpg1600,
        jpg1920: kickingAndScreamingJpg1920,
      },
      alt: '',
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
      img: {
        webp400: greenbergWebp400,
        webp640: greenbergWebp640,
        webp800: greenbergWebp800,
        webp1024: greenbergWebp1024,
        webp1200: greenbergWebp1200,
        webp1366: greenbergWebp1366,
        webp1600: greenbergWebp1600,
        webp1920: greenbergWebp1920,
        jpg400: greenbergJpg400,
        jpg640: greenbergJpg640,
        jpg800: greenbergJpg800,
        jpg1024: greenbergJpg1024,
        jpg1200: greenbergJpg1200,
        jpg1366: greenbergJpg1366,
        jpg1600: greenbergJpg1600,
        jpg1920: greenbergJpg1920,
      },
      alt: '',
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
      img: {
        webp400: margotAtTheWeddingWebp400,
        webp640: margotAtTheWeddingWebp640,
        webp800: margotAtTheWeddingWebp800,
        webp1024: margotAtTheWeddingWebp1024,
        webp1200: margotAtTheWeddingWebp1200,
        webp1366: margotAtTheWeddingWebp1366,
        webp1600: margotAtTheWeddingWebp1600,
        webp1920: margotAtTheWeddingWebp1920,
        jpg400: margotAtTheWeddingJpg400,
        jpg640: margotAtTheWeddingJpg640,
        jpg800: margotAtTheWeddingJpg800,
        jpg1024: margotAtTheWeddingJpg1024,
        jpg1200: margotAtTheWeddingJpg1200,
        jpg1366: margotAtTheWeddingJpg1366,
        jpg1600: margotAtTheWeddingJpg1600,
        jpg1920: margotAtTheWeddingJpg1920,
      },
      alt: '',
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
      img: {
        webp400: theMeyerowitzStoriesWebp400,
        webp640: theMeyerowitzStoriesWebp640,
        webp800: theMeyerowitzStoriesWebp800,
        webp1024: theMeyerowitzStoriesWebp1024,
        webp1200: theMeyerowitzStoriesWebp1200,
        webp1366: theMeyerowitzStoriesWebp1366,
        webp1600: theMeyerowitzStoriesWebp1600,
        webp1920: theMeyerowitzStoriesWebp1920,
        jpg400: theMeyerowitzStoriesJpg400,
        jpg640: theMeyerowitzStoriesJpg640,
        jpg800: theMeyerowitzStoriesJpg800,
        jpg1024: theMeyerowitzStoriesJpg1024,
        jpg1200: theMeyerowitzStoriesJpg1200,
        jpg1366: theMeyerowitzStoriesJpg1366,
        jpg1600: theMeyerowitzStoriesJpg1600,
        jpg1920: theMeyerowitzStoriesJpg1920,
      },
      alt: '',
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
      img: {
        webp400: whileWeWereYoungWebp400,
        webp640: whileWeWereYoungWebp640,
        webp800: whileWeWereYoungWebp800,
        webp1024: whileWeWereYoungWebp1024,
        webp1200: whileWeWereYoungWebp1200,
        webp1366: whileWeWereYoungWebp1366,
        webp1600: whileWeWereYoungWebp1600,
        webp1920: whileWeWereYoungWebp1920,
        jpg400: whileWeWereYoungJpg400,
        jpg640: whileWeWereYoungJpg640,
        jpg800: whileWeWereYoungJpg800,
        jpg1024: whileWeWereYoungJpg1024,
        jpg1200: whileWeWereYoungJpg1200,
        jpg1366: whileWeWereYoungJpg1366,
        jpg1600: whileWeWereYoungJpg1600,
        jpg1920: whileWeWereYoungJpg1920,
      },
      alt: '',
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
      img: {
        webp400: apocalypseNowWebp400,
        webp640: apocalypseNowWebp640,
        webp800: apocalypseNowWebp800,
        webp1024: apocalypseNowWebp1024,
        webp1200: apocalypseNowWebp1200,
        webp1366: apocalypseNowWebp1366,
        webp1600: apocalypseNowWebp1600,
        webp1920: apocalypseNowWebp1920,
        jpg400: apocalypseNowJpg400,
        jpg640: apocalypseNowJpg640,
        jpg800: apocalypseNowJpg800,
        jpg1024: apocalypseNowJpg1024,
        jpg1200: apocalypseNowJpg1200,
        jpg1366: apocalypseNowJpg1366,
        jpg1260: apocalypseNowJpg1600,
        jpg1920: apocalypseNowJpg1920,
      },
      alt: '',
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
      img: {
        webp400: allThatJazzWebp400,
        webp640: allThatJazzWebp640,
        webp800: allThatJazzWebp800,
        webp1024: allThatJazzWebp1024,
        webp1200: allThatJazzWebp1200,
        webp1366: allThatJazzWebp1366,
        webp1600: allThatJazzWebp1600,
        webp1920: allThatJazzWebp1920,
        jpg400: allThatJazzJpg400,
        jpg640: allThatJazzJpg640,
        jpg800: allThatJazzJpg800,
        jpg1024: allThatJazzJpg1024,
        jpg1200: allThatJazzJpg1200,
        jpg1366: allThatJazzJpg1366,
        jpg1600: allThatJazzJpg1600,
        jpg1920: allThatJazzJpg1920,
      },
      alt: '',
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
      img: {
        webp400: pulpFictionWebp400,
        webp640: pulpFictionWebp640,
        webp800: pulpFictionWebp800,
        webp1024: pulpFictionWebp1024,
        webp1200: pulpFictionWebp1200,
        webp1366: pulpFictionWebp1366,
        webp1600: pulpFictionWebp1600,
        webp1920: pulpFictionWebp1920,
        jpg400: pulpFictionJpg400,
        jpg640: pulpFictionJpg640,
        jpg800: pulpFictionJpg800,
        jpg1024: pulpFictionJpg1024,
        jpg1200: pulpFictionJpg1200,
        jpg1366: pulpFictionJpg1366,
        jpg1600: pulpFictionJpg1600,
        jpg1920: pulpFictionJpg1920,
      },
      alt: '',
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
      img: {
        webp400: missJulieWebp400,
        webp640: missJulieWebp640,
        webp800: missJulieWebp800,
        webp1024: missJulieWebp1024,
        webp1200: missJulieWebp1200,
        webp1366: missJulieWebp1366,
        webp1600: missJulieWebp1600,
        webp1920: missJulieWebp1920,
        jpg400: missJulieJpg400,
        jpg640: missJulieJpg640,
        jpg800: missJulieJpg800,
        jpg1024: missJulieJpg1024,
        jpg1200: missJulieJpg1200,
        jpg1366: missJulieJpg1366,
        jpg1600: missJulieJpg1600,
        jpg1920: missJulieJpg1920,
      },
      alt: '',
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
      img: {
        webp400: theConversationWebp400,
        webp640: theConversationWebp640,
        webp800: theConversationWebp800,
        webp1024: theConversationWebp1024,
        webp1200: theConversationWebp1200,
        webp1366: theConversationWebp1366,
        webp1600: theConversationWebp1600,
        webp1920: theConversationWebp1920,
        jpg400: theConversationJpg400,
        jpg640: theConversationJpg640,
        jpg800: theConversationJpg800,
        jpg1024: theConversationJpg1024,
        jpg1200: theConversationJpg1200,
        jpg1366: theConversationJpg1366,
        jpg1600: theConversationJpg1600,
        jpg1920: theConversationJpg1920,
      },
      alt: '',
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
      img: {
        webp400: wagesOfFearWebp400,
        webp640: wagesOfFearWebp640,
        webp800: wagesOfFearWebp800,
        webp1024: wagesOfFearWebp1024,
        webp1200: wagesOfFearWebp1200,
        webp1366: wagesOfFearWebp1366,
        webp1600: wagesOfFearWebp1600,
        webp1920: wagesOfFearWebp1920,
        jpg400: wagesOfFearJpg400,
        jpg640: wagesOfFearJpg640,
        jpg800: wagesOfFearJpg800,
        jpg1024: wagesOfFearJpg1024,
        jpg1200: wagesOfFearJpg1200,
        jpg1366: wagesOfFearJpg1366,
        jpg1600: wagesOfFearJpg1600,
        jpg1920: wagesOfFearJpg1920,
      },
      alt: '',
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
      img: {
        webp400: ifEllipsisWebp400,
        webp640: ifEllipsisWebp640,
        webp800: ifEllipsisWebp800,
        webp1024: ifEllipsisWebp1024,
        webp1200: ifEllipsisWebp1200,
        webp1366: ifEllipsisWebp1366,
        webp1600: ifEllipsisWebp1600,
        webp1920: ifEllipsisWebp1920,
        jpg400: ifEllipsisJpg400,
        jpg640: ifEllipsisJpg640,
        jpg800: ifEllipsisJpg800,
        jpg1024: ifEllipsisJpg1024,
        jpg1200: ifEllipsisJpg1200,
        jpg1366: ifEllipsisJpg1366,
        jpg1600: ifEllipsisJpg1600,
        jpg1920: ifEllipsisJpg1920,
      },
      alt: '',
      id: uuid.v4(),
      slug: 'if',
      isAddedToMyList: false,
    },
    {
      title: 'Kagemusha',
      duration: '97 minutes',
      year: 2014,
      genres: ["Favorite Palme d'Or Winners"],
      director: 'Akira Kurosawa',
      actors: ["Tatsuya Nakadai, Tsutomu Yamazaki, Ken'ichi Hagiwara"],
      description:
        "Akira Kurosawa's lauded feudal epic presents the tale of a petty thief who is recruited to impersonate Shingen, an aging warlord, in order to avoid attacks by competing clans. When Shingen dies, his generals reluctantly agree to have the impostor take over as the powerful ruler. He soon begins to appreciate life as Shingen, but his commitment to the role is tested when he must lead his troops into battle against the forces of a rival warlord.",
      img: {
        webp400: kagemushaWebp400,
        webp640: kagemushaWebp640,
        webp800: kagemushaWebp800,
        webp1024: kagemushaWebp1024,
        webp1200: kagemushaWebp1200,
        webp1366: kagemushaWebp1366,
        webp1600: kagemushaWebp1600,
        webp1920: kagemushaWebp1920,
        jpg400: kagemushaJpg400,
        jpg640: kagemushaJpg640,
        jpg800: kagemushaJpg800,
        jpg1024: kagemushaJpg1024,
        jpg1200: kagemushaJpg1200,
        jpg1366: kagemushaJpg1366,
        jpg1600: kagemushaJpg1600,
        jpg1920: kagemushaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: parisTexasWebp400,
        webp640: parisTexasWebp640,
        webp800: parisTexasWebp800,
        webp1024: parisTexasWebp1024,
        webp1200: parisTexasWebp1200,
        webp1366: parisTexasWebp1366,
        webp1600: parisTexasWebp1600,
        webp1920: parisTexasWebp1920,
        jpg400: parisTexasJpg400,
        jpg640: parisTexasJpg640,
        jpg800: parisTexasJpg800,
        jpg1024: parisTexasJpg1024,
        jpg1200: parisTexasJpg1200,
        jpg1366: parisTexasJpg1366,
        jpg1600: parisTexasJpg1600,
        jpg1920: parisTexasJpg1920,
      },
      alt: '',
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
      img: {
        webp400: dancerInTheDarkWebp400,
        webp640: dancerInTheDarkWebp640,
        webp800: dancerInTheDarkWebp800,
        webp1024: dancerInTheDarkWebp1024,
        webp1200: dancerInTheDarkWebp1200,
        webp1366: dancerInTheDarkWebp1366,
        webp1600: dancerInTheDarkWebp1600,
        webp1920: dancerInTheDarkWebp1920,
        jpg400: dancerInTheDarkJpg400,
        jpg640: dancerInTheDarkJpg640,
        jpg800: dancerInTheDarkJpg800,
        jpg1024: dancerInTheDarkJpg1024,
        jpg1200: dancerInTheDarkJpg1200,
        jpg1366: dancerInTheDarkJpg1366,
        jpg1600: dancerInTheDarkJpg1600,
        jpg1920: dancerInTheDarkJpg1920,
      },
      alt: '',
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
      img: {
        webp400: taxiDriverWebp400,
        webp640: taxiDriverWebp640,
        webp800: taxiDriverWebp800,
        webp1024: taxiDriverWebp1024,
        webp1200: taxiDriverWebp1200,
        webp1366: taxiDriverWebp1366,
        webp1600: taxiDriverWebp1600,
        webp1920: taxiDriverWebp1920,
        jpg400: taxiDriverJpg400,
        jpg640: taxiDriverJpg640,
        jpg800: taxiDriverJpg800,
        jpg1024: taxiDriverJpg1024,
        jpg1200: taxiDriverJpg1200,
        jpg1366: taxiDriverJpg1366,
        jpg1600: taxiDriverJpg1600,
        jpg1920: taxiDriverJpg1920,
      },
      alt: '',
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
      img: {
        webp400: casinoWebp400,
        webp640: casinoWebp640,
        webp800: casinoWebp800,
        webp1024: casinoWebp1024,
        webp1200: casinoWebp1200,
        webp1366: casinoWebp1366,
        webp1600: casinoWebp1600,
        webp1920: casinoWebp1920,
        jpg400: casinoJpg400,
        jpg640: casinoJpg640,
        jpg800: casinoJpg800,
        jpg1024: casinoJpg1024,
        jpg1200: casinoJpg1200,
        jpg1366: casinoJpg1366,
        jpg1600: casinoJpg1600,
        jpg1920: casinoJpg1920,
      },
      alt: '',
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
      img: {
        webp400: meanStreetsWebp400,
        webp640: meanStreetsWebp640,
        webp800: meanStreetsWebp800,
        webp1024: meanStreetsWebp1024,
        webp1200: meanStreetsWebp1200,
        webp1366: meanStreetsWebp1366,
        webp1600: meanStreetsWebp1600,
        webp1920: meanStreetsWebp1920,
        jpg400: meanStreetsJpg400,
        jpg640: meanStreetsJpg640,
        jpg800: meanStreetsJpg800,
        jpg1024: meanStreetsJpg1024,
        jpg1200: meanStreetsJpg1200,
        jpg1366: meanStreetsJpg1366,
        jpg1600: meanStreetsJpg1600,
        jpg1920: meanStreetsJpg1920,
      },
      alt: '',
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
      img: {
        webp400: kingOfComedyWebp400,
        webp640: kingOfComedyWebp640,
        webp800: kingOfComedyWebp800,
        webp1024: kingOfComedyWebp1024,
        webp1200: kingOfComedyWebp1200,
        webp1366: kingOfComedyWebp1366,
        webp1600: kingOfComedyWebp1600,
        webp1920: kingOfComedyWebp1920,
        jpg400: kingOfComedyJpg400,
        jpg640: kingOfComedyJpg640,
        jpg800: kingOfComedyJpg800,
        jpg1024: kingOfComedyJpg1024,
        jpg1200: kingOfComedyJpg1200,
        jpg1366: kingOfComedyJpg1366,
        jpg1600: kingOfComedyJpg1600,
        jpg1920: kingOfComedyJpg1920,
      },
      alt: '',
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
      img: {
        webp400: newYorkNewYorkWebp400,
        webp640: newYorkNewYorkWebp640,
        webp800: newYorkNewYorkWebp800,
        webp1024: newYorkNewYorkWebp1024,
        webp1200: newYorkNewYorkWebp1200,
        webp1366: newYorkNewYorkWebp1366,
        webp1600: newYorkNewYorkWebp1600,
        webp1920: newYorkNewYorkWebp1920,
        jpg400: newYorkNewYorkJpg400,
        jpg640: newYorkNewYorkJpg640,
        jpg800: newYorkNewYorkJpg800,
        jpg1024: newYorkNewYorkJpg1024,
        jpg1200: newYorkNewYorkJpg1200,
        jpg1366: newYorkNewYorkJpg1366,
        jpg1600: newYorkNewYorkJpg1600,
        jpg1920: newYorkNewYorkJpg1920,
      },
      alt: '',
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
      img: {
        webp400: goodfellasWebp400,
        webp640: goodfellasWebp640,
        webp800: goodfellasWebp800,
        webp1024: goodfellasWebp1024,
        webp1200: goodfellasWebp1200,
        webp1366: goodfellasWebp1366,
        webp1600: goodfellasWebp1600,
        webp1920: goodfellasWebp1920,
        jpg400: goodfellasJpg400,
        jpg640: goodfellasJpg640,
        jpg800: goodfellasJpg800,
        jpg1024: goodfellasJpg1024,
        jpg1200: goodfellasJpg1200,
        jpg1366: goodfellasJpg1366,
        jpg1600: goodfellasJpg1600,
        jpg1920: goodfellasJpg1920,
      },
      alt: '',
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
      img: {
        webp400: magnoliaWebp400,
        webp640: magnoliaWebp640,
        webp800: magnoliaWebp800,
        webp1024: magnoliaWebp1024,
        webp1200: magnoliaWebp1200,
        webp1366: magnoliaWebp1366,
        webp1600: magnoliaWebp1600,
        webp1920: magnoliaWebp1920,
        jpg400: magnoliaJpg400,
        jpg640: magnoliaJpg640,
        jpg800: magnoliaJpg800,
        jpg1024: magnoliaJpg1024,
        jpg1200: magnoliaJpg1200,
        jpg1366: magnoliaJpg1366,
        jpg1600: magnoliaJpg1600,
        jpg1920: magnoliaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: fishTankWebp400,
        webp640: fishTankWebp640,
        webp800: fishTankWebp800,
        webp1024: fishTankWebp1024,
        webp1200: fishTankWebp1200,
        webp1366: fishTankWebp1366,
        webp1600: fishTankWebp1600,
        webp1920: fishTankWebp1920,
        jpg400: fishTankJpg400,
        jpg640: fishTankJpg640,
        jpg800: fishTankJpg800,
        jpg1024: fishTankJpg1024,
        jpg1200: fishTankJpg1200,
        jpg1366: fishTankJpg1366,
        jpg1600: fishTankJpg1600,
        jpg1920: fishTankJpg1920,
      },
      alt: '',
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
      img: {
        webp400: bottleRocketWebp400,
        webp640: bottleRocketWebp640,
        webp800: bottleRocketWebp800,
        webp1024: bottleRocketWebp1024,
        webp1200: bottleRocketWebp1200,
        webp1366: bottleRocketWebp1366,
        webp1600: bottleRocketWebp1600,
        webp1920: bottleRocketWebp1920,
        jpg400: bottleRocketJpg400,
        jpg640: bottleRocketJpg640,
        jpg800: bottleRocketJpg800,
        jpg1024: bottleRocketJpg1024,
        jpg1200: bottleRocketJpg1200,
        jpg1366: bottleRocketJpg1366,
        jpg1600: bottleRocketJpg1600,
        jpg1920: bottleRocketJpg1920,
      },
      alt: '',
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
      img: {
        webp400: jackieBrownWebp400,
        webp640: jackieBrownWebp640,
        webp800: jackieBrownWebp800,
        webp1024: jackieBrownWebp1024,
        webp1200: jackieBrownWebp1200,
        webp1366: jackieBrownWebp1366,
        webp1600: jackieBrownWebp1600,
        webp1920: jackieBrownWebp1920,
        jpg400: jackieBrownJpg400,
        jpg640: jackieBrownJpg640,
        jpg800: jackieBrownJpg800,
        jpg1024: jackieBrownJpg1024,
        jpg1200: jackieBrownJpg1200,
        jpg1366: jackieBrownJpg1366,
        jpg1600: jackieBrownJpg1600,
        jpg1920: jackieBrownJpg1920,
      },
      alt: '',
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
      img: {
        webp400: onceUponATimeInAmericaWebp400,
        webp640: onceUponATimeInAmericaWebp640,
        webp800: onceUponATimeInAmericaWebp800,
        webp1024: onceUponATimeInAmericaWebp1024,
        webp1200: onceUponATimeInAmericaWebp1200,
        webp1366: onceUponATimeInAmericaWebp1366,
        webp1600: onceUponATimeInAmericaWebp1600,
        webp1920: onceUponATimeInAmericaWebp1920,
        jpg400: onceUponATimeInAmericaJpg400,
        jpg640: onceUponATimeInAmericaJpg640,
        jpg800: onceUponATimeInAmericaJpg800,
        jpg1024: onceUponATimeInAmericaJpg1024,
        jpg1200: onceUponATimeInAmericaJpg1200,
        jpg1366: onceUponATimeInAmericaJpg1366,
        jpg1600: onceUponATimeInAmericaJpg1600,
        jpg1920: onceUponATimeInAmericaJpg1920,
      },
      alt: '',
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
      img: {
        webp400: brokenEmbracesWebp400,
        webp640: brokenEmbracesWebp640,
        webp800: brokenEmbracesWebp800,
        webp1024: brokenEmbracesWebp1024,
        webp1200: brokenEmbracesWebp1200,
        webp1366: brokenEmbracesWebp1366,
        webp1600: brokenEmbracesWebp1600,
        webp1920: brokenEmbracesWebp1920,
        jpg400: brokenEmbracesJpg400,
        jpg640: brokenEmbracesJpg640,
        jpg800: brokenEmbracesJpg800,
        jpg1024: brokenEmbracesJpg1024,
        jpg1200: brokenEmbracesJpg1200,
        jpg1366: brokenEmbracesJpg1366,
        jpg1600: brokenEmbracesJpg1600,
        jpg1920: brokenEmbracesJpg1920,
      },
      alt: '',
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
      img: {
        webp400: thereWillBeBloodWebp400,
        webp640: thereWillBeBloodWebp640,
        webp800: thereWillBeBloodWebp800,
        webp1024: thereWillBeBloodWebp1024,
        webp1200: thereWillBeBloodWebp1200,
        webp1366: thereWillBeBloodWebp1366,
        webp1600: thereWillBeBloodWebp1600,
        webp1920: thereWillBeBloodWebp1920,
        jpg400: thereWillBeBloodJpg400,
        jpg640: thereWillBeBloodJpg640,
        jpg800: thereWillBeBloodJpg800,
        jpg1024: thereWillBeBloodJpg1024,
        jpg1200: thereWillBeBloodJpg1200,
        jpg1366: thereWillBeBloodJpg1366,
        jpg1600: thereWillBeBloodJpg1600,
        jpg1920: thereWillBeBloodJpg1920,
      },
      alt: '',
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
      poster: {
        webp400: murmurOfTheHeartPosterWebp400,
        webp640: murmurOfTheHeartPosterWebp640,
        webp800: murmurOfTheHeartPosterWebp800,
        webp1024: murmurOfTheHeartPosterWebp1024,
        webp1200: murmurOfTheHeartPosterWebp1200,
        webp1366: murmurOfTheHeartPosterWebp1366,
        webp1600: murmurOfTheHeartPosterWebp1600,
        webp1920: murmurOfTheHeartPosterWebp1920,
        jpg400: murmurOfTheHeartPosterJpg400,
        jpg640: murmurOfTheHeartPosterJpg640,
        jpg800: murmurOfTheHeartPosterJpg800,
        jpg1024: murmurOfTheHeartPosterJpg1024,
        jpg1200: murmurOfTheHeartPosterJpg1200,
        jpg1366: murmurOfTheHeartPosterJpg1366,
        jpg1600: murmurOfTheHeartPosterJpg1600,
        jpg1920: murmurOfTheHeartPosterJpg1920,
      },
      alt: '',
    },
    {
      name: 'Directed By Noah Baumbach',
      slug: 'directed-by-noah-baumbach',
      id: uuid.v4(),
      description:
        "The author of this website is hard pressed to find a Noah Baumbach movie that he doesn't find great. We submit to you that Baumbach is the best dialogue man in the biz. You will be quoting lines from these movies for the rest of your life, that is, when you're not thinking about how authentic and compelling his characters are.",
      poster: {
        webp400: noahBaumbachWebp400,
        webp640: noahBaumbachWebp640,
        webp800: noahBaumbachWebp800,
        webp1024: noahBaumbachWebp1024,
        webp1200: noahBaumbachWebp1200,
        webp1366: noahBaumbachWebp1366,
        webp1600: noahBaumbachWebp1600,
        webp1920: noahBaumbachWebp1920,
        jpg400: noahBaumbachJpg400,
        jpg640: noahBaumbachJpg640,
        jpg800: noahBaumbachJpg800,
        jpg1024: noahBaumbachJpg1024,
        jpg1200: noahBaumbachJpg1200,
        jpg1366: noahBaumbachJpg1366,
        jpg1600: noahBaumbachJpg1600,
        jpg1920: noahBaumbachJpg1920,
      },
      alt: '',
    },
    {
      name: 'Essential Art-House',
      slug: 'essential-art-house',
      id: uuid.v4(),
      description:
        'What is an art film? We like to think of an art film as a movie that challenges your expectations of what a movie is and can be. Take a tour through cinematic history with some of favorite films that opened such doors in our mind.',
      poster: {
        webp400: eightHalfPosterWebp400,
        webp640: eightHalfPosterWebp640,
        webp800: eightHalfPosterWebp800,
        webp1024: eightHalfPosterWebp1024,
        webp1200: eightHalfPosterWebp1200,
        webp1366: eightHalfPosterWebp1366,
        webp1600: eightHalfPosterWebp1600,
        webp1920: eightHalfPosterWebp1920,
        jpg400: eightHalfPosterJpg400,
        jpg640: eightHalfPosterJpg640,
        jpg800: eightHalfPosterJpg800,
        jpg1024: eightHalfPosterJpg1024,
        jpg1200: eightHalfPosterJpg1200,
        jpg1366: eightHalfPosterJpg1366,
        jpg1600: eightHalfPosterJpg1600,
        jpg1920: eightHalfPosterJpg1920,
      },
      alt: '',
    },
    {
      name: 'Something Weird is Going On',
      slug: 'something-weird-is-going-on',
      id: uuid.v4(),
      description: 'No description is necessary here. Nothing would suffice.',
      poster: {
        webp400: somethingWeirdIsGoingOnWebp400,
        webp640: somethingWeirdIsGoingOnWebp640,
        webp800: somethingWeirdIsGoingOnWebp800,
        webp1024: somethingWeirdIsGoingOnWebp1024,
        webp1200: somethingWeirdIsGoingOnWebp1200,
        webp1366: somethingWeirdIsGoingOnWebp1366,
        webp1600: somethingWeirdIsGoingOnWebp1600,
        webp1960: somethingWeirdIsGoingOnWebp1920,
        jpg400: somethingWeirdIsGoingOnJpg400,
        jpg640: somethingWeirdIsGoingOnJpg640,
        jpg800: somethingWeirdIsGoingOnJpg800,
        jpg1024: somethingWeirdIsGoingOnJpg1024,
        jpg1200: somethingWeirdIsGoingOnJpg1200,
        jpg1366: somethingWeirdIsGoingOnJpg1366,
        jpg1600: somethingWeirdIsGoingOnJpg1600,
        jpg1920: somethingWeirdIsGoingOnJpg1920,
      },
      alt: '',
    },
    {
      name: 'Oscar Winners That are Actually Good',
      slug: 'oscar-winners-that-are-actually-good',
      id: uuid.v4(),
      description:
        "Just because a film wins the best film oscar, doesn't mean that film is pandering rubbish. Sometimes the Oscar committee does a good film justice. Here are such cases.",
      poster: {
        webp400: annieHallPosterWebp400,
        webp640: annieHallPosterWebp640,
        webp800: annieHallPosterWebp800,
        webp1024: annieHallPosterWebp1024,
        webp1200: annieHallPosterWebp1200,
        webp1366: annieHallPosterWebp1366,
        webp1600: annieHallPosterWebp1600,
        webp1920: annieHallPosterWebp1920,
        jpg400: annieHallPosterJpg400,
        jpg640: annieHallPosterJpg640,
        jpg800: annieHallPosterJpg800,
        jpg1024: annieHallPosterJpg1024,
        jpg1200: annieHallPosterJpg1200,
        jpg1366: annieHallPosterJpg1366,
        jpg1600: annieHallPosterJpg1600,
        jpg1920: annieHallPosterJpg1920,
      },
      alt: '',
    },
    {
      name: "Favorite Palme d'Or Winners",
      slug: 'favorite-palme-dor-winner',
      id: uuid.v4(),
      description:
        "The Palme d'Or is the arguably the most honorable prize a film can receive. It is bestowed by the Cannes film festival in Cannes, France every year. Here are some of our favorite winners.",
      poster: {
        webp400: apocalypseNowPosterWebp400,
        webp640: apocalypseNowPosterWebp640,
        webp800: apocalypseNowPosterWebp800,
        webp1024: apocalypseNowPosterWebp1024,
        webp1200: apocalypseNowPosterWebp1200,
        webp1366: apocalypseNowPosterWebp1366,
        webp1600: apocalypseNowPosterWebp1600,
        webp1920: apocalypseNowPosterWebp1920,
        jpg400: apocalypseNowPosterJpg400,
        jpg640: apocalypseNowPosterJpg640,
        jpg800: apocalypseNowPosterJpg800,
        jpg1024: apocalypseNowPosterJpg1024,
        jpg1200: apocalypseNowPosterJpg1200,
        jpg1366: apocalypseNowPosterJpg1366,
        jpg1600: apocalypseNowPosterJpg1600,
        jpg1920: apocalypseNowPosterJpg1920,
      },
      alt: '',
    },
    {
      name: 'Scorsese and De Niro',
      slug: 'scorsese-and-de-niro',
      id: uuid.v4(),
      description:
        'Martin Scorsese is one of the United States finest directors to date. Robert De Niro is one of the United States finest actors to date. When you put them together, you get something special. When you put them together, you get these movies.',
      poster: {
        webp400: scorseseDeNiroWebp400,
        webp640: scorseseDeNiroWebp640,
        webp800: scorseseDeNiroWebp800,
        webp1024: scorseseDeNiroWebp1024,
        webp1200: scorseseDeNiroWebp1200,
        webp1366: scorseseDeNiroWebp1366,
        webp1600: scorseseDeNiroWebp1600,
        webp1920: scorseseDeNiroWebp1920,
        jpg400: scorseseDeNiroJpg400,
        jpg640: scorseseDeNiroJpg640,
        jpg800: scorseseDeNiroJpg800,
        jpg1024: scorseseDeNiroJpg1024,
        jpg1200: scorseseDeNiroJpg1200,
        jpg1366: scorseseDeNiroJpg1366,
        jpg1600: scorseseDeNiroJpg1600,
        jpg1920: scorseseDeNiroJpg1920,
      },
      alt: '',
    },
    {
      name: 'Films of the Week',
      slug: 'films-of-the-week',
      id: uuid.v4(),
      description:
        'Here is a weekly roundup of films that just happen to be bouncing around our head at this given time. They also happen to be great.',
      poster: {
        webp400: fishTankPosterWebp400,
        webp640: fishTankPosterWebp640,
        webp800: fishTankPosterWebp800,
        webp1024: fishTankPosterWebp1024,
        webp1200: fishTankPosterWebp1200,
        webp1366: fishTankPosterWebp1366,
        webp1600: fishTankPosterWebp1600,
        webp1920: fishTankPosterWebp1920,
        jpg400: fishTankPosterJpg400,
        jpg640: fishTankPosterJpg640,
        jpg800: fishTankPosterJpg800,
        jpg1024: fishTankPosterJpg1024,
        jpg1200: fishTankPosterJpg1200,
        jpg1366: fishTankPosterJpg1366,
        jpg1600: fishTankPosterJpg1600,
        jpg1920: fishTankPosterJpg1920,
      },
      alt: '',
    },
  ],
};

export default netStruckData;
