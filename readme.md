## DVA

**1,安装DVA**

`npm install -g dva-cli`

 * 安装的过程中一直报错，就采用的cnpm安装方式就好了。

 `npm install -g cnpm --registry=https://registry.npm.taobao.org `

 * 查看dva版本

 `dva -v`

 * 创建新项目

 `dva new dva-demo`

 * 运行项目

 ```
 cd dva-demo
 npm start
 ```

**2,去掉#**

* 先安装history：

	`$ npm install --save history`
* 在index.js配置：

	```
	import {createBrowserHistory as createHistory} from 'history';
	const app = dva({
		history: createHistory(),
	});
	```