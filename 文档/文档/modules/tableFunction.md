## tableFunction.js

操作表格数据的方法。   
依赖模块：[data2](./data2.md)
```javascript
define((require, exports, module)=>{
	const tableFunction = require("tableFunction");

	...
	tableFunction(url, ctrl, dataFun, options, callback);
	...
});

```

* url&lt;String&gt;：地址
* ctrl&lt;String&gt;：执行方法，有ajax、openWindow、newHref
* dataFun&lt;Object|Null&gt;：数据以及获取的方法
```javascript
tableFunction(url, ctrl, {
	"data1": function(){
		return ...
	},
	"data2": "string"
}, options, callback);
```
* options&lt;Object&gt;：其他的可选择的配置选项
* callback&lt;Function&gt;：事件执行完的回调函数

###### ajax
* options.success  操作成功的提示
* options.fail     操作失败的提示
* options.confirm  提示信息

###### openWindow
* options.width  窗口的宽度
* options.height 窗口的高度
* options.title  窗口的标题