import { combineReducers, createStore } from 'redux'
import messageListReducer from './message'
import userReducer from './user'
import workOrderListReducer from './workOrder'

const rootReducer = combineReducers({
  user: userReducer, // 用户信息
  messageList: messageListReducer, // 聊天信息列表
  workOrderList: workOrderListReducer, // 工单列表
})

// 全局状态
const store = createStore(rootReducer)

export default store
