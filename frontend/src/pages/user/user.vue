<template>
  <div class="user">{{message}}</div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        message: 'This is User page.',
      };
    },
  }
</script>

<style scoped>
  .user {
    color: skyblue;
  }
</style>
