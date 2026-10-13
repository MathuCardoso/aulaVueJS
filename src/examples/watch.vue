<script setup>
    import { computed, ref, watch } from "vue";

    const number = ref(65);

    const sum = () => number.value++;
    const sub = () => {
        if (number.value == 0) return;
        number.value--;
    };

    const doubleValue = computed(() => number.value * 2);

    const newNumber = ref(null);
    const oldNumber = ref(null);

    watch(number, (newValue, oldValue) => {
        newNumber.value = newValue;
        oldNumber.value = oldValue;
    });
</script>

<template>
    <div class="flex gap-4">
        <button @click="sub">-</button>
        <span class="text-2xl">{{ number }}</span>
        <button @click="sum">+</button>
    </div>

    <div class="flex flex-col">
        <span class="mb-2">Dobro do número: {{ doubleValue }}</span>

        <span>Número atual: {{ newNumber }}</span>
        <span>Número anterior: {{ oldNumber }}</span>
    </div>
</template>
