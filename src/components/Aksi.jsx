import React, { useEffect, useRef } from "react";
import Pantai from "../assets/pantai-kotor.png"
import Panti from "../assets/kunjungan-panti-jompo.jpg"
import Bakti from "../assets/bakti.jpg"
import Pohon from "../assets/tanam-pohon.jpeg"

const Aksi = () => {
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const elementsToShow = window.innerWidth < 1000 ? 1 : 3;
  let cardWidth = 0;

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    const slider = sliderRef.current;
    const cards = slider.getElementsByTagName("li");

    if (sliderContainer && slider && cards.length > 0) {
      const sliderContainerWidth = sliderContainer.clientWidth;
      cardWidth = sliderContainerWidth / elementsToShow;
      slider.style.width = cards.length * cardWidth + "px";
      slider.style.transition = "margin";
      slider.style.transitionDuration = "1s";

      for (let index = 0; index < cards.length; index++) {
        cards[index].style.width = cardWidth + "px";
      }
    }
  }, [elementsToShow]);

  const prev = () => {
    const slider = sliderRef.current;
    if (slider && parseFloat(slider.style.marginLeft || "0") !== -cardWidth * (slider.children.length - elementsToShow)) {
      slider.style.marginLeft = `${parseFloat(slider.style.marginLeft || "0") - cardWidth}px`;
    }
  };

  const next = () => {
    const slider = sliderRef.current;
    if (slider && parseFloat(slider.style.marginLeft || "0") !== 0) {
      slider.style.marginLeft = `${parseFloat(slider.style.marginLeft || "0") + cardWidth}px`;
    }
  };

  return (
    <section id="aksi" className="bg-white py-14">
      <div className="container mx-auto text-start">
        <h2 className="text-4xl font-bold mb-8">Ayo Berpartisipasi!</h2>
        <div className="flex justify-center">
          <div ref={sliderContainerRef} className="w-full overflow-hidden">
            <ul ref={sliderRef} className="flex w-full duration-700">
              <li className="p-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={Pantai} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Aksi Pembersihan Pantai Indah</h5>
                    </a>
                    <p className="font-normal text-gray-700">Aksi membersihkan pantai indah bersama, karena pantai ini sudah dinilai terlalu kotor.</p>
                    <p className="text-gray-700">
                      Waktu: 08.00-Selesai
                    </p>
                    <p className="mb-3 text-gray-700">
                      Lokasi: Pantai Indah
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Daftar disini
                    </a>
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={Panti} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Kunjungan ke Panti Jompo Harapan Asri</h5>
                    </a>
                    <p className="font-normal text-gray-700">Berkunjung ke Panti Harapan Asri untuk berbincang-bincang ke para lansia dan memberikan sedikit bantuan.</p>
                    <p className="text-gray-700">
                      Waktu: 10.00-12.00
                    </p>
                    <p className="mb-3 text-gray-700">
                      Lokasi: Panti Jompo Harapan Asri
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Daftar disini
                    </a>
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={Bakti} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Bakti Sosial untuk Masyarakat Kurang Mampu</h5>
                    </a>
                    <p className="font-normal text-gray-700">Memberikan sedikit bantuan kepada masyarakat yang kurang mampu di kelurahan Pandean Lamper.</p>
                    <p className="text-gray-700">
                      Waktu: 15.30-16.30
                    </p>
                    <p className="mb-3 text-gray-700">
                      Lokasi: Kantor Kelurahan Pandean Lamper
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Daftar disini
                    </a>
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={Pohon} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Aksi Menanam Pohon Bersama</h5>
                    </a>
                    <p className="font-normal text-gray-700">Program ini bertujuan untuk meningkatkan kesadaran tentang pentingnya lingkungan dan konservasi alam.</p>
                    <p className="text-gray-700">
                      Waktu: 09.00-Selesai
                    </p>
                    <p className="mb-3 text-gray-700">
                      Lokasi: Hutan Lindung Kumbolo
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Daftar disini
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between">
          <button onClick={next} className="p-3 rounded-full bg-white border border-gray-100 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <button onClick={prev} className="p-3 rounded-full bg-white border border-gray-100 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aksi;
