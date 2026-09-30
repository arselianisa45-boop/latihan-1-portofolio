export default function Keahlian() {
  return (
    <main className="min-h-screen bg-green-400 text-gray-800">

      {/* NAVBAR */}
      <nav className="bg-pink-400 p-4 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Portofolio Saya
          </h1>

          <div className="flex gap-4">
            <a href="/">Beranda</a>
            <a href="/tentang">Tentang</a>
            <a href="/keahlian">Keahlian</a>
            <a href="/project">Project</a>
            <a href="/kontak">Kontak</a>
          </div>
        </div>
      </nav>

      {/* KEAHLIAN */}
      <section className="py-20 px-5">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
            Keahlian
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-pink-400 p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Pemrograman
              </h3>

              <p>
                Mempelajari dasar-dasar pemrograman menggunakan
                beberapa bahasa pemrograman.
              </p>
            </div>

            <div className="bg-blue-400 p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Basis Data
              </h3>

              <p>
                Mempelajari database, tabel, SQL, dan cara
                menghubungkan database dengan website.
              </p>
            </div>

            <div className="bg-yellow-400 p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Next.js
              </h3>

              <p>
                Mempelajari pembuatan website menggunakan
                Next.js dan Tailwind CSS.
              </p>
            </div>

          </div>

        </div>

      </section>

      <footer className="bg-blue-600 text-white text-center p-5">
        © 2026 Arselia Nisa.
      </footer>

    </main>
  );
}