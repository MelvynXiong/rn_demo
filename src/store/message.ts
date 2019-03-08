enum DataType {
  Text, // 文本
  Voice, // 声音
  Image, // 图片
  Video, // 视频
}
// message 数据接口
interface Message {
  id: string // 每条信息的唯一标识
  type: DataType // 信息的类型
  content: string // 具体内容
}
// action types
const UPDATE_MESSAGELIST = 'UPDATE_MESSAGELIST'

// action creators
const updateMessageList = (messageList: Array<Message>) => {
  return { type: UPDATE_MESSAGELIST, messageList }
}
const initialMessageList: Array<Message> = []
// reducer
export default function(
  preMessageList = initialMessageList,
  action: { type: string; messageList: Array<Message> }
): Array<Message> {
  switch (action.type) {
    case UPDATE_MESSAGELIST:
      return action.messageList
    default:
      return preMessageList
  }
}
