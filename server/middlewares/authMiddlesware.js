const { getErrorPayload } = require('../utilities/getSuccessAndErrorPayload');

const authMiddleware = (request, response, next) => {
	const jwt = request.headers?.authorization?.split(' ')[1];
	console.log(jwt);
	if (jwt?.length === 0) {
		const getError = getErrorPayload();
		getError.message = 'Invalid JWT token please refresh';
		getError.extendedMessage = 'token is possibly null';
		response.status(401).send(getError);
	}
	try {
		const jwtToken = require('jsonwebtoken');
		var decoded = jwtToken.verify(jwt, 'shhhh');
		console.log(decoded);
		next();
	} catch (error) {
		const getError = getErrorPayload();
		getError.message = 'Invalid JWT token please refresh from middleware';
		getError.extendedMessage = error.message;
		response.status(401).send(getError);
	}
};

module.exports = {
	authMiddleware,
};
