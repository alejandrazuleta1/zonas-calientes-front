<template>
  <div class="column" max-width=100%>
    <div class="col">
      <q-input
        dense
        outlined
        bg-color="white"
        v-model="search"
        @change="getResults">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
      </q-input>
    </div>
    <div class="col" max-width=100%>
      <q-list bordered >
        <q-item
          v-for="place in results" :key="place.raw.place_id"
          clickable
          class="list-item"
          >
          <q-item-section>
            <q-item-label >{{ place.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

export default defineComponent({
  name: 'SearchBox',
  data () {
    return {
      search: ref(''),
      results: null,
      provider: new OpenStreetMapProvider()
    }
  },
  methods: {
    async getResults () {
      this.results = await this.provider.search({ query: this.search })
      console.log(this.results)
    }
  }
})
</script>

<style lang="sass" scoped>
.list-item
  background-color: white
  width: 100%
</style>
