<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-icon name="done" />
        </q-item-section>

        <q-item-section>
          <q-item-label>@user_nickname</q-item-label>
          <q-item-label caption>
            {{ date }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-card-section>
        {{ lorem }}
      </q-card-section>

    </q-card>

    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-icon name="hourglass_empty" />
        </q-item-section>

        <q-item-section>
          <q-item-label>@user_nickname</q-item-label>
          <q-item-label caption>
            {{ date }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-card-section>
        {{ lorem }}
      </q-card-section>

    </q-card>

    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-icon name="done" />
        </q-item-section>

        <q-item-section>
          <q-item-label>@user_nickname</q-item-label>
          <q-item-label caption>
            {{ date }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-card-section>
        {{ lorem }}
      </q-card-section>

    </q-card>

    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-icon name="hourglass_empty" />
        </q-item-section>

        <q-item-section>
          <q-item-label>@user_nickname</q-item-label>
          <q-item-label caption>
            {{ date }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-card-section>
        {{ lorem }}
      </q-card-section>

    </q-card>
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-icon name="hourglass_empty" />
        </q-item-section>

        <q-item-section>
          <q-item-label>@user_nickname</q-item-label>
          <q-item-label caption>
            {{ date }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-card-section>
        {{ lorem }}
      </q-card-section>

    </q-card>
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-icon name="hourglass_empty" />
        </q-item-section>

        <q-item-section>
          <q-item-label>@user_nickname</q-item-label>
          <q-item-label caption>
            {{ date }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-card-section>
        {{ lorem }}
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '18/06/2022 - 18:32'
    }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
