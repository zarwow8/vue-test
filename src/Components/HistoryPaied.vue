<template>
  <div class="paied">
    <h2 v-if="history.length === 0">История платежей отсутствует</h2>
    <h2 v-else>История платежей</h2>
    <ul>
      <li :key="index" v-for="(item,index) in history">
        <p>
          Дата: {{item.date.toLocaleString("ru", {year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          }
          )
          }}
        </p>
        <p>Сумма платежа: {{item.sum}} руб.</p>
        <p>
          Номер счета:
          {{item.numberInvoice}}
        </p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  computed: {
    history() {
      return this.$store.state.historyPay;
    }
  }
};
</script>

<style lang="scss"  >
div.paied {
  padding-top: 50px;
  padding-left: 26px;
  height: 100%;
  padding-right: 29px;
  margin-bottom: 45px;
  color: #8494ab;
  font-family: "Arial MT";
  font-size: 16px;

  line-height: 21px;
  background-color: #f7f8f8;
  width: 639px / 960px * 100%;
  h2 {
    text-decoration: none;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      padding: 0;
      display: block;
      color: inherit;
      font-size: 15px;
      border-bottom: 1px solid;
      p {
        margin: 0;
      }
    }
  }
}
</style>

