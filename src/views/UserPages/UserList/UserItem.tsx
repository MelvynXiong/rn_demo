import { Button, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Color } from '@/const'
import { arrowForward } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import { BoxShadow } from '../../common'

interface ItemProps {
  navigation: any
  name: string
}
class UserItem extends Component<ItemProps> {
  public render() {
    return (
      <View style={styles.wrapper}>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.content}>
            <Thumbnail
              style={styles.thumbnail}
              source={{
                uri:
                  'https://facebook.github.io/react-native/docs/assets/favicon.png',
              }}
            />
            <Text style={styles.name}>{this.props.name}</Text>
            <Button
              transparent={true}
              style={styles.button}
              onPress={this.goInfoPage}>
              <Image source={arrowForward} />
            </Button>
          </View>
        </BoxShadow>
      </View>
    )
  }
  private goInfoPage = () => {
    this.props.navigation.navigate('UserInfo')
  }
}
const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    marginBottom: adaptiveHeight(24),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: adaptiveWidth(642),
    height: adaptiveHeight(100),
    borderRadius: adaptiveHeight(6),
    backgroundColor: Color.White,
  },
  thumbnail: {
    width: adaptiveHeight(60),
    height: adaptiveHeight(60),
    borderRadius: adaptiveHeight(30),
    marginLeft: adaptiveWidth(30),
    marginRight: adaptiveWidth(22),
  },
  name: {
    fontSize: adaptiveHeight(34),
    fontFamily: 'PingFangSC-Regular',
    lineHeight: adaptiveHeight(48),
    color: Color.LightBlack,
  },
  button: {
    position: 'absolute',
    right: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: adaptiveHeight(100),
    paddingHorizontal: adaptiveWidth(24),
  },
})
const shadowOpt = {
  width: adaptiveWidth(642),
  height: adaptiveHeight(100),
  color: Color.ShadowColor,
  x: 0,
  y: adaptiveHeight(6),
  opacity: 0.04,
  border: adaptiveHeight(14),
  radius: adaptiveHeight(6),
  style: {
    alignSelf: 'center',
  },
}
export default withNavigation(UserItem)
