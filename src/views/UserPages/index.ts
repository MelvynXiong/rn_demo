import { createStackNavigator } from 'react-navigation'
import EditingUser from './EditingUser'
import UserInfo from './UserInfo'
import UserList from './UserList'
const UserNavigator = createStackNavigator(
  {
    UserList, // 成员列表
    UserInfo, // 用户信息页
    EditingUser, // 用户编辑页
  },
  {
    initialRouteName: 'UserList', // 初始页面
    headerMode: 'none', // 关闭react-navigation渲染的header
  }
)

export default UserNavigator
