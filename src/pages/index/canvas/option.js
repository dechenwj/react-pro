export const barOption = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series: [{
      name:'访问来源',
      type:'pie',
      radius: ['100%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ]
    }
  ]
};
//     angleAxis: {
//         type: 'category',
//         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
//         z: 10
//     },
//     series: [{
//         type: 'bar',
//         data: [1, 2, 3, 4, 3, 5, 1],
//         coordinateSystem: 'polar',
//         name: 'A',
//         stack: 'a'
//     }, {
//         type: 'bar',
//         data: [2, 4, 6, 1, 3, 2, 1],
//         coordinateSystem: 'polar',
//         name: 'B',
//         stack: 'a'
//     }, {
//         type: 'bar',
//         data: [1, 2, 3, 4, 1, 2, 5],
//         coordinateSystem: 'polar',
//         name: 'C',
//         stack: 'a'
//     }],
//     legend: {
//         show: true,
//         data: ['A', 'B', 'C']
//     }
// };
