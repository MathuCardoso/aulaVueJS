<script setup>
    const emit = defineEmits(["close"]);
</script>

<template>
    <div
        class="fixed w-screen h-screen inset-0 flex justify-center items-center backdrop-blur-sm z-50 bg-black/30"
    >
        <div class="min-w-1/5 min-h-1/3 bg-gray-950 rounded-xl z-50">
            <slot></slot>
        </div>
        <div class="absolute inset-0 z-0" @click="emit('close')"></div>
    </div>
</template>
