<template>
   <q-page padding class="flex">
    <q-card style="flex: 1">
    <l-map
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
        :color="value.color"
        :fill="true"
        :fillOpacity="0.5"
        :fillColor="value.color"
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
      zoom: 11,
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
    }
  },
  async created () {
    // const response = await fetch("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson")
    // const data = await response.json();
    this.geojson = jsonHexagonos
    this.geojsonmedellin = jsonMedellin
    this.latlongs = jsonHexagonos.map(a => a.geometry.coordinates[0]).map(polygon => polygon.map(a => [a[1], a[0]]))
    this.polygons = jsonHexagonos.map(a => { return { coordinates: a.geometry.coordinates[0], color: a.properties.color } }).map(polygon => { return { color: polygon.color, coordinates: polygon.coordinates.map(a => [a[1], a[0]]) } })
    this.log(this.polygons)
  }
}
</script>
