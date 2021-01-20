<template>
  <div class="map-view">
    <div class="left">
      <b-map-scatter/>
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquidfill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">

          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  import BMapScatter from '../BMapScatter'
  import Liquidfill from '../LiquidFill'

  export default {
    name: 'index',
    components: { BMapScatter, Liquidfill }
  }
</script>

<style scoped lang="scss">
  .map-view {
    display: flex;
    margin-top: 20px;

    .left {
      flex: 0 0 80%;
      width: 80%;
      height: 600px;
      background: #ffffff;
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;

      .title {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding-left: 20px;
      }

      .chart-wrapper {
        width: 100%;
        height: 190px;
      }
    }
  }
</style>
