<template>
  <main>
    <p class="pay-info">Информация по оплате:</p>
    <p>
      Номер счета:
      <input
        type="text"
        class="number"
        v-model.trim.lazy="$v.numberInvoice.$model"
        placeholder="Введите номер счета"
        :style="{border: $v.numberInvoice.$error ? '1px solid red' : ''}"
      />
    </p>
    <p>
      Сумма платежа:
      <input
        type="text"
        class="summa"
        placeholder="Введите сумму платежа"
        v-model.trim.lazy="$v.sum.$model"
        :style="{border: $v.sum.$error ? '1px solid red' : ''}"
      /> руб.
    </p>
    <h2>Данные банковской карты</h2>

    <div class="cards">
      <form @submit.prevent="submit">
        <div class="card-1">
          <fieldset>
            <legend>Номер карты</legend>
            <input
              v-for="(v, index) in $v.numberCard.$each.$iter"
              :key="index"
              v-model.trim.lazy="v.part.$model"
              :style="{border: v.part.$error ? '1px solid red' : ''}"
              placeholder="0000"
              type="text"
            />
          </fieldset>
          <fieldset class="select-list">
            <legend>Срок действия</legend>
            <div :style="{border: $v.month.$error ? '1px solid red' : ''}" class="select-wrapper1">
              <select v-model="$v.month.$model" class="select">
                <option default value="01">01</option>
                <option :key="index" v-for="(item, index) in months">{{ item }}</option>
              </select>
            </div>
            <div :style="{border: $v.year.$error ? '1px solid red' : ''}" class="select-wrapper2">
              <select v-model="$v.year.$model" class="select">
                <option default value="2018">2018</option>
                <option :key="index" v-for="(item, index) in years">{{item}}</option>
              </select>
            </div>
          </fieldset>

          <input
            v-model.trim.lazy="$v.nameUser.$model"
            class="name-user"
            type="text"
            placeholder="Держатель карты"
            :style="{border: $v.nameUser.$error ? '1px solid red' : ''}"
          />
        </div>
        <div class="cvv">
          <div class="line"></div>
          <div class="input_cvv">
            <label for="cvv">Код CVV2 / CVC2</label>
            <input
              type="text"
              v-model.trim.lazy="$v.cvvCode.$model"
              :style="{border: $v.cvvCode.$error ? '1px solid red' : ''}"
              placeholder="000"
              name="cvv"
              id="cvv"
            />
          </div>
        </div>
        <div class="btn-wrapper">
          <input type="submit" value="Оплатить" class="btn" />
        </div>
      </form>
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
        вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями
        <br />эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
      </p>
    </footer>
  </main>
</template>

<script>
import {
  required,
  numeric,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
const alpha = helpers.regex("alpha", /^[a-zA-Z_ ]*$/);

export default {
  data() {
    return {
      numberInvoice: null,
      sum: null,
      numberCard: [
        {
          part: null
        },
        {
          part: null
        },
        {
          part: null
        },
        {
          part: null
        }
      ],
      cvvCode: null,
      month: "01",
      year: 2018,
      nameUser: "",
      months: ["02", "03", "05", "06", "07", "08", "09", "10", "11", "12"],
      years: [2019, 2020, 2022]
    };
  },
  methods: {
    submit() {
      if (this.$v.$invalid) {
        console.log("false");
      } else {
        const obj = {
          date: new Date(),
          sum: this.sum,
          numberInvoice: this.numberInvoice
        };
        this.$store.commit("addPay", obj);
        this.$router.push({ name: "success", params: { success: true } });
      }
    }
  },
  validations: {
    numberInvoice: { required, numeric },
    sum: { required, numeric },
    nameUser: { required, alpha, minLength: minLength(4) },
    numberCard: {
      required,

      $each: {
        part: {
          required,
          minLength: minLength(4),
          numeric,
          maxLength: maxLength(4)
        }
      }
    },
    cvvCode: {
      required,
      numeric,
      minLength: minLength(3),
      maxLength: maxLength(3)
    },
    month: {
      required
    },
    year: {
      required
    }
  }
};
</script>


<style lang="scss" >
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

  //   .cards {
  //     border: 1px solid #e4e9ee;
  //     border-radius: 10px;
  //     padding: 25px 15px 14px;
  //     z-index: 3;
  //     width: 350px;
  //     margin-bottom: 40px;
  //     position: relative;
  //     background: #f7f8f8;
  //   }
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
    padding-top: 14px;
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
    margin-top: 15px;
    margin-bottom: 12px;
  }
}
.card-1 {
  height: 236px;
  border: 1px solid #e4e9ee;
  border-radius: 10px;
  padding: 20px 15px 14px;
  z-index: 3;
  width: 350px;
  margin-bottom: 40px;
  position: relative;
  background: #f7f8f8;
}
.cvv {
  width: 370px;
  padding-top: 26px;
  position: absolute;
  z-index: 1;
  top: 235px;
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
    padding-top: 23px;
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
  outline: none;
  border: none;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  padding: 10px 10px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 20px;
  background-color: #005abf;
  background-image: linear-gradient(
    to top,
    rgba(37, 36, 35, 0.18) 0%,
    rgba(37, 36, 35, 0) 100%
  );
  &:active {
    color: #8494ab;
    background-color: #0b386b;
  }
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

.summa,
.number {
  border: none;
  background: #f7f8f8;
  margin-left: 63px;
  outline: none;
  color: #373c43;
}
.summa {
  margin-left: 43px;
}
</style>
