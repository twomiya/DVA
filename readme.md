## DVA

**1,去掉#**

* 先安装history：

	`$ npm install --save history`
* 在index.js配置：

	```
	import {createBrowserHistory as createHistory} from 'history';
	const app = dva({
		history: createHistory(),
	});
	```