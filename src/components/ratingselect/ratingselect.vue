<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span @click.stop.prevent="select(2)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click.stop.prevent="select(0)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click.stop.prevent="select(1)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click.stop.prevent="toggleSwitch" class="switch" :class="{'on':onlyContent}">
      <span class="icon-success_fill"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0; // 好评
  const NEGATIVE = 1; // 差评
  const ALL = 2; // 所有评论
 export default {
   props: {
     ratings: {
       type: Array,
       default() {
         return [];
       }
     },
     selectType: {
       type: Number,
       default: ALL
     },
     onlyContent: {
       type: Boolean,
       default: false
     },
     desc: {
       type: Object,
       default() {
         return {
           all: '全部',
           positive: '满意',
           negative: '不满意'
         };
       }
     }
   },
   computed: {
     positives() {
       return this.ratings.filter((rating) => {
         return rating.rateType === POSITIVE;
       });
     },
     negatives() {
       return this.ratings.filter((rating) => {
         return rating.rateType === NEGATIVE;
       });
     }
   },
   methods: {
     select(type) {
       this.$emit('typeChange', type);
     },
     toggleSwitch() {
       this.$emit('onlyContentChange');
     }
   }
 };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7,17,27,0.1))
      font-size: 0
      .block
        display: inline-block
        padding:  8px 12px
        margin-right: 8px
        border-radius: 1px
        font-size: 12px
        color: rgb(77,85,93)
        &.active
          color: #fff
        .count
          margin-left: 3px
          line-height: 16px
          font-size: 8px
        &.positive
          background: rgba(0,160,220,0.2)
          &.active
            background: rgb(0,160,220)
        &.negative
          background: rgba(77,85,93,0.2)
          &.active
            background: rgb(77,85,93)
    .switch
      padding: 12px 0
      margin: 0 18px
      line-height: 24px
      border-1px(rgba(7,17,27,0.1))
      color: rgb(147,152,159)
      &.on
        .icon-success_fill
          color: #00c850
      .icon-success_fill
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
  //
</style>
