<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <a>Личный кабинет</a>
        </li>
        <li>
          <a>Платежи</a>
        </li>
        <li>
          <a>История платежей</a>
        </li>
        <li>
          <a>Настройки</a>
        </li>
        <li>
          <a>Выйти</a>
        </li>
      </ul>
    </nav>

    <main>
      <p>Информация по оплате:</p>
      <p>Номер счета:</p>
      <p>Сумма платежа:</p>
      <h2>Данные банковской карты</h2>

      <div class="cards">
        <form>
          <fieldset>
            <legend>Номер карты</legend>
            <input placeholder="0000" type="text" />
            <input placeholder="0000" type="text" />
            <input placeholder="0000" type="text" />
            <input placeholder="0000" type="text" />
          </fieldset>
          <fieldset class="select-list">
            <legend>Срок действия</legend>
            <div class="select-wrapper1">
              <select class="select">
                <option default>04</option>
              </select>
            </div>
            <div class="select-wrapper2">
              <select class="select">
                <option default>2018</option>
              </select>
            </div>
          </fieldset>

          <input class="name-user" type="text" placeholder="Держатель карты" />
        </form>
      </div>
    </main>
  </div>
</template>

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
}

.container {
  display: flex;
  padding-top: 80px;
  width: 960px;
  align-items: flex-start;

  margin: 0 auto;
}
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

main {
  padding-top: 50px;
  padding-left: 26px;
  padding-bottom: 28px;
  padding-right: 29px;
  font-family: "Arial MT";
  color: #8494ab;

  background-color: #f7f8f8;
  width: 639px / 960px * 100%;
  h2 {
    font-family: "Open San";
    color: #383d43;
    font-size: 22px;
    margin-top: 31px;
    margin-bottom: 26px;
  }
  fieldset {
    padding: 0px;
    border: none;
    legend {
      color: #8494ab;
      font-family: "Arial MT";
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      margin-bottom: 5px;
    }
    input[type="text"] {
      width: 65px;
      height: 42px;
      margin-right: 10px;
      padding: 15px;
      border: 1px solid #e4e9ee;
      &::placeholder {
        color: #bec6cf;
        font-family: "Arial MT";
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }

  .cards {
    border: 1px solid #e4e9ee;
    border-radius: 5px;
    padding: 25px 15px 14px;

    width: 350px;
  }
  .select {
    color: #373c43;
    font-family: "Arial MT";
    font-size: 16px;
    line-height: 21px;
    padding: 9px 21px 9px 11px;
    border: 1px solid #e4e9ee;
    background-color: #ffffff;
  }
  .select-wrapper1 {
    display: inline-block;
    position: relative;
    margin-right: 10px;
    &::before {
      content: "";
      width: 6px;
      height: 8px;
      top: calc(50% - 4px);
      left: 83%;

      position: absolute;
      background-color: white;
      pointer-events: none;
    }
    &::after {
      content: "";
      width: 15px;
      height: 8px;
      top: calc(50% - 4px);
      right: 8px;
      position: absolute;

      pointer-events: none;
      background: url("/Layer_3.svg") no-repeat;
    }
  }
  .select-wrapper2 {
    display: inline-block;
    position: relative;
    &::before {
      content: "";
      width: 6px;
      height: 8px;
      top: calc(50% - 4px);
      left: 87%;

      position: absolute;
      background-color: white;
      pointer-events: none;
    }
    &::after {
      content: "";
      width: 15px;
      height: 8px;
      top: calc(50% - 4px);
      right: 8px;

      position: absolute;

      pointer-events: none;
      background: url("/Layer_3.svg") no-repeat;
    }
  }
  .name-user {
    width: 100%;
    padding-top: 15px;
    padding-left: 12px;
    padding-bottom: 11px;
    padding-right: 10px;

    &::placeholder {
      color: #bec6cf;
      font-family: "Arial MT";
      font-size: 16px;

      line-height: 21px;
    }
  }
  .select-list {
    margin-top: 37px;
    margin-bottom: 12px;
  }
}
.cvv {
  width: 370px;
  height: 236px;
  border: 1px solid #e4e9ee;
  background-color: #f7f8f8;
}
</style>
