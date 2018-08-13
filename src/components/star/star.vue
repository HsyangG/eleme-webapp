<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :key="itemClass.id" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on'; // 存放全星的class
  const CLS_HALF = 'half'; // 存放半星的class
  const CLS_OFF = 'off'; // 灰色star

  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = []; // 存放class的变量
        let score = Math.floor(this.score * 2) / 2; // 从分数中转成0.5的倍数
        let hasDecimal = score % 1 !== 0; // 放半星
        let integer = Math.floor(score); // 从score取整，得到全星数
        for (let i = 0; i < integer; i++) {
          // 当i小于全星数时，往result存放星星图片
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          // 如果有半星，则存入全星后面
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          // 如果result数组长度小于需求长度，则往里面填充灰色star
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
