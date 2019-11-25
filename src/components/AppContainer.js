import { connect } from 'react-redux';
import lodash from 'lodash';
import { increment, decrement, getAllProducts } from '../redux/actions';
import App from './App';

const getCount = state => state.count;

const mapStateToProps = state => ({
  defaultCount: getCount(state),
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  incrementCount: lodash.throttle(value => dispatch(increment(value)), 2000),
  decrementCount: value => dispatch(decrement(value)),
  allProducts: value => dispatch(getAllProducts(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
