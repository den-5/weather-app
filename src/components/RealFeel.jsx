import React from 'react'

import DataBox from './UI/DataBox'

const RealFeel = ({ value }) => {
	return <DataBox title={'Real Feel'} data={`${value}°C`} />
}

export default RealFeel
