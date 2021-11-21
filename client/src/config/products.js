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
	categoryStringId: 'jeraby',
    categoryName: "category.jeraby",
    showInNavigation: true,
	routePath: '/jeraby',
	categoryIntroClass: ['__jeraby']
}]

export function generateRoutesFromProdCat() {
	const routes = [];
	productCategories.forEach(cat => {
		const route = {
			path: cat.routePath,
			props: {
				products: products.filter(prod => prod.productCategories.find(prodCat => prodCat.categoryId === cat.categoryId)),
				categoryName: cat.categoryName,
				categoryIntroClass: cat.categoryIntroClass
			},
			// route level code-splitting
			// this generates a separate chunk (categoryName.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(`/* webpackChunkName: "${cat.categoryName}" */ '../components/products/ProductsList.vue'`)
			component: () => import('../views/Category.vue')
		};
		routes.push(route);
	});
	return routes;
}

export function generateRoutesFromProducts() {
	const routeDef = {
		path: '/product/:id',
		props: route => ({product: products.filter(prod => prod.productId.toString() === route.params.id)}),
		// route level code-splitting
		// this generates a separate chunk (categoryName.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(`/* webpackChunkName: "${cat.categoryName}" */ '../components/products/ProductsList.vue'`)
		component: () => import('../views/ProductDetail.vue'),
		beforeEnter: (to, from, next) => {
			if (products.findIndex(prod => prod.productId.toString() === to.params.id) === -1) next('/not-found');
			else next();
		}
	}
	return [routeDef];
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

const productsConf = [
	{
		productId: 1,
		productCategories: [1],
		productName: "product.name.jeraby1",
		state: productSaleStates['AVAILABLE'].state,
		buyButton: productSaleStates['AVAILABLE'].buyButton,
		size: '50 cm x 50 cm',
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
		productCategories: [1],
		productName: "product.name.jeraby2",
		state: productSaleStates['AVAILABLE'].state,
		buyButton: productSaleStates['AVAILABLE'].buyButton,
		size: '50 cm x 50 cm',
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
		productCategories: [1],
		productName: "product.name.jeraby3",
		state: productSaleStates['AVAILABLE'].state,
		buyButton: productSaleStates['AVAILABLE'].buyButton,
		size: '50 cm x 50 cm',
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

// export const products = productsConf.map((product, productCategories) => {
export const products = productsConf.map((product) => {
	return {
		...product,
		productCategories: product.productCategories.map(cat => {
			let f = productCategories.find(prodCat => cat.categoryId === prodCat.id)
			console.log('cat>>>', cat)
			console.log('f>>>', f)
			return f
		}),
		test: 'hi'
	}
})

console.log('products 1>>> ', products)