/**
 * 新数组，用于触发vue的重新渲染
 */

define((require, exports, module)=>{
    const main = (data, index, k)=>{
        const x = {};
        x[k] = [];
        $.each(data[index], function(key, value){
            x[key] = value;
        });
        data.splice(index, 1, x);
    };

    module.exports = main;
});
