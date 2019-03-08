import { Button, Container, Content, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Color } from '@/const'
import { company, department, email, phone } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { BoxShadow, Header } from '../common'

interface UserInfoProps {
  navigation: any
}
export default class UserInfo extends Component<UserInfoProps> {
  public render() {
    return (
      <Container>
        <Header goBack={this.goBack} editable={true} touchRight={this.goEditingPage}/>
        <Content style={styles.content}>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.info}>
              <Thumbnail
                style={styles.thumbnail}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/docs/assets/favicon.png',
                }}
              />
              <Text style={styles.title}>王磊</Text>
              <View>
                <View style={styles.details}>
                  <Image source={phone} />
                  <View style={styles.detailWrapper}>
                    <View style={{ marginRight: adaptiveWidth(10) }}>
                      <Text style={styles.label}>手机:</Text>
                    </View>
                    <Text style={styles.data}>13823456718</Text>
                  </View>
                </View>
                <View style={styles.details}>
                  <Image source={email} />
                  <View style={styles.detailWrapper}>
                    <View style={{ marginRight: adaptiveWidth(10) }}>
                      <Text style={styles.label}>邮箱:</Text>
                    </View>
                    <Text style={styles.data}>abdfycb@163.com</Text>
                  </View>
                </View>
                <View style={styles.details}>
                  <Image source={company} />
                  <View style={styles.detailWrapper}>
                    <View style={{ marginRight: adaptiveWidth(10) }}>
                      <Text style={styles.label}>企业:</Text>
                    </View>
                    <Text style={styles.data}>上海爱驰汽车有限公司</Text>
                  </View>
                </View>
                <View style={styles.details}>
                  <Image source={department} />
                  <View style={styles.detailWrapper}>
                    <View style={{ marginRight: adaptiveWidth(10) }}>
                      <Text style={styles.label}>部门:</Text>
                    </View>
                    <Text style={styles.data}>CAE</Text>
                  </View>
                </View>
              </View>
            </View>
          </BoxShadow>
        </Content>
      </Container>
    )
  }
  private goBack = () => {
    this.props.navigation.goBack()
  }
  private goEditingPage = () => {
    this.props.navigation.navigate('EditingUser')
  }
}
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
    marginVertical: adaptiveHeight(200),
    alignSelf: 'center',
  },
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: Color.MainBackground,
  },
  info: {
    width: adaptiveWidth(562),
    height: adaptiveHeight(746),
    alignItems: 'center',
    borderRadius: adaptiveHeight(16),
    backgroundColor: Color.White,
  },
  thumbnail: {
    position: 'absolute',
    top: adaptiveHeight(-100),
    width: adaptiveHeight(200),
    height: adaptiveHeight(200),
    borderRadius: adaptiveHeight(100),
  },
  title: {
    marginTop: adaptiveHeight(150),
    marginBottom: adaptiveHeight(65),
    fontSize: adaptiveHeight(40),
    fontFamily: 'PingFangSC-Semibold',
    lineHeight: adaptiveHeight(56),
    color: Color.LightBlack,
  },
  details: {
    flexDirection: 'row',
    height: adaptiveHeight(40),
    marginBottom: adaptiveHeight(30),
  },
  detailWrapper: {
    flexDirection: 'row',
    marginLeft: adaptiveWidth(10),
  },
  label: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    lineHeight: adaptiveHeight(40),
    letterSpacing: adaptiveWidth(2),
    color: Color.Black,
  },
  data: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    lineHeight: adaptiveHeight(40),
    letterSpacing: adaptiveWidth(2),
    color: Color.LightBlack,
  },
})
