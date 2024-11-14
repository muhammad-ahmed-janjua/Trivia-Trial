import { createRouter, createWebHistory } from "vue-router";

import HomeView from '@/views/HomeView.vue'
import NotFoundView from "@/views/NotFoundView.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import ComingSoon from "@/views/ComingSoon.vue";
import QuizView from "@/views/QuizView.vue";
import TestQuestion from "@/views/tut/TestQuestion.vue";
import ProfileTut from "@/views/tut/ProfileTut.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/quiz',
			name: 'startQuiz',
			component: QuizView,
		},
		{
			path: '/quiz/create',
			name: 'createQuiz',
			component: ComingSoon,
		},
		{
			path: '/leaderboard',
			name: 'viewLeaderboard',
			component: ComingSoon,
		},
		{
			path: '/quizzes',
			name: 'viewMyQuizzes',
			component: ComingSoon,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileTut,
		},
		{
			path: '/:catchAll(.*)',
			name: 'not-found',
			component: NotFoundView,
		},
	]
})

export default router;