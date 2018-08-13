<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    使用以下技术栈：<br/>
    vue+webpack+vue-router+vue-rescource
  </div>
</template>

<script>
  export default {
    name: "about",
    data: function () {
      return {
        msg: 'about'
      };
    }
  };
</script>

<style scoped>

</style>
