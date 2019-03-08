import { Color } from '@/const'
import { divider } from '@/images'
import { adaptiveHeight, adaptiveWidth } from '@/utils/Adapter'
import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { BoxShadow, Button } from '../../common'

interface ItemProps {
  navigation: any
  name?: string
}
class WorkOrderItem extends Component<ItemProps> {
  public render() {
    return (
      <View style={styles.wrapper}>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.content}>
            <View style={styles.title}>
              <Text style={[styles.titleWord, { color: Color.LightBlack }]}>
                工单 1001
              </Text>
              <View style={{ marginLeft: adaptiveWidth(30) }}>
                <Text style={[styles.titleWord, { color: Color.Grey }]}>
                  2019.02.11 19:33:23
                </Text>
              </View>
              <View style={styles.statusItem}>
                <Text style={styles.titleWord}>已提交</Text>
              </View>
            </View>
            <View style={styles.dividerWrapper}>
              <Image style={styles.divider} source={divider} />
            </View>
            <TouchableWithoutFeedback onPress={this.goInfoPage}>
              <View style={styles.body}>
                <View style={styles.details}>
                  <Text style={styles.detailsTitle}>功能异常</Text>
                  <View style={styles.detailsContentWrapper}>
                    <Text numberOfLines={2} style={styles.detailsContent}>
                      工单内容描述工单内容描述工容描述工单内容描述工容描述工单内容描述工单内容描述工单内容描述工单内
                    </Text>
                  </View>
                </View>
                <View style={styles.bodyImage} />
              </View>
            </TouchableWithoutFeedback>
            <View>
              <View style={styles.dividerWrapper}>
                <Image style={styles.divider} source={divider} />
              </View>
              <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                  <View style={styles.circle} />
                  <Text style={styles.bottomStatus}>已解决</Text>
                </View>
                <Button
                  titleStyle={{ color: Color.Blue }}
                  style={styles.button}
                  title="评价"
                />
              </View>
            </View>
          </View>
        </BoxShadow>
      </View>
    )
  }
  private goInfoPage = () => {
    this.props.navigation.navigate('WorkOrderInfo')
  }
}
const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    marginBottom: adaptiveHeight(24),
  },
  content: {
    alignItems: 'center',
    width: adaptiveWidth(642),
    height: adaptiveHeight(355),
    borderRadius: adaptiveHeight(6),
    backgroundColor: Color.White,
  },
  title: {
    width: adaptiveWidth(602),
    marginVertical: adaptiveHeight(23),
    flexDirection: 'row',
  },
  titleWord: {
    fontSize: adaptiveHeight(24),
    fontFamily: 'PingFangSC-Regular',
    lineHeight: adaptiveHeight(33),
    color: Color.White,
  },
  statusItem: {
    position: 'absolute',
    right: 0,
    width: adaptiveWidth(90),
    borderRadius: adaptiveHeight(4),
    backgroundColor: 'red',
    alignItems: 'center',
  },
  dividerWrapper: {
    width: adaptiveWidth(602),
    height: adaptiveHeight(1),
    overflow: 'hidden',
  },
  divider: {
    width: adaptiveWidth(602),
    height: adaptiveHeight(1),
  },
  body: {
    marginVertical: adaptiveHeight(30),
    width: adaptiveWidth(602),
    height: adaptiveHeight(135),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  details: {
    width: adaptiveWidth(418),
    height: adaptiveHeight(135),
  },
  detailsTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(32),
    lineHeight: adaptiveHeight(45),
    color: Color.LightBlack,
  },
  detailsContentWrapper: {
    marginTop: adaptiveHeight(10),
    width: adaptiveWidth(418),
    height: adaptiveHeight(80),
  },
  detailsContent: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(28),
    color: Color.ThickGrey,
  },
  bodyImage: {
    width: adaptiveWidth(144),
    height: adaptiveHeight(109),
    backgroundColor: Color.Grey,
  },
  bottom: {
    height: adaptiveHeight(79),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: adaptiveHeight(12),
    height: adaptiveHeight(12),
    borderRadius: adaptiveHeight(6),
    backgroundColor: 'red',
    marginRight: adaptiveWidth(10),
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomStatus: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: adaptiveHeight(24),
    lineHeight: adaptiveHeight(33),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: adaptiveWidth(144),
    height: adaptiveHeight(50),
    borderWidth: adaptiveHeight(2),
    borderRadius: adaptiveHeight(24),
    borderColor: Color.Blue,
  },
})
const shadowOpt = {
  width: adaptiveWidth(642),
  height: adaptiveHeight(355),
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
export default withNavigation(WorkOrderItem)
