import * as types from './actionTypes'


export const addFeature = (additionalPrice, item) => {
	return {
		type: types.ADD_FEATURE,
		payload: {
			additionalPrice: additionalPrice + item.price,
			features: item,
		},
	}
}

export const remove = (additionalPrice, item) => {
	debugger
	return {
		type: types.REMOVE_FEATURE,
		payload: {
			additionalPrice,
			item
		},
	}
}