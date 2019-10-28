import React, { PureComponent } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel';
import TabPanelCentered from './TabPanelCentered';
import phantomThreadWebp400 from '../../../images/responsive/phantomThread-400.webp';
import phantomThreadWebp640 from '../../../images/responsive/phantomThread-640.webp';
import phantomThreadWebp800 from '../../../images/responsive/phantomThread-800.webp';
import phantomThreadWebp1024 from '../../../images/responsive/phantomThread-1024.webp';
import phantomThreadWebp1200 from '../../../images/responsive/phantomThread-1200.webp';
import phantomThreadWebp1366 from '../../../images/responsive/phantomThread-1366.webp';
import phantomThreadWebp1600 from '../../../images/responsive/phantomThread-1600.webp';
import phantomThreadWebp1920 from '../../../images/responsive/phantomThread-1920.webp';
import phantomThreadJpg400 from '../../../images/responsive/phantomThread-400.jpg';
import phantomThreadJpg640 from '../../../images/responsive/phantomThread-640.jpg';
import phantomThreadJpg800 from '../../../images/responsive/phantomThread-800.jpg';
import phantomThreadJpg1024 from '../../../images/responsive/phantomThread-1024.jpg';
import phantomThreadJpg1200 from '../../../images/responsive/phantomThread-1200.jpg';
import phantomThreadJpg1366 from '../../../images/responsive/phantomThread-1366.jpg';
import phantomThreadJpg1600 from '../../../images/responsive/phantomThread-1600.jpg';
import phantomThreadJpg1920 from '../../../images/responsive/phantomThread-1920.jpg';
import redBalloonWebp400 from '../../../images/responsive/redBalloon-400.webp';
import redBalloonWebp640 from '../../../images/responsive/redBalloon-640.webp';
import redBalloonWebp800 from '../../../images/responsive/redBalloon-800.webp';
import redBalloonWebp1024 from '../../../images/responsive/redBalloon-1024.webp';
import redBalloonWebp1200 from '../../../images/responsive/redBalloon-1200.webp';
import redBalloonWebp1366 from '../../../images/responsive/redBalloon-1366.webp';
import redBalloonWebp1600 from '../../../images/responsive/redBalloon-1600.webp';
import redBalloonWebp1920 from '../../../images/responsive/redBalloon-1920.webp';
import redBalloonJpg400 from '../../../images/responsive/redBalloon-400.jpg';
import redBalloonJpg640 from '../../../images/responsive/redBalloon-640.jpg';
import redBalloonJpg800 from '../../../images/responsive/redBalloon-800.jpg';
import redBalloonJpg1024 from '../../../images/responsive/redBalloon-1024.jpg';
import redBalloonJpg1200 from '../../../images/responsive/redBalloon-1200.jpg';
import redBalloonJpg1366 from '../../../images/responsive/redBalloon-1366.jpg';
import redBalloonJpg1600 from '../../../images/responsive/redBalloon-1600.jpg';
import redBalloonJpg1920 from '../../../images/responsive/redBalloon-1920.jpg';
import judyGarlandWebp400 from '../../../images/responsive/judyGarland-400.webp';
import judyGarlandWebp640 from '../../../images/responsive/judyGarland-640.webp';
import judyGarlandWebp800 from '../../../images/responsive/judyGarland-800.webp';
import judyGarlandWebp1024 from '../../../images/responsive/judyGarland-1024.webp';
import judyGarlandWebp1200 from '../../../images/responsive/judyGarland-1200.webp';
import judyGarlandJpg400 from '../../../images/responsive/judyGarland-400.jpg';
import judyGarlandJpg640 from '../../../images/responsive/judyGarland-640.jpg';
import judyGarlandJpg800 from '../../../images/responsive/judyGarland-800.jpg';
import judyGarlandJpg1024 from '../../../images/responsive/judyGarland-1024.jpg';
import judyGarlandJpg1200 from '../../../images/responsive/judyGarland-1200.jpg';

