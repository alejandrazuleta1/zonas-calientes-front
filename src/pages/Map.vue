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
        url="https://api.mapbox.com/styles/v1/alejandrazuletag1/cl58okeq8000314pc35isoap0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxlamFuZHJhenVsZXRhZzEiLCJhIjoiY2w1OG84ZjhtMjQyNDNqcXF4aHF5bjhmZiJ9.VOCLSGv2CSmtYHzRTn-BvQ"
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
          :fillOpacity="0.2"
          :fillColor="getColor(value.intensity)"
        />
      </ul>

      <l-marker
        :lat-lng="markerLatLng" ></l-marker>

      <l-control position="topright" style="max-width: 350px width: 100%">
        <q-expansion-item
          class="expansion-item"
          expand-separator
          icon="location_on"
          label="Riesgo bajo"
          caption="Mi ubicación actual"
        >
          <q-card >
            <q-card-section>
              <Chart :options="chartLineOptions" :series="seriesLine" />
            </q-card-section>
          </q-card>

        </q-expansion-item>
      </l-control>

      <l-control position="topleft" style="max-width: 350px width: 100%">
        <SearchBox></SearchBox>
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
  LControl,
  LMarker
} from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import jsonMedellin from 'src/geojsondata/medellin.json'
import jsonHexagonos from 'src/geojsondata/hexagonos2000.json'
import Chart from 'src/components/Chart.vue'
import { Geolocation } from '@capacitor/geolocation'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import SearchBox from 'src/components/SearchBox.vue'

export default {
  name: 'ZonasClientes',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LPolygon,
    LControlZoom,
    LControl,
    Chart,
    LMarker,
    SearchBox
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
      markerLatLng: null,
      borderColor: 'white',
      dasharray: '3',
      weight: 1,
      overviewTitle: 'Overview',
      geoSearchOptions: {
        provider: new OpenStreetMapProvider(),
        showMarker: false,
        autoClose: true
      },
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
      }]
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
    const coordinates = await Geolocation.getCurrentPosition()
    this.markerLatLng = await [coordinates.coords.latitude, coordinates.coords.longitude]
  }
}
</script>

<style lang="sass" scoped>
.expansion-item
  background-color: white
  border-radius: 8px
</style>
