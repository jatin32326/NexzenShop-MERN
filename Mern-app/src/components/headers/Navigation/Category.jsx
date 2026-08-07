import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5"
import { Link } from 'react-router-dom';
import { FaRegSquarePlus } from "react-icons/fa6"
import { FiMinusSquare } from "react-icons/fi"
import "../Navigation/Nav.css"



const Category = (props) => {
  const [submenuIndex, SetSubmenuIndex] = useState(null)
  const [innersubmenuIndex, SetInnerSubmenuIndex] = useState(null)

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenPannel(newOpen)
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      SetSubmenuIndex(null);
    } else {
      SetSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innersubmenuIndex === index) {
      SetInnerSubmenuIndex(null);
    } else {
      SetInnerSubmenuIndex(index);
    }

  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="CategoryPanel">

      <h3 className='p-3 text-[18px] font-[500] flex items-center justify-between border-b-[1px]'>Shop By Categories
        <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[22px]' />
      </h3>

      <div className='scroll'>
        <ul className='w-full'>
          <li className="list-none  flex items-center relative flex-col">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
                Fashion
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(0)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(0)} />
            )}

            {submenuIndex === 0 && (<ul className='submenu  w-full pl-3 '>
              <li className='list-none relative '>
                <Link to="/" className='w-full'>
                  <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
                    Apparel
                  </Button>
                </Link>
                {innersubmenuIndex === 1 ? (
                  <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openInnerSubmenu(0)} />
                ) : (
                  <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openInnerSubmenu(0)} />
                )
                }
{/* Inner_submenu  */}
                {innersubmenuIndex === 0 && (<ul className='submenu-inner  w-full pl-3 '>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !justify-start !text-left !px-3 transition text-[13px]'>
                      Men
                    </Link>
                  </li>
                  <li className='list-none relative  mb-1'>
                    <Link to="/" className='link w-full !justify-start !text-left !px-3 transition text-[13px]'>
                      Women
                    </Link>
                  </li>
                </ul>)}
                  </li>
            </ul>)
            }
            
            </li>

          <li className="list-none relative flex-col">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
                Bags
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            )}
         </li>
         <li className="list-none relative">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
                Footwear
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            )}
            </li>
         <li className="list-none relative">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
              Groceries
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            )}
            </li>
         <li className="list-none relative">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
             Wellness
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            )}
            </li>
         <li className="list-none relative">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Jwellery
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            )}
            </li>
         <li className="list-none relative">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Beauty
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            )}
            </li>
         <li className="list-none relative">
            <Link to="/" className='w-full'>
              <Button className='w-full !justify-start !text-left !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Electronics
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            ) : (
              <FaRegSquarePlus className='absolute top-[10px] right-[13px] cursor-pointer' onClick={() => openSubmenu(1)} />
            )}
            </li>
        </ul>
      </div>
    
    </Box>
  
  );
  return (
    <>
      <div>

        <Drawer open={props.isOpenPannel} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );

}


export default Category
