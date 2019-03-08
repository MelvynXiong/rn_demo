import { Color } from '@/const'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { Container, Content } from 'native-base'
import React, { Component } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { BoxShadow, Button, Header, ImagePicker } from '../../common'
import StatusIndicator from './StatusIndicator'

interface WorkOrderInfoProps {
  navigation: any
}
export default class WorkOrderInfo extends Component<WorkOrderInfoProps> {
  public render() {
    return (
      <Container>
        <Header goBack={this.goBack} title="工单 1001" />
        <Content style={styles.content}>
          <StatusIndicator />
          <BoxShadow setting={shadowOpt}>
            <View style={styles.wrapper} />
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
  wrapper: {
    alignItems: 'center',
    width: adaptiveWidth(690),
    height: adaptiveHeight(970),
    backgroundColor: Color.White,
    borderRadius: adaptiveHeight(6),
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
  submit: {
    alignSelf: 'center',
    width: adaptiveWidth(690),
    height: adaptiveHeight(94),
    backgroundColor: Color.Blue,
    marginTop: adaptiveHeight(50),
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
  height: adaptiveHeight(970),
  color: Color.ShadowColor,
  x: 0,
  y: adaptiveHeight(6),
  opacity: 0.04,
  border: adaptiveHeight(14),
  radius: adaptiveHeight(6),
  style: {
    alignSelf: 'center',
    marginTop: adaptiveHeight(30),
  },
}
