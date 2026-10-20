<script setup>
    import Button from "@/component/Button.vue";
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
        <Button @click="sub">-</Button>
        <span class="text-2xl">{{ number }}</span>
        <Button @click="sum">+</Button>
    </div>

    <div>
        <span>Dobro do número: {{ doubleValue }}</span>
    </div>
</template>
