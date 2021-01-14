<template>
  <v-chart :options="options"/>
</template>

<script>
  import 'echarts/extension/bmap/bmap'

  export default {
    name: 'BMap',
    data() {
      return {
        options: {}
      }
    },
    mounted() {
      this.options = {
        bmap: {
          key: 'hDdCF04FamUm94EiU6j0ASAewm5PKoE4',
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: false,
          mapStyle: {
            styleJson: [{
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'land',
              elementType: 'all',
              stylers: {
                color: '#f3f3f3'
              }
            }, {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                color: '#fdfdfd'
              }
            }, {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'poi',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'green',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'subway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'local',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'arterial',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'building',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'label',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#999999'
              }
            }]
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
