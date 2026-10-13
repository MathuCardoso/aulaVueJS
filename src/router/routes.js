import Click from "@/examples/click.vue";
import Computed from "@/examples/computed.vue";
import Ref from "@/examples/ref.vue";
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
        path: "/ref",
        component: Ref,
    },
    {
        path: "/click",
        component: Click,
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
