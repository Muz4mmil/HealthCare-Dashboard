import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed max-sm:flex p-4 justify-center w-max shadow-xl rounded-lg h-full max-sm:h-max max-sm:w-full items-center max-sm:bottom-0 bg-white'>
            <div className="logo mt-4 h-10 w-10 max-sm:hidden">
                <img src="./Logo.svg" className='w-full h-full max-sm:hidden' alt="" />
            </div>
            <div className="nav mt-10 max-sm:mt-0">
                <ul className='flex flex-col max-sm:flex-row gap-6 max-sm:gap-4'>
                    <li className='bg-[#303030] text-white p-2 w-max rounded-md grid place-items-center'><span class="material-symbols-outlined">dashboard</span></li>
                    <li className='text-gray-600 p-2 w-max rounded-md grid place-items-center'><span class="material-symbols-outlined">event</span></li>
                    <li className='text-gray-600 p-2 w-max rounded-md grid place-items-center'><span class="material-symbols-outlined">comment</span></li>
                    <li className='text-gray-600 p-2 w-max rounded-md grid place-items-center'><span class="material-symbols-outlined">pie_chart</span></li>
                    <li className='text-gray-600 p-2 w-max rounded-md grid place-items-center'><span class="material-symbols-outlined">settings</span></li>
                    <li className='text-gray-600 p-2 w-max rounded-md grid place-items-center'><span class="material-symbols-outlined">logout</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar