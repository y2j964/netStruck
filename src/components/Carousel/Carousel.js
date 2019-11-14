/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import uuid from 'uuid';
import CarouselItems from './CarouselItems';
import CarouselCoins from './CarouselCoins';
import PreviousSlideTrigger from '../PreviousSlideTrigger';
import NextSlideTrigger from '../NextSlideTrigger';
import thereWillBeBloodPosterWebp400 from '../../images/responsive/thereWillBeBloodPoster-400.webp';
import thereWillBeBloodPosterWebp640 from '../../images/responsive/thereWillBeBloodPoster-640.webp';
import thereWillBeBloodPosterWebp800 from '../../images/responsive/thereWillBeBloodPoster-800.webp';
import thereWillBeBloodPosterWebp1024 from '../../images/responsive/thereWillBeBloodPoster-1024.webp';
import thereWillBeBloodPosterWebp1200 from '../../images/responsive/thereWillBeBloodPoster-1200.webp';
import thereWillBeBloodPosterJpg400 from '../../images/responsive/thereWillBeBloodPoster-400.jpg';
import thereWillBeBloodPosterJpg640 from '../../images/responsive/thereWillBeBloodPoster-640.jpg';
import thereWillBeBloodPosterJpg800 from '../../images/responsive/thereWillBeBloodPoster-800.jpg';
import thereWillBeBloodPosterJpg1200 from '../../images/responsive/thereWillBeBloodPoster-1200.jpg';
import brokenEmbracesPosterWebp400 from '../../images/responsive/brokenEmbracesPoster-400.webp';
import brokenEmbracesPosterWebp640 from '../../images/responsive/brokenEmbracesPoster-640.webp';
import brokenEmbracesPosterWebp800 from '../../images/responsive/brokenEmbracesPoster-800.webp';
import brokenEmbracesPosterWebp1024 from '../../images/responsive/brokenEmbracesPoster-1024.webp';
import brokenEmbracesPosterWebp1200 from '../../images/responsive/brokenEmbracesPoster-1200.webp';
import brokenEmbracesPosterJpg400 from '../../images/responsive/brokenEmbracesPoster-400.jpg';
import brokenEmbracesPosterJpg640 from '../../images/responsive/brokenEmbracesPoster-640.jpg';
import brokenEmbracesPosterJpg800 from '../../images/responsive/brokenEmbracesPoster-800.jpg';
import brokenEmbracesPosterJpg1200 from '../../images/responsive/brokenEmbracesPoster-1200.jpg';
import mistressAmericaPosterWebp400 from '../../images/responsive/mistressAmericaPoster-400.webp';
import mistressAmericaPosterWebp640 from '../../images/responsive/mistressAmericaPoster-640.webp';
import mistressAmericaPosterWebp800 from '../../images/responsive/mistressAmericaPoster-800.webp';
import mistressAmericaPosterWebp1024 from '../../images/responsive/mistressAmericaPoster-1024.webp';
import mistressAmericaPosterWebp1200 from '../../images/responsive/mistressAmericaPoster-1200.webp';
import mistressAmericaPosterJpg400 from '../../images/responsive/mistressAmericaPoster-400.jpg';
import mistressAmericaPosterJpg640 from '../../images/responsive/mistressAmericaPoster-640.jpg';
import mistressAmericaPosterJpg800 from '../../images/responsive/mistressAmericaPoster-800.jpg';
import mistressAmericaPosterJpg1200 from '../../images/responsive/mistressAmericaPoster-1200.jpg';
import lastYearAtMarienbadPosterWebp400 from '../../images/responsive/lastYearAtMarienbadPoster-400.webp';
import lastYearAtMarienbadPosterWebp640 from '../../images/responsive/lastYearAtMarienbadPoster-640.webp';
import lastYearAtMarienbadPosterWebp800 from '../../images/responsive/lastYearAtMarienbadPoster-800.webp';
import lastYearAtMarienbadPosterWebp1024 from '../../images/responsive/lastYearAtMarienbadPoster-1024.webp';
import lastYearAtMarienbadPosterWebp1200 from '../../images/responsive/lastYearAtMarienbadPoster-1200.webp';
import lastYearAtMarienbadPosterJpg400 from '../../images/responsive/lastYearAtMarienbadPoster-400.jpg';
import lastYearAtMarienbadPosterJpg640 from '../../images/responsive/lastYearAtMarienbadPoster-640.jpg';
import lastYearAtMarienbadPosterJpg800 from '../../images/responsive/lastYearAtMarienbadPoster-800.jpg';
import lastYearAtMarienbadPosterJpg1200 from '../../images/responsive/lastYearAtMarienbadPoster-1200.jpg';
import masculinFemininPosterWebp400 from '../../images/responsive/masculinFemininPoster-400.webp';
import masculinFemininPosterWebp640 from '../../images/responsive/masculinFemininPoster-640.webp';
import masculinFemininPosterWebp800 from '../../images/responsive/masculinFemininPoster-800.webp';
import masculinFemininPosterWebp1024 from '../../images/responsive/masculinFemininPoster-1024.webp';
import masculinFemininPosterWebp1200 from '../../images/responsive/masculinFemininPoster-1200.webp';
import masculinFemininPosterJpg400 from '../../images/responsive/masculinFemininPoster-400.jpg';
import masculinFemininPosterJpg640 from '../../images/responsive/masculinFemininPoster-640.jpg';
import masculinFemininPosterJpg800 from '../../images/responsive/masculinFemininPoster-800.jpg';
import masculinFemininPosterJpg1200 from '../../images/responsive/masculinFemininPoster-1200.jpg';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmData: [
        {
          id: uuid.v4(),
          isActive: true,
          enterFrom: '',
          exitTo: '',
          title: 'There Will Be Blood',
          slug: 'there-will-be-blood',
          img: {
            webp400: thereWillBeBloodPosterWebp400,
            webp640: thereWillBeBloodPosterWebp640,
            webp800: thereWillBeBloodPosterWebp800,
            webp1024: thereWillBeBloodPosterWebp1024,
            webp1200: thereWillBeBloodPosterWebp1200,
            jpg400: thereWillBeBloodPosterJpg400,
            jpg640: thereWillBeBloodPosterJpg640,
            jpg800: thereWillBeBloodPosterJpg800,
            jpg1200: thereWillBeBloodPosterJpg1200,
          },
          description:
            "Paul Thomas Anderson's 2007 saga of an competitive oilman, featuring an Oscar award winning performance by Daniel Day-Lewis",
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Masculin Féminin',
          slug: 'masculin-féminin',
          img: {
            webp400: masculinFemininPosterWebp400,
            webp640: masculinFemininPosterWebp640,
            webp800: masculinFemininPosterWebp800,
            webp1024: masculinFemininPosterWebp1024,
            webp1200: masculinFemininPosterWebp1200,
            jpg400: masculinFemininPosterJpg400,
            jpg640: masculinFemininPosterJpg640,
            jpg800: masculinFemininPosterJpg800,
            jpg1200: masculinFemininPosterJpg1200,
          },
          description:
            'The "Pepsi Generation" is subject to subversive Godard wit and playful characterizations by Jean-Pierre Léaud and Chantal Goya in this 1966 French New Wave delight',
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Broken Embraces',
          slug: 'broken-embraces',
          img: {
            webp400: brokenEmbracesPosterWebp400,
            webp640: brokenEmbracesPosterWebp640,
            webp800: brokenEmbracesPosterWebp800,
            webp1024: brokenEmbracesPosterWebp1024,
            webp1200: brokenEmbracesPosterWebp1200,
            jpg400: brokenEmbracesPosterJpg400,
            jpg640: brokenEmbracesPosterJpg640,
            jpg800: brokenEmbracesPosterJpg800,
            jpg1200: brokenEmbracesPosterJpg1200,
          },
          description:
            'Telanovela meets Alfred Hitchcock in this Pedro Almodóvar masterpiece, starring Penélope Cruz',
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Last Year at Marienbad',
          slug: 'last-year-at-marienbad',
          img: {
            webp400: lastYearAtMarienbadPosterWebp400,
            webp640: lastYearAtMarienbadPosterWebp640,
            webp800: lastYearAtMarienbadPosterWebp800,
            webp1024: lastYearAtMarienbadPosterWebp1024,
            webp1200: lastYearAtMarienbadPosterWebp1200,
            jpg400: lastYearAtMarienbadPosterJpg400,
            jpg640: lastYearAtMarienbadPosterJpg640,
            jpg800: lastYearAtMarienbadPosterJpg800,
            jpg1200: lastYearAtMarienbadPosterJpg1200,
          },
          description:
            'Is it deja vu or is it something else entirely in this truly one of a kind film directed by Alain Resnais?',
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Mistress America',
          slug: 'mistress-america',
          img: {
            webp400: mistressAmericaPosterWebp400,
            webp640: mistressAmericaPosterWebp640,
            webp800: mistressAmericaPosterWebp800,
            webp1024: mistressAmericaPosterWebp1024,
            webp1200: mistressAmericaPosterWebp1200,
            jpg400: mistressAmericaPosterJpg400,
            jpg640: mistressAmericaPosterJpg640,
            jpg800: mistressAmericaPosterJpg800,
            jpg1200: mistressAmericaPosterJpg1200,
          },
          description:
            'Noah Baumbach serves up a modern screwball comedy classic in what marks his third collaboration with actress Greta Gerwig',
        },
      ],
    };
  }

  getActiveIndex = () =>
    this.state.filmData.findIndex(obj => obj.isActive === true);

  queueNextSlide = () => {
    const activeIndex = this.getActiveIndex();
    const incrementedActiveIndex =
      activeIndex === this.state.filmData.length - 1 ? 0 : activeIndex + 1;

    this.setState(prevState => {
      const updatedFilmData = prevState.filmData.map((entry, index) => {
        if (index === activeIndex) {
          entry.isActive = false;
          entry.enterFrom = '';
          entry.exitTo = 'left';
          return entry;
        }
        if (index === incrementedActiveIndex) {
          entry.isActive = true;
          entry.exitTo = '';
          entry.enterFrom = 'right';
          return entry;
        }
        return entry;
      });

      return { filmData: updatedFilmData };
    });
  };

  queuePrevSlide = () => {
    const activeIndex = this.getActiveIndex();
    const decrementedActiveIndex =
      activeIndex === 0 ? this.state.filmData.length - 1 : activeIndex - 1;

    this.setState(prevState => {
      const updatedFilmData = prevState.filmData.map((entry, index) => {
        if (index === activeIndex) {
          entry.isActive = false;
          entry.enterFrom = '';
          entry.exitTo = 'right';
          return entry;
        }
        if (index === decrementedActiveIndex) {
          entry.isActive = true;
          entry.exitTo = '';
          entry.enterFrom = 'left';
          return entry;
        }
        entry.enterFrom = '';
        entry.exitTo = '';
        return entry;
      });

      return { filmData: updatedFilmData };
    });
  };

  jumpToSlide = targetId => {
    this.setState(prevState => {
      const updatedFilmData = prevState.filmData.map(entry => {
        if (entry.id !== targetId) {
          entry.isActive = false;
          return entry;
        }
        entry.isActive = true;
        return entry;
      });

      return { filmData: updatedFilmData };
    });
  };

  triggerCarouselArrow = e => {
    const key = e.key || e.code;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
      return;
    }
    if (key === 'ArrowRight') {
      this.queueNextSlide();
    } else {
      this.queuePrevSlide();
    }
  };

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <section
        className='carousel'
        aria-roledescription='carousel'
        tabIndex='-1'
        onKeyDown={this.triggerCarouselArrow}
      >
        <h2 className='sr-only'>Film Carousel Smorgasbord</h2>
        <div className='carousel-trigger-overlay carousel-trigger-overlay--left'>
          <PreviousSlideTrigger
            handleClick={this.queuePrevSlide}
            classes='carousel__trigger'
            svgClasses='carousel__chevron'
            ariaLabel='display previous slide'
          />
        </div>
        <CarouselItems featuredFilms={this.state.filmData} />
        <div className='carousel-trigger-overlay carousel-trigger-overlay--right'>
          <NextSlideTrigger
            handleClick={this.queueNextSlide}
            classes='carousel__trigger'
            svgClasses='carousel__chevron'
            ariaLabel='display next slide'
          />
        </div>
        <div className='absolute left-0 bottom-0 w-full h-10 z-20'>
          <CarouselCoins
            featuredFilms={this.state.filmData}
            jumpToSlide={this.jumpToSlide}
          />
        </div>
      </section>
    );
  }
}
