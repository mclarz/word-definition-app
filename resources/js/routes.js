import History from './components/History.vue'
import Search from './components/Search.vue'

const routes = [
    {
        path:'/',
        component:Search,
    },
    {
        path: '/history',
        component: History
    }

]

export default routes;