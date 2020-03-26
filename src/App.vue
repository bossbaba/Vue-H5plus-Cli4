<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
.box-all-height
  height calc(100vh - 92px)
.column
  display flex
  flex-direction column
.paddingtb
  padding 10px 10px
.margintb
  margin 10px 10px
.flex-wrap-row
  display flex
  flex-wrap wrap
.scrollheight
  margin-top 46px
  height calc(100vh - 46px)
</style>
