/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回kuangji的接口
Mock.mock('/computer', {code:0, data: data.computer})
// 返回dingdan的接口
Mock.mock('/buylist', {code:0, data: data.buylist})
// 返回info的接口
// Mock.mock('/info', {code:0, data: data.info})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可