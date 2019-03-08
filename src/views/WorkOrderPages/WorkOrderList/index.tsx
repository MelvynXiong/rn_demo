import { Color } from '@/const'
import { adaptiveHeight } from '@/utils/Adapter'
import { Container, Content, List } from 'native-base'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Footer, ToolBar } from '../../common'
import WorkOrderItem from './WorkOrderItem'
interface WorkOrderListProps {
  navigation: any
}
export default class WorkOrderList extends Component<WorkOrderListProps> {
  public render() {
    return (
      <Container style={styles.container}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#6492ff', '#7ca4ff']}
        />
        <ToolBar
          title="工单"
          showSearchButton={true}
          handleSearch={this.handleSearch}
          handleCreate={this.goCreateOrderPage}
        />
        <Content>
          <WorkOrderItem />
        </Content>
        <Footer navigation={this.props.navigation} />
      </Container>
    )
  }
  private goCreateOrderPage = () => {
    this.props.navigation.navigate('CreateWorkOrder')
  }
  private handleSearch = () => {}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.MainBackground,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    height: adaptiveHeight(216),
  },
})
