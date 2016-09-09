/**
 * 处理获取的data数据
 * @data<array>：要处理的数据
 * @key<string>：给id赋值的数据键值
 * @oldData<string>：旧数据，用于对比并剔除重复的数据
 */

define((require, exports, module)=>{
    // 判断是否重复
    // 重复返回false，不重复返回true
    const isRepeat = (id, oldData)=>{
        let r = true;
        if(oldData){
            // 从后往前计算，避免删除数组导致的索引对不上
            for(let i = oldData.length - 1; i >= 0; i--){
                if(oldData[i].id === id){
                    r = false;
                    break;
                }
            }
        }
        return r;
    };
    // 生成数据
    const main = (data, key, oldData)=>{
        for(let i = data.length - 1; i >= 0; i--){
            if(isRepeat(data[i].id, oldData) === true){
                data[i].id = data[i][key];
                data[i].addZilei = true;  // 允许添加子类
                data[i].addYusuan = true; // 允许添加预算
            }else{
                data.splice(i, 1);
            }

        }
        return data;
    };
    module.exports = main;
});