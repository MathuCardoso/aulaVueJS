<script setup>
    import Button from "@/component/Button.vue";
    import Trash from "@/component/icons/Trash.vue";
    import Input from "@/component/Input.vue";
    import Modal from "@/component/Modal.vue";
    import { ref } from "vue";

    const teams = ref([]);

    const team = ref({
        id: 0,
        nome: "",
        escudo: "",
        cidade: "",
    });

    const modalOpen = ref(true);

    const erros = ref({});

    function validarDados() {
        let hasErrors = false;
        Object.entries(team.value).forEach(([campo, valor]) => {
            if (campo == "id") return;

            if (!valor) {
                erros.value[campo] = "O campo " + campo + " não pode ser vazio";
                hasErrors = true;
                return;
            }

            erros.value[campo] = null;
        });

        return hasErrors ? false : true;
    }

    function salvarTime() {
        if (!validarDados()) return;

        let newId = 1;

        if (teams.value.length)
            newId = teams.value[teams.value.length - 1].id + 1;

        team.value.id = newId;

        const newTeam = team.value;
        teams.value.push(newTeam);
        limparCampos();
    }

    function limparCampos() {
        team.value = {
            id: 0,
            nome: "",
            escudo: "",
            cidade: "",
        };
    }

    function excluirTime(id) {
        const index = teams.value.findIndex((time) => time.id == id);

        teams.value.splice(index, 1);
    }
</script>

<template>
    <Transition>
        <Modal v-if="modalOpen" @close="modalOpen = false">
            <div class="p-7">
                <h2 class="mb-4 text-3xl font-bold">Cadastro de time</h2>
                <div class="flex flex-col gap-3">
                    <Input
                        label="Nome do time"
                        :name="team.nome"
                        @input="team.nome = $event"
                        :error="erros['nome']"
                    />
                    <Input
                        label="Cidade do time"
                        :name="team.cidade"
                        @input="team.cidade = $event"
                        :error="erros['cidade']"
                    />
                    <Input
                        label="Escudo do time"
                        placeholder="Insira a URL do escudo"
                        :name="team.escudo"
                        @input="team.escudo = $event"
                        :error="erros['escudo']"
                    />
                    <Button @click="salvarTime()">Salvar Time</Button>
                </div>
            </div>
        </Modal>
    </Transition>
    <Button @click="modalOpen = true">Cadastrar Times</Button>

    <ul class="list bg-base-100 rounded-box shadow-md w-fit">
        <li class="p-4 pb-2 text-xstracking-wide">Times Cadastrados</li>

        <div class="flex gap-5">
            <li class="list-row" v-for="team in teams" :key="team.id">
                <div class="text-4xl font-thin tabular-nums">
                    {{ team.id }}
                </div>
                <div>
                    <img
                        class="size-10 rounded-box"
                        alt="team.escudo"
                        :src="team.escudo"
                    />
                </div>
                <div class="list-col-grow">
                    <div>{{ team.nome }}</div>
                    <div class="text-xs uppercase font-semibold">
                        {{ team.cidade }}
                    </div>
                </div>
                <button
                    class="btn btn-error btn-square btn-ghost"
                    @click="excluirTime(team.id)"
                >
                    <Trash />
                </button>
            </li>
        </div>
    </ul>
</template>

<style>
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.2s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>