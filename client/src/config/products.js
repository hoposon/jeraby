export const productCategories = [{
    categoryId: 1,
    categoryName: "jeraby",
    showInNavigation: true,
	routePath: '/jeraby',
	routeComponent: '../views/.vue'
}]

export function generateRoutesFromProds() {
	const routes = [];
	productCategories.forEach(cat => {
		const route = {
			name: cat.categoryName,
			path: cat.routePath,
			props: {
				products: products.filter(prod => prod.productCategory.find(catId => catId === cat.categoryId))
			},
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(`/* webpackChunkName: "${cat.categoryName}" */ '../components/products/ProductsList.vue'`)
		};
		routes.push(route);
	});
	return routes;
}

export function navigationItems() {
	return productCategories.filter(cat => cat.showInNavigation).map(cat => {
		return {
			to: cat.routePath,
			name: cat.categoryName
		}
	})
}

export const products = [{
    productId: 1,
    productCategory: [1],
    productName: "Jeraby 1",
    images: [{
        path: "",
        name: "",
        type: "main"
    }, {
        path: "",
        name: "",
        type: "gen"
    }]
}]