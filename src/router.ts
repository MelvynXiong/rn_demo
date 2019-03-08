import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import ChatPage from './views/ChatPage'
import Home from './views/Home'
import Login from './views/Login'
import UserNavigator from './views/UserPages'
import WorkOrderNavigator from './views/WorkOrderPages'
const MainNavigator = createStackNavigator(
  {
    Home, // 首页
    ChatPage, // 消息页
    UserNavigator, // 用户列表页
    WorkOrderNavigator, // 工单页
  },
  {
    initialRouteName: 'Home', // 初始页面
    headerMode: 'none', // 关闭react-navigation渲染的header
  }
)
const RootNavigator = createSwitchNavigator(
  {
    Login, // 登录页
    MainNavigator,
  },
  {
    initialRouteName: 'Login', // 初始页面
  }
)
export default createAppContainer(RootNavigator)
