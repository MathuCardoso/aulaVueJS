<script setup>
    const teams = [
        "Flamengo",
        "São Paulo",
        "Vasco",
        "Santos",
        "Curintia",
        "Grêmio",
    ];
</script>

<template>
    <ul>
        <li v-for="team in teams" class="text-red-500">
            {{ team }}
        </li>
    </ul>
</template>

<style></style>
