export default function Kontak() {
  return (
    <main className="min-h-screen bg-gray-400 text-gray-800">

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

      {/* KONTAK */}
      <section className="py-20 px-5">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-blue-700 mb-10">
            Kontak Saya
          </h2>

          <div className="bg-purple-300 p-8 rounded-xl shadow-lg space-y-5">

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

      <footer className="bg-blue-600 text-white text-center p-5">
        © 2026 Arselia Nisa.
      </footer>

    </main>
  );
}