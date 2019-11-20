import { connect } from 'react-redux';
import {
  increment,
  decrement,
  getAllProducts,
  chooseIngredients,
} from '../redux/actions';
import App from './App';

const getCount = state => state.count;

const mapStateToProps = state => ({
  defaultCount: getCount(state),
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  incrementCount: value => dispatch(increment(value)),
  decrementCount: value => dispatch(decrement(value)),
  allProducts: value => dispatch(getAllProducts(value)),
  getIngredients: value => dispatch(chooseIngredients(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
