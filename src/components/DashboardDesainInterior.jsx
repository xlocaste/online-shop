import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const DashboardDesainInterior = () => {
  return (
    <div>
        <div className='w-full h-[700px] overflow-hidden'>
            <img src="/DesainInterior/desain interior.jpg" alt="" className='w-full h-full object-cover'/>
        </div>
      <div className='bg-green-900 w-full text-white items-center py-6'>
        <p className='w-full flex justify-center pb-4'>GRATIS PERHITUNGAN ESTIMASI BIAYA</p>
        <div className='flex justify-center items-center space-x-8 px-10'>
            <div className='flex flex-col w-full'>
                <label htmlFor="" className=''>Nama</label>
                <input type="text" placeholder='Masukkan Nama' className='p-2' />
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="" className=''>Lokasi</label>
                <input type="text" placeholder='Masukkan Lokasi' className='p-2' />
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="" className=''>No. Whatsapp</label>
                <input type="text" placeholder='Masukkan No Whatsapp' className='p-2' />
            </div>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center px-10 py-4'>
            <div>
                <p className='text-2xl'>Desain Interior Berdasarkan Ruangan</p>
                <p className='text-gray-400'>Inspirasi Desain Sesuai Ruangan Hunianmu</p>
            </div>
            <div>
                <button className='px-12 py-1 rounded-md bg-green-900 text-white items-center'>
                    Tanya Harga
                </button>
            </div>
        </div>
        <div className='grid grid-cols-3 px-10 gap-4 my-4'>
            <div className="relative h-[250px] overflow-hidden">
                <img src="/DesainInterior/desain interior1.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                <p className='absolute bottom-0 left-0 text-white p-2'>Kitchen Set</p>
            </div>
            <div className="relative h-[250px] overflow-hidden">
                <img src="/DesainInterior/desain interior2.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                <p className='absolute bottom-0 left-0 text-white p-2'>Kitchen Set</p>
            </div>
            <div className="relative h-[250px] overflow-hidden">
                <img src="/DesainInterior/desain interior3.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                <p className='absolute bottom-0 left-0 text-white p-2'>Kitchen Set</p>
            </div>
        </div>
        <div className='grid grid-cols-3 px-10 gap-4 my-4'>
            <div className="relative h-[250px] overflow-hidden">
                <img src="/DesainInterior/desain interior4.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                <p className='absolute bottom-0 left-0 text-white p-2'>Kitchen Set</p>
            </div>
            <div className="relative h-[250px] overflow-hidden">
                <img src="/DesainInterior/desain interior5.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                <p className='absolute bottom-0 left-0 text-white p-2'>Kitchen Set</p>
            </div>
            <div className="relative h-[250px] overflow-hidden">
                <img src="/DesainInterior/desain interior6.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                <p className='absolute bottom-0 left-0 text-white p-2'>Kitchen Set</p>
            </div>
        </div>
      </div>
      <div className='my-4'>
        <p className='w-full text-center text-lg text-green-900 pb-4 font-semibold'>Review Customer</p>
        <div className='px-10 grid grid-cols-2 gap-8'>
            <div className='bg-green-900 p-4 rounded-lg'>
                <div className='flex gap-4'>
                    <img src="Image1.jpg" alt="" className='rounded-full w-14 h-14'/>
                    <div >
                        <p className='text-white text-lg'>Joe Matter</p>
                        <p className='text-gray-400 text-sm'>Aug 25, 2022</p>
                    </div>
                </div>
                <p className='text-center text-white text-2xl pt-4'>Saya suka sekali desain interior Furniture dari Furniture Kita</p>
                <div className='flex justify-center w-full pt-2'>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                </div>
            </div>
            <div className='bg-green-900 p-4 rounded-lg'>
                <div className='flex gap-4'>
                    <img src="Image1.jpg" alt="" className='rounded-full w-14 h-14'/>
                    <div >
                        <p className='text-white text-lg'>Joe Matter</p>
                        <p className='text-gray-400 text-sm'>Aug 25, 2022</p>
                    </div>
                </div>
                <p className='text-center text-white text-2xl pt-4'>Saya suka sekali desain interior Furniture dari Furniture Kita</p>
                <div className='flex justify-center w-full pt-2'>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                    <IoStarSharp className='text-yellow-500'/>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardDesainInterior
