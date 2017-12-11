import React from 'react'
import echarts from 'echarts/lib/echarts' ;//必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie'


export default class BarReact extends React.Component {
  
  constructor(props) {
    super(props)
    this.initBar = this.initBar.bind(this)
  }
  
  initBar() {
    const { option={} } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts

    //设置options
    myChart.setOption(option)
    window.onresize = function() {
      myChart.resize()
    }
  }
  
  componentDidMount() {
    this.initBar()
  }
  
  componentDidUpdate() {
    this.initBar()
  }
  
  render() {
    const { width="22%", height = '260px', position = 'absolute', top = '260px', left = '860px', background = '#fff', border = '1px solid #999' } = this.props
    return <div ref={ID => this.ID = ID} style={{width, height, position, top, left, background, border}}></div>
  }
}