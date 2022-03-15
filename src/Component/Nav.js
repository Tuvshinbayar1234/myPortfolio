import React from 'react'
import Tuku from '../assets/Images/wemnaajz.png'
import {FaRocketchat} from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='w-full py-5 bg-Nav shadow-xl fixed z-50'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <img className='bg-cover w-12' src={Tuku} />    
                </div>
                <div className=''>
                    <ul className='flex justify-center items-center space-x-5 font-bold text-xl'>
                        <li className=' duration-300 hover:text-violet-300 hover:border-b-2 border-violet-300'>
                            Home
                        </li>
                        <li className=' duration-300 hover:text-violet-300 hover:border-b-2 border-violet-300'>
                            Home
                        </li>
                        <li className=' duration-300 hover:text-violet-300 hover:border-b-2 border-violet-300'>
                            Home
                        </li>
                        <li className=' duration-300 hover:text-violet-300 hover:border-b-2 border-violet-300'>
                            Home
                        </li>
                        <li className=' duration-300 hover:text-violet-300 hover:border-b-2 border-violet-300'>
                            Home
                        </li>
                        <li>
                            <div className="p-3 mx-auto bg-white hover:bg-violet-300 text-black hover:text-white duration-300 rounded-xl shadow-lg flex items-center space-x-4">
                                <div>
                                    <div className="text-xl w-28 text-center flex items-center justify-between font-bold">Lets chat <FaRocketchat /></div>
                                </div>
                            </div>
                        </li>
                    </ul>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav