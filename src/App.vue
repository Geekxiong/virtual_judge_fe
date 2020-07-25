<template>
  <div>
    <el-container>
      <el-header>
        <NavBar/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from "./pages/components/NavBar";
export default {
  name: 'App',
  components: {
    NavBar
  },
}
</script>

<style scoped>
  .el-header {
    padding: 0 0;
  }
  .el-footer {
    background-color: #e8e8e8;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #e8e8e8;
    color: #333;
    padding-left: 5%;
    padding-right: 5%;
  }


</style>
