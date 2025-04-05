import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TentangKami = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src="/TentangKami/Banner Utama.jpg" alt="" />
        <section class="px-6 py-12 bg-white text-gray-800">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">
              Kami siap menjadi <span class="text-pink-600">#SahabatRamahRumahmu</span> untuk wujudkan hunian impian
            </h2>
            <p class="text-gray-600 mb-8">
              Furniture Kita berdiri pada tahun 2020 dengan tujuan utama adalah membantu memenuhi kebutuhan Furniture dan Dekorasi Rumah Keluarga Indonesia, secara nyaman dan menyenangkan.
            </p>

            <h3 class="text-xl md:text-2xl font-semibold mb-6">Komitmen Kami</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 class="font-bold mb-2">Pengalaman Belanja Ternyaman</h4>
                <p class="text-sm text-gray-600">Berbagai platform berbelanja paling nyaman tersedia baik offline maupun online</p>
              </div>
              <div>
                <h4 class="font-bold mb-2">Pelayanan Pelanggan Unggul</h4>
                <p class="text-sm text-gray-600">Memastikan Kepuasan pelanggan dengan pelayanan terbaik adalah prioritas utama kami</p>
              </div>
              <div>
                <h4 class="font-bold mb-2">Pilihan Produk Furniture Bervariasi</h4>
                <p class="text-sm text-gray-600">Kami menawarkan berbagai pilihan produk untuk memenuhi berbagai preferensi gaya Anda</p>
              </div>
              <div>
                <h4 class="font-bold mb-2">Jaminan Harga yang Terjangkau</h4>
                <p class="text-sm text-gray-600">Furniture Kita menawarkan produk berkualitas dengan harga yang terjangkau.</p>
              </div>
            </div>

            <div class="bg-green-900 text-white p-6 rounded-lg mb-8">
              <h3 class="font-semibold text-lg mb-2">Visi</h3>
              <p class="text-sm">
                Menjadi toko furniture kebanggaan keluarga Indonesia dengan menghadirkan kenyamanan dan keharmonisan dalam setiap rumah keluarga Indonesia melalui furniture yang diproduksi, didistribusi dan dijual oleh Indonesia dari Indonesia untuk keluarga Indonesia.
              </p>
            </div>

            <div class="mb-12">
              <h3 class="text-xl md:text-2xl font-semibold mb-4">Misi</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                <ul class="list-disc list-inside space-y-2">
                  <li>Memberikan pengalaman belanja furniture kekinian dan nyaman.</li>
                  <li>Mewujudkan rumah idaman keluarga Indonesia.</li>
                  <li>Memberikan inspirasi tatanan interior rumah keluarga Indonesia.</li>
                  <li>Memberikan harga furniture yang terjangkau.</li>
                </ul>
                <ul class="list-disc list-inside space-y-2">
                  <li>Memberikan free konsultasi untuk mewujudkan rumah idaman.</li>
                  <li>Memberikan pelayanan terbaik untuk keluarga Indonesia.</li>
                  <li>Memberikan kualitas furniture terbaik di kelasnya untuk keluarga Indonesia.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='text-center items-center w-1/2'>
              <p className='font-bold text-xl'>Metode Pembayaran</p>
              <div>
                <div className='flex justify-center'>
                  <img src="/TentangKami/tentang kami 1.png" alt="" className='object-contain w-36'/>
                  <img src="/TentangKami/tentang kami 2.jpg" alt="" className='object-contain w-36'/>
                  <img src="/TentangKami/tentang kami 3.png" alt="" className='object-contain w-36'/>
                </div>
                <div className='flex justify-center'>
                  <img src="/TentangKami/tentang kami 4.png" alt="" className='object-contain w-36'/>
                  <img src="/TentangKami/tentang kami 5.jpg" alt="" className='object-contain w-36'/>
                  <img src="/TentangKami/tentang kami 6.jpg" alt="" className='object-contain w-36'/>
                </div>
              </div>
            </div>
            <div className='text-center items-center w-1/2'>
              <p className='font-bold text-xl'>Brand Kami</p>
              <div className='text-center'>
                <img src="/TentangKami/tentang kami 7.png" alt="" className='object-contain w-8/12 mx-auto'/>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default TentangKami
