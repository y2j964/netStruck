import mediaBreakpoints from '../mediaBreakpoints';

export default function getUpdatedSlidesPerPosition(
  windowWidth,
  slidesPerPosition,
) {
  return new Promise(resolve => {
    switch (true) {
      case windowWidth < mediaBreakpoints.sm && slidesPerPosition !== 2: {
        const updatedSlidesPerPosition = 2;
        resolve(updatedSlidesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.sm &&
        windowWidth < mediaBreakpoints.md &&
        slidesPerPosition !== 3: {
        const updatedSlidesPerPosition = 3;
        resolve(updatedSlidesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.md &&
        windowWidth < mediaBreakpoints.lg &&
        slidesPerPosition !== 4: {
        const updatedSlidesPerPosition = 4;
        resolve(updatedSlidesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.lg &&
        windowWidth < mediaBreakpoints.xl &&
        slidesPerPosition !== 5: {
        const updatedSlidesPerPosition = 5;
        resolve(updatedSlidesPerPosition);
        break;
      }
      case windowWidth > mediaBreakpoints.xl && slidesPerPosition !== 6: {
        const updatedSlidesPerPosition = 6;
        resolve(updatedSlidesPerPosition);
        break;
      }
      default:
    }
  });
}
