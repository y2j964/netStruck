import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TabPanels from './TabPanels';
import useIsIntersecting from '../../utilityFunctions/useIsIntersecting';
import { tabListDataTypes } from './types';

const options = {
  root: null,
  rootMargin: '0px 0px 300px 0px',
  threshold: 0.5,
};

export default function TabPanelSlider({ tabListData }) {
  const ref = useRef();
  const isIntersecting = useIsIntersecting(ref, options);

  // the classnames start at index 1, so add 1 to found active index to translate
  const tabPanelSliderPosition = tabListData.findIndex(tab => tab.isActive) + 1;

  return (
    <div className="l-tab-panel-slider" ref={ref}>
      <div
        className={`tab-panel-slider tab-panel-slider--position-${tabPanelSliderPosition}`}
      >
        {isIntersecting && <TabPanels tabListData={tabListData} />}
      </div>
    </div>
  );
}

TabPanelSlider.propTypes = {
  tabListData: PropTypes.arrayOf(tabListDataTypes).isRequired,
};
