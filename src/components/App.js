import React, { Component } from 'react';
import products from '../products.json';
import List from './List/List';
import Selected from '../components/Select/Select';
import { filter } from './Select/selectors';
import getNews from '../redux/operations';
import { connect } from 'react-redux';
class App extends Component {
  state = {
    step: 10,
    ingredients: '',
  };

  componentDidMount() {
    console.log('woooork redux');
    this.props.allProducts(products);
    this.props.getNews();
  }

  increment = () => {
    this.props.incrementCount(this.state.step);
  };
  decrement = () => {
    this.props.decrementCount(this.state.step);
  };

  chooseIngredients = value => {
    this.setState({
      ingredients: value.value,
    });
  };

  render() {
    const { defaultCount, products } = this.props;
    const { ingredients } = this.state;
    // console.log(products);
    const getIngr = filter(products, ingredients);
    console.log('data ------------------->', this.props.data);
    // console.log(getIngr);

    return (
      <div>
        <button onClick={this.increment}>INCREMENT</button>
        <h2>{defaultCount}</h2>
        <button onClick={this.decrement}>DECREMENT</button>
        <Selected handleChange={this.chooseIngredients} />
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
          <List products={getIngr.length !== 0 ? getIngr : products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.news,
});

const mapDispatchToProps = {
  getNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
