import { Color } from '@/const'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { Container, Content } from 'native-base'
import React, { Component } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { BoxShadow, Button, Header, ImagePicker } from '../common'

interface CreateWorkOrderProps {
  navigation: any
}
export default class CreateWorkOrder extends Component<CreateWorkOrderProps> {
  public render() {
    return (
      <Container>
        <Header goBack={this.goBack} title="反馈工单" />
        <Content style={styles.content}>
          <View style={styles.banner}>
            <Text style={styles.bannerWords}>
              当您在使用远算产品发生故障时，发送工单消息。我们收到消息后会第一时间响应，并在24h内给您答复
            </Text>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>反馈问题</Text>
          </View>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.feedbackWrapper}>
              <View style={styles.buttonGroup}>
                <Button
                  style={styles.button}
                  titleStyle={styles.buttonTitle}
                  title="功能异常"
                />
                <Button
                  style={styles.button}
                  titleStyle={styles.buttonTitle}
                  title="任务失败"
                />
                <Button
                  style={styles.button}
                  titleStyle={styles.buttonTitle}
                  title="建 议"
                />
                <Button
                  style={styles.button}
                  titleStyle={styles.buttonTitle}
                  title="其 他"
                />
              </View>
              <View style={styles.textArea}>
                <TextInput
                  style={styles.inputContent}
                  multiline={true}
                  placeholder="选择任务类型，帮助我们更快处理您的反馈"
                />
              </View>
              <View style={styles.imagePicker}>
                <ImagePicker />
              </View>
            </View>
          </BoxShadow>
          <Button
            disabled={false}
            titleStyle={styles.submitTitle}
            style={[styles.button, styles.submit]}
            title="提交"
          />
          <Button
            disabled={false}
            titleStyle={styles.saveTitle}
            style={[styles.button, styles.save]}
            title="保存草稿"
          />
        </Content>
      </Container>
    )
  }
  private goBack = () => {
    this.props.navigation.goBack()
  }
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: Color.MainBackground,
  },
  banner: {
    width: adaptiveWidth(690),
    marginVertical: adaptiveHeight(30),
    alignSelf: 'center',
  },
  bannerWords: {
    fontSize: adaptiveHeight(30),
    color: Color.Grey,
    fontFamily: 'PingFangSC-Regular',
  },
  titleWrapper: {
    width: adaptiveWidth(690),
    marginBottom: adaptiveHeight(30),
    alignSelf: 'center',
  },
  title: {
    lineHeight: adaptiveHeight(56),
    fontSize: adaptiveHeight(40),
    color: Color.LightBlack,
    fontFamily: 'PingFangSC-Regular',
  },
  feedbackWrapper: {
    alignItems: 'center',
    width: adaptiveWidth(690),
    height: adaptiveHeight(773),
    backgroundColor: Color.White,
    borderRadius: adaptiveHeight(6),
  },
  buttonGroup: {
    width: adaptiveWidth(630),
    flexDirection: 'row',
    marginVertical: adaptiveHeight(40),
    justifyContent: 'space-between',
  },
  button: {
    width: adaptiveWidth(140),
    height: adaptiveHeight(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: adaptiveHeight(47),
    borderColor: Color.Blue,
    borderWidth: adaptiveHeight(2),
  },
  buttonTitle: {
    fontSize: adaptiveHeight(28),
    lineHeight: adaptiveHeight(40),
    color: Color.Blue,
    fontFamily: 'PingFangSC-Regular',
  },
  textArea: {
    width: adaptiveWidth(630),
    height: adaptiveHeight(450),
    borderColor: '#ddd',
    borderWidth: adaptiveHeight(1),
    borderRadius: adaptiveHeight(4),
    paddingHorizontal: adaptiveWidth(21),
  },
  inputContent: {
    fontSize: adaptiveHeight(30),
    lineHeight: adaptiveHeight(42),
    color: Color.LightBlack,
    fontFamily: 'PingFangSC-Regular',
  },
  imagePicker: {
    width: adaptiveWidth(630),
    marginTop: adaptiveHeight(30),
  },
  submit: {
    alignSelf: 'center',
    width: adaptiveWidth(690),
    height: adaptiveHeight(94),
    backgroundColor: Color.Blue,
    marginTop: adaptiveHeight(41),
    marginBottom: adaptiveHeight(26),
  },
  submitTitle: {
    fontSize: adaptiveHeight(36),
    lineHeight: adaptiveHeight(50),
    color: Color.White,
    fontFamily: 'PingFangSC-Regular',
  },
  save: {
    alignSelf: 'center',
    width: adaptiveWidth(690),
    height: adaptiveHeight(94),
    marginBottom: adaptiveHeight(68),
  },
  saveTitle: {
    fontSize: adaptiveHeight(36),
    lineHeight: adaptiveHeight(50),
    color: Color.Blue,
    fontFamily: 'PingFangSC-Regular',
  },
})
const shadowOpt = {
  width: adaptiveWidth(690),
  height: adaptiveHeight(773),
  color: Color.ShadowColor,
  x: 0,
  y: adaptiveHeight(20),
  opacity: 0.05,
  border: adaptiveHeight(65),
  radius: adaptiveHeight(6),
  style: {
    alignSelf: 'center',
  },
}
