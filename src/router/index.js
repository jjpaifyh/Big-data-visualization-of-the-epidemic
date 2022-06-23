import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('../views/Home.vue')
const Data = () =>
    import ('../views/Data.vue')
Vue.use(VueRouter)

const routes = [{
    path: "",
    redirect: '/login'

}, {
    path: '/login',
    name: 'Home',
    component: Home
}, {
    path: "/data",
    name: "Data",
    component: Data
}]

const router = new VueRouter({
    routes
})

export default router
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else
    if (to.path === '/Data' && from.path === '/login') {
        return next()
    } else {
        next('/login')
    }


})