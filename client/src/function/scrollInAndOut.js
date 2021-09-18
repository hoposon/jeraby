export default class ScrollInAndOut {
	constructor({target = 'js-scroll', assignClass = 'js-scrolled', callBack, scrollOffset} = {}) {
		// console.log('const target >>>', target)
		this.target = target;
		this.assignClass = assignClass;
		this.callBack = callBack;
		this.scrollOffset = scrollOffset;
		this.lastScroll = null;
		this.scrollDirection = null;
		// console.log('this.const target >>>', this.target)
		window.addEventListener('scroll', this.evaluateElementsPositions.bind(this), false);
		// console.log('ScrollInAndOut >>>> ')
	}

	evaluateElementsPositions() {
		// console.log('evaluateElementsPositions >>>> ')

		// get scroll direction
		const st = window.pageYOffset || document.documentElement.scrollTop;
		// console.log('scrollTop >>>', st)
		if (st > this.lastScroll) this.scrollDirection = "DOWN";
		else this.scrollDirection = "UP";
		this.lastScroll = st <= 0 ? 0 : st;
		
		// get viewport height
		const viewHeight = window.innerHeight || document.documentElement.clientHeight;

		// get elements with target class
		const elements = document.querySelectorAll(`.${this.target}`);
		// console.log('target >>> ', this.target);
		// console.log('elements >>> ', elements.length);	
		// elements.forEach((el, index) => {
		elements.forEach(el => {

			// get top and bottom of the target element
			const elementTop = el.getBoundingClientRect().top;
			const elementBottom = el.getBoundingClientRect().bottom;
			// console.log('viewHeight >>> ', viewHeight)
			// console.log('elementTop >>> ', elementTop)
			// if (index === 0) console.log('elementBottom >>> ', elementBottom)
			
			if (elementBottom < 0 && el.classList.contains(`${this.assignClass}`)) {
				// out of view - scrolled up
				el.classList.remove(`${this.assignClass}`);
				if (this.callBack) this.callBack({type: 'OUT', scrollDirection: this.scrollDirection, element: el});
			} else if (elementTop > viewHeight && el.classList.contains(`${this.assignClass}`)) {
				// out of view - scrolled back down
				el.classList.remove(`${this.assignClass}`);
				if (this.callBack) this.callBack({type: 'OUT', scrollDirection: this.scrollDirection, element: el});
			} else if (elementTop <= viewHeight && elementBottom >= 0 && !el.classList.contains(`${this.assignClass}`)) {
				// in view - scrolled up
				// console.log('in view element >>> ', el)
				el.classList.add(`${this.assignClass}`);
				if (this.callBack) this.callBack({type: 'IN', scrollDirection: this.scrollDirection, element: el});
			} else if (elementBottom >= 0 && elementTop <= viewHeight && !el.classList.contains(`${this.assignClass}`)) {
				// in view - scrolled back down
				el.classList.add(`${this.assignClass}`);
				// console.log('in view element >>> ', this.callBack)
				if (this.callBack) this.callBack({type: 'IN', scrollDirection: this.scrollDirection, element: el});
			}
		})
	}

	destroy() {
		window.removeEventListener('scroll', this.evaluateElementsPositions, false);
	}
}