import React from 'react';
import { Link } from 'react-router-dom';
import onceUponATimeInAmericaPosterWebp400 from '../../images/responsive/onceUponATimeInAmericaPoster-400.webp';
import onceUponATimeInAmericaPosterWebp640 from '../../images/responsive/onceUponATimeInAmericaPoster-640.webp';
import onceUponATimeInAmericaPosterWebp800 from '../../images/responsive/onceUponATimeInAmericaPoster-800.webp';
import onceUponATimeInAmericaPosterWebp1024 from '../../images/responsive/onceUponATimeInAmericaPoster-1024.webp';
import onceUponATimeInAmericaPosterWebp1200 from '../../images/responsive/onceUponATimeInAmericaPoster-1200.webp';
import onceUponATimeInAmericaPosterWebp1366 from '../../images/responsive/onceUponATimeInAmericaPoster-1366.webp';
import onceUponATimeInAmericaPosterWebp1600 from '../../images/responsive/onceUponATimeInAmericaPoster-1600.webp';
import onceUponATimeInAmericaPosterWebp1920 from '../../images/responsive/onceUponATimeInAmericaPoster-1920.webp';
import onceUponATimeInAmericaPosterJpg400 from '../../images/responsive/onceUponATimeInAmericaPoster-400.jpg';
import onceUponATimeInAmericaPosterJpg640 from '../../images/responsive/onceUponATimeInAmericaPoster-640.jpg';
import onceUponATimeInAmericaPosterJpg800 from '../../images/responsive/onceUponATimeInAmericaPoster-800.jpg';
import onceUponATimeInAmericaPosterJpg1024 from '../../images/responsive/onceUponATimeInAmericaPoster-1024.jpg';
import onceUponATimeInAmericaPosterJpg1200 from '../../images/responsive/onceUponATimeInAmericaPoster-1200.jpg';
import onceUponATimeInAmericaPosterJpg1366 from '../../images/responsive/onceUponATimeInAmericaPoster-1366.jpg';
import onceUponATimeInAmericaPosterJpg1600 from '../../images/responsive/onceUponATimeInAmericaPoster-1600.jpg';
import onceUponATimeInAmericaPosterJpg1920 from '../../images/responsive/onceUponATimeInAmericaPoster-1920.jpg';

export default function Hero() {
  return (
    <div className='relative hero'>
      <picture>
        <source
          sizes='100vw'
          srcSet={`${onceUponATimeInAmericaPosterWebp400} 400w,
				  ${onceUponATimeInAmericaPosterWebp640} 640w,
				  ${onceUponATimeInAmericaPosterWebp800} 800w,
				  ${onceUponATimeInAmericaPosterWebp1024} 1024w,
				  ${onceUponATimeInAmericaPosterWebp1200} 1200w,
				  ${onceUponATimeInAmericaPosterWebp1366} 1366w,
				  ${onceUponATimeInAmericaPosterWebp1600} 1600w,
				  ${onceUponATimeInAmericaPosterWebp1920} 1920w`}
          type='image/webp'
        />
        <source
          sizes='100vw'
          srcSet={`${onceUponATimeInAmericaPosterJpg400} 400w,
				  ${onceUponATimeInAmericaPosterJpg640} 640w,
				  ${onceUponATimeInAmericaPosterJpg800} 800w,
				  ${onceUponATimeInAmericaPosterJpg1024} 1024w,
				  ${onceUponATimeInAmericaPosterJpg1200} 1200w,
				  ${onceUponATimeInAmericaPosterJpg1366} 1366w,
				  ${onceUponATimeInAmericaPosterJpg1600} 1600w,
				  ${onceUponATimeInAmericaPosterJpg1920} 1920w`}
        />
        <img
          src={onceUponATimeInAmericaPosterJpg800}
          alt=''
          className='absolutely-covered'
        />
      </picture>
      <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
        <div className='hero__text-block'>
          <h2 className='hero__header'>A Film Lover&apos;s Fantasy</h2>
          <p className='hero__description'>
            Classics and discoveries from around the world, thematically
            programmed with special features, on a streaming service brought to
            you by the Criterion Collection
          </p>
          <Link to={'/signup'} className='btn-primary btn-primary--wider mb-1'>
            SIGN UP
          </Link>
          <span className='block text-white text-sm font-bold'>
            14-day free trial
          </span>
        </div>
      </div>
    </div>
  );
}
