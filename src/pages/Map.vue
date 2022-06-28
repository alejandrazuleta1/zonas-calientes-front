<template>
   <q-page padding class="flex">
    <q-card style="flex: 1">
    <l-map
      style="scoped"
      v-model="zoom"
      v-model:zoom="zoom"
      :center="center"
      @move="log('move')"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-geo-json
        v-if="showGeoJsonMedellin"
        :geojson="geojsonmedellin"
        :options="options"
      />

      <l-polygon
        v-for="(value,key) in polygons"
        :key="key"
        :lat-lngs="value.coordinates"
        :color="getColor(value.intensity)"
        :fill="true"
        :fillOpacity="0.2"
        :fillColor="getColor(value.intensity)"
      />

    </l-map>
    </q-card>
  </q-page>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LGeoJson,
  LPolygon
} from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import jsonMedellin from 'src/geojsondata/medellin.json'
import jsonHexagonos from 'src/geojsondata/hexagonos2000.json'

export default {
  name: 'ZonasClientes',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LPolygon
  },
  data () {
    return {
      zoom: 13,
      center: [6.244203, -75.581215],
      geojsonmedellin: null,
      geojson: null,
      optionsGeoJson: {
      },
      showGeoJsonMedellin: false,
      polygons: null,
      latlongs: null
    }
  },
  methods: {
    log (a) {
      console.log(a)
    },
    getColor (intensity) {
      switch (intensity) {
        case 1:
          return '#FF5252'
        case 2:
          return '#FFA000'
        case 3:
          return '#8BC34A'
        default:
          break
      }
    }
  },
  async created () {
    // const response = await fetch("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson")
    // const data = await response.json();
    this.geojson = jsonHexagonos
    this.geojsonmedellin = jsonMedellin
    this.latlongs = jsonHexagonos.map(a => a.geometry.coordinates[0]).map(polygon => polygon.map(a => [a[1], a[0]]))
    this.polygons = jsonHexagonos.map(a => { return { coordinates: a.geometry.coordinates[0], intensity: a.properties.intensity } }).map(polygon => { return { intensity: polygon.intensity, coordinates: polygon.coordinates.map(a => [a[1], a[0]]) } })
    this.log(this.polygons)
  }
}
</script>
