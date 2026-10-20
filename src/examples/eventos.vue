<script setup>
    import Input from "@/component/Input.vue";
    import Select from "@/component/Select.vue";
    import Button from "@/component/Button.vue";
    import { ref } from "vue";

    const userName = ref("");

    function teste(event) {
        alert(event);
    }

    const number = ref(0);

    const sum = () => number.value++;
    const sub = () => {
        if (number.value == 0) return;
        number.value--;
    };
</script>

<template>
    <div>
        <Input label="Insira seu nome" @input="userName = $event" />
        <span>{{ userName }}</span>
    </div>

    <Select @change="teste($event)">
        <option value="Tem nada aqui não mano"></option>
        <option value="gremio">Grêmio</option>
        <option value="flamengo">Flamengo</option>
        <option value="santos">Santos</option>
    </Select>

    <div class="flex gap-4">
        <Button @click="sub">-</Button>
        <span class="text-2xl">{{ number }}</span>
        <Button @click="sum">+</Button>
    </div>
</template>
