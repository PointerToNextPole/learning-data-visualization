<template>
  <common-card
    title='累计销售额'
    value='¥ 77,176,085'
  >
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">157.25%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">157.25%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">¥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '../../mixins/commonCardMixin'

  export default {
    name: 'index',
    mixins: [commonCardMixin]
  }
</script>

<style lang="scss" scoped>
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .compare {
      font-size: 12px;
      margin-top: 3px;
      color: #666;
      display: flex;
      align-items: center;

      .increase {
        width: 0;
        height: 0;
        border-width: 5px;
        border-color: transparent transparent red transparent;
        border-style: solid;
        margin: 0 0 5px 5px;
      }

      .decrease {
        width: 0;
        height: 0;
        border-width: 5px;
        border-color: green transparent transparent transparent;
        border-style: solid;
        margin: 5px 0 0 5px;
      }
    }
  }
</style>
