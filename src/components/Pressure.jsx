import React from 'react'

import DataBox from './UI/DataBox'

const Pressure = ({ value }) => {
	return <DataBox title={'Pressure'} data={`${value} mb`} />
}

export default Pressure
