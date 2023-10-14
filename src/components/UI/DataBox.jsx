import React from 'react'

const DataBox = ({ title, data, extraData = '' }) => {
	return (
		<div className='rounded-lg w-full h-28 p-3 bg-fuchsia-800'>
			<div className='text-xl'>{title}:</div>
			<div className='text-lg italic'>{data}</div>
			<div className='text-xl'>{extraData}</div>
		</div>
	)
}

export default DataBox
