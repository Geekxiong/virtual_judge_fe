<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            {{ojName}} - {{probId}}
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'ProblemDetail',
    data () {
        return {
            ojName: this.$route.params.ojName,
            probId: this.$route.params.probId,
        }
    },
    methods: {

    },
    mounted(){

    }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
