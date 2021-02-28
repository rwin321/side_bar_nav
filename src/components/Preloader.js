import React from 'react';
import preloaderAnimation from '../utils/Preloader/preloaderAnimation.svg'
import './Preloader.css'

const Preloader = () => {
	return (
		<div className = 'preloader'>
			<img src = {preloaderAnimation} alt = 'loading...' />
		</div>
	)
}

export default Preloader