<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">77,773</div>
              <v-chart :options="searchUserOption" />
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">177,512</div>
              <v-chart :options="searchNumOption" />
            </div>
          </div>
          <div class="table-wrapper">
            <el-table :data="tableData">
              <el-table-column></el-table-column>
            </el-table>
            <el-pagination />
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover"></el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        searchUserOption: {},
        searchNumOption: {},
        tableData: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-view {
    
  }
</style>
