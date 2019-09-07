import React, { Component } from 'react';
import FooterItems from './FooterItems';

// 'Criterion Channel',
//         'Netflix',
//         'Cookies',
//         'Sign in',

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerItemsData: [
        {
          text: 'THE CRITERION COLLECTION',
          href: 'https://www.criterion.com/',
        },
        {
          text: 'CRITERION CHANNEL',
          href: 'https://www.criterionchannel.com/',
        },
        {
          text: 'NETFLIX',
          href: 'https://www.netflix.com/',
        },
      ],
    };
  }

  render() {
    return (
      <footer className='p-4'>
        <ul className='flex flex-wrap'>
          <FooterItems linkData={this.state.footerItemsData} />
        </ul>
      </footer>
    );
  }
}
