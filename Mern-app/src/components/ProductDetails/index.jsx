import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import ProductZoom from '../ProductZoom'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { useState } from 'react'
import QtyBox from '../QtyBox'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import TextField  from '@mui/material/TextField';
import ProductSlider from '../ProductSlider'

const ProductDetails = () => {

  const [productActionIndex, setProductActionIndex] = useState(null)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div className='py-5'>
        <div className='container'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover"
              color="inherit"
              href="/"
              className='link transition !text-[14px]'>
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/" className='link transition !text-[14px]'
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className='link transition !text-[14px]'
            >
              Men Regular Fit Solid Spread Collar Casual Shirt
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className='bg-white py-5'>
        <div className='container flex gap-8 items-center'>
          <div className='productZoom w-[40%]'>
            <ProductZoom />
          </div>

          <div className='productContent w-[60%] '>
            <h3 className='text-[22px] font-[600] mb-2'>METRONAUT Men Regular Fit Solid Spread Collar Casual Shirt</h3>
            <div className='flex items-center gap-3 '>
              <span className='text-gray-500 text-[15px]'>Brand : <span className='font-[500] text-black opacity-75'>METRONAUT</span></span>

              <Rating name='size-small' defaultValue={4} size='small' readOnly />
              <span className='text-[14px] cursor-pointer'>Review (5)</span>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <span className='oldPrice line-through text-gray-500 text-[17px] font-[500]'>$58.00</span>
              <span className='Price text-black text-[17px] font-bold'>$50.00</span>

              <span className='text-[15px]'>Available In Stock : <span className='text-green-500 font-[500]'>128 Items</span></span>
            </div>


            <p className='mt-3 pr-10 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eaque eligendi! Officia laboriosam debitis natus commodi nisi culpa temporibus, animi nulla tenetur qui sit aliquam repellat harum exercitationem. Fugit,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur commodi fugiat illo doloremque esse perspiciatis ducimus optio aut fugit. Distinctio soluta mollitia dolores illum velit nulla ex nihil dicta.</p>

            <div className='flex items-center gap-3'>
              <span className='text-[16px]'>Size :</span>
              <div className='flex items-center gap-1 actions'>
                <Button className={`${productActionIndex === 0 ? "!bg-black !text-white" : "!text-black"}`} onClick={() => setProductActionIndex(0)}>S</Button>
                <Button className={`${productActionIndex === 1 ? "!bg-black !text-white" : "!text-black"}`} onClick={() => setProductActionIndex(1)}>M</Button>
                <Button className={`${productActionIndex === 2 ? "!bg-black !text-white" : "!text-black"}`} onClick={() => setProductActionIndex(2)}>L</Button>
                <Button className={`${productActionIndex === 3 ? "!bg-black !text-white" : "!text-black"}`} onClick={() => setProductActionIndex(3)}>XL</Button>

              </div>
            </div>

            <p className='text-[14px] mt-4 mb-2'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
            <div className='flex items-center gap-4 py-4'>
              <div className='qtyWrapper w-[70px]'>
                <QtyBox />
              </div>

              <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[21px]' /> Add To Cart</Button>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <span className='flex items-center gap-2 text-[16px] link cursor-pointer font-[500]'>
                <FaRegHeart className='text-[18px]' />Add To Whislist
              </span>
            </div>


          </div>
        </div>

        <div className="container pt-10">
          <div className='flex items-center gap-8'>
            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 && "text-blue-600"}`} onClick={() => setActiveTab(0)}>Description</span>
            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 && "text-blue-600"}`} onClick={() => setActiveTab(1)}>Product Details</span>
            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 && "text-blue-600"}`} onClick={() => setActiveTab(2)}>Reviews (5)</span>
          </div>

          {activeTab === 0 && <div className='shadow-lg py-5 px-8 rounded-md w-full'>
            <h4 className='font-[600] mb-3'>Lightweight Design</h4>
            <p className=' py-2  text-gray-600'>Stay stylish and comfortable in this Red Tape Checked Shirt, designed to enhance your everyday style. Made from a high quality blend of cotton and polyester, this shirt ensures comfort throughout the day. Its check pattern is adaptable, making it a versatile choice for any event. Features: Ultimate Comfort: Made with a premium blend of cotton and polyester. Smart Design: With its button down collar, this shirt is perfect for both casual outings and formal occasions.<br /> Easy Pairing: Pairs well with jeans or chinos for a versatile look. Regular Fit: A comfortable fit that is not too tight or too loose, just right for everyday wear.</p>

            <h4 className='font-[600] mb-3'>Warrenty Summary</h4>
            <p className=' text-gray-600'>This Is a Genuine Product of Red Tape. The Product Comes with a Standard Brand Warranty of 45 Days.<br /> Warranty Covers Manufacturing Defects, Provided the Product Is Not Inappropriately Used as Determined by the Brand. Customer has to contact our care contact details </p>
          </div>}

          {activeTab === 1 && <div className='shadow-lg py-5 px-8 rounded-md w-full'>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
              <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                  <tr>
                    <th scope="col" class="px-6 py-3 font-medium">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                      MET-SHIRT1408
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                      Size : Fit
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                      Pattern : Solid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                      Casual shirt : METRONAUT
                    </th>
                    <td class="px-6 py-4">
                      Ideal For : Men
                    </td>
                    <td class="px-6 py-4">
                      Fit : Regular
                    </td>
                    <td class="px-6 py-4">
                      Sleeve : Full Sleeve
                    </td>

                  </tr>

                </tbody>
                <tbody>
                  <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                      Fabric Care
                    </th>
                    <td class="px-6 py-4">
                      Gentle Machine Wash
                    </td>
                    <td class="px-6 py-4">
                      Suitable For
                    </td>
                    <td class="px-6 py-4">
                      Western Wear
                    </td>

                  </tr>

                </tbody>
              </table>
            </div></div>}

          {activeTab === 2 && (
            <div className='shadow-lg py-5 px-8 rounded-md w-[80%]'>
              <div className='w-full productReviewContainer'>
                <h2 className='text-[18px]'>Customer Questions and Answers</h2>

                <div className='scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-4 pr-5 '>

                  <div className='review pt-5 pb-5 border-b border-[#000] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVc7EMgMvhJAFe5b2cLjWbqEFZqo2XUZGQY2J9GHa5t0MR98CizKiUGQ&s" className='w-full' />


                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Yash Singh</h4>
                        <h5 className='text-[15px]'>2026-12-4</h5>
                        <p className=' text-[14px] mt-0 mb-0'>Great experience. I felt taken care of, and the result was exactly what I needed.
                          The team made everything simple. Clear communication, fair pricing, and friendly service.</p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  {/* review 01 ....................................*/}
                  <div className='review pt-5 pb-5 border-b border-[#000] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVc7EMgMvhJAFe5b2cLjWbqEFZqo2XUZGQY2J9GHa5t0MR98CizKiUGQ&s" className='w-full' />


                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Yash Singh</h4>
                        <h5 className='text-[15px]'>2026-12-4</h5>
                        <p className=' text-[14px] mt-0 mb-0'>Great experience. I felt taken care of, and the result was exactly what I needed.
                          The team made everything simple. Clear communication, fair pricing, and friendly service.</p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  {/* review 02 ..............................*/}
                  <div className='review pt-5 pb-5 border-b border-[#000] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVc7EMgMvhJAFe5b2cLjWbqEFZqo2XUZGQY2J9GHa5t0MR98CizKiUGQ&s" className='w-full' />


                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Yash Singh</h4>
                        <h5 className='text-[15px]'>2026-12-4</h5>
                        <p className=' text-[14px] mt-0 mb-0'>Great experience. I felt taken care of, and the result was exactly what I needed.
                          The team made everything simple. Clear communication, fair pricing, and friendly service.</p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  {/* review 03 ................................*/}
                  <div className='review pt-5 pb-5 border-b border-[#000] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVc7EMgMvhJAFe5b2cLjWbqEFZqo2XUZGQY2J9GHa5t0MR98CizKiUGQ&s" className='w-full' />


                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Yash Singh</h4>
                        <h5 className='text-[15px]'>2026-12-4</h5>
                        <p className=' text-[14px] mt-0 mb-0'>Great experience. I felt taken care of, and the result was exactly what I needed.
                          The team made everything simple. Clear communication, fair pricing, and friendly service.</p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                  {/* review 04.................................. */}
                  <div className='review pt-5 pb-5 border-b border-[#000] w-full flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-3'>
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVc7EMgMvhJAFe5b2cLjWbqEFZqo2XUZGQY2J9GHa5t0MR98CizKiUGQ&s" className='w-full' />


                      </div>
                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Yash Singh</h4>
                        <h5 className='text-[15px]'>2026-12-4</h5>
                        <p className=' text-[14px] mt-0 mb-0'>Great experience. I felt taken care of, and the result was exactly what I needed.
                          The team made everything simple. Clear communication, fair pricing, and friendly service.</p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={5} readOnly />
                  </div>
                </div>
                <br />
                <div className='reviewForm p-4 rounded-md bg-[#fafafa]'>
                  <h2 className='text-[18px]'>Add a review</h2>

                  <form className='w-full mt-4'>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      className='w-full'
                      multiline
                      rows={5}
                    />
                  </form>
                  <br/>
                  <Rating name="size-small" defaultValue={4} />
                  <div className='flex items-center mt-3'>
                    <Button className='btn-org'>Submit review </Button>
                  </div>
                </div>
              </div>
            </div>)}

        </div>

        <div className='container pt-8'>
        <h3 className='text-[20px] font-[600] pb-0'>Related Products</h3>
        <ProductSlider items={6}/>
        </div>

      </section>
    </>
  )
}

export default ProductDetails
