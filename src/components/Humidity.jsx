import React from 'react'

import DataBox from './UI/DataBox'

const Humidity = ({ value }) => {
	return <DataBox title={'Humidity'} data={`${value} %`} />
}

export default Humidity
