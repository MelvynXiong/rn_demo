import { Color } from '@/const'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title?: string
  style?: any
  titleStyle?: any
  disabled?: boolean
  isIcon?: boolean
  onPress?: () => void
}
export default class Button extends Component<ButtonProps> {
  private static defaultProps = {
    disabled: false,
    isIcon: false,
  }
  public render() {
    const { style, titleStyle, title, disabled, isIcon, ...rest } = this.props
    return (
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.5}
        disabled={disabled}
        {...rest}
        style={[style, disabled ? styles.disabledButton : {}]}>
        {isIcon ? (
          this.props.children
        ) : (
          <Text style={[titleStyle, disabled ? styles.disabledText : {}]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  disabledButton: {
    borderWidth: 0,
    backgroundColor: Color.DisabledColor,
  },
  disabledText: {
    color: Color.Grey,
  },
})
