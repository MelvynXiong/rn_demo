import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import { Color } from '@/const'

interface SpinnerProps {
  visible: boolean
  toggleLoading: (flag: boolean) => void
}

export default class Spinner extends React.Component<SpinnerProps> {
  public static defaultProps = {
    visible: false,
  }

  public render() {
    return (
      <Modal
        onRequestClose={this.hideModal}
        hardwareAccelerated={true}
        animationType="fade"
        presentationStyle="overFullScreen"
        transparent={true}
        visible={this.props.visible}>
        <View style={styles.wrapper}>
          <ActivityIndicator size="large" color={Color.White} />
        </View>
      </Modal>
    )
  }
  private hideModal = () => {
    this.props.toggleLoading(false)
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Color.ModalColor,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
