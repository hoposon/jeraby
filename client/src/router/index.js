import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import { products, generateRoutesFromProdCat } from '../config/products';

let routes = [
	{
		path: '/',
		component: Home,
		props: {
			products
		}
	}, {
		path: '/about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}, {
		path: '/contact',
		// route level code-splitting
		// this generates a separate chunk (contact.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
	}
]

routes = [
	...routes,
	...generateRoutesFromProdCat()
]

console.log('routes >>> ', routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
