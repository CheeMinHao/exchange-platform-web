import {createRouter, createWebHistory} from 'vue-router'
import Home from "/@/pages/Home.vue"
import Product from "/@/pages/Product.vue"
// import Profile from "/@/pages/Profile.vue"
import NavLayout from "/@/layouts/Nav.layout.vue"
import Login from "/@/pages/Login.vue"
import Register from "/@/pages/Register.vue"
import Checkout from "/@/pages/Checkout.vue"
import ProfileAdd from "/@/pages/Profileadd.vue"
import ForgotPass from "/@/pages/ForgotPass.vue"
import Topup from "/@/pages/Topup.vue"
import Terms from "/@/pages/Terms.vue"
import Policy from "/@/pages/Policy.vue"
import AddProduct from '/@/pages/AddProduct.vue';
import MyProduct from '/@/pages/MyProduct.vue';
import ProfileMod from '/@/pages/ProfileMod.vue';
import MyPurchase from '/@/pages/MyPurchase.vue';

const routes = [
    {
        path: "/",
        component: NavLayout,
        children: [
            {
                path: "/",
                name: 'Home',
                component: Home,
            },
            {
                path: "/login",
                name: 'Login',
                component: Login,
            },
            {
                path: "/register",
                name: 'Register',
                component: Register,
            },
            {
                path: "/product",
                name: 'Product',
                component: Product,
            },
            {
                path: "/profile",
                component: ProfileMod,
                children: [
                    {
                        path: "/profile",
                        NAME: 'MyProduct',
                        component: MyProduct
                    },
                    {
                        path: "/profile/add-product",
                        NAME: 'AddProduct',
                        component: AddProduct
                    },
                    {
                        path: "/profile/my-purchase",
                        NAME: 'MyPurchase',
                        component: MyPurchase
                    },
                ]
            },
            {
                path: "/checkout",
                name: 'Checkout',
                component: Checkout,
            },
            {
                path: "/profile_add",
                name: 'ProfileAdd',
                component: ProfileAdd
            },
            {
                path: "/forgotpass",
                name: 'ForgotPass',
                component: ForgotPass
            },
            {
                path: "/topup",
                name: 'Topup',
                component: Topup
            },
            {
                path: '/terms',
                name: 'Terms',
                component: Terms
            },
            {
                path: '/policy',
                name: 'Policy',
                component: Policy
            }

        ]

    }
]

const router = createRouter({
    // recommended mode
    // https://next.router.vuejs.org/guide/essentials/history-mode.html#html5-mode
    history: createWebHistory(),
    routes
})

export default router;
