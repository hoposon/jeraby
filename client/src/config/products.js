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
		description: 'product.name.jeraby1.description',
		descStyle: {"background-color": "#ffffff", "box-shadow": "0 0 0 10px whitesmoke"}
	},
    images: {
		main: [{
			// path: "/assets/products/jeraby/jeraby1/main.jpg",
			path: "/assets/products/jeraby/jeraby1/main-1.jpg",
			name: "jeraby1"
		}, {
			path: "/assets/products/jeraby/jeraby1/main-2.jpg",
			name: "jeraby1"
		}],
		detail: [{
			path: "",
			name: "",
		}]
	}
}, 
{
    productId: 2,
    productCategory: [1],
    productName: "product.name.jeraby2",
	main: {
		description: 'product.name.jeraby2.description',
		descStyle: {"background-color": "#ffffff", "box-shadow": "0 0 0 10px whitesmoke"}
	},
    images: {
		main: [{
			path: "/assets/products/jeraby/jeraby1/main-1.jpg",
			name: "jeraby2"
		}, {
			path: "/assets/products/jeraby/jeraby2/main-2.jpg",
			name: "jeraby2"
		}], 
		detail: [{
			path: "",
			name: ""
		}]
	}
},
{
    productId: 3,
    productCategory: [1],
    productName: "product.name.jeraby3",
	main: {
		description: 'product.name.jeraby3.description',
		descStyle: {"background-color": "#ffffff", "box-shadow": "0 0 0 10px whitesmoke"}
	},
    images: {
		main: [{
			path: "/assets/products/jeraby/jeraby1/main-1.jpg",
			name: "jeraby2"
		}, {
			path: "/assets/products/jeraby/jeraby2/main-2.jpg",
			name: "jeraby2"
		}], 
		detail: [{
			path: "",
			name: ""
		}]
	}
}
]