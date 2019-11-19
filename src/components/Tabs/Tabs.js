/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
import uuid from 'uuid';
import TabList from './TabList';
import TabPanelSlider from './TabPanelSlider';
import PlayBox from '../../icons/PlayBox';
import Eye from '../../icons/Eye';
import Mobile from '../../icons/Mobile';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabListData: [
        {
          id: uuid.v4(),
          isActive: true,
          text: 'The movies you want',
          icon: (
            <PlayBox
              fill="#fff"
              stroke="#fff"
              additionalClasses="tab__PlayBox"
            />
          ),
        },
        {
          id: uuid.v4(),
          isActive: false,
          text: 'Thematically presented',
          icon: <Eye additionalClasses="tab__Eye" />,
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
      const updatedTabListData = prevState.tabListData.map(entry => {
        // reset irrelevant TabList
        if (entry.id !== targetId) {
          entry.isActive = false;
          return entry;
        }
        // activate relevant tabSwitch
        entry.isActive = true;
        return entry;
      });
      return { tabListData: updatedTabListData };
    });
  };

  getActiveIndex = () =>
    this.state.tabListData.findIndex(sliderSwitch => sliderSwitch.isActive);

  activatePrevTab = () => {
    const activeIndex = this.getActiveIndex();
    const decrementedActiveIndex =
      activeIndex === 0 ? this.state.tabListData.length - 1 : activeIndex - 1;
    this.setState(prevState => {
      const updatedTabListData = prevState.tabListData.map((entry, index) => {
        if (index === activeIndex) {
          entry.isActive = false;
          return entry;
        }
        if (index === decrementedActiveIndex) {
          entry.isActive = true;
          return entry;
        }
        return entry;
      });

      return { tabListData: updatedTabListData };
    });
  };

  activateNextTab = () => {
    const activeIndex = this.getActiveIndex();
    const incrementedActiveIndex =
      activeIndex === this.state.tabListData.length - 1 ? 0 : activeIndex + 1;
    this.setState(prevState => {
      const updatedTabListData = prevState.tabListData.map((entry, index) => {
        if (index === activeIndex) {
          entry.isActive = false;
          return entry;
        }
        if (index === incrementedActiveIndex) {
          entry.isActive = true;
          return entry;
        }
        return entry;
      });

      return { tabListData: updatedTabListData };
    });
  };

  render() {
    return (
      <React.Fragment>
        <TabList
          tabListData={this.state.tabListData}
          activateTab={this.activateTab}
          activatePrevTab={this.activatePrevTab}
          activateNextTab={this.activateNextTab}
        />
        <TabPanelSlider tabListData={this.state.tabListData} />
      </React.Fragment>
    );
  }
}
