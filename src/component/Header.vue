<script setup>
    const routes = [
        {
            name: "TodoList",
            path: "/",
        },
        {
            name: "REF",
            path: "/ref",
        },
        {
            name: "CLICK",
            path: "/click",
        },
        {
            name: "COMPUTED",
            path: "/computed",
        },
        {
            name: "WATCH",
            path: "/watch",
        },
        {
            name: "VIF",
            path: "/vif",
        },
        {
            name: "VFOR",
            path: "/vfor",
        },
    ];
</script>

<template>
    <header class="fixed w-[90%] top-0">
        <div class="navbar bg-base-100 shadow-sm">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl text-green-700">VueJs</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Rotas</summary>
                            <ul class="bg-base-100 rounded-t-none p-2">
                                <li v-for="route in routes">
                                    <RouterLink :to="route.path">
                                        {{ route.name }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
