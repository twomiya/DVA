// // 3. Model
// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);

const context = require.context('./',false,/\.js$/);
export default context
  .keys()
  .filter(item=>item!=='./index.js')
  .map(key=>context(key));
