import React from 'react'
import HeroBG from '../assets/bg-kidi.jpeg'

const Hero = () => {
  return (
    <section className="bg-center bg-no-repeat bg-blend-multiply" style={{
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: "cover"
    }}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Bersama Membangun Komunitas yang Lebih Kuat</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Gabung dan jadilah bagian dari perubahan sosial yang berarti. Setiap tindakan kecil kita dapat memberikan dampak besar. Bersama-sama berkontribusi untuk masa depan yang lebih cerah dan inklusif bagi semua.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
            Get started
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero