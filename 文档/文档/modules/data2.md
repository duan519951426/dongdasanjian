## data2.js

处理请求url和请求数据。
```javascript
define((require, exports, module)=>{
    const data2 = require("data2");

    // 返回url和请求数据拼接成的字符串
    const string = data2["string"](...);
    // 返回object
    const object = data2["object"](...);
});
```
##### 传递参数：

###### data2["string"]：
```javascript
data2["string"](dataFun, url);
```
**dataFun** &lt;object|null&gt;：数据以及获取的方法，null表示没有数据   
**url** &lt;string&gt;：地址   

###### data2["object"]：
```javascript
data2["object"](dataFun);
```
**dataFun** &lt;object|null&gt;：数据以及获取的方法，null表示没有数据   
```javascript
data2["string"]({
    "data1": function(){
        return ...; 
    },
    "data2": "string"
}, url);
```
key：参数的名字   
value&lt;function|string&gt;：参数的获取方法，可以是一个字符串，也可以是一个方法，但是方法必须返回一个字符串   