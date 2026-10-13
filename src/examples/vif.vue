<script setup>
    import Button from "@/component/Button.vue";
    import { computed, ref, watch } from "vue";

    const number = ref(65);

    const sum = () => number.value++;
    const sub = () => {
        if (number.value == 0) return;
        number.value--;
    };
</script>

<template>
    <div class="flex gap-4">
        <Button @click="sub">-</Button>
        <span
            class="text-2xl"
            :class="{
                'text-yellow-400': number == 66,
                'text-green-600': number == 67,
                'text-yellow-400': number == 68,
                'text-pink-600': number == 69,
            }"
        >
            {{ number }}</span
        >
        <Button @click="sum">+</Button>
    </div>

    <div class="flex flex-col">
        <span class="text-5xl mt-3" v-if="number == 67">
            SIX SEVEEEEEEEEEN
        </span>
        <span class="text-5xl mt-3" v-else-if="number == 66"> quase hehe </span>
        <span class="text-5xl mt-3" v-else-if="number == 68"> NÃÃÃÃÃOOO </span>
        <span class="text-5xl mt-3" v-else-if="number == 69"> HAHAHAHHAHAHA </span>
        <span class="text-5xl mt-3" v-else> Nada de mais </span>

        <span class="text-5xl mt-3" v-show="number == 67">
            SIX SEVEEEEEEEEEN SHOW
        </span>
    </div>
</template>