export default class TabPanels extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabPanelsData: [
        {
          id: uuid.v4(),
          isCentered: false,
          heading: 'Collection of Films',
          img: {
            webp400: phantomThreadWebp400,
            webp640: phantomThreadWebp640,
            webp800: phantomThreadWebp800,
            webp1024: phantomThreadWebp1024,
            webp1200: phantomThreadWebp1200,
            webp1366: phantomThreadWebp1366,
            webp1600: phantomThreadWebp1600,
            webp1920: phantomThreadWebp1920,
            jpg400: phantomThreadJpg400,
            jpg640: phantomThreadJpg640,
            jpg800: phantomThreadJpg800,
            jpg1024: phantomThreadJpg1024,
            jpg1200: phantomThreadJpg1200,
            jpg1366: phantomThreadJpg1366,
            jpg1600: phantomThreadJpg1600,
            jpg1920: phantomThreadJpg1920,
          },
          imgAlt: '',
          text: `Enjoy continuous access to Criterion’s streaming library of more than 1,000 important
            classic and contemporary films, plus a constantly refreshed selection of Hollywood, international,
            art-house, and independent films from major studios and dozens of independent distributors. Go
            deep with the Criterion Collection’s archive of special features for context that no other service
            can match.`,
        },
        {
          id: uuid.v4(),
          isCentered: false,
          heading: 'Variety of Content',
          img: {
            webp400: redBalloonWebp400,
            webp640: redBalloonWebp640,
            webp800: redBalloonWebp800,
            webp1024: redBalloonWebp1024,
            webp1200: redBalloonWebp1200,
            webp1366: redBalloonWebp1366,
            webp1600: redBalloonWebp1600,
            webp1920: redBalloonWebp1920,
            jpg400: redBalloonJpg400,
            jpg640: redBalloonJpg640,
            jpg800: redBalloonJpg800,
            jpg1024: redBalloonJpg1024,
            jpg1200: redBalloonJpg1200,
            jpg1366: redBalloonJpg1366,
            jpg1600: redBalloonJpg1600,
            jpg1920: redBalloonJpg1920,
          },
          imgAlt: '',
          text: `NetStruck is more than just the movies. It's spotlighted series on directors,
            stars, genres, and themes. It’s our 15-minute-a-month film school, Observations on Film Art, or
            the Tuesday Short + Feature and the Friday double bill. It’s letting guest curators like Barry
            Jenkins, Guillermo del Toro, or Mira Nair take you on an adventure in moviegoing—or setting out
            on one of your own!`,
        },
        {
          id: uuid.v4(),
          isCentered: true,
          heading: 'Platform Diversity',
          img: {
            webp400: judyGarlandWebp400,
            webp640: judyGarlandWebp640,
            webp800: judyGarlandWebp800,
            webp1024: judyGarlandWebp1024,
            webp1200: judyGarlandWebp1200,
            jpg400: judyGarlandJpg400,
            jpg640: judyGarlandJpg640,
            jpg800: judyGarlandJpg800,
            jpg1024: judyGarlandJpg1024,
            jpg1200: judyGarlandJpg1200,
          },
          imgAlt: '',
          text: `NetStruck is available in the U.S. and Canada for $10.99 a
            month or $99.99 a year after a 14-day free trial. Watch now on desktop
            and mobile web browsers or through apps for Apple TV, Amazon Fire,
            Roku, iOS, and Android devices.`,
        },
      ],
    };
  }

  render() {
    const tabPanelFrags = this.state.tabPanelsData.map((entry, index) => {
      if (!entry.isCentered) {
        return (
          <TabPanel
            key={entry.id}
            tabPanel={entry}
            index={index}
            isActive={this.props.tabListData[index].isActive}
          />
        );
      }
      return (
        <TabPanelCentered
          key={entry.id}
          tabPanel={entry}
          index={index}
          isActive={this.props.tabListData[index].isActive}
        />
      );
    });

    return tabPanelFrags;
  }
}

TabPanels.propTypes = {
  tabListData: PropTypes.array.isRequired,
};
