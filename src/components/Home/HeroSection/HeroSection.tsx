import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Terevez from "../../../../public/terevez.png"
import { useState } from 'react';

export default function HeroSection() {
    const [isOpen, setIsOpen] = useState(true);
    const arr = [
        "Fresh Meat",
        "Vegetables",
        "Fruit & Nut Gifts",
        "Fresh Berries",
        "Ocean Foods",
        "Butter & Eggs",
        "Fastfood",
        "Fresh Onion",
        "Papayaya & Crisps",
        "Oatmeal",
        "Fresh Bananas"
    ]
    return (
        <section className='px-[100px] flex justify-between'>
            {/* yasil yer */}
            <div className=' w-[23%] '>
                <div className='flex bg-[#7fad39] items-center px-[30px] py-[10px] text-white font-bold justify-between cursor-pointer' onClick={() => { setIsOpen(!isOpen) }}>
                    <div className='flex items-center'>
                        <MenuIcon className='mr-[9px]' />
                        <p>All departments</p>
                    </div>
                    <div>
                        <ArrowDropDownIcon sx={{ rotate: !isOpen ? "180deg" : 0 }} />
                    </div>
                </div>
                {isOpen ? (
                    <div className='border border-gray-200'>
                        <ul className='px-[30px] py-[10px] font-extralight '>
                            {arr.map((item, idx) => {
                                return (
                                    <li className='my-[13px] cursor-pointer'>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                ) : null}
            </div>
            <div className='w-[70%]'>
                {/* axtaris yeri */}
                <div className=' flex h-[50px] items-center mb-[30px]'>
                    <div className='border border-gray-200 w-[60%] flex justify-between mr-[40px]'>
                        <div className='flex px-[13px] py-[10px]'>
                            <p className='mr-[20px] font-bold'>All Categories</p>
                            <ArrowDropDownIcon />
                            <div className='w-[1px] h-[25px] bg-gray-500 mx-[14px]' />
                        </div>
                        <div className='py-[10px]'>
                            <form action="">
                                <input type="text" placeholder='What do yo u need?' />
                            </form>
                        </div>
                        <div>
                            <button className='bg-[#7fad39] text-white font-bold py-[15px] px-[20px] text-[13px]'>SEARCH</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-[#f5f5f5] rounded-full w-[50px] h-[50px] flex items-center justify-center mr-[15px]'>
                            <LocalPhoneIcon />
                        </div>
                        <div>
                            <p className='font-bold mb-[5px]'>+65 11.188.888</p>
                            <p className='font-extralight text-[13px]'>support 24/7 time</p>
                        </div>
                    </div>
                </div>
                {/* sekil hissesi */}
                <div className='py-[60px] px-[65px]' style={{
                    backgroundImage:`url(${Terevez})`,
                    backgroundRepeat: "no-repeat"
                }}>
                    <p className='text-[#7fad39] font-bold mb-[10px]'>FRUIT FRESH</p>
                    <p className='text-[#252525] font-bold text-[50px] w-[350px] mb-[7px]'>Vegetable 100% Organic</p>
                    <p className='font-extralight mb-[40px]'>Free Pickup and Delivery Available</p>
                    <button className='bg-[#7fad39] text-white font-bold py-[10px] px-[30px] text-[13px]'>SHOP NOW</button>
                </div>
            </div>
        </section>
    )
}
