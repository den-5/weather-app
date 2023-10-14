import React, { useRef } from 'react'

const SearchBar = ({ value, setValue, onSubmit }) => {
	const searchInputRef = useRef()

	const customOnSubmit = e => {
		e.preventDefault()
		onSubmit(e)
		searchInputRef.current.blur()
	}

	return (
		<form
			className=' w-full bg-zinc-600 relative mt-5 md:mb-5 md:mt-0 rounded-lg'
			onSubmit={customOnSubmit}
		>
			<input
				type='text'
				value={value}
				ref={searchInputRef}
				onChange={e => setValue(e.target.value)}
				className='bg-transparent w-full px-4'
				placeholder='find your city...'
			/>
			<button type='submit'>
				<img
					src='./src/assets/images/search-icon.svg'
					className='h-6 w-6 absolute right-0 top-0'
					alt=''
				/>
			</button>
		</form>
	)
}

export default SearchBar
