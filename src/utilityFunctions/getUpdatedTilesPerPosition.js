import mediaBreakpoints from '../mediaBreakpoints';

export default function getUpdatedTilesPerPosition(
  windowWidth,
  tilesPerPosition,
) {
  return new Promise(resolve => {
    switch (true) {
      case windowWidth < mediaBreakpoints.sm && tilesPerPosition !== 2: {
        const updatedTilesPerPosition = 2;
        resolve(updatedTilesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.sm &&
        windowWidth < mediaBreakpoints.md &&
        tilesPerPosition !== 3: {
        const updatedTilesPerPosition = 3;
        resolve(updatedTilesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.md &&
        windowWidth < mediaBreakpoints.lg &&
        tilesPerPosition !== 4: {
        const updatedTilesPerPosition = 4;
        resolve(updatedTilesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.lg &&
        windowWidth < mediaBreakpoints.xl &&
        tilesPerPosition !== 5: {
        const updatedTilesPerPosition = 5;
        resolve(updatedTilesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.xl && tilesPerPosition !== 6: {
        const updatedTilesPerPosition = 6;
        resolve(updatedTilesPerPosition);
        break;
      }
      default:
    }
  });
}
