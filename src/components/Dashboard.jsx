import React from 'react'

const Dashboard = () => {
    return (
        <div className='ml-20 max-sm:ml-0 py-10 px-8 max-sm:px-4 pb-4 w-max max-sm:w-screen'>
            <div className='flex justify-between w-full'>
                <div className="heading">
                    <h1 className='text-xl font-bold font-mulish'>Health Overview</h1>
                    <p className='text-gray-600 text-sm font-semibold'>August 12, 2021</p>
                </div>
                <div className='flex gap-2'>
                    <button className='py-1 px-2 h-max rounded-lg border bg-white grid place-items-center'><span class="material-symbols-outlined">search</span></button>
                    <button className='py-1 px-2 h-max rounded-lg border bg-white grid place-items-center'><span class="material-symbols-outlined">notifications</span></button>
                </div>
            </div>

            <div className='cards-container my-6 flex flex-wrap gap-7 max-sm:gap-2'>
                <div className="card max-sm:w-[48%] bg-white rounded-xl shadow-lg-center border w-max p-4 pb-3">
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F8DEBD] rounded-lg h-11 w-11 grid place-items-center'>
                            <img src="./BS-icon.png" className='h-7' alt="" />
                        </div>
                        <p className='font-bold text-sm'>Blood Sugar</p>
                    </div>
                    <div className='mb-2 mt-4 text-2xl font-medium font-mulish'>
                        80 <span className='text-sm text-gray-600'>mg/dL</span>
                    </div>

                    <div className='my-2 text-xs w-max font-bold px-2 py-0.5 rounded bg-[#F8DEBD]'>Normal</div>

                    <div className='w-36 max-sm:w-full'>
                        <img src="./BS-graph.png" className='w-full' alt="" />
                    </div>
                </div>

                <div className="card max-sm:w-[48%] bg-white rounded-xl shadow-lg-center border w-max p-4 pb-3">
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#FBF0F3] rounded-lg h-11 w-11 grid place-items-center'>
                            <img src="./HR-icon.png" className='h-7' alt="" />
                        </div>
                        <p className='font-bold text-sm'>Heart Rate</p>
                    </div>
                    <div className='mb-2 mt-4 text-2xl font-medium font-mulish'>
                        98 <span className='text-sm text-gray-600'>bpm</span>
                    </div>

                    <div className='my-2 text-xs w-max font-bold px-2 py-0.5 rounded bg-[#FBF0F3]'>Normal</div>

                    <div className='w-36 max-sm:w-full'>
                        <img src="./HR-graph.png" className='w-full' alt="" />
                    </div>
                </div>

                <div className="card max-sm:w-[48%] bg-white rounded-xl shadow-lg-center border w-max p-4 pb-3">
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#D0FBFF] rounded-lg h-11 w-11 grid place-items-center'>
                            <img src="./BP-icon.png" className='h-7' alt="" />
                        </div>
                        <p className='font-bold text-sm'>Blood <br /> Pressure</p>
                    </div>
                    <div className='mb-2 mt-4 text-2xl font-medium font-mulish'>
                        102 <span className='text-sm text-gray-600'>/72 mmhg</span>
                    </div>

                    <div className='my-2 text-xs w-max font-bold px-2 py-0.5 rounded bg-[#D0FBFF]'>Normal</div>

                    <div className='w-36 max-sm:w-full'>
                        <img src="./BP-graph.png" className='w-full' alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className='w-[600px] max-sm:w-full'>
                    <img src="./graph-main.png" className='w-full' alt="" />
                </div>
            </div>

            <div className='bg-white rounded-xl max-sm:gap-3 border shadow-xl-center flex items-center justify-around p-4 mt-10'>
                <p className='font-bold'>Upcoming Appointment</p>
                <div className='my-2 text-xs w-max font-bold px-2 py-0.5 rounded bg-[#D0FBFF]'>Aug 14, 2021</div>
                <p className='text-sm'>Consultation with Dr. James</p>
            </div>
        </div>
    )
}

export default Dashboard