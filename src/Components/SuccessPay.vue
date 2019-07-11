<template>
  <div class="lucky">
    <h2>Статус покупки:</h2>
    <p>Удачно.</p>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    if (to.params.success) {
      next();
    } else {
      next("/");
    }
  }
};
</script>

<style lang="scss">
.lucky {
  padding-top: 50px;
  padding-left: 26px;
  height: 100%;
  padding-right: 29px;
  margin-bottom: 45px;
  font-family: "Arial MT";
  color: #8494ab;

  background-color: #f7f8f8;
  width: 639px / 960px * 100%;
}
</style>
