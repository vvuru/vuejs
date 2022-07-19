import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ProductCreate from "../views/ProductCreate.vue";
import ProductUpdate from "../views/ProductUpdate.vue";
import SalesList from "../views/SalesList.vue";
import ImageInsert from "../views/ImageInsert.vue";
import store from "@/store";
import Swal from "sweetalert2";

// navigation guard
const requireAuth = () => {
    return (to, from, next) => {
        if (store.state.user.iuser === undefined) {
            Swal.fire("Do Login", "", "warning");
            return;
        }
        return next();
    };
};

const routes = [
    {
        path: "/",
        name: "Home",
        component: ProductList,
    },
    {
        path: "/detail",
        name: "ProductDetail",
        component: ProductDetail,
    },
    {
        path: "/create",
        name: "ProductCreate",
        component: ProductCreate,
        beforeEnter: requireAuth(),
    },
    {
        path: "/update",
        name: "ProductUpdate",
        component: ProductUpdate,
    },
    {
        path: "/sales",
        name: "SalesList",
        component: SalesList,
    },
    {
        path: "/image_insert",
        name: "ImageInsert",
        component: ImageInsert,
        beforeEnter: requireAuth(),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
