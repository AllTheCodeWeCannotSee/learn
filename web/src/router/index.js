import { createRouter, createWebHistory } from 'vue-router'
import DocumentationIndexView from "@/views/documentation/DocumentationIndexView";
import LearnIndexView from "@/views/learn/LearnIndexView";
import NotFound from "@/views/error/NotFound";
import QAIndexView from "@/views/qa/QAIndexView";
import TrainIndexView from "@/views/train/TrainIndexView";
import UserAccountLoginView from "@/views/user/account/UserAccountLoginView";
import UserAccountRegisterView from "@/views/user/account/UserAccountRegisterView";


const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/learn/",
    },
    {
        path: "/learn/",
        name: "learn_index",
        component: LearnIndexView
    },
    {
        path: "/documentation/",
        name: "documentation_index",
        component: DocumentationIndexView
    },
    {
        path: "/404/",
        name: "404_index",
        component: NotFound
    },
    {
        path: "/qa/",
        name: "qa_index",
        component: QAIndexView
    },
    {
        path: "/train/",
        name: "train_index",
        component: TrainIndexView
    },
    {
        path: "/user/account/login/",
        name: "user_account_login",
        component: UserAccountLoginView
    },
    {
        path: "/user/account/register/",
        name: "user_account_register",
        component: UserAccountRegisterView
    }



]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
