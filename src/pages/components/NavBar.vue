<template>
    <div>
      <el-menu
        :default-active="selectedItem"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-menu-item index="1">主页</el-menu-item>
          <el-menu-item index="2">题目</el-menu-item>
          <el-menu-item index="3">状态</el-menu-item>
          <el-menu-item index="4">用户</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      selectedItem: "1"
    };
  },
  mounted() {
    if(this.$route.name === "Index"){
      this.selectedItem = "1";
    }else if(this.$route.name === "ProblemList"){
      this.selectedItem = "2";
    }else if(this.$route.name === "ProblemDetail"){
      this.selectedItem = "2";
    }else if(this.$route.name === "Status"){
      this.selectedItem = "3";
    }else if(this.$route.name === "UserList"){
      this.selectedItem = "4";
    }else if(this.$route.name === "UserDetail"){
      this.selectedItem = "4";
    }else {
      this.selectedItem = "0";
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key === "1") {
        this.$router.push({path: '/'})
      }else if(key === "2") {
        this.$router.push({path: '/problems'})
      }else if(key === "3") {
        this.$router.push({path: '/status'})
      }else if(key === "4") {
        this.$router.push({path: '/users'})
      }
    }
  }
}
</script>

<style scoped>

</style>
