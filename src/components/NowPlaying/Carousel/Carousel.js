/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import uuid from 'uuid';
import CarouselItems from './CarouselItems';
import CarouselCoins from './CarouselCoins';
import ChevronLeft from '../../../icons/ChevronLeft';
import ChevronRight from '../../../icons/ChevronRight';
import thereWillBeBlood from '../../../images/thereWillBeBlood.jpg';
import brokenEmbraces2 from '../../../images/brokenEmbraces2.jpg';
import mistressAmerica2 from '../../../images/mistressAmerica2.jpg';
import lastYearAtMarienbad2 from '../../../images/lastYearAtMarienbad2.jpg';
import masculinFeminin from '../../../images/masculinFeminin.jpg';

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
          img: thereWillBeBlood,
          description:
            "Paul Thomas Anderson's 2007 saga of an oilman, featuring an Oscar award winning performance by Daniel Day-Lewis",
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Masculin Féminin',
          img: masculinFeminin,
          description:
            'The "Pepsi Generation" is subject to subversive Godard wit and playful characterizations by Jean-Pierre Léaud and Chantal Goya in this 1966 French New Wave delight',
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Broken Embraces',
          img: brokenEmbraces2,
          description:
            'Telanovela meets Alfred Hitchcock in this Pedro Almodóvar masterpiece, starring Penélope Cruz',
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Last Year at Marienbad',
          img: lastYearAtMarienbad2,
          description:
            'Is it deja vu or is it something else entirely in this truly one of a kind film directed by Alain Resnais?',
        },
        {
          id: uuid.v4(),
          isActive: false,
          enterFrom: '',
          exitTo: '',
          title: 'Mistress America',
          img: mistressAmerica2,
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
          // if (index > activeIndex) {
          //   entry.enterFrom = 'right';
          //   return entry;
          // }
          // entry.enterFrom = 'left';
          // return entry;
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
        <h2 className='sr-only'>Featured Curated Content</h2>
        <CarouselItems carouselItems={this.state.filmData} />
        <div className='absolute top-0 bottom-0 left-0 flex items-center px-3 z-20'>
          <button
            onClick={this.queuePrevSlide}
            className='chevron-arrow opacity-0'
            aria-label='previous-slide'
          >
            <ChevronLeft />
          </button>
        </div>
        <div className='absolute top-0 bottom-0 right-0 flex items-center px-3 z-20'>
          <button
            onClick={this.queueNextSlide}
            className='chevron-arrow opacity-0'
            aria-label='next-slide'
          >
            <ChevronRight />
          </button>
        </div>
        <div className='absolute left-0 bottom-0 w-full h-10 z-20'>
          <CarouselCoins
            films={this.state.filmData}
            jumpToSlide={this.jumpToSlide}
          />
        </div>
      </section>
    );
  }
}
