<script setup>
    defineProps({
        type: {
            type: String,
            default: "text",
        },
        placeholder: String,
        label: String,
        error: String,
        name: String,
    });

    const emit = defineEmits(["input"]);
</script>

<template>
    <div class="flex flex-col">
        <label :for="name" v-if="label">{{ label }}</label>
        <input
            :id="name"
            :type="type"
            :placeholder="placeholder"
            class="input"
            :value="name"
            @input="emit('input', $event.target.value)"
        />
        <span class="text-red-600" v-if="error">
            {{ error }}
        </span>
    </div>
</template>
