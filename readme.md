## DVA(dva = React-Router + Redux + Redux-saga)

**1,安装DVA**

 * 安装

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
**3,查看是否是单页面应用**

* 查看同一网站的不同网址路径看内容是否相同

`curl http://localhost:8000/counter`

**4,model**

122
