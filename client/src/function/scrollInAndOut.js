export default class ScrollInAndOut {
	constructor({target = 'js-scroll', assignClass = 'js-scrolled', callBack, scrollOffset} = {}) {
		console.log('const target >>>', target)
		this.target = target;
		this.assignClass = assignClass;
		this.callBack = callBack;
		this.scrollOffset = scrollOffset;
		console.log('this.const target >>>', this.target)
		window.addEventListener('scroll', this.evaluateElementsPositions.bind(this), false);
		console.log('ScrollInAndOut >>>> ')
	}

	evaluateElementsPositions() {
		console.log('evaluateElementsPositions >>>> ')
		const elements = document.querySelectorAll(`.${this.target}`);
		const viewHeight = window.innerHeight || document.documentElement.clientHeight;
		console.log('target >>> ', this.target)
		console.log('elements >>> ', elements.length)
		elements.forEach(el => {
			const elementTop = el.getBoundingClientRect().top;
			const elementBottom = el.getBoundingClientRect().bottom;
			console.log('viewHeight >>> ', viewHeight)
			console.log('elementTop >>> ', elementTop)
			console.log('elementBottom >>> ', elementBottom)
			// is in view


			// is out of view

		})
	}

	destroy() {
		window.removeEventListener('scroll', this.evaluateElementsPositions, false);
	}
}