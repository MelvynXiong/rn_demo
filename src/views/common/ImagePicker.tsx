import { Color } from '@/const'
import { imageAdd } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import React, { Component } from 'react'
import { Image, Modal, StyleSheet, View } from 'react-native'
import Button from './Button'

interface ImagePickerProps {
  style?: any
}
interface ImagePickerState {
  modalVisible: boolean
}
export default class ImagePicker extends Component<
  ImagePickerProps,
  ImagePickerState
> {
  public constructor(props: ImagePickerProps) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }
  public render() {
    return (
      <>
        <Button
          onPress={this.showModal}
          style={[styles.wrapper, this.props.style]}
          isIcon={true}>
          <Image source={imageAdd} />
        </Button>
        <Modal
          onRequestClose={this.hideModal}
          visible={this.state.modalVisible}
          hardwareAccelerated={true}
          animationType="fade"
          presentationStyle="overFullScreen"
          transparent={true}>
          <View style={styles.cover}>
            <Button style={styles.button} title="拍照" />
            <Button style={[styles.button, styles.picker]} title="从相册选取" />
            <Button
              onPress={this.hideModal}
              style={styles.button}
              title="取消"
            />
          </View>
        </Modal>
      </>
    )
  }
  private showModal = () => {
    this.setState({ modalVisible: true })
  }
  private hideModal = () => {
    this.setState({ modalVisible: false })
  }
}
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: adaptiveHeight(4),
    borderColor: Color.Blue,
    borderStyle: 'dashed',
    borderWidth: adaptiveHeight(2),
    width: adaptiveWidth(144),
    height: adaptiveHeight(109),
  },
  cover: {
    flex: 1,
    backgroundColor: Color.ModalColor,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: adaptiveWidth(750),
    height: adaptiveHeight(100),
    backgroundColor: Color.ShallowWhite,
  },
  buttonTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(36),
    lineHeight: adaptiveHeight(50),
    color: Color.LightBlack,
  },
  picker: {
    borderTopWidth: adaptiveHeight(1),
    marginBottom: adaptiveHeight(10),
  },
})
