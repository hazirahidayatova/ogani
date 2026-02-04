import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import Flag from "../../../public/flag.png"
import Logo from "../../../public/logo.png"

export default function Header() {
  return (
    <header className='w-full'>
        <nav className='flex w-full justify-between px-[100px] py-[20px] bg-[#f5f5f5] text-[14px] items-center'>
            <div className='flex items-center'>
                <EmailIcon className='mr-[9px]'/>
                <p className='font-extralight'> hello@colorlib.com</p>
                <div className='w-[1px] h-[25px] bg-gray-500 mx-[14px]' />
                <p className='font-extralight'> Free Shipping for all Order of $99</p>
            </div>
            <div className='flex items-center'>
                <FacebookIcon className='mr-[9px]' sx={{fontSize:"20px"}}/>
                <TwitterIcon className='mr-[9px]' sx={{fontSize:"20px"}}/>
                <LinkedInIcon className='mr-[9px]' sx={{fontSize:"20px"}}/>
                <PinterestIcon className='mr-[9px]' sx={{fontSize:"20px"}}/>
                <div className='w-[1px] h-[25px] bg-gray-500 mx-[14px]' />
                <img src={Flag} alt="flag" className='mr-[9px]'/>
                <p className='font-extralight'> English</p>
                <div className='w-[1px] h-[25px] bg-gray-500 mx-[14px]' />
                <PersonIcon className='mr-[9px]'/>
                <p className='font-extralight'> Login</p>
            </div>
        </nav>
        <nav className='flex justify-between px-[100px] py-[15px] items-center'>
            <div className='w-[33%]'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='w-[33%]'>
                <ul className='flex w-full justify-between font-bold'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex w-[33%] justify-end'>
                <FavoriteIcon className='mr-[6px]'/>
                <LocalMallIcon className='mr-[6px]'/>
                <p className='font-bold text-[14px]' > <span className='font-extralight'>item:</span> $150.00</p>
            </div>
        </nav>
    </header>
  )
}
