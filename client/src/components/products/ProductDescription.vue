<template>
	<div
		ref="description"
		class="-display-flex -f-wrap -f-align-content-space-between -pad-20"
	>
		<div>
			<h2
				class="h2"
			>
				{{translate(product.productName)}}
			</h2>
			<div
				class="-display-flex -mrgt-10"
			>
				<span>
					{{translate('product.categories')}}:
				</span>
				<div
					class="-display-flex -f-wrap -mrgl-5"
				>
					<router-link 
						v-for="category in product.productCategories"
						:key="category.categoryId"
						:to="category.routePath"
						class="link"
					>
						{{translate(category.categoryName)}}
					</router-link>
				</div>
			</div>
			<div
				class="-mrgt-1r"
			>
				{{translate(product.main.description)}}
			</div>
		</div>
		<div
			class="-w-100 -display-flex"
		>
			<div
				class="-w-50 -display-flex -f-column -f-align-items-start -f-justify-content-end"
			>
				<span>{{ translate('prod.size') }}</span>
				<span>{{ product.size }}</span>
			</div>
			<div
				class="-w-50 -display-flex -f-column -f-align-items-end"
			>
				<h4
					class="h4"
				>
					{{ translate(product.state) }}
				</h4>
				<button
					class="btn -mrgt-10"
					@click="modalShow({modalName: 'BuyModal', product})"
				>
					{{ translate(product.buyButton) }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>

	import modalMixin from '../../mixins/modalMixin.js';

	export default {
		mixins: [
			modalMixin
		],
		props: {
			product: {
				type: Object,
				default: () => {}
			}
		},
		mounted() {
			console.log('productDesc >>> ', this.product)
			for (const key in this.product.main.descStyle) {
				// console.log('key >>>', key)
				this.$refs['description'].style[key] = this.product.main.descStyle[key];
			}
		}
	}
</script>