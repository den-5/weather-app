import React from 'react'

import DataBox from './UI/DataBox'

const Visibility = ({ value }) => {
	return <DataBox title={'Visibility'} data={`${value} km`} />
}

export default Visibility
