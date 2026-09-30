"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-400 text-gray-800">

      {/* NAVBAR */}
      <nav className="bg-pink-400 p-4 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Portofolio Saya
          </h1>

          <div className="flex gap-4">
            <a href="/" className="hover:text-yellow-300">
              Beranda
            </a>

            <a href="/tentang" className="hover:text-yellow-300">
              Tentang
            </a>

            <a href="/keahlian" className="hover:text-yellow-300">
              Keahlian
            </a>

            <a href="/project" className="hover:text-yellow-300">
              Project
            </a>

            <a href="/kontak" className="hover:text-yellow-300">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* PROFIL */}
      <section className="bg-blue-500 py-20 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

          {/* FOTO */}
          <div>
            <Image
              src="/nisa20.jpg"
              alt="Foto Profil Arselia Nisa"
              width={300}
              height={300}
              className="rounded-full object-cover border-8 border-pink-600 w-80 h-80"
            />
          </div>

          {/* TEKS */}
          <div className="text-center md:text-left max-w-2xl">

            <h2 className="text-4xl font-bold text-white">
              Arselia Nisa Alfarikha
            </h2>

            <h3 className="text-xl font-semibold mt-3 text-yellow-200">
              Web Developer Pemula
            </h3>

            <p className="mt-5 text-white leading-relaxed">
              Halo! Saya Arselia Nisa, seorang pelajar jurusan
              Rekayasa Perangkat Lunak yang tertarik dengan dunia
              pemrograman dan pengembangan website.
            </p>

            <a
              href="/tentang"
              className="inline-block mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-900"
            >
              Tentang Saya
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center p-5">
        <p>© 2026 Arselia Nisa.</p>
      </footer>

    </main>
  );
}