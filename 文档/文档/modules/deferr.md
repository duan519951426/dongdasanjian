## deferr.js

deferr.js用于延迟执行事件，防止某些事件在在easyui未初始化完毕之前就执行。
   
```javascript
define((require, exports, module)=>{
	const deferr = require("deferr");

	const fun = ()=>{
	};

	deferr(fun);
});
```
##### 传递参数：
```javascript
deferr(fun);
```
* fun&lt;Function&gt;：需要延迟加载的事件

