export const productCategories = [{
    categoryId: 1,
    categoryName: "category.jeraby",
    showInNavigation: true,
	routePath: '/jeraby',
	routeComponent: '../views/.vue'
}]

export function generateRoutesFromProdCat() {
	const routes = [];
	productCategories.forEach(cat => {
		const route = {
			path: cat.routePath,
			props: {
				products: products.filter(prod => prod.productCategory.find(catId => catId === cat.categoryId))
			},
			// route level code-splitting
			// this generates a separate chunk (categoryName.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(`/* webpackChunkName: "${cat.categoryName}" */ '../components/products/ProductsList.vue'`)
			component: () => import('../components/products/ProductsList.vue')
		};
		routes.push(route);
	});
	return routes;
}

export function prodCatNavigation() {
	return productCategories.filter(cat => cat.showInNavigation).map(cat => {
		return {
			categoryId: cat.categoryId,
			to: cat.routePath,
			name: cat.categoryName
		}
	})
}

export const products = [{
    productId: 1,
    productCategory: [1],
    productName: "product.name.jeraby1",
	main: {
		description: 'product.name.jeraby1.description'
	},
    images: {
		main: [{
			path: "./statics/products/jeraby/jeraby1/main.jpeg",
			name: "jeraby1"
		}],
		detail: [{
			path: "",
			name: "",
		}]
	}
}, {
    productId: 2,
    productCategory: [1],
    productName: "product.name.jeraby2",
	main: {
		description: 'product.name.jeraby2.description'
	},
    images: {
		main: [{
			path: "./statics/products/jeraby/jeraby2/main.jpeg",
			name: "jeraby1"
		}, {
			path: "./statics/products/jeraby/jeraby2/main-second.jpeg",
			name: "jeraby1"
		}], 
		detail: [{
			path: "",
			name: ""
		}]
	}
}]