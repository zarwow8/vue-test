<template>
  <div class="container">
    <app-menu></app-menu>

    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./Components/Menu";

export default {
  components: {
    appMenu: Menu
  }
};
</script>






<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  background-color: #101114;
  color: #bec6cf;
  font-family: "Arial MT";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
}

.container {
  display: flex;
  padding-top: 80px;
  width: 960px;
  align-items: flex-start;
  height: 100%;
  margin: 0 auto;
}
</style>
