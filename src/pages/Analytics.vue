<template>
  <div class="q-pa-md row items-start q-gutter-md">
      <Chart :options="chartLineOptions" :series="seriesLine" />
      <Chart :options="chartDonutOptions" :series="seriesDonut" />
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
      <Chart :options="chartBarOptions" :series="seriesLine" />
      <Chart :options="chartAreaOptions" :series="seriesArea" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Chart from 'src/components/Chart.vue'

export default defineComponent({
  name: 'ChartBar',
  components: {
    Chart
  },
  data () {
    return {
      chartLineOptions: {
        chart: {
          id: 'basic-line',
          type: 'line'
        },
        xaxis: {
          categories: [...Array(24).keys()]
        },
        yaxis: {
          title: 'Cantidad'
        },
        title: {
          text: 'Predicción día',
          align: 'left'
        }
      },
      seriesLine: [{
        name: 'series-1',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 24))
      }],
      chartDonutOptions: {
        chart: {
          id: 'basic-donut',
          type: 'donut'
        },
        title: {
          text: 'Total histórico',
          align: 'left'
        },
        labels: ['Mañana', 'Tarde', 'Noche'],
        legend: {
          position: 'top'
        }
      },
      seriesDonut: [17, 35, 48],
      chartBarOptions: {
        chart: {
          id: 'basic-line',
          type: 'bar'
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [...Array(24).keys()]
        },
        yaxis: {
          title: 'Cantidad'
        },
        title: {
          text: 'Histórico (2017-Hoy)',
          align: 'left'
        }
      },
      chartAreaOptions: {
        chart: {
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      seriesArea: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]
    }
  }
})
</script>
