import { Color } from '@/const'
import { create, search } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './Button'

interface ToolBarProps {
  title: string
  showSearchButton?: boolean
  showCreateButton?: boolean
  style?: object
  handleCreate?: () => void
  handleSearch?: () => void
}

export default class ToolBar extends Component<ToolBarProps> {
  private static defaultProps = {
    showSearchButton: false,
    showCreateButton: true,
    style: {},
  }
  public render() {
    const { title, showSearchButton, showCreateButton, style } = this.props
    return (
      <View style={[styles.wrapper, style]}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonWrapper}>
          {showSearchButton ? (
            <Button isIcon={true} style={styles.gap}>
              <Image source={search} />
            </Button>
          ) : null}
          {showCreateButton ? (
            <Button onPress={this.props.handleCreate} isIcon={true}>
              <Image source={create} />
            </Button>
          ) : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: adaptiveWidth(642),
    height: adaptiveHeight(65),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: adaptiveHeight(84),
    marginBottom: adaptiveHeight(17),
    alignSelf: 'center',
  },
  title: {
    fontSize: adaptiveHeight(46),
    lineHeight: adaptiveHeight(65),
    color: Color.White,
  },
  buttonWrapper: {
    flexDirection: 'row',
    height: adaptiveHeight(65),
    alignItems: 'center',
  },
  gap: {
    marginRight: adaptiveWidth(50),
  },
})
