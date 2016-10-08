/**
 * 左侧菜单导航
 */

define((require, exports, module)=>{
    // 最大标签页
    const maxtabs = window._config.maxtabs || 20;
    // 一级导航
    const h1 = ($navs, navs)=>{
        $.each(navs, function(index){
            $.each(this.children, function(index2){
                this.state = "closed";
            });
            $navs.accordion("add", {
                title: this.text,
                content: $(`<ul class="easyui-tree" style="padding: 5px;"></ul>`).tree({
                    data: this.children
                }),
                selected: false
            });
        });
    };
    // tree的事件
    function treeSelect(node){
        $(this).tree(node.state === "closed" ? "expand" : "collapse", node.target);
    }
    const tree = ($tabs)=>{
        $(".easyui-tree").tree({
            onSelect: function(node){
                if(node.children){
                    treeSelect.apply(this, [node]);
                }else if(node.url){
                    treeClick($tabs, node.text, node.url);
                }
            }
        });
    };
    // 点击添加标签
    function treeClick($tabs, text, url){
        if($tabs.tabs("exists", text)){
            $tabs.tabs("select", text);
        }else{
            if($tabs.tabs("exists", maxtabs - 1) === false){
                $tabs.tabs("add", {
                    title: text,
                    selected: true,
                    closable: true,
                    content: `<iframe src="${url}"></iframe>`
                });
            }else{
                $.messager.alert("提示", `最多可以打开${maxtabs}个标签。`, "info");
            }
        }
    }
    // 对外接口
    const extend = ($tabs)=>{
        window._extend = window._extend || {};
        window._extend.addTabs = function($element){
            $element.on("click", function(event){
                const $this = $(this);
                const text = $this.attr("data-tabs-title"),
                    url = $this.attr("data-tabs-url");
                treeClick($tabs, text, url);
            });
        };
    };

    const main = ($navs, $tabs)=>{
        const navs = window._config.navs;
        h1($navs, navs);
        tree($tabs);
        extend($tabs);
    };

    module.exports = main;
});