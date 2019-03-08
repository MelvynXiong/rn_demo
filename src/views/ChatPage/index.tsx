import { Color } from '@/const'
import { Button, Container, Content, Footer, Text } from 'native-base'
import React, { Component } from 'react'
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import { camera, photo, workOrder } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { Header } from '../common'
import InputBottomBar from './InputBottomBar'
import ReplyItem from './ReplyItem'
import UserMessageItem from './UserMessageItem'
interface ChatPageProps {
  navigation: any
}
interface ChatPageState {
  optsVisible: boolean
}
export default class ChatPage extends Component<ChatPageProps, ChatPageState> {
  public constructor(props: ChatPageProps) {
    super(props)
    this.state = {
      optsVisible: false,
    }
  }
  public render() {
    const { optsVisible } = this.state
    return (
      <Container>
        <Header
          title="远算HPC专家Dora"
          touchRight={this.phoneCall}
          goBack={this.goBack}
          call={true}
        />
        <TouchableWithoutFeedback onPressIn={this.reset}>
          <Content style={styles.content}>
            <ReplyItem />
            <UserMessageItem />
            <ReplyItem />
            <UserMessageItem />
            <ReplyItem />
            <UserMessageItem />
            <ReplyItem />
            <UserMessageItem />
            <ReplyItem />
            <ReplyItem />
          </Content>
        </TouchableWithoutFeedback>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}>
          <Footer style={[styles.footer, optsVisible ? styles.opt : {}]}>
            <InputBottomBar reset={this.reset} toggleOpts={this.toggleOpts} />
            <View style={styles.divider} />
            <View style={styles.buttonGroup}>
              <View style={styles.buttonWrapper}>
                <Button
                  onPress={this.accessGallery}
                  transparent={true}
                  style={styles.button}>
                  <Image source={photo} />
                </Button>
                <Text style={styles.hint}>相册</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  onPress={this.accessCamera}
                  transparent={true}
                  style={styles.button}>
                  <Image source={camera} />
                </Button>
                <Text style={styles.hint}>拍照</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <Button transparent={true} style={styles.button}>
                  <Image source={workOrder} />
                </Button>
                <Text style={styles.hint}>工单</Text>
              </View>
            </View>
          </Footer>
        </KeyboardAvoidingView>
      </Container>
    )
  }
  private phoneCall = () => {
    const tel = 'tel:400-411-12345' // 目标电话
    Alert.alert('400-411-12345', '', [
      {
        text: '取消',
      },
      {
        text: '拨打',
        onPress: () => {
          Linking.canOpenURL(tel)
            .then(supported => {
              if (!supported) {
                console.log('Can not handle url:' + tel)
              } else {
                return Linking.openURL(tel)
              }
            })
            .catch(error => console.log('error', error))
        },
      },
    ])
  }
  private goBack = () => {
    this.props.navigation.goBack()
  }
  // 切换底部聊天框选项栏的出现
  private toggleOpts = () => {
    Keyboard.dismiss()
    this.setState(state => ({ optsVisible: !state.optsVisible }))
  }
  // 从本地图片库获取图片
  private accessGallery = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      // 获取图片后还得做展示
      // 获取图片后还得做展示
      // 获取图片后还得做展示
      // Todo
      console.log(images)
    })
  }
  // 访问相机获取图片
  private accessCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image)
    })
  }
  // 重置状态
  private reset = () => {
    this.setState({
      optsVisible: false,
    })
  }
}
const styles = StyleSheet.create({
  content: {
    paddingTop: adaptiveHeight(55),
    paddingHorizontal: adaptiveWidth(30),
    backgroundColor: Color.MainBackground,
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: adaptiveHeight(100),
    borderTopWidth: 0,
    backgroundColor: Color.White,
    overflow: 'hidden',
  },
  opt: {
    height: adaptiveHeight(304),
  },
  divider: {
    width: adaptiveWidth(750),
    borderTopWidth: adaptiveHeight(1),
    borderTopColor: Color.DividerColor,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: adaptiveWidth(440),
    height: adaptiveHeight(153),
    marginTop: adaptiveHeight(30),
    marginLeft: adaptiveWidth(40),
  },
  buttonWrapper: {
    height: adaptiveHeight(153),
    alignItems: 'center',
  },
  button: {
    width: adaptiveHeight(120),
    height: adaptiveHeight(120),
    marginBottom: adaptiveHeight(5),
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
  hint: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(20),
    lineHeight: adaptiveHeight(28),
    color: Color.lightGrey,
  },
})
