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
      <p class="pay-info">Информация по оплате:</p>
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
      <div class="cvv">
        <div class="line"></div>
        <div class="input_cvv">
          <label for="cvv">Код CVV2 / CVC2</label>
          <input type="text" placeholder="000" name="cvv" id="cvv" />
        </div>
      </div>
      <div class="btn-wrapper">
        <a class="btn">Оплатить</a>
      </div>
      <footer>
        <p>
          Исходя из астатической системы координат Булгакова, соединение стабильно.
          Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.
        </p>
        <p>Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.</p>
        <p>Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.</p>

        <p>
          Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция
          вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями<br/> эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
        </p>
      </footer>
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
  position: relative;
  padding-top: 50px;
  padding-left: 26px;

  padding-right: 29px;
  margin-bottom: 45px;
  font-family: "Arial MT";
  color: #8494ab;

  background-color: #f7f8f8;
  width: 639px / 960px * 100%;

  .pay-info {
    margin-bottom: 25px;
  }
  p {
    margin: 0px;
  }

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
    border-radius: 10px;
    padding: 25px 15px 14px;
    z-index: 3;
    width: 350px;
    margin-bottom: 40px;
    position: relative;
    background: #f7f8f8;
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
      width: 7px;
      height: 8px;
      top: calc(50% - 4px);
      left: 86%;

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
    border: 1px solid #e4e9ee;
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
  padding-top: 46px;
  position: absolute;
  z-index: 1;
  top: 275px;
  left: 223px;
  height: 236px;
  border: 1px solid #e4e9ee;
  background-color: #f7f8f8;
  border-radius: 10px;
  .line {
    width: 100%;
    height: 42px;

    background-color: #e4e9ee;
  }
  .input_cvv {
    padding-top: 19px;
    margin-left: 200px;
    label {
      position: relative;
      margin-bottom: 5px;
      &::after {
        content: "";
        display: block;
        width: 26px;
        height: 26px;
        position: absolute;
        top: 28px;
        left: 85%;
        background: url("/advice.png");
      }
    }
    input {
      width: 138px;
      height: 42px;
      border: 1px solid #e4e9ee;
      background-color: #ffffff;
      padding: 20px;
      padding-right: 40px;
      &::placeholder {
        color: #bec6cf;
        font-family: "Arial MT";
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
      }
    }
  }
}
.btn-wrapper {
  margin-bottom: 45px;
  margin-left: 15px;
}
.btn {
  display: block;
  width: 133px;
  height: 40px;
  color: #ffffff;
  text-align: center;
  padding: 10px 10px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;

  border-radius: 20px;
  background-color: #005abf;
  background-image: linear-gradient(
    to top,
    rgba(37, 36, 35, 0.18) 0%,
    rgba(37, 36, 35, 0) 100%
  );
}
footer {
  margin-left: -26px;
  padding: 26px 35px 33px 25px;
  font-family: "Arial MT";
  font-size: 12px;
  line-height: 18px;
  color: #89909d;

  width: 639px;
  height: 263px;
  background-color: #373c43;
  margin-bottom: -45px;
  p {
    margin-right: 60px;
    text-align: left;
    margin-bottom: 15px;
  }
}
</style>
