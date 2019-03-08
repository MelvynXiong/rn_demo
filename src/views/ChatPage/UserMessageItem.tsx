import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Color } from '@/const'
import { logoWhite } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'

export default class UserMessageItem extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            文字内容每行最多16个汉字也就是32个字符文字内容每行最多16个汉字也就是32个字符
          </Text>
        </View>
        <View style={styles.rightTriangle} />
        <View style={styles.iconWrapper}>
          <Image source={logoWhite} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: adaptiveHeight(24),
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  textWrapper: {
    width: adaptiveWidth(437),
    paddingHorizontal: adaptiveWidth(24),
    paddingVertical: adaptiveHeight(20),
    backgroundColor: Color.Blue,
    borderRadius: adaptiveHeight(6),
  },
  text: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(24),
    color: Color.White,
  },
  rightTriangle: {
    position: 'relative',
    top: adaptiveHeight(20),
    marginRight: adaptiveWidth(14),
    width: 0,
    height: 0,
    borderTopWidth: adaptiveWidth(13),
    borderLeftWidth: adaptiveWidth(26),
    borderBottomWidth: adaptiveWidth(13),
    borderLeftColor: Color.Blue,
    borderTopColor: Color.Transparent,
    borderBottomColor: Color.Transparent,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: adaptiveHeight(76),
    height: adaptiveHeight(76),
    borderRadius: adaptiveHeight(38),
    backgroundColor: 'red',
  },
})
