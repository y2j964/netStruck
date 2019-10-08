import React from 'react';
import { Link } from 'react-router-dom';
import onceUponATimeInAmericaPosterWebp200 from '../../images/responsive/onceUponATimeInAmericaPoster-200.webp';
import onceUponATimeInAmericaPosterWebp400 from '../../images/responsive/onceUponATimeInAmericaPoster-400.webp';
import onceUponATimeInAmericaPosterWebp800 from '../../images/responsive/onceUponATimeInAmericaPoster-800.webp';
import onceUponATimeInAmericaPosterWebp1200 from '../../images/responsive/onceUponATimeInAmericaPoster-1200.webp';
import onceUponATimeInAmericaPosterWebp1600 from '../../images/responsive/onceUponATimeInAmericaPoster-1600.webp';
import onceUponATimeInAmericaPosterWebp1920 from '../../images/responsive/onceUponATimeInAmericaPoster-1920.webp';
import onceUponATimeInAmericaPosterJpg200 from '../../images/responsive/onceUponATimeInAmericaPoster-200.jpg';
import onceUponATimeInAmericaPosterJpg400 from '../../images/responsive/onceUponATimeInAmericaPoster-400.jpg';
import onceUponATimeInAmericaPosterJpg800 from '../../images/responsive/onceUponATimeInAmericaPoster-800.jpg';
import onceUponATimeInAmericaPosterJpg1200 from '../../images/responsive/onceUponATimeInAmericaPoster-1200.jpg';
import onceUponATimeInAmericaPosterJpg1600 from '../../images/responsive/onceUponATimeInAmericaPoster-1600.jpg';
import onceUponATimeInAmericaPosterJpg1920 from '../../images/responsive/onceUponATimeInAmericaPoster-1920.jpg';

export default function Hero() {
  return (
    <div className='relative hero'>
      <picture>
        <source
          sizes='100vw'
          srcSet={`${onceUponATimeInAmericaPosterWebp200} 200w,
				  ${onceUponATimeInAmericaPosterWebp400} 400w,
				  ${onceUponATimeInAmericaPosterWebp800} 800w,
				  ${onceUponATimeInAmericaPosterWebp1200} 1200w,
				  ${onceUponATimeInAmericaPosterWebp1600} 1600w,
				  ${onceUponATimeInAmericaPosterWebp1920} 1920w`}
          type='image/webp'
        />
        <source
          sizes='100vw'
          srcSet={`${onceUponATimeInAmericaPosterJpg200} 200w,
				  ${onceUponATimeInAmericaPosterJpg400} 400w,
				  ${onceUponATimeInAmericaPosterJpg800} 800w,
				  ${onceUponATimeInAmericaPosterJpg1200} 1200w,
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
        <div className='max-w-md text-center'>
          <h2 className='text-white text-3xl font-bold'>
            A Film Lover's Fantasy
          </h2>
          <p className='text-white mb-5 leading-tight'>
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
