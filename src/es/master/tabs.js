/**
 * 中部选项卡
 */

define((require, exports, module)=>{
    // 获取itemElement
    const getItemEl = ($menu, id)=>{
        return $menu.menu("getItem", document.getElementById(id));
    };

    const contextHeader = ($tabs, $menu, close)=>{
        $tabs.tabs({
            onContextMenu: function(e, title, index){
                e.preventDefault();
                if($(e.target).hasClass("tabs-closable")){
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

    const main = ($tabs, $menu)=>{
        const close = getItemEl($menu, "master-menu-close");
console.log(close);
        contextHeader($tabs, $menu, close);
    };
    module.exports = main;
});