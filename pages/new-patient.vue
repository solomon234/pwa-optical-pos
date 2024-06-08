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
                    <!-- <UFormGroup label="Name" name="name">
                        <UInput v-model="state.name" class="w-1/5" placeholder="John Doe" autofocus />
                    </UFormGroup>

                    <UFormGroup label="Email" name="email">
                        <UInput v-model="state.email" type="email" placeholder="john.doe@example.com" />
                    </UFormGroup> -->
                </UForm>
            </template>
        </UDashboardPanel>
    </UDashboardPage>
</template>
