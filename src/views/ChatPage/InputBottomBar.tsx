import { Button, Input, Text } from 'native-base'
import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Color } from '@/const'
import { more, sticker, voice } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'

interface InputBottomBarProps {
  toggleOpts: () => void
  reset: () => void
}
export default class InputBottomBar extends Component<InputBottomBarProps> {
  public render() {
    return (
      <View style={styles.wrapper}>
        <Button
          transparent={true}
          style={[styles.button, { marginRight: adaptiveWidth(20) }]}>
          <Image source={voice} />
        </Button>
        <Input onFocus={this.props.reset} autoCapitalize="none" style={styles.input} />
        <Button
          transparent={true}
          style={[styles.button, { marginHorizontal: adaptiveWidth(20) }]}>
          <Image source={sticker} />
        </Button>
        <Button
          onPress={this.props.toggleOpts}
          transparent={true}
          style={styles.button}>
          <Image source={more} />
        </Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: adaptiveWidth(750),
    height: adaptiveHeight(100),
    paddingHorizontal: adaptiveWidth(30),
  },
  button: {
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: 'center',
    height: adaptiveHeight(100),
  },
  input: {
    backgroundColor: Color.MainBackground,
    borderRadius: adaptiveHeight(33),
    width: adaptiveWidth(462),
    height: adaptiveHeight(66),
    paddingBottom: 0,
    paddingTop: 0,
  },
})
