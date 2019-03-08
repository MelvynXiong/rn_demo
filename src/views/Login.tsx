import { Color } from '@/const'
import { code, logoBlue, smallPhone } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { Container, Content, Input } from 'native-base'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { validPhoneNumber, validVerificationCode } from '../utils/Validator'
import { BoxShadow, Button, Spinner } from './common'

interface LoginProps {
  navigation: any
}
interface LoginState {
  phoneNumber: string // 输入的手机号码
  verificationCode: string // 输入的验证码
  loading: boolean // 是否处于加载状态
  codeButtonTitle: string // 验证码按钮的提示文字
  disabled: boolean // 验证码按钮是否处于激活状态
  errMsg: string // 错误提示信息
}
export default class Login extends Component<LoginProps, LoginState> {
  public constructor(props: LoginProps) {
    super(props)
    this.state = {
      phoneNumber: '',
      verificationCode: '',
      loading: false,
      codeButtonTitle: '点击获取验证码',
      disabled: true,
      errMsg: '手机号/验证码有误',
    }
  }
  public render() {
    return (
      <Container>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#6492ff', '#8eb2ff']}
        />
        <Spinner
          visible={this.state.loading}
          toggleLoading={this.toggleLoading}
        />
        <Content>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.logoWrapper}>
              <Image source={logoBlue} />
            </View>
          </BoxShadow>
          <View style={styles.numberWrapper}>
            <Image style={styles.icon} source={smallPhone} />
            <Input
              value={this.state.phoneNumber}
              keyboardType="numeric"
              style={styles.number}
              placeholder="请输入手机号"
              onChangeText={this.updatePhoneNumber}
            />
          </View>
          <View style={styles.codeWrapper}>
            <Image style={styles.icon} source={code} />
            <Input
              value={this.state.verificationCode}
              keyboardType="numeric"
              style={styles.code}
              placeholder="验证码"
              onChangeText={this.updateCode}
            />
            <Button
              style={styles.codeButton}
              titleStyle={styles.buttonWord}
              title={this.state.codeButtonTitle}
              onPress={this.requestCode}
              disabled={this.state.disabled}
            />
          </View>
          <Button
            onPress={this.handleLogin}
            style={styles.button}
            titleStyle={styles.word}
            title="登录"
          />
          <View style={styles.errMsgWrapper}>
            <Text style={styles.errMsg}>{this.state.errMsg}</Text>
          </View>
        </Content>
      </Container>
    )
  }

  /**
   * 处理组件内部的状态变化
   */
  // 切换loading状态
  private toggleLoading = (flag: boolean) => {
    this.setState({
      loading: flag,
    })
  }
  // 更新验证码
  private updateCode = (code: string) => {
    this.setState({
      verificationCode: code,
    })
  }
  // 更新手机号
  private updatePhoneNumber = (number: string) => {
    // 当手机号为有效的11位数字时验证码按钮才能生效
    this.setState({
      disabled: validPhoneNumber(number) ? false : true,
      phoneNumber: number,
    })
  }
  /**
   * 与服务器产生交互
   */

  private handleLogin = () => {
    const { phoneNumber, verificationCode } = this.state
    if (
      validPhoneNumber(phoneNumber) &&
      validVerificationCode(verificationCode)
    ) {
      this.toggleLoading(true)
      setTimeout(() => {
        this.props.navigation.navigate('Home')
      }, 3000)
    }
  }
  // 获取验证码
  private requestCode = () => {
    // 发个请求
    // 发个请求
    // 发个请求
    const count = 60
    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        this.setState({
          disabled: true,
          codeButtonTitle: `${count - i}s后重新获取`,
        })
      }, i * 1000)
    }
    setTimeout(() => {
      this.setState({
        disabled: validPhoneNumber(this.state.phoneNumber) ? false : true,
        codeButtonTitle: '点击获取验证码',
      })
    }, 60000)
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    height: adaptiveHeight(370),
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: adaptiveHeight(168),
    height: adaptiveHeight(168),
    backgroundColor: Color.White,
    borderRadius: adaptiveHeight(16),
  },
  button: {
    marginTop: adaptiveHeight(140),
    marginBottom: adaptiveHeight(70),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: adaptiveWidth(562),
    height: adaptiveHeight(94),
    backgroundColor: Color.Blue,
    borderRadius: adaptiveHeight(47),
  },
  word: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(36),
    lineHeight: adaptiveHeight(50),
    color: Color.White,
  },
  numberWrapper: {
    width: adaptiveWidth(562),
    height: adaptiveHeight(55),
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: adaptiveHeight(1),
    borderColor: Color.Grey,
  },
  number: {
    height: adaptiveHeight(40),
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    lineHeight: adaptiveHeight(40),
    color: Color.Grey,
    paddingBottom: 0,
    paddingTop: 0,
  },
  icon: {
    marginRight: adaptiveWidth(30),
    marginLeft: adaptiveWidth(10),
  },
  codeWrapper: {
    width: adaptiveWidth(562),
    height: adaptiveHeight(100),
    paddingBottom: adaptiveHeight(15),
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: adaptiveHeight(1),
    borderColor: Color.Grey,
    alignItems: 'flex-end',
  },
  code: {
    height: adaptiveHeight(40),
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    lineHeight: adaptiveHeight(40),
    color: Color.Grey,
    paddingBottom: 0,
    paddingTop: 0,
  },
  codeButton: {
    borderWidth: adaptiveHeight(2),
    borderColor: Color.Blue,
    width: adaptiveWidth(236),
    height: adaptiveHeight(50),
    borderRadius: adaptiveHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonWord: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveWidth(28),
    paddingLeft: 0,
    paddingRight: 0,
    color: Color.Blue,
  },
  errMsgWrapper: {
    alignSelf: 'center',
  },
  errMsg: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    color: Color.ErrorColor,
  },
})

const shadowOpt = {
  width: adaptiveHeight(168),
  height: adaptiveHeight(168),
  color: Color.ShadowColor,
  x: 0,
  y: adaptiveHeight(20),
  opacity: 0.05,
  border: adaptiveHeight(65),
  radius: adaptiveHeight(16),
  style: {
    marginTop: adaptiveHeight(286),
    marginBottom: adaptiveHeight(140),
    alignSelf: 'center',
  },
}
