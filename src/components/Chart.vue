<template>
  <q-card class="my-card" flat bordered>
    <apexcharts :options="chartOptions" :series="chartSeries"></apexcharts>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default defineComponent({
  name: 'ChartAnalytics',
  components: {
    apexcharts: VueApexCharts
  },
  props: {
    options: Object,
    series: Object
  },
  data () {
    return {
      chartOptions: this.options,
      chartSeries: this.series
    }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 750px
</style>
