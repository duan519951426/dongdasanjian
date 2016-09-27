## tools.js

```javascript
define((require, exports, module)=>{
    const tools = require("tools.js");

    // 给数组内的某个对象添加一个新对象，用于触发vue的重新渲染
    tools["newArray"](data, index, k);
    // 格式化价格
    const m = tools["formatMoney"](money);
});
```

##### 传递参数：

###### tools["newArray"]：
```javascript
tools["newArray"](data, index, k);
```
* **data** &lt;array&gt;：数组
* **index** &lt;number&gt;：需要添加新对象的数组的索引
* **k** &lt;string&gt;：新对象的键值名

###### tools["formatMoney"]：
```javascript
tools["formatMoney"](money);
```
* **money** &lt;string|number&gt;：价格
* **return** &lt;string&gt;：格式化后的价格
