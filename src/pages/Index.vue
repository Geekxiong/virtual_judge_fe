<template>
  <div>
    <el-row class="title-line">
      <el-col :span="24">
        <div class="title">{{title}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Index",
        data () {
          return {
              title: "Virtual Judge Front-end"
          }
      },
    }
</script>

<style scoped>
  .title-line {
    padding-top: 150px;
  }
  .title {
    text-align: center;
    font-size: 48px;
  }
</style>
