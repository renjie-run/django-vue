<template>
  <div class="home">{{message}}</div>
</template>

<script>
  import '../../css/home.css';

  export default {
    name: 'Home',
    data() {
      return {
        message: 'This is Home page.',
      };
    },
  }
</script>
