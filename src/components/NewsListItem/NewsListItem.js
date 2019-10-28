import React from 'react';
import { Consumer } from '../App';
import css from './NewsListItem.module.css';

// console.log('css', css);

const NewsListItem = ({ title, urlToImage, description }) => (
  <>
    <Consumer>
      {value => {
        console.log('NewsListItem CONSUMER', value);
        return (
          <div
            className={css.container}
            style={{
              backgroundColor: `${value.theme}`,
              color: `${value.theme === 'black' ? 'white' : 'black'}`,
            }}
          >
            <button onClick={() => value.fn()}>click me !</button>
            <h2>{title}</h2>
            <img style={{ width: '100%' }} src={urlToImage} />
            <p>{description}</p>
          </div>
        );
      }}
    </Consumer>
  </>
);

export default NewsListItem;

// const NewsListItem = ({ title, urlToImage, description }) => (
//   <>
//     <div className={css.container}>
//       <h2>{title}</h2>
//       <img style={{ width: '100%' }} src={urlToImage} />
//       <Consumer>
//         {value => {
//           return (
//             <>
//               <p
//                 style={{
//                   backgroundColor: `${value.theme}`,
//                   color: `${value.theme === 'black' ? 'white' : 'black'}`,
//                 }}
//               >
//                 {description}
//               </p>
//             </>
//           );
//         }}
//       </Consumer>
//     </div>
//   </>
// );

// export default NewsListItem;
