import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../component/counter';
import * as CounterActions from '../action/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
