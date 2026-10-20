<script setup>
    defineProps({
        placeholder: String,
        label: String,
        error: String,
        name: String,
    });

    const emit = defineEmits(["change"]);
</script>

<template>
    <div class="flex flex-col">
        <label :for="name" v-if="label">{{ label }}</label>
        <select
            :id="name"
            class="select"
            @change="emit('change', $event.target.value)"
        >
            <slot></slot>
        </select>
        <span class="text-red-600" v-if="error">
            {{ error }}
        </span>
    </div>
</template>
