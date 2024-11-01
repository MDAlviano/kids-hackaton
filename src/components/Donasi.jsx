import React, { useEffect, useRef } from "react";
import Masjid from "../assets/bangun-masjid.jpg";
import Panti from "../assets/panti-asuhan.jpg"
import Kemanusisaan from "../assets/kemanusiaan.png"
import Hijau from "../assets/penghijauan.jpg"

const Donasi = () => {
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
    <section id="donasi" className="bg-gray-100 py-20">
      <div className="container mx-auto text-start">
        <h2 className="text-4xl font-bold mb-8">Donasikan Uangmu!</h2>
        <div className="flex justify-center">
          <div ref={sliderContainerRef} className="w-full overflow-hidden">
            <ul ref={sliderRef} className="flex w-full duration-700">
              <li className="p-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={Kemanusisaan} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Infaq Jariyah untuk Kemanusiaan</h5>
                    </a>
                    <p className="font-normal text-gray-700">
                      Terkumpul <span className="hover:text-primary cursor-pointer">Rp 1.353.269</span> dari <span className="hover:text-primary cursor-pointer">Rp 1M</span>
                    </p>
                    <p className="mb-3 text-gray-700">
                      31 hari lagi!
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Donasi
                    </a>
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={Masjid} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Raih Pahala Jariyah Lewat Rumah Ibadah</h5>
                    </a>
                    <p className="font-normal text-gray-700">
                      Terkumpul <span className="hover:text-primary cursor-pointer">Rp 316.363</span> dari <span className="hover:text-primary cursor-pointer">Rp 60jt</span>
                    </p>
                    <p className="mb-3 text-gray-700">
                       hari lagi!
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Donasi
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
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Bantuan untuk Panti Asuhan Cinta Kasih</h5>
                    </a>
                    <p className="font-normal text-gray-700">
                      Terkumpul <span className="hover:text-primary cursor-pointer">Rp 185.000</span> dari <span className="hover:text-primary cursor-pointer">Rp 100jt</span>
                    </p>
                    <p className="mb-3 text-gray-700">
                      24 hari lagi!
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Donasi
                    </a>
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={Hijau} alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Langkah Kecil Selamatkan Alam Kita</h5>
                    </a>
                    <p className="font-normal text-gray-700">
                      Terkumpul <span className="hover:text-primary cursor-pointer">Rp 325.500</span> dari <span className="hover:text-primary cursor-pointer">Rp 100jt</span>
                    </p>
                    <p className="mb-3 text-gray-700">
                      18 hari lagi!
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary">
                      Donasi
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

export default Donasi;
