<template>
  <nav>
    <ul>
      <li>
        <a>Личный кабинет</a>
      </li>

      <router-link tag="li" exact active-class="active-link" to="/">
        <a>Платежи</a>
      </router-link>

      <router-link tag="li" active-class="active-link" to="/history">
        <a>История платежей</a>
      </router-link>
      <li>
        <a>Настройки</a>
      </li>
      <li>
        <a>Выйти</a>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {};
</script>


<style  lang="scss" >
nav {
  width: 321px / 960px * 100%;
  background-color: #1f2229;
  margin-right: 0px;
}
ul {
  padding: 0;
  margin: 0;
  li {
    width: 318px;
    height: 75px;
    border-top: 2px solid #20232c;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    padding-left: 28px;
    padding-top: 28px;
    list-style-type: none;
  }
}

a:visited {
  color: inherit;
  text-decoration: none;
}
a:link {
  text-decoration: none;
}

.active-link {
  background-color: #2a2d37;
  a {
    text-decoration: none;
    color: #808592;
  }
}
</style>
