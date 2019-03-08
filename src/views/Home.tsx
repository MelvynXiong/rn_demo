import { Color } from '@/const'
import { ysLogo } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { Button, Container, Content, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BoxShadow } from './common'

// 月份映射表
const month: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
// props结构
interface HomeProps {
  navigation: any
}
// state结构
interface HomeState {
  time: Date
}

export default class Home extends Component<HomeProps, HomeState> {
  public constructor(props: HomeProps) {
    super(props)
    this.state = {
      time: new Date(),
    }
  }
  public componentDidMount() {
    this.props.navigation.addListener('willFocus', this.updateTime)
  }
  public render() {
    return (
      <Container>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#6492ff', '#c1daff']}
        />
        <Content contentContainerStyle={styles.content}>
          <Image style={styles.logo} source={ysLogo} />
          <View style={styles.timeWrapper}>
            <Text style={styles.day}>{this.state.time.getDate()}</Text>
            <View style={styles.dateWrapper}>
              <Text style={styles.date}>
                {month[this.state.time.getMonth()]}
              </Text>
              <Text style={styles.date}>{this.state.time.getFullYear()}</Text>
            </View>
          </View>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.infoCard}>
              <Thumbnail
                style={styles.thumbnail}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/docs/assets/favicon.png',
                }}
              />
              <Text style={styles.greet}>{'Hi,王磊'}</Text>
              <Text style={styles.company}>{'上海爱驰汽车有限公司'}</Text>
            </View>
          </BoxShadow>
          <View style={styles.buttonGroup}>
            <Button onPress={this.goChatPage}>
              <Text>消息</Text>
            </Button>
            <Button onPress={this.goWorkOrderPage}>
              <Text>工单</Text>
            </Button>
            <Button onPress={this.goMemberPage}>
              <Text>成员</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
  // 更新时间
  private updateTime = () => {
    this.setState({
      time: new Date(),
    })
  }

  /**
   * 页面跳转
   */
  private goChatPage = () => {
    this.props.navigation.navigate('ChatPage')
  }
  private goMemberPage = () => {
    this.props.navigation.navigate('UserList')
  }
  private goWorkOrderPage = () => {
    this.props.navigation.navigate('WorkOrderList')
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    height: adaptiveHeight(726),
  },
  content: {
    marginTop: adaptiveHeight(115),
    flex: 1,
  },
  logo: {
    marginLeft: adaptiveWidth(94),
    width: adaptiveWidth(185),
    height: adaptiveHeight(35),
    resizeMode: 'center',
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: adaptiveWidth(94),
    marginVertical: adaptiveHeight(14),
    height: adaptiveHeight(112),
  },
  day: {
    color: Color.White,
    fontSize: adaptiveHeight(80),
    fontFamily: 'PingFangSC-Medium',
  },
  dateWrapper: {
    marginLeft: adaptiveWidth(24),
    paddingLeft: adaptiveWidth(24),
    borderLeftWidth: 1,
    borderColor: Color.White,
  },
  date: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    lineHeight: adaptiveHeight(40),
    color: Color.White,
  },
  infoCard: {
    alignItems: 'center',
    height: adaptiveHeight(746),
    borderRadius: adaptiveHeight(16),
    backgroundColor: Color.White,
  },
  thumbnail: {
    width: adaptiveHeight(262),
    height: adaptiveHeight(262),
    borderRadius: adaptiveHeight(131),
    marginTop: adaptiveHeight(128),
    marginBottom: adaptiveHeight(95),
  },
  greet: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: adaptiveHeight(40),
    lineHeight: adaptiveHeight(56),
    color: Color.LightBlack,
    marginBottom: adaptiveHeight(18),
  },
  company: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    lineHeight: adaptiveHeight(40),
    color: Color.Grey,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: adaptiveWidth(562),
    marginLeft: adaptiveWidth(94),
    marginTop: adaptiveHeight(92),
  },
})
const shadowOpt = {
  width: adaptiveWidth(562),
  height: adaptiveHeight(746),
  color: Color.ShadowColor,
  x: 0,
  y: adaptiveHeight(20),
  opacity: 0.05,
  border: adaptiveHeight(65),
  radius: adaptiveHeight(16),
  style: {
    alignSelf: 'center',
  },
}
