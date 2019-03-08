import { Color } from '@/const'
import { arrowBack, call, edit } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Button from './Button'

interface HeaderProps {
  goBack: () => void
  touchRight?: () => void
  title?: string
  editable?: boolean
  call?: boolean
}
export default class Header extends Component<HeaderProps> {
  private static defaultProps = {
    editable: false,
    call: false,
  }
  public render() {
    return (
      <LinearGradient colors={['#6492ff', '#7ca4ff']}>
        <View style={styles.header}>
          <Button isIcon={true} onPress={this.props.goBack} style={styles.back}>
            <Image source={arrowBack} />
          </Button>
          <Text style={styles.title}>{this.props.title}</Text>
          <Button
            onPress={this.props.touchRight}
            isIcon={true}
            style={styles.forward}>
            {this.props.editable ? <Image source={edit} /> : null}
            {this.props.call ? <Image source={call} /> : null}
          </Button>
        </View>
      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: adaptiveHeight(130),
    paddingBottom: adaptiveHeight(20),
  },
  back: {
    position: 'absolute',
    left: 0,
    bottom: adaptiveHeight(20),
    width: adaptiveHeight(68),
    height: adaptiveHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  forward: {
    position: 'absolute',
    right: 0,
    bottom: adaptiveHeight(20),
    width: adaptiveHeight(68),
    height: adaptiveHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: adaptiveHeight(36),
    fontFamily: 'PingFangSC-Medium',
    lineHeight: adaptiveHeight(50),
    color: Color.White,
  },
})
