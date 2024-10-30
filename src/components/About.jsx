import React from "react";
import About1 from "../assets/about1.png"
import About2 from "../assets/about2.png"

const About = () => {
  return (
    <section id="about" className="py-14 bg-gray-100">
      <div className="container mx-auto text-start">
        <h2 className="text-4xl font-bold mb-8">Tentang Kami</h2>
        <div className="flex justify-between items-center">
          <div className="mr-5 w-1/2 text-balance">
            <p>
              Kami hadir untuk memperkuat keterlibatan komunitas dan memfasilitasi aksi nyata yang berdampak positif bagi masyarakat lokal. Terinspirasi oleh keyakinan bahwa setiap individu memiliki peran penting dalam menciptakan perubahan
              sosial, kami membangun platform ini sebagai ruang bagi siapa saja yang ingin berkontribusi dan berkolaborasi dalam kegiatan sosial. Kami berpegang pada nilai-nilai kerjasama, empati, inklusivitas, dan keberlanjutan, serta
              berkomitmen membantu masyarakat secara berkelanjutan. Melalui berbagai kegiatan dan peluang relawan, kami mengajak setiap orang untuk berbagi, belajar, dan bertindak bersama untuk kebaikan bersama. Bergabunglah bersama kami
              dan mari kita ciptakan perubahan nyata, langkah demi langkah, untuk masa depan yang lebih baik.
            </p>
          </div>
          <div className="mx-auto w-1/2">
            <img src={About1} alt="doc" className="rounded-2xl" />
          </div>
        </div>
        <div className="flex justify-between items-center flex-row-reverse">
          <div className="ml-5 w-1/2 text-balance">
            <p>
              Melalui berbagai program dan peluang relawan, kami menyediakan wadah bagi masyarakat untuk belajar, terlibat, dan bertindak nyata demi kesejahteraan bersama. Kami percaya bahwa dengan bekerja sama, kita dapat membuat
              langkah-langkah kecil yang akan berdampak besar. Mari bergabung bersama kami dan ciptakan perubahan nyata, menuju masa depan yang lebih baik bagi semua. Gabung bersama kami {" "}
              <a href="#" className="hover:underline">
                disini
              </a>
              .
            </p>
          </div>
          <div className="mx-auto w-1/2">
            <img src={About2} alt="doc" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
