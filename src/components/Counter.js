import React from 'react';
import {connect} from 'dva';
const Counter = (props) =>{
	console.log(props.counter)
	return(
		<div>
		   <h1>1</h1>
		   <button>+</button>
		</div>
		)
}
Counter.propTypes={
	
}

const mapStateToProps = (state)=>{
	return{
		counter:state.counter
	}
}

export default connect(mapStateToProps)(Counter);