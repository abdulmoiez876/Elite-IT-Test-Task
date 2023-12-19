import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// components
import Navbar from './components/navbar/Navbar';

// redux
import { getAllProducts } from './store/productsSlice';
import { getListings } from './store/listingsSlice';

function App() {
	// initializations
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// globals
	const { refreshListings, currentPage } = useSelector(state => state.listings);

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

	// fetching listings
	useEffect(() => {
		dispatch(getListings(currentPage));
	}, [dispatch, refreshListings])

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
