<template>
   <q-page padding class="flex">
    <q-card style="flex: 1">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="center"
      :options="{zoomControl: false}"
      @move="log('move')"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-control-zoom position="bottomright"  ></l-control-zoom>

      <l-geo-json
        v-if="showGeoJsonMedellin"
        :geojson="geojsonmedellin"
      />

      <ul v-if="showGeoJsonHexagons">
        <l-polygon
          v-for="(value,key) in polygons"
          :key="key"
          :lat-lngs="value.coordinates"
          :color="borderColor"
          :dashArray="dasharray"
          :weight="weight"
          :fill="true"
          :fillOpacity="0.3"
          :fillColor="getColor(value.intensity)"
        />
      </ul>

      <l-control position="topright">
        <q-card style="max-width: 200px">
          <q-card-section>
            <div class="text-subtitle2">Estado actual</div>
          </q-card-section>

          <q-separator inset />

          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="visibility" />
              </q-item-section>

              <q-item-section>
                <q-item-label>35%</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="yellow" name="visibility" />
              </q-item-section>

              <q-item-section>
                <q-item-label>62%</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="visibility" />
              </q-item-section>

              <q-item-section>
                <q-item-label>3%</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </l-control>

    </l-map>
    </q-card>
  </q-page>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LGeoJson,
  LPolygon,
  LControlZoom,
  LControl
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
    LPolygon,
    LControlZoom,
    LControl
  },
  data () {
    return {
      zoom: 13,
      center: [6.244203, -75.581215],
      geojsonmedellin: null,
      geojson: null,
      showGeoJsonMedellin: false,
      showGeoJsonHexagons: true,
      polygons: null,
      borderColor: 'white',
      dasharray: '3',
      weight: 1,
      overviewTitle: 'Overview'
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
          return 'orange'
      }
    }
  },
  async created () {
    // const response = await fetch("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson")
    // const data = await response.json();
    this.geojson = jsonHexagonos
    this.geojsonmedellin = jsonMedellin
    this.polygons = jsonHexagonos.map(a => { return { coordinates: a.geometry.coordinates[0], intensity: a.properties.intensity } }).map(polygon => { return { intensity: polygon.intensity, coordinates: polygon.coordinates.map(a => [a[1], a[0]]) } })
  }
}
</script>
