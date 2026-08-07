import React from 'react'
import Sidebar from '../Sidebar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../ProductItem/item';



const ProductListing = () => {
  return (
    <section className='py-5'>
      <div className='container'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="black" href="/" className='link transition'>
          Home
        </Link>
        <Link
          underline="hover"
          color="black"
          href="/" className='link transition'
        >
          Fashion
        </Link>
      </Breadcrumbs>
      </div>

       <div className='bg-white p-2 mt-4'>
       <div className='container flex gap-3'>
            <div className = "Sidebarwrapper w-[20%] h-full bg-white">
                <Sidebar/>
            </div>

            <div className='rightSection w-[80%]'>
              <div className='grid grid-cols-4 md:grid-cols-4 gap-4'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
              </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default ProductListing;
