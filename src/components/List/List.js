import React from 'react';
import { connect } from 'react-redux';
import css from './List.module.css';
import { deleteProducts } from '../../redux/actions';

const List = props =>
  props.products.map(elem => {
    return (
      <div key={elem.id} className={css.container}>
        <h2>{elem.name}</h2>
        <img className={css.imageContainer} src={elem.image} />
        <button type="button" onClick={() => props.deleteProducts(elem.id)}>
          DELETE
        </button>
        <h2>{elem.ingredients}</h2>
      </div>
    );
  });

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  deleteProducts,
};

export default connect(
  null,
  mapDispatchToProps,
)(List);
