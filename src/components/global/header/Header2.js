import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { ButtonContent } from '../boton/ButtonContent'
import { BiPhoneCall } from 'react-icons/bi'
import { BsCalendar4Range, BsClockHistory } from 'react-icons/bs'
import Navmenu from './NavMenu'
import { Link } from 'react-router-dom'




const HeaderTwo = ({ btnName }) => {

    const { rpdata } = useContext(GlobalDataContext)

    return (
        <header className='absolute z-[10] top-0 w-full'>
            <div className='flex'>
                <div className='w-full  md:w-[40%] lg:w-[21%] bg2'>
                    <img
                        src={rpdata?.dbPrincipal?.logo}
                        alt='logo'
                        loading='lazy'
                        className='w-[80%] mx-auto'
                    />
                </div>

                <div className='hidden md:flex w-[65%] lg:w-[72%] mx-auto justify-center items-center bg-footer'>
                    <div className='flex space-x-3 w-full mx-auto justify-center'>
                        <div className='hidden w-[40%] text-white border-r-[2px] border-dotted border-white lg:flex mx-auto justify-center'>
                            <div className='w-[15%] self-center mr-3'>
                                <BiPhoneCall fontSize={35} />
                            </div>
                            <div>
                                <a
                                    href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                                >
                                    <p className='-mb-3'>Phone Number</p>
                                    <h5 className='text-[21px]'>
                                        {rpdata?.dbPrincipal?.phones?.[0]?.phone}
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div className='hidden w-[30%] text-white border-r-[2px] border-dotted border-white bp lg:flex mx-auto justify-center'>
                            <div className='w-[15%] self-center mr-3'>
                                <BsCalendar4Range fontSize={35} />
                            </div>
                            <div>
                                <p className='-mb-3'>Workdays</p>
                                <h5 className='text-[21px]'>
                                    {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                </h5>
                            </div>
                        </div>
                        <div className='hidden w-[40%] text-white  lg:flex mx-auto justify-center'>
                            <div className='w-[15%] self-center mr-3'>
                                <BsClockHistory fontSize={35} />
                            </div>
                            <div>
                                <p className='-mb-3'>Work Hours</p>
                                <h5 className='text-[21px]'>
                                    {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden bg2 md:flex w-[35%] lg:w-[18%] mx-auto justify-center items-center  bg-center bg-contain bg-no-repeat'>
                    <Link
                        to={`/${btnName === 'view all services' ? 'services' : 'contact'}`}
                    >
                        <span className='capitalize text-white text-[20px] font-semibold'>
                            {btnName ? btnName : 'FREE ESTIMATE'}
                        </span>
                    </Link>
                </div>

            </div>

            <div className='bg-white px-3 py-4'>
                <div className='flex justify-between md:justify-center items-center'>
                    <nav>
                        <Navmenu />
                    </nav>
                    <div className='block md:hidden'>
                        <ButtonContent />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderTwo