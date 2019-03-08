import { Button, Footer, FooterTab, Icon, Text } from 'native-base'
import React, { Component } from 'react'

export default class CustomFooter extends Component<{ navigation: any }> {
  public render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={this.goHome} vertical={true}>
            <Icon name="apps" />
            <Text>主页</Text>
          </Button>
          <Button onPress={this.goChatPage} vertical={true}>
            <Icon name="camera" />
            <Text>消息</Text>
          </Button>
          <Button onPress={this.goWorkOrderPage} vertical={true}>
            <Icon name="navigate" />
            <Text>工单</Text>
          </Button>
          <Button onPress={this.goMemberPage} vertical={true}>
            <Icon name="person" />
            <Text>成员</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
  private goHome = () => {
    this.props.navigation.navigate('Home')
  }
  private goChatPage = () => {
    this.props.navigation.navigate('ChatPage')
  }
  private goWorkOrderPage = () => {
    this.props.navigation.navigate('WorkOrderList')
  }
  private goMemberPage = () => {
    this.props.navigation.navigate('UserList')
  }
}
