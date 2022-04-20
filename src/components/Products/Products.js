import React from 'react';
import './products.css';
import { useSelector } from 'react-redux';

import Product from './Product';
import Landing from '../LandingPage/Landing';
import { Grid, CircularProgress } from '@material-ui/core';

const Products = () => {
	// Checks if API fetch is done.
	const data = useSelector(state => state.products.data);

	return (
		<>
			<Landing />
			<section id="products">
				<h3 className="category-heading">Products</h3>
				<Grid
					className="products-container"
					container
					component="main"
					justify="center"
				>
					{data ? (
						<Product />
					) : (
						<CircularProgress style={{ margin: '10em auto' }} />
					)}
				</Grid>
			</section>
		</>
	);
};

export default Products;
