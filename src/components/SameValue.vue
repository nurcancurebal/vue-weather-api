<template>
  <div>
    <div class="weatherBlock">
      <table style="width: 80%">
        <tr>
          <th>Date</th>
          <th>Temparature (Kelvin)</th>
          <th>Pressure (hPa)</th>
          <th>Humudity (%)</th>
          <th>Temparature Max (Kelvin)</th>
          <th>Temparature Min (Kelvin)</th>
          <th>Wind Speed (meter/sec) </th>
          <th>Mind Degree</th>
        </tr>
        <tr v-for="(i, index) in this.$store.state.weatherValues" :key="index">
          <td>{{ i.date }}</td>
          <td>{{ i.body.main.temp }}</td>
          <td>{{ i.body.main.pressure }}</td>
          <td>{{ i.body.main.humidity }}</td>
          <td>{{ i.body.main.temp_min }}</td>
          <td>{{ i.body.main.temp_max }}</td>
          <td>{{ i.body.wind.speed }}</td>
          <td>{{ i.body.wind.deg }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SameValue",
};
</script>

<style>
.weatherBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
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