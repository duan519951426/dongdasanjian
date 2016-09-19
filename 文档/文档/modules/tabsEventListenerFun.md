## tabsEventListenerFun.js

选项卡绑定事件。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["common", "tabsEventListenerFun"], function (common, tabsEventListenerFun) {
		tabsEventListenerFun($element, fun, more, index);
	});
</script>
```
* $element&lt;$selector&gt;：选项卡
* fun&lt;Array&gt;：各个索引执行的事件，数组内为Function或者null（不执行）
* more&lt;Boolean&gt;：执行次数，true 多次，false 一次
* index&lt;Number&gt;：初始化执行的函数索引，默认不执行