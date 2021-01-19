<template>
  <div class="home">
    <top-view/>
    <sales-view/>
    <bottom-view/>
    <map-view/>
  </div>
</template>

<script>
  import TopView from '../components/TopView'
  import SalesView from '../components/SalesView'
  import BottomView from '../components/BottomView'
  import MapView from '../components/MapView'

  export default {
    name: 'Home',
    components: {
      TopView,
      SalesView,
      BottomView,
      MapView
    }
  }
</script>

<style>
  .home {
    width: 100%;
    background-color: #eee;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
