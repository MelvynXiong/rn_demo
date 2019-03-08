// workOrderItem 数据接口
interface WorkOrderItem {
  id: string // 每条工单的唯一标识
  lastModifiedTime: string // 上次修改的时间
  status: string // 工单的状态
  tag: string // 工单相关的标签
  content: string // 工单内容
  rating: string // 评价
  hasNews: boolean // 是否有未读消息
}
// action types
const UPDATE_WORKORDERLIST = 'UPDATE_WORKORDERLIST'

// action creators
const updateWorkOrderList = (workOrderList: Array<WorkOrderItem>) => {
  return { type: UPDATE_WORKORDERLIST, workOrderList }
}
const initialWorkOrderList: Array<WorkOrderItem> = []
// reducer
export default function(
  preWorkOrderList = initialWorkOrderList,
  action: { type: string; messageList: Array<WorkOrderItem> }
): Array<WorkOrderItem> {
  switch (action.type) {
    case UPDATE_WORKORDERLIST:
      return action.messageList
    default:
      return preWorkOrderList
  }
}
