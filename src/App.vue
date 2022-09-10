<template>
  <NavBar/>
  <router-view/>
</template>

<style lang="scss">
@import "app.scss";
</style>

<script>
import * as bootstrap from 'bootstrap';
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>