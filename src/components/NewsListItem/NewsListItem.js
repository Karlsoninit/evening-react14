import React from 'react';
import { Consumer } from '../App';
import css from './NewsListItem.module.css';
import { Link, NavLink } from 'react-router-dom';
// console.log('css', css);

const NewsListItem = ({
  title,
  urlToImage,
  description,
  publishedAt,
  category,
  param,
}) => (
  <>
    <Consumer>
      {value => {
        // console.log('NewsListItem CONSUMER', value);
        return (
          <Link
            style={{ textDecoration: 'none' }}
            to={{
              pathname: `${param}/category=${category}&search=${publishedAt}&name=${title}`,
              state: {
                category: category,
                params: param,
              },
            }}
          >
            <div
              className={css.container}
              style={{
                backgroundColor: `${value.theme}`,
                color: `${value.theme === 'black' ? 'white' : 'black'}`,
              }}
            >
              <h2>{title}</h2>
              <img style={{ width: '100%' }} src={urlToImage} />
              <p>{description}</p>
            </div>
          </Link>
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
