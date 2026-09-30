"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-400 text-yellow-800">

      {/* NAVBAR */}
      <nav className="bg-pink-400 p-4 text-blue">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Portofolio Saya
          </h1>

          <div className="flex gap-4">
            <a href="#tentang" className="hover:text-blue-500">
              Tentang
            </a>

            <a href="#project" className="hover:text-orange-500">
              Project
            </a>

            <a href="#kontak" className="hover:text-green-200">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* PROFIL */}
      <section className="bg-blue-500 py-16 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

          {/* FOTO PROFIL */}
          <div className="flex-shrink-0">
            <Image
              src="/nisa20.jpg"
              alt="Foto Profil Arselia Nisa"
              width={300}
              height={300}
              className="rounded-full object-cover border-8 border-pink-600 w-80 h-80"
            />
          </div>

          {/* TEKS PROFIL */}
          <div className="text-center md:text-left max-w-2xl">

            <h2 className="text-4xl font-bold text-blue-700">
              Arselia Nisa Alfarikha
            </h2>

            <h3 className="text-xl font-semibold mt-3">
              Web Developer Pemula
            </h3>

            <p className="mt-5 text-fuchsia-800">
              Halo! Saya Arselia Nisa, seorang pelajar jurusan
              Rekayasa Perangkat Lunak yang tertarik dengan dunia
              pemrograman dan pengembangan website.
            </p>

            <a
              href="#kontak"
              className="inline-block mt-6 bg-mauve-900 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
            >
              Hubungi Saya
            </a>

          </div>
        </div>
      </section>

      {/* TENTANG SAYA */}
      <section id="tentang" className="py-16 px-5 bg-purple-400">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
            Tentang Saya
          </h2>

          <div className="text-black-300 leading-relaxed text-justify space-y-3">

            <p>
              Saya adalah seorang pelajar jurusan Rekayasa Perangkat
              Lunak (RPL) yang memiliki ketertarikan terhadap dunia
              teknologi, pemrograman, dan pengembangan website.
            </p>

            <p>
              Saya memilih jurusan Rekayasa Perangkat Lunak karena
              ingin mempelajari lebih dalam tentang cara membuat
              aplikasi, website, dan berbagai macam program yang
              dapat bermanfaat bagi banyak orang.
            </p>

            <p>
              Selama belajar di jurusan RPL, saya mulai mengenal
              berbagai bahasa pemrograman dan teknologi, seperti
              HTML, CSS, JavaScript, PHP, dan Next.js. Saya juga
              mempelajari dasar-dasar basis data serta cara
              mengembangkan website sederhana.
            </p>

            <p>
              Dalam proses belajar, saya menyadari bahwa pemrograman
              membutuhkan ketelitian, kesabaran, kreativitas, dan
              kemauan untuk terus mencoba. Terkadang saya menemukan
              kesalahan dalam kode yang dibuat, tetapi hal tersebut
              menjadi pengalaman bagi saya untuk memahami pemrograman
              dengan lebih baik.
            </p>

            <p>
              Selain mempelajari teknologi, saya juga ingin
              mengembangkan kemampuan dalam bekerja sama,
              berkomunikasi, dan menyelesaikan masalah. Saya percaya
              bahwa keterampilan tersebut sangat penting untuk
              mendukung perkembangan diri dan mempersiapkan masa
              depan.
            </p>

            <p>
              Saya percaya bahwa setiap proses belajar adalah langkah
              menuju kesuksesan. Oleh karena itu, saya akan terus
              berusaha, belajar dari kesalahan, dan mengembangkan
              potensi diri untuk meraih cita-cita saya.
            </p>

          </div>

          {/* KEAHLIAN */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-center mb-5">
              Bidang yang dipelajari
            </h3>

            <div className="flex flex-wrap justify-center gap-4">

              <span className="bg-pink-500 text-purple-900 px-5 py-2 rounded-lg">
                Pemrograman
              </span>

              <span className="bg-blue-400 text-red-700 px-5 py-2 rounded-lg">
                Basis Data
              </span>

              <span className="bg-green-400 text-yellow-700 px-5 py-2 rounded-lg">
                Next.js
              </span>

            </div>
          </div>

        </div>
      </section>

      {/* HASIL PROJECT */}
      <section id="project" className="py-16 px-5 bg-pink-300">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">
            Hasil Project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* PROJECT 1 */}
            <div className="bg-purple-400 p-6 rounded-xl shadow-md">

              <Image
                src="/project1.png"
                alt="Pengalaman Virtualku"
                width={400}
                height={440}
                className="w-full h-70 object-cover rounded-lg mb-5"
              />

              <h3 className="text-xl font-bold text-center">
                Pengalaman Virtualku
              </h3>

              <p className="text-gray-600 text-center mt-3">
                Membuat project game dan pengalaman virtual menggunakan Roblox Studio.
              </p>

            </div>

            {/* PROJECT 2 */}
            <div className="bg-blue-300 p-6 rounded-xl shadow-md">

              <Image
                src="/tebak.jpeg"
                alt="Game Tebak Angka"
                width={400}
                height={250}
                className="w-full h-70 object-cover rounded-lg mb-5"
              />

              <h3 className="text-xl font-bold text-center">
                Game Tebak Angka
              </h3>

              <p className="text-gray-600 text-center mt-3">
                Membuat game tebak angka sederhana menggunakan JavaScript.
              </p>

            </div>

            {/* PROJECT 3 */}
            <div className="bg-gray-400 p-6 rounded-xl shadow-md">

              <Image
                src="/portofolio.png"
                alt="Website Portofolio"
                width={400}
                height={250}
                className="w-full h-70 object-cover rounded-lg mb-5"
              />

              <h3 className="text-xl font-bold text-center">
                Website Portofolio
              </h3>

              <p className="text-gray-600 text-center mt-3">
                Membuat website portofolio interaktif menggunakan Next.js dan Tailwind CSS.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-16 px-5 bg-gray-400">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Kontak Saya
          </h2>

          <div className="bg-purple-300 p-6 rounded-xl space-y-3">

            <p className="text-lg">
              📧 Email: arselianisa45@gmail.com
            </p>

            <p className="text-lg">
              📱 TikTok: _arslnisaa
            </p>

            <p className="text-lg">
              📸 Instagram: arslnsalfrkh.ns
            </p>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center p-5">
        <p>
          © 2026 Arselia Nisa.
        </p>
      </footer>

    </main>
  );
}