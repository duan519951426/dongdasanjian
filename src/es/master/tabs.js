/**
 * 中部选项卡
 */

define((require, exports, module)=>{
    // 如果有这个className，表示可以关闭
    const closeClassName = "tabs-closable";

    // 获取itemElement
    const getItemEl = ($menu, id)=>{
        return $menu.menu("getItem", document.getElementById(id));
    };

    // 给tabs添加右键点击事件
    const contextHeader = ($tabs, $menu, close)=>{
        $tabs.tabs({
            onContextMenu: function(e, title, index){
                e.preventDefault();
                if($(e.target).hasClass(closeClassName)){
                    $menu.menu("enableItem", close);
                }else{
                    $menu.menu("disableItem", close);
                }
                $menu.menu("show", {
                    left: e.pageX,
                    top: e.pageY
                });
            }
        });
    };

    // 右键点击执行
    const menuFun = {
        // 刷新
        "reload": ($tabs, tLength)=>{
            $tabs.tabs("getSelected").find("iframe")[0].contentWindow.location.reload();
        },
        // 关闭
        "close": ($tabs, tLength)=>{
            const index = $tabs.tabs("getTabIndex", $tabs.tabs("getSelected"));
            $tabs.tabs("close", index);
        },
        // 关闭其他
        "closeEtc": ($tabs, tLength)=>{
            const index = $tabs.tabs("getTabIndex", $tabs.tabs("getSelected"));
            for(let i = $tabs.tabs("tabs").length - 1; i >= tLength; i--){
                if(i !== index){
                    $tabs.tabs("close", i);
                }
            }
            $tabs.tabs("select", tLength);
        },
        // 关闭全部
        "closeAll": ($tabs, tLength)=>{
            for(let i = $tabs.tabs("tabs").length - 1; i >= tLength; i--){
                $tabs.tabs("close", i);
            }
        }
    };
    const menuCk = ($tabs, $menu, tLength)=>{
        $menu.menu({
            onClick: function(item){
                menuFun[item.name]($tabs, tLength);
            }
        });

    };

    const main = ($tabs, $menu, tLength)=>{
        const close = getItemEl($menu, "master-menu-close").target;
        contextHeader($tabs, $menu, close);
        menuCk($tabs, $menu, tLength);
    };
    module.exports = main;
});