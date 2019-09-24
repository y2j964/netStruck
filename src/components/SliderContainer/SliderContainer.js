/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
import uuid from 'uuid';
import SliderSwitches from './SliderSwitches/SliderSwitches';
import Slider from './Slider/Slider';
import Play from '../../icons/Play';
import Eye from '../../icons/Eye';
import Mobile from '../../icons/Mobile';

export default class SliderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderSwitchesData: [
        {
          id: uuid.v4(),
          isActive: true,
          text: 'The movies you want',
          icon: (
            <div className='w-24 h-sm flex justify-center items-center border-2 border-white'>
              <Play
                width='25'
                height='25'
                fill='#fff'
              />
            </div>
          ),
        },
        {
          id: uuid.v4(),
          isActive: false,
          text: 'Thematically presented',
          icon: <Eye />,
        },
        {
          id: uuid.v4(),
          isActive: false,
          text: 'Download the apps',
          icon: <Mobile />,
        },
      ],
    };
  }

  activateTab = targetId => {
    this.setState(prevState => {
      const updatedSliderSwitchesData = prevState.sliderSwitchesData.map(
        entry => {
          // reset irrelevant SliderSwitches
          if (entry.id !== targetId) {
            entry.isActive = false;
            return entry;
          }
          // activate relevant tabSwitch
          entry.isActive = true;
          return entry;
        },
      );
      return { sliderSwitchesData: updatedSliderSwitchesData };
    });
  };

  render() {
    return (
      <React.Fragment>
        <SliderSwitches
          sliderSwitches={this.state.sliderSwitchesData}
          activateTab={this.activateTab}
        />
        <Slider sliderSwitches={this.state.sliderSwitchesData} />
      </React.Fragment>
    );
  }
}
