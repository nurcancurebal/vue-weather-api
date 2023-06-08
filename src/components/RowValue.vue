<template>
  <div>
    <div class="weatherBlock">
      <table style="width: 80%">
        <tr>
          <th>Date</th>
          <th>Main</th>
          <th>Description</th>
          <th>İcon</th>
        </tr>
        <tr v-for="(i, index) in this.$store.state.weatherValues" :key="index">
          <td>{{ i.date }}</td>
          <td>{{ i.body.weather[0].main }}</td>
          <td>{{ i.body.weather[0].description }}</td>
          <td>
            <img
              :src="`https://openweathermap.org/img/wn/${i.body.weather[0].icon}@2x.png`"
              alt=""
              class="iconClass"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "RowValue",
};
</script>

<style scoped>
.weatherBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.iconClass {
  width: 50px;
  height: 50px;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
}
</style>