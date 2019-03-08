import { createStackNavigator } from 'react-navigation'
import CreateWorkOrder from './CreateWorkOrder'
import WorkOrderInfo from './WorkOrderInfo'
import WorkOrderList from './WorkOrderList'
const WorkOrderNavigator = createStackNavigator(
  {
    WorkOrderList, // 工单列表页
    CreateWorkOrder, // 创建工单页
    WorkOrderInfo, // 工单详情页
  },
  {
    initialRouteName: 'WorkOrderList', // 初始页面
    headerMode: 'none', // 关闭react-navigation渲染的header
  }
)
export default WorkOrderNavigator
