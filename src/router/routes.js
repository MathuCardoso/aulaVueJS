import Computed from "@/examples/computed.vue";
import Eventos from "@/examples/eventos.vue";
import Vfor from "@/examples/vfor.vue";
import Vif from "@/examples/vif.vue";
import Watch from "@/examples/watch.vue";
import TodoList from "@/pages/TodoList.vue";

export const routes = [
    {
        path: "/",
        component: TodoList,
    },
    {
        path: "/eventos",
        component: Eventos,
    },
    {
        path: "/computed",
        component: Computed,
    },
    {
        path: "/watch",
        component: Watch,
    },
    {
        path: "/vif",
        component: Vif,
    },
    {
        path: "/vfor",
        component: Vfor,
    },
];
