<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">77,773</div>
                <v-chart :options="searchUserOption"/>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">177,512</div>
                <!-- 这里应该是searchNumOption，不过为了测试方便改成searchUserOption -->
                <v-chart :options="searchUserOption"/>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名"/>
                <el-table-column prop="keyword" label="关键词"/>
                <el-table-column prop="count" label="总搜索量"/>
                <el-table-column prop="users" label="搜索用户数"/>
                <el-table-column prop="range" label="点击率"/>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>

        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions"/>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        searchUserOption: {
          xAxis: {
            type: 'category',
            boundaryGap: false
          },
          yAxis: {
            show: false
          },
          series: [{
            type: 'line',
            data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
            areaStyle: {
              color: 'rgba(95, 187, 255, 0.5)'
            },
            lineStyle: {
              color: 'rgb(95, 187, 255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }],
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        },
        searchNumOption: {},
        tableData: [
          { id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%' },
          { id: 2, rank: 2, keyword: '北京', count: 100, users: 90, range: '90%' },
          { id: 3, rank: 3, keyword: '北京', count: 100, users: 90, range: '90%' },
          { id: 4, rank: 4, keyword: '北京', count: 100, users: 90, range: '90%' }
        ],
        radioSelect: '品类',
        categoryOptions: {}
      }
    },
    methods: {
      onPageChange(page) {
        console.log(page)
      },
      renderPieChart() {
        const mockData = [
          { legendname: '粉面粥店', value: 67, percent: '15.40', itemStyle: { color: '#e7e702' }, name: '粉面粥店 | 15.40%' },
          { legendname: '简餐便当', value: 97, percent: '22.20', itemStyle: { color: '#8d6fec' }, name: '简餐便当 | 22.20%' },
          { legendname: '汉堡披萨', value: 92, percent: '21.15', itemStyle: { color: '#5085f2' }, name: '汉堡披萨 | 21.15%' }
        ]
        this.categoryOptions = {
          title: [{
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          }, {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            },
            textAlign: 'center'
          }],
          series: [{
            name: '品类分布',
            type: 'pie',
            data: mockData,
            label: {
              normal: {
                show: true,
                position: 'outer',
                formatter: function(params) {
                  return `${params.data.legendname} | ${params.data.percent}`
                }
              }
            },
            center: ['35%', '50%'],
            radius: ['45%', '60%'], // 内半径和外半径的百分比
            labelLine: {
              normal: {
                length: 5, // 靠近圆的折线
                length2: 3, // 靠近字的折线
                smooth: true
              }
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff '
            }
          }],
          legend: {
            type: 'scroll',
            orient: 'vertical',
            height: 250,
            left: '70%',
            top: 'middle',
            textStyle: {
              color: '#8c8c8c'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              const str = params.seriesName + '<br />' + params.marker +
                params.data.legendname + '<br />' + '数量：' +
                params.data.value + '<br />' + '占比：' + params.data.percent + '%'
              return str
            }
          }
        }
      }
    },
    mounted() {
      this.renderPieChart()
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;

    .view {
      flex: 1;
      box-sizing: border-box;
      width: 50%;

      &:first-child {
        padding-right: 10px;
      }

      &:last-child {
        padding-left: 10px;
      }

      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding-left: 20px;

        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }

      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;

        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;

          .chart {
            flex: 1;
            padding: 0 10px;

            .chart-title {
              color: #999;
              font-size: 14px;
            }

            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }

            .echarts {
              height: 50px;
            }
          }
        }

        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;

          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
