<script setup>
    import { computed, ref } from "vue";

    const number = ref(0);

    const sum = () => number.value++;
    const sub = () => {
        if (number.value == 0) return;
        number.value--;
    };

    const doubleValue = computed(() => number.value * 2);
</script>

<template>
    <div class="flex gap-4">
        <button @click="sub">-</button>
        <span class="text-2xl">{{ number }}</span>
        <button @click="sum">+</button>
    </div>

    <div>
        <span>Dobro do número: {{ doubleValue }}</span>
    </div>
</template>
