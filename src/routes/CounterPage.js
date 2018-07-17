
import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'dva';
import PropTypes from 'prop-types';

const CounterPage = ({counter})=>{
  return(
    <div>
      <p>counter</p>
      <Counter count={counter.count} />
    </div>
  )
}

CounterPage.propTypes={
  counter:PropTypes.object

}
const mapStateToProps = (state)=>{
	return{
		counter:state.counter
	}
}
export default connect(mapStateToProps)(CounterPage);
