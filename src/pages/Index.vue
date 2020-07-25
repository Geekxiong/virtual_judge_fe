<template>
  <div>
    <div class="title">{{title}}</div>
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
  .title {
    text-align: center;
    font-size: 48px;
  }
</style>
