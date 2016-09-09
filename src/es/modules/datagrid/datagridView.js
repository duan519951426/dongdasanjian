/**
 * 数据网格扩展，点击加号显示更多
 * @$element：表格的$element
 * @callback<function>：执行成功的回调函数，参数为获取的json数据
 */

define((require, exports, module)=>{
    // 如果有state的，就添加一个带加号的按钮用来展示更多
    const addJiahao = ($element, data)=>{
        const column = $element.datagrid("getColumnOption", "state");
        column.formatter = (value, row, index)=>{
            if(value){
                return `<input class="eui-datagrid-view-more _DATAGRIDVIEW_STATE_" type="button" value="+" data-state-url="${value.url}" data-state-index="${index}">`;
            }
        };
        return $("._DATAGRIDVIEW_STATE_");
    };
    // 给加号添加事件
    const jiahaoFun = ($state, callback)=>{
        function load(event){
            const $this = $(this);
            $.ajax({
                type: "GET",
                url: $this.attr("data-state-url"),
                async: false, // 异步
                cache: false, // 缓存
                dataType: "json", // 返回数据类型
                error: (request, error, object)=>{
                    console.log(request, error, object);
                    if(error == "timeout"){
                        $.messager.alert("", "请求超时。", "error");
                    }else{
                        $.messager.alert("", "发生错误，无法获取数据。", "error");
                    }
                },
                success: (data)=>{
                    const $tbody = $this.parents("tbody").eq(0);
                    const $tr = $this.parents("tr").eq(0);
                    $(`<tr><td colspan="${$tbody.find("tr").eq(0).find("td").length}">${callback ? callback(data) : ""}</td></tr>`).insertAfter($tr);
                    $this.off("click", load).on("click", display).val("-");
                }
            });
        }
        function display(event){
            const $this = $(this);
            $this.val($this.parents("tr").eq(0).next("tr").toggle().css("display") === "none" ? "+" : "-");
        }
        $state.on("click", load);
    };

    const main = ($element, callback)=>{
        const $before = $element.prev(".datagrid-view");
        const addEtc = ()=>{
            const data = $element.datagrid("getData");
            const $state = addJiahao($element, data);
            jiahaoFun($state, callback);
        };

        $element.datagrid({
            onLoadSuccess: addEtc
        });
    };

    module.exports = main;
});
