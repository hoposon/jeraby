export const productSaleStates = {
	'WORK-IN-PROGRESS': {
		state: 'prod.state.work.in.progress',
		buyButton: 'buy.button.let.us.know.your.interested'
	}, 
	'SOLD': {
		state: 'prod.state.sold',
		buyButton: 'buy.button.i.want.something.like.that'
	},
	'AVAILABLE': {
		state: 'prod.state.available',
		buyButton: 'buy.button.buy'
	},
	'BOOKED': {
		state: 'prod.state.booked',
		buyButton: 'buy.button.let.us.know.your.interested'
	}
}

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
	status: productSaleStates['AVAILABLE'].state,
	buyButton: productSaleStates['AVAILABLE'].buyButton,
	main: {
		description: 'product.name.jeraby1.description',
		descStyle: {"background-color": "#ffffff", "box-shadow": "0px 0px 0px 4px #f7f7f7"}
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
	status: productSaleStates['AVAILABLE'].state,
	buyButton: productSaleStates['AVAILABLE'].buyButton,
	main: {
		description: 'product.name.jeraby2.description',
		descStyle: {"background-color": "#ffffff", "box-shadow": "0px 0px 0px 4px #f7f7f7"}
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
	status: productSaleStates['AVAILABLE'].state,
	buyButton: productSaleStates['AVAILABLE'].buyButton,
	main: {
		description: 'product.name.jeraby3.description',
		descStyle: {"background-color": "#ffffff", "box-shadow": "0px 0px 0px 4px #f7f7f7"}
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