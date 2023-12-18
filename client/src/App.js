import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllProducts } from './store/productsSlice';

function App() {
	// initializations
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// effects
	// for redirecting user to home page
	useEffect(() => {
		if (window.location.pathname === '/') {
			navigate('/home');
		}
	}, [navigate])

	// fetching products
	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch])
	
	return (
		<Outlet />
	);
}

export default App;
