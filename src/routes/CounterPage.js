
import React from 'react';
import { connect } from 'dva';
function CounterPage() {
  return (
    <div>
    CounterPage.js
    </div>
  );
}

CounterPage.propTypes = {
};

export default connect()(CounterPage);
