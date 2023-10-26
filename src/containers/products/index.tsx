'use client';
// components
import SectionProducts from '@/components/SectionProducts';
import Categories from './Categories';
import ProductsList from './ProductsList';
import Sidebar from './Sidebar';
// react-query
// icons
import { Fragment } from 'react';
import { BsFilterLeft } from '../../compound/icons/index';
import { PRODUCT_LIST_SAME } from '../home/constants';

const PageProducts = () => {
	return (
		<Fragment>
			<main className="site-products-page container">
				<Categories />
				<section className="main-section-products">
					{/*  sub categories */}
					<div className="filter-wrapper">
						<div className="filters-inner">
							<div className="filter">
								<BsFilterLeft size={22} />
								Filter
							</div>
							<div className="filter">
								<label htmlFor="filter-select-products">Sort by</label>
								<select
									name="filter-select-products"
									id="filter-select-products"
									className="filter-select-products"
								>
									<option value="recommended">Recommended</option>
									<option value="recommended">Price Low-Hight</option>
									<option value="recommended">Price Hight-Low</option>
								</select>
							</div>
						</div>
						<span className="total-products">56 items</span>
					</div>
					<div className="products-wrapper">
						{/* sidebar filter product */}
						<Sidebar />
						{/* products */}
						<ProductsList />
					</div>
				</section>
			</main>
			<SectionProducts
				title="RECENTLY VIEWED"
				productList={PRODUCT_LIST_SAME}
			/>
		</Fragment>
	);
};

export default PageProducts;
