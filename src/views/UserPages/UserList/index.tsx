import { Container, Content, List } from 'native-base'
import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '@/const'
import { adaptiveHeight } from '@/utils/Adapter'
import { Footer, ToolBar } from '../../common'
import UserItem from './UserItem'

interface DataItem {
  key: number,
  name: string,
}
const data = [
  { key: 1, name: '赵' },
  { key: 2, name: '钱' },
  { key: 3, name: '孙' },
  { key: 4, name: '李' },
  { key: 5, name: '周' },
  { key: 6, name: '吴' },
  { key: 7, name: '郑' },
  { key: 8, name: '王' },
]
export default class UserList extends Component<{ navigation: any }> {
  public render() {
    return (
      <Container style={styles.container}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#6492ff', '#7ca4ff']}
        />
        <ToolBar title="成员" handleCreate={this.goEditingPage} />
        <Content style={styles.content}>
          <FlatList data={data} renderItem={this.renderList}/>
        </Content>
        <Footer navigation={this.props.navigation} />
      </Container>
    )
  }
  private renderList = ({item}:{item: DataItem}) => {
    return (
      <UserItem name={item.name}/>
    )
  }
  private goEditingPage = () => {
    this.props.navigation.navigate('EditingUser')
  }
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
  content: {
    flex: 1,
  },
})
