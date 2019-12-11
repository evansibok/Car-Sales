import * as types from './actionTypes'

const initialStore = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image:
			'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	additionalFeatures: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};

export function carReducer(state = initialStore, action) {
	switch (action.type) {
		case types.ADD_FEATURE:
			return {
				...state,
				additionalPrice: action.payload.additionalPrice,
				car: {
					...state.car,
					features: [...state.car.features, action.payload.features]
				},
			};
		case types.REMOVE_FEATURE:
			return {

			}
		default:
			return state
	}
}