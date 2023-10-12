import React from 'react'

const Icon = ({ type }) => {
	return (
		<img src={`./src/assets/images/${type}.svg`} className='h-52 w-52' alt='' />
	)
}

export default Icon
