import React from 'react'

const DataBox = ({ title, data, extraData = '' }) => {
	return (
		<div className='rounded-lg w-40 h-24 bg-fuchsia-800'>
			<div>{title}</div>
			<div>{data}</div>
			<div>{extraData}</div>
		</div>
	)
}

export default DataBox
