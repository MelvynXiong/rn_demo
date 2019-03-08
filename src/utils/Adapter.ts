import { Dimensions } from 'react-native'

// UI设计图的宽度
const designWidth = 750
// UI设计图的高度
const designHeight = 1334

// 手机屏幕的宽度
const width = Dimensions.get('window').width
// 手机屏幕的高度
const height = Dimensions.get('window').height
// 计算手机屏幕宽度对应设计图宽度的单位宽度
const unitWidth = width / designWidth
// 计算手机屏幕高度对应设计图高度的单位高度
const unitHeight = height / designHeight

export const adaptiveWidth = (width:number) => width * unitWidth
export const adaptiveHeight = (height:number) => height * unitHeight

