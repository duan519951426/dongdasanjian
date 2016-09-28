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
    function treeClick($tabs, node){
        if($tabs.tabs("exists", node.text)){
            $tabs.tabs("select", node.text);
        }else{
            if($tabs.tabs("exists", maxtabs - 1) === false){
                $tabs.tabs("add", {
                    title: node.text,
                    selected: true,
                    closable: true,
                    content: `<iframe src="${node.url}"></iframe>`
                });
            }else{
                $.messager.alert("提示", `最多可以打开${maxtabs}个标签。`, "info");
            }
        }
    }
    const tree = ($tabs)=>{
        $(".easyui-tree").tree({
            onSelect: function(node){
                if(node.children){
                    treeSelect.apply(this, [node]);
                }else if(node.url){
                    treeClick($tabs, node);
                }
            }
        });
    };

    const main = ($navs, $tabs)=>{
        const navs = window._config.navs;
        h1($navs, navs);
        tree($tabs);
    };

    module.exports = main;
});