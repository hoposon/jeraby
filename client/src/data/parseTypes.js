function createBuyRequest(parse, {email, product} = {}) {
	const buyRequest = new parse.Object("BuyRequest");
	buyRequest.set('email', email);
	buyRequest.set('product', product);
	return buyRequest;
}






export {
	createBuyRequest
}