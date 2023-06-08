<template>
  <div>
    <div v-if="loading">
      <RowValue :item="weatherValues" />
    </div>
    <button @click="currentValue">Get Weather</button>
  </div>
</template>

<script>
import RowValue from "./RowValue";

export default {
  components: {
    RowValue,
  },
  data() {
    return {
      weatherValues: [],
    };
  },
  methods: {
    currentValue() {
      const apiKey = "ff2b403d0a4a3537e652848c5336dc58";
      const address = "https://api.openweathermap.org/data/2.5/weather";
      const query = "London";

      this.$http.get(`${address}?q=${query}&appid=${apiKey}`).then(
        (response) => {
          const dataValue = new Date();
          const value = {
            date: dataValue,
            body: response.body,
          };

          this.weatherValues.unshift(value);
        },
        (response) => {
          // error callback
          console.log(response);
        }
      );
    },
  },
  computed: {
    loading() {
      if (this.weatherValues !== []) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>