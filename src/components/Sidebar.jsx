import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#303030] ml-auto w-max max-sm:w-full text-white rounded-3xl pt-10 px-8 pb-4 '>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-lg font-mulish'>BMI Calculator</h1>
        <div className='border border-gray-300 py-2 px-3 rounded-lg flex items-center'>
          <select name="" id="" className='bg-transparent text-gray-300 text-sm pr-2'>
            <option value="last week">Last Week</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-[40%_auto] gap-4 mt-8'>
        <div className='bg-[#F8DEBD] rounded-xl p-4 pr-2'>
          <div>
            <img src="./ruler.png" className='h-5 ml-auto' alt="" />
          </div>
          <p className='text-black max-sm:flex max-sm:flex-col'>Height <span className="ml-4 max-sm:ml-0">170 cm</span></p>
        </div>

        <div className='bg-[#4A4949] p-4 rounded-xl row-span-2'>
          <p className=' font-light'>Body Mass Index (BMI)</p>
          <div className="flex max-sm:flex-col justify-between item-center mt-4">
            <p className='text-xl'>24.9</p>
            <div className='h-max text-black text-xs w-max font-bold px-2 py-1 rounded-md bg-[#D6FFDD]'>You're Healthy</div>
          </div>

          <div className='mt-6'>
            <div className="bg-red-500 h-2 w-2 rounded-full border-2 mb-1 translate-x-24"></div>
            <div className="bar h-3 rounded-md bg-gradient-to-r from-blue-200 via-sky-200 via-cyan-200 via-green-200 via-lime-200 via-yellow-200  to-red-400"></div>

            <div className='flex justify-between text-xs mt-2'>
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>

        </div>

        <div className='bg-[#D0FBFF] rounded-xl p-4 pr-2'>
          <div>
            <img src="./ruler.png" className='h-5 ml-auto' alt="" />
          </div>
          <p className='text-black max-sm:flex max-sm:flex-col'>Weight <span className="ml-4 max-sm:ml-0">72 kg</span></p>
        </div>
      </div>

      <hr className='border-t-1 border-zinc-600 my-8' />

      <div className='flex  max-sm:items-end max-sm:mb-24'>
        <div className='w-[55%] flex flex-col max-sm:h-max justify-between max-sm:gap-10'>
          <div>
            <p className="text-lg">Body Measurement</p>
            <p className="text-sm mt-2">Last checked 2 days ago</p>
            <div className='h-max text-xs w-max p-2 mt-5 rounded-md bg-[#5E5E5E]'>Inverted Triangle Body Shape</div>

          </div>

          <div className='flex flex-col mt-auto gap-5'>
            <div className='bg-white w-32 p-4 px-5 grid place-items-center rounded-lg text-black'>
              <p className="font-semibold">Chest (in)</p>
              <p className="text-2xl font-bold flex items-center gap-2">44.5 <span class="material-symbols-outlined text-red-500">arrow_upward</span></p>
            </div>
            <div className='bg-white w-32 p-4 px-5 grid place-items-center rounded-lg text-black'>
              <p className="font-semibold">Waist (in)</p>
              <p className="text-2xl font-bold flex items-center gap-2">34 <span class="material-symbols-outlined text-green-500">arrow_downward</span></p>
            </div>
            <div className='bg-white w-32 p-4 px-5 grid place-items-center rounded-lg text-black'>
              <p className="font-semibold">Hip (in)</p>
              <p className="text-2xl font-bold flex items-center gap-2">42.5 <span class="material-symbols-outlined text-green-500">arrow_downward</span></p>
            </div>
          </div>

        </div>
        <div className='p-2 w-[40%] h-full'>
          <img src="./man.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar