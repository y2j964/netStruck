/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
import uuid from 'uuid';
import TabSwitches from '../TabSwitches/TabSwitches';
import Slider from './Slider/Slider';
import Play from '../../icons/Play';
import Eye from '../../icons/Eye';
import Mobile from '../../icons/Mobile';

export default class SliderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSwitchesData: [
        {
          id: uuid.v4(),
          isActive: true,
          text: 'The movies you want',
          icon: (
            <div className='w-24 h-sm flex justify-center items-center border-2 border-white'>
              <Play
                playWidth='25'
                playHeight='25'
                playFill='#fff'
                iconClassName='inline'
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
      const updatedTabSwitchesData = prevState.tabSwitchesData.map(entry => {
        // reset irrelevant tabSwitches
        if (entry.id !== targetId) {
          entry.isActive = false;
          return entry;
        }
        // activate relevant tabSwitch
        entry.isActive = true;
        return entry;
      });
      return { tabSwitchesData: updatedTabSwitchesData };
    });
  };

  render() {
    return (
      <React.Fragment>
        <TabSwitches
          tabSwitches={this.state.tabSwitchesData}
          activateTab={this.activateTab}
        />
        <Slider tabSwitches={this.state.tabSwitchesData} />
      </React.Fragment>
    );
  }
}
