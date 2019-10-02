import React from 'react';
import PropTypes from 'prop-types';
import css from './ProfileList.module.css';

const style = {
  title: {
    color: 'tomato',
    fontSize: '30px',
  },
  imageStyle: {
    width: '400px',
  },
};

const ProfileList = ({ title, logo, defaultImage }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <div
        style={{ ...style.imageStyle, backgroundImage: `url(${defaultImage}` }}
      >
        <img alt={title} style={{ width: '100%' }} src={logo} />
      </div>
      <p className={css.subTitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta,
        repellendus, similique veritatis eaque provident accusamus nemo unde
        optio aliquid totam pariatur sapiente quis iusto necessitatibus
        voluptate dolorum quasi aspernatur.
      </p>
    </div>
  );
};

ProfileList.defaultProps = {
  logo:
    'https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
  title: 'default',
  defaultImage:
    'https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
};

ProfileList.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  defaultImage: PropTypes.string,
};

export default ProfileList;
