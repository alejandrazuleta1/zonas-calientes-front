<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Zonas calientes
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        bordered
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item
              to="/"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="map" />
              </q-item-section>

              <q-item-section>
                Mapa
              </q-item-section>
            </q-item>

            <q-item
              to="/reports"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="description" />
              </q-item-section>

              <q-item-section>
                Reportes
              </q-item-section>
            </q-item>

            <q-item
              to="/analytics"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="troubleshoot" />
              </q-item-section>

              <q-item-section>
                Analítica
              </q-item-section>
            </q-item>

            <q-item
              to="/calendar"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="calendar_today" />
              </q-item-section>

              <q-item-section>
                Calendario
              </q-item-section>
            </q-item>

            <q-item
              to="/settings"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Configuración
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      miniState: ref(true)
    }
  }
})
</script>
