import React from 'react';
import PropTypes from 'prop-types';
import FilmRow from './FilmRow';

export default function FilmRows({ filmData }) {
  const filmRowFrags = filmData.map(entry => (
    <FilmRow
      key={entry.id}
      img={entry.img}
      title={entry.title}
      director={entry.director}
      duration={entry.duration}
      year={entry.year}
      slug={entry.slug}
    />
  ));

  return filmRowFrags;
}

FilmRows.propTypes = {
  filmData: PropTypes.array,
};
// import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import FilmRow from './FilmRow';
// import useIsIntersecting from '../../utilityFunctions/useIsIntersecting';

// export default function FilmRows({ filmData, loadMore }) {
//   const ref = useRef();

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '0px 0px 200px 0px',
//       threshold: 1.0,
//     };
//     const refCurrent = ref.current;
//     const observer = new IntersectionObserver(([entry]) => {
//       const { isIntersecting } = entry;

//       if (isIntersecting) {
//         loadMore();
//         observer.disconnect(refCurrent);
//       }
//     }, options);

//     if (refCurrent) {
//       observer.observe(refCurrent);
//     }

//     return () => {
//       observer.unobserve(refCurrent);
//     };
//   }, [ref, loadMore]);

//   const filmRowFrags = filmData.map(entry => (
//     <FilmRow
//       key={entry.id}
//       img={entry.img}
//       title={entry.title}
//       director={entry.director}
//       duration={entry.duration}
//       year={entry.year}
//       slug={entry.slug}
//     />
//   ));

//   return (
//     <React.Fragment>
//       {filmRowFrags}
//       <tr aria-hidden='true' ref={ref}></tr>
//     </React.Fragment>
//   );
// }

// FilmRows.propTypes = {
//   filmData: PropTypes.array,
// };
