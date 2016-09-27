# 东大三建

#### 1、工具
构建工具：gulp   
html：jade   
css：sass   
javascript：es6   
库和框架：[jquery(v1.12.4)](https://jquery.com/)、[easyui(v1.5)](http://www.jeasyui.net/)、[vue(v1.0.26)](https://cn.vuejs.org/)   
加载工具：[requirejs](http://www.requirejs.cn/)   
模拟数据：node   
版本管理工具：git

#### 2、javascript
所有的javascript采用es6语法，页面引入js文件使用requirejs，规范使用cmd规范   
requirejs配置文件：
```javascript
require.config({
    /* js文件夹路径 */
    baseUrl: '/js/', 
    /* 文件配置，使用超过一次以上的模块在这里配置 */
    paths: {
        "name": "url"
    },
    /* 依赖 */
    shim: {
        "插件名称": {
            deps: ["依赖插件名称"]
        }
    }
});
```
页面上引入：
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require([
        /* 引入模块，模块的url或者模块的name */
        "module1", // 模块1
        "module2"  // 模块2
    ], function (module1, module2) {
        /* 执行模块 */
        module1(...); // 执行模块1(传递参数)
        module2(...); // 执行模块2(传递参数)
    });
</script>
```
js书写：
```javascript
define((require, exports, module)=>{
    const r = require(...); // 包含其他模块
	
    const etc = ()=>{
    // 其他函数
    };

    const main = (...)=>{ // 参数
    // 主函数
    };
	
    // 对外导出接口
    module.exports = main; 
});
```

#### 3、[js模块文档](./scripts.md)