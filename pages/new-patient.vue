<script lang="ts" setup>
import type { Patient } from '~/types'

const q = ref('')
const selected = ref<Patient>({})

const input = ref<{ input: HTMLInputElement }>()

const state = reactive({

})

defineShortcuts({
  '/': () => {
    input.value?.input?.focus()
  }
})
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="New Patient" />
      <template>
        <UForm :validate="validate" :validate-on="['submit']" :state="state" class="space-y-4"
               @submit="onSubmit">
          <li v-for="(value, key) in selected" class="text-black">
            <span>{{value}}: {{ key }}</span>
          </li>
        </UForm>
      </template>
    </UDashboardPanel>
  </UDashboardPage>
</template>
