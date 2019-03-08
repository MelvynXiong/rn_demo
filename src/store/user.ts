// user 数据接口
interface User {
  id: string // 唯一标识
  name: string // 使用者名字
  company: string // 使用者所属公司
  portrait: string // 使用者头像图标
  members: Array<User> // 使用者关联的用户
}
// action types
const UPDATE_USER = 'UPDATE_USER'
// action creators
const updateUser = (user: User) => {
  return { type: UPDATE_USER, user }
}
// 初始状态
const initialUser: User = {}

// reducer
export default function(
  preUser = initialUser,
  action: { type: string; user?: User }
): User {
  switch (action.type) {
    case UPDATE_USER:
      return { ...preUser, ...action.user }
    default:
      return preUser
  }
}
