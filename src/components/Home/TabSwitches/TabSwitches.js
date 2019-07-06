import React, { Component } from 'react';
import TabSwitch from './TabSwitch';
import Play from '../../../icons/Play';
import Eye from '../../../icons/Eye';
import Mobile from '../../../icons/Mobile';

export default class TabSwitches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSwitchesData: [
        {
          id: 1,
          isActive: true,
          btnClasses: 'w-24 h-sm border-2 border-white',
          text: 'The movies you want',
          svg: (
            <Play
              playWidth='25'
              playHeight='25'
              playFill='#fff'
              svgClassName='inline'
            />
          ),
        },
        {
          id: 2,
          isActive: false,
          btnClasses: 'flex justify-center items-center mb-3',
          text: 'Thematically presented',
          svg: <Eye />,
        },
        {
          id: 3,
          isActive: false,
          btnClasses: '',
          text: 'Download the apps',
          svg: <Mobile />,
        },
      ],
    };
  }

  resetActiveTabs = () => {
    const updatedTabSwitchesData = this.state.tabSwitchesData.map(entry => {
      entry.isActive = false;
      return entry;
    });
  };

  activateTab = tabSwitch => {
    if (tabSwitch.isActive) {
      return;
    }
    this.setState(prevState => {
      const updatedTabSwitchesData = prevState.tabSwitchesData.map(entry => {
        // reset irrelevant tabSwitches
        if (entry.id !== tabSwitch.id) {
          entry.isActive = false;
          return entry;
        }
        // activate relevant tabSwitch
        entry.isActive = !entry.isActive;
        return entry;
      });
      return { tabSwitchesData: updatedTabSwitchesData };
    });
  };

  render() {
    const tabSwitchFrags = this.state.tabSwitchesData.map(entry => (
      <TabSwitch
        key={entry.id}
        tabSwitch={entry}
        handleClick={this.activateTab}
      >
        {entry.svg}
      </TabSwitch>
    ));
    return (
      <div className='pt-4 border-b border-gray-700'>
        <ul className='flex justify-center '>{tabSwitchFrags}</ul>
      </div>
    );
  }
}
