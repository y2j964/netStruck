import React, { Component } from 'react';
import FooterItems from './FooterItems';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerItemsData: [
        'THE CRITERION COLLECTION',
        'Help',
        'Privacy',
        'Cookies',
        'Sign in',
      ],
    };
  }

  render() {
    return (
      <footer className='px-4 py-2 border-t border-gray-700'>
        <ul className='flex'>
          <FooterItems linkData={this.state.footerItemsData} />
        </ul>
      </footer>
    );
  }
}
