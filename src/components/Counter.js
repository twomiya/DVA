import React from 'react';
// import {connect} from 'dva';
// import PropTypes from 'prop-types';
const Counter = (props) =>{
	console.log(props)
	return(
		<div>
		   {/* <h1>{props.counter.count}</h1> */}
		   <h1>{props.count} </h1>
		   <button>+</button>
		</div>
		)
}
Counter.propTypes={
  // counter:PropTypes.object

}

// const mapStateToProps = (state)=>{
// 	return{
// 		counter:state.counter
// 	}
// }

// export default connect(mapStateToProps)(Counter);
export default Counter;
