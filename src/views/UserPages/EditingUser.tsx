import { Button, Container, Content, Input, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Color } from '@/const'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { Header } from '../common'

interface EditingUserProps {
  navigation: any
}
export default class EditingUser extends Component<EditingUserProps> {
  public render() {
    return (
      <Container>
        <Header goBack={this.goBack} />
        <Content style={{ backgroundColor: Color.MainBackground }}>
          <Thumbnail
            style={styles.thumbnail}
            source={{
              uri:
                'https://facebook.github.io/react-native/docs/assets/favicon.png',
            }}
          />
          <View style={styles.details}>
            <Text style={styles.label}>姓名</Text>
            <Input style={styles.data} placeholder="未填写" />
          </View>
          <View style={styles.details}>
            <Text style={styles.label}>手机</Text>
            <Input style={styles.data} placeholder="未填写" />
          </View>
          <View style={styles.details}>
            <Text style={styles.label}>邮箱</Text>
            <Input style={styles.data} placeholder="未填写" />
          </View>
          <View style={styles.details}>
            <Text style={styles.label}>企业</Text>
            <Input style={styles.data} placeholder="未填写" />
          </View>
          <View style={styles.details}>
            <Text style={styles.label}>部门</Text>
            <Input style={styles.data} placeholder="未填写" />
          </View>
          <Button
            style={[
              styles.button,
              {
                marginTop: adaptiveHeight(124),
                marginBottom: adaptiveHeight(26),
              },
            ]}>
            <Text style={styles.buttonContent}>提交</Text>
          </Button>
          <Button
            onPress={this.handleDelete}
            style={[styles.button, { backgroundColor: '#FF6C6C' }]}>
            <Text style={styles.buttonContent}>删除</Text>
          </Button>
        </Content>
      </Container>
    )
  }
  private goBack = () => {
    this.props.navigation.goBack()
  }
  private handleDelete = () => {
    Alert.alert('是否删除成员')
  }
}
const styles = StyleSheet.create({
  thumbnail: {
    alignSelf: 'center',
    marginTop: adaptiveHeight(100),
    marginBottom: adaptiveHeight(60),
    width: adaptiveHeight(200),
    height: adaptiveHeight(200),
    borderRadius: adaptiveHeight(100),
  },
  details: {
    flexDirection: 'row',
    backgroundColor: Color.White,
    alignItems: 'center',
    height: adaptiveHeight(88),
  },
  label: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(34),
    color: Color.Black,
    lineHeight: adaptiveHeight(42),
    marginLeft: adaptiveWidth(30),
  },
  data: {
    textAlign: 'right',
    fontSize: adaptiveHeight(32),
    fontFamily: 'PingFangSC-Regular',
    color: Color.lightGrey,
    paddingRight: adaptiveWidth(30),
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: adaptiveWidth(690),
    height: adaptiveHeight(94),
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: adaptiveHeight(47),
    backgroundColor: Color.Blue,
  },
  buttonContent: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(36),
    lineHeight: adaptiveHeight(50),
    color: Color.White,
  },
})
