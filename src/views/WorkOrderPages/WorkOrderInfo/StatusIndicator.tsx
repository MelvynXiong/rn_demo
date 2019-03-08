import { Color } from '@/const'
import { completed, processed, processing, submit } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import React, { Component } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { BoxShadow } from '../../common'
export default class StatusIndicator extends Component {
  public render() {
    return (
      <BoxShadow setting={shadowOpt}>
        <View style={styles.wrapper}>
          <View style={styles.statusItem}>
            <View style={styles.circle}>
              <Image source={submit} />
            </View>
            <Text style={styles.text}>提交</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.statusItem}>
            <View style={styles.circle}>
              <Image source={processing} />
            </View>
            <Text style={styles.text}>受理</Text>
          </View>
          <View style={styles.line} />
          <View
            style={styles.statusItem}>
            <View style={styles.circle}>
              <Image source={processed} />
            </View>
            <View style={{ width: adaptiveWidth(80) }}>
              <Text style={styles.text}>受理完成</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.statusItem}>
            <View style={styles.circle}>
              <Image source={completed} />
            </View>
            <Text style={styles.text}>完结</Text>
          </View>
        </View>
      </BoxShadow>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: adaptiveWidth(690),
    height: adaptiveHeight(110),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.White,
    borderRadius: adaptiveHeight(6),
    paddingHorizontal: adaptiveWidth(30),
  },
  statusItem: {
    alignItems: 'center',
    width: adaptiveWidth(50),
    overflow: 'visible',
  },
  circle: {
    width: adaptiveHeight(50),
    height: adaptiveHeight(50),
    borderRadius: adaptiveHeight(25),
    marginBottom: adaptiveHeight(6),
    backgroundColor: Color.DarkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(20),
    lineHeight: adaptiveHeight(28),
    color: Color.DarkBlue,
  },
  line: {
    flex: 1,
    position: 'relative',
    top: adaptiveHeight(-20),
    height: adaptiveHeight(4),
    backgroundColor: Color.DarkBlue,
  },
})
const shadowOpt = {
  width: adaptiveWidth(690),
  height: adaptiveHeight(110),
  color: Color.ShadowColor,
  x: 0,
  y: adaptiveHeight(6),
  opacity: 0.04,
  border: adaptiveHeight(14),
  radius: adaptiveHeight(6),
  style: {
    alignSelf: 'center',
    marginTop: adaptiveHeight(20),
  },
}
