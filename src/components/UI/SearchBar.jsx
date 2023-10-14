import React from 'react'

const SearchBar = ({ value, setValue, handleClick }) => {
	return (
		<div className='w-96 bg-zinc-600 relative'>
			<input
				type='text'
				value={value}
				onChange={e => setValue(e.target.value)}
				className='bg-transparent w-full'
				onSubmit={handleClick}
				placeholder='find your city...'
			/>
			<button onClick={handleClick}>
				<img
					src='./src/assets/images/search-icon.svg'
					className='h-6 w-6 absolute right-0 top-0'
					alt=''
				/>
			</button>
		</div>
	)
}

export default SearchBar
