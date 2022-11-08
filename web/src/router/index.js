import { createRouter, createWebHistory } from 'vue-router'
import DocumentationIndexView from "@/views/documentation/DocumentationIndexView";
import LearnIndexView from "@/views/learn/LearnIndexView";
import NotFound from "@/views/error/NotFound";
import QAIndexView from "@/views/qa/QAIndexView";
import TrainingIndexView from "@/views/training/TrainingIndexView";
import UserAccountLoginView from "@/views/user/account/UserAccountLoginView";
import UserAccountRegisterView from "@/views/user/account/UserAccountRegisterView";
import store from "@/store";
import CertificationsIndexView from "@/views/certifications/CertificationsIndexView";
import SamplesIndexView from "@/views/samples/SamplesIndexView";
import ShowsIndexView from "@/views/shows/ShowsIndexView";
import EventsIndexView from "@/views/events/EventsIndexView";


const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/learn/",
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/learn/",
        name: "learn_index",
        component: LearnIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/documentation/",
        name: "documentation_index",
        component: DocumentationIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/404/",
        name: "404_index",
        component: NotFound,
        meta: {
            requestAuth: false,
        }
    },
    {
        path: "/qa/",
        name: "qa_index",
        component: QAIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/training/",
        name: "training_index",
        component: TrainingIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/certifications/",
        name: "certifications_index",
        component: CertificationsIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/samples/",
        name: "samples_index",
        component: SamplesIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/shows/",
        name: "shows_index",
        component: ShowsIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/events/",
        name: "events_index",
        component: EventsIndexView,
        meta: {
            requestAuth: true,
        }
    },
    {
        path: "/user/account/login/",
        name: "user_account_login",
        component: UserAccountLoginView,
        meta: {
            requestAuth: false,
        }
    },
    {
        path: "/user/account/register/",
        name: "user_account_register",
        component: UserAccountRegisterView,
        meta: {
            requestAuth: false,
        }
    }



]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requestAuth && !store.state.user.is_login) {
        next({name: "user_account_login"});
    } else {
        next();
    }
})

export default router
