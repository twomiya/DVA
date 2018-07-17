import dva from 'dva';
import './index.css';
//解决路径#的问题
import {createBrowserHistory as createHistory} from 'history';

// 1. Initialize
const app = dva({
	history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/counter').default);
// 多个model的处理方式遍历文件夹下的文件生成一个新的数组，再循环
require('./models').default.forEach(key => {
  app.model(key.default)
});


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
