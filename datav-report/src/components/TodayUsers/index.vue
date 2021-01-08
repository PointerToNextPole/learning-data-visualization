<template>
  <common-card
    title="今日交易用户数"
    value="1,304,308">
    <template>
      <div id="today-user-chart" :style="{width: '100%', height: '100%'}" />
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.95%</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '../../mixins/commonCardMixin'

  export default {
    name: 'index',
    mixins: [commonCardMixin],
    mounted() {
      const chartDom = document.getElementById('today-user-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: '',
          data: []

        }],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      })
    }
  }
</script>
