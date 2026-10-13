<script setup>
    import Input from "@/component/Input.vue";
    import { ref } from "vue";

    const userName = ref("");
</script>

<template>
    <Input label="Insira seu nome" @input="userName = $event" />
    <span>{{ userName }}</span>
</template>
