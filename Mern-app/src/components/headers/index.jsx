import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosLogOut, IoMdGitCompare, IoMdHeart } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/Nav';
import { MyContext } from "../../App"
import Button from '@mui/material/Button';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { fetchDataFromApi } from '../../utils/api';






const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));


export default function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const context = useContext(MyContext)

    const logout = ()=>{
        setAnchorEl(null);
        fetchDataFromApi(`/api/user/logout?token=${localStorage.getItem("accessToken")}`,{withCredentials:true}).then((res)=>{
            console.log(res)
            context.openToastBox("success",res?.message)
            context.setIsLogin(false)
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

        })

    }

   

    return (
        <div>
            <header className='bg-white'>
                <div className='top-strip py-2 bg-primary'>
                    <div className='container'>
                        <div className='flex items-center justify-between'>
                            <div className='col1 w-[50]'>
                                <p className='text-[15px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
                            </div>
                            <div className='col2 flex items-center justify-end'>
                                <ul className='flex items-center gap-5'>
                                    <li className='list-none'>
                                        <Link to="/help" className='text-[15px] link font-[500] transition '>Help Center</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link to="/order" className='text-[15px] link font-[500] transition'>Order Tracking</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* header search bar */}
                <div className='header py-3 border-b-[1px] border-black'>
                    <div className='container flex items-center justify-between'>
                        <div className='col1 h-20 w-20 size-3 '>
                            <Link to={"/"}><img src="/src/assets/images.jpg" /> </Link>
                        </div>
                        <h1 className='text-left text-[30px] font-[500] '>NexZenShop</h1>
                        <div className='col2 w-[40%]'>
                            <Search />
                        </div>
                        {/* login signup section */}
                        <div className='col3 w-[30%] flex items-center pl'>
                            <ul className='flex items-center justify-end gap-3 w-full'>
                                {
                                    context.isLogin === false ? <li className='list-none'>
                                        <Link to="/login" className='link text-[15px] font-bold transition'>Login</Link> &nbsp;|&nbsp;
                                        <Link to="/register" className='link text-[15px] font-bold transition'>Register</Link>
                                    </li>
                                        :
                                        <>
                                    <div className='!text-[#000] myAccount flex items-center gap-3 cursor-pointer'onClick={handleClick}>
                                             
                                                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]'>
                                                    <FaRegUser className=' !text-[16px] !text-black' />
                                                </Button>

                                                <div className='info flex flex-col'>

                                                    <h4 className=' leading-3 text-[14px] text-left justify-start font-[500] text-black'>{context?.userData?.name}</h4>
                                                    <span className='text-[13px] text-left justify-start font-[500] text-black'>{context?.userData?.email}</span>

                                                </div>
                                           </div>

                                           <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <Link to ="/my-account" className='w-full block'>
                                                <MenuItem onClick={handleClose} className='flex gap-2'>
                                                    <FaRegUser /> <span className='text-[14px]'> My Account</span>
                                                </MenuItem>
                                                </Link>
                                                <Link to ="/my-orders" className='w-full block'>
                                                <MenuItem onClick={handleClose} className='flex gap-2'>
                                                    <BsFillBagCheckFill /><span className='text-[14px]'> Orders</span>
                                                </MenuItem>
                                                </Link>
                                                <Link to ="/my-list" className='w-full block'>
                                                <MenuItem onClick={handleClose} className='flex gap-2'>
                                                    <IoMdHeart className='text-[19px]' /> <span  className='text-[14px]'>My List</span>
                                                </MenuItem>
                                                </Link>
                                                
                                                <MenuItem onClick={logout} className='flex gap-2'>
                                                    <IoIosLogOut className='text-[19px] font-bold' /> <span className='text-[14px]'>Logout</span>
                                                </MenuItem>
                                                
                                    </Menu>
                                     </>
                                }

                                <li>
                                    <Tooltip title="Compare">
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <IoMdGitCompare />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip title="Wishlist">
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <FaRegHeart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip title="Cart">
                                        <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)}>
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <MdOutlineShoppingCart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>

                            </ul>


                        </div>
                    </div>

                </div>
                <Navigation />
            </header>
        </div>
    )
}






