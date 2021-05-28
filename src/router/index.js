import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import Quiz from '../views/Quiz.vue';
import axios from 'axios';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'index',
		component: index,
	},
	{
		path: '/settings',
		name: 'settings',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/settings.vue'),
	},
	{
		path: '/quiz',
		name: 'quiz',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Quiz,
	},
	{
		path: '/result',
		name: 'result',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/result.vue'),
	},
	{
		path: '/admin',
		name: 'admin',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/admin.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

router.beforeEach((to, from, next) => {
	const publicPages = ['/'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');
	// trying to access a restricted page + not logged in
	// redirect to login page
	if (authRequired && !loggedIn) {
		next('/');
	} else {
		if (to.path === '/admin') {
			axios.defaults.headers.common.Authorization =
				'Bearer ' + JSON.parse(loggedIn).accessToken;
			axios
				.get('https://generalknowledge.azurewebsites.net/auth/admin')
				.then((res) => {
					if (res.status === 200) next();
				})
				.catch(() => {
					next('/');
				});
		} else {
			next();
		}
	}
});

export default router;
