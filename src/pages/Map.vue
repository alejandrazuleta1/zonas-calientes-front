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
        :options="optionsGeoJson"
      />

      <l-geo-json
        :geojson="geojson"
        :options="optionsGeoJson"
      />

    </l-map>
    </q-card>
  </q-page>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LGeoJson
} from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import jsonMedellin from 'src/geojsondata/medellin.json'
import jsonHexagonos from 'src/geojsondata/hexagonos2000.json'

export default {
  name: 'ZonasClientes',
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  data () {
    return {
      zoom: 11,
      center: [6.244203, -75.581215],
      geojsonmedellin: jsonMedellin,
      geojson: null,
      optionsGeoJson: {
      },
      showGeoJsonMedellin: false
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
  }
}
</script>
