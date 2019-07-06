import React, { Component } from 'react';
import Slides from './Slides';
import amarcord from '../../../images/amarcord.jpg';
import redBalloon from '../../../images/redBalloon.jpg';
import judyGarland from '../../../images/judyGarland.jpg';

export default class CarouselPrimary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          id: 1,
          img: amarcord,
          imgAlt: 'Magali Noël at the Grand Hotel in the film, Amarcord',
          text: `Enjoy continuous access to Criterion’s streaming library of more than 1,000 important
          classic and contemporary films, plus a constantly refreshed selection of Hollywood, international,
          art-house, and independent films from major studios and dozens of independent distributors. Go
          deep with the Criterion Collection’s archive of special features for context that no other service
          can match.`,
        },
        {
          id: 2,
          img: redBalloon,
          imgAlt: 'boy holding a red ballon in the film, The Red Balloon',
          text: `The Criterion Channel is more than just the movies. It's spotlighted series on directors,
          stars, genres, and themes. It’s our 15-minute-a-month film school, Observations on Film Art, or
          the Tuesday Short + Feature and the Friday double bill. It’s letting guest curators like Barry
          Jenkins, Guillermo del Toro, or Mira Nair take you on an adventure in moviegoing—or setting out
          on one of your own!`,
        },
      ],
      slidesCentered: [
        {
          id: 1,
          img: judyGarland,
          imgAlt:
            'Judy Garland framing her face with her hands in the film, A Star is Born',
          text: `The Criterion Channel is available in the U.S. and Canada for $10.99 a
          month or $99.99 a year after a 14-day free trial. Watch now on desktop
          and mobile web browsers or through apps for Apple TV, Amazon Fire,
          Roku, iOS, and Android devices.`,
        },
      ],
    };
  }

  render() {
    return (
      <div className='l-slider'>
        <div className='slider slider--position-1'>
          <Slides
            slideData={this.state.slides}
            slideCenteredData={this.state.slidesCentered}
          />
        </div>
      </div>
    );
  }
}
