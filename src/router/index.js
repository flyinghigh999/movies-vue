import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Admin from "../views/AdminView.vue"
import Login from "../views/LoginView.vue"
import Welcome from "../views/admin/Welcome.vue"
import Chapter from "../views/admin/Chapter.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Login
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children: [
      {path: "welcome",name: "Welcome", component: Welcome},
      {path: "business/chapter",name: "chapter", component: Chapter
    }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
