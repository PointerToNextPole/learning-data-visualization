<template>
  <div id="container"/>
</template>

<script>
  import 'echarts-liquidfill'

  export default {
    name: 'Liquidfill',
    mounted() {
      const data = [0.68, {
        value: 0.4,
        direction: 'left '
      }, {
        value: 0.2,
        itemStyle: {
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        }
      }]
      const chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption({
        series: [{
          type: 'liquidFill',
          data,
          color: ['red', 'blue', 'yellow'],
          /** 使其静止 */
          // waveAnimation: false,
          // animationDuration: 0,
          // animationDurationUpdate: 0,
          /** 波浪幅度 */
          amplitude: 10,
          /** 背景颜色 */
          backgroundColor: {
            color: 'purple',
            borderWidth: 4,
            borderColor: '#333'
          },
          /** 外层样式 */
          outline: {
            show: true,
            borderDistance: 2,
            itemStyle: {
              borderWidth: 2,
              borderColor: 'red',
              shadow: 'none'
            }
          },
          /** 指定形状 */
          shape: 'rect'
        }]
      })
    }
  }
</script>

<style scoped lang="scss">
  #container {
    width: 100%;
    height: 100%;
  }

</style>
