import React from 'react';
import { connect } from 'react-redux';
import css from './List.module.css';
import { deleteItem } from '../../redux/actions';

const List = props =>
  props.products.map(elem => {
    return (
      <div key={elem.id} className={css.container}>
        <h2>{elem.name}</h2>
        <img className={css.imageContainer} src={elem.image} />
        <button onClick={() => props.deleteItem(elem.id)}>Delete</button>
      </div>
    );
  });

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  deleteItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(List);
