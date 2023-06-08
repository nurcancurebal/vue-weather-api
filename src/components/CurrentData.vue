<template>
  <div>
    <div v-if="loading">
      <RowValue />
      <SameValue />
    </div>
    <button @click="currentValue">Get Weather</button>
  </div>
</template>

<script>
import RowValue from "./RowValue";
import SameValue from "./SameValue";

export default {
  components: {
    RowValue,
    SameValue,
  },
  data() {
    return {};
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

          this.$store.commit("setWeatherValue", value);
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
      if (this.$store.state.weatherValues.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
</style>