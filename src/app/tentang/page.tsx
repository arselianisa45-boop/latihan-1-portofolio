export default function Tentang() {
  return (
    <main className="min-h-screen bg-purple-400 text-gray-800">

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

      {/* TENTANG */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-pink-700 mb-10">
            Tentang Saya
          </h2>

          <div className="bg-pink-200 p-8 rounded-xl shadow-lg space-y-5 leading-relaxed text-justify">

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
              berbagai bahasa pemrograman dan teknologi seperti
              HTML, CSS, JavaScript, PHP, dan Next.js.
            </p>

            <p>
              Saya juga mempelajari dasar-dasar basis data serta cara
              mengembangkan website sederhana.
            </p>

            <p>
              Dalam proses belajar, saya menyadari bahwa pemrograman
              membutuhkan ketelitian, kesabaran, kreativitas, dan
              kemauan untuk terus mencoba.
            </p>

            <p>
              Saya akan terus berusaha belajar dari kesalahan dan
              mengembangkan kemampuan untuk meraih cita-cita saya.
            </p>

          </div>

        </div>
      </section>

      <footer className="bg-blue-600 text-white text-center p-5">
        © 2026 Arselia Nisa.
      </footer>

    </main>
  );
}