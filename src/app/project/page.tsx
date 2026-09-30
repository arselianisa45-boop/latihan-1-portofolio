import Image from "next/image";

export default function Project() {
  return (
    <main className="min-h-screen bg-pink-300 text-gray-800">

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

      {/* PROJECT */}
      <section className="py-16 px-5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Hasil Project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* PROJECT 1 */}
            <div className="bg-purple-400 p-6 rounded-xl shadow-lg">

              <Image
                src="/project1.png"
                alt="Pengalaman Virtualku"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-5"
              />

              <h3 className="text-xl font-bold text-center">
                Pengalaman Virtualku
              </h3>

              <p className="text-center mt-3">
                Membuat project game dan pengalaman virtual
                menggunakan Roblox Studio.
              </p>

            </div>

            {/* PROJECT 2 */}
            <div className="bg-blue-300 p-6 rounded-xl shadow-lg">

              <Image
                src="/tebak.jpeg"
                alt="Game Tebak Angka"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-5"
              />

              <h3 className="text-xl font-bold text-center">
                Game Tebak Angka
              </h3>

              <p className="text-center mt-3">
                Membuat game tebak angka sederhana menggunakan
                JavaScript.
              </p>

            </div>

            {/* PROJECT 3 */}
            <div className="bg-gray-400 p-6 rounded-xl shadow-lg">

              <Image
                src="/portofolio.png"
                alt="Website Portofolio"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-5"
              />

              <h3 className="text-xl font-bold text-center">
                Website Portofolio
              </h3>

              <p className="text-center mt-3">
                Membuat website portofolio menggunakan Next.js
                dan Tailwind CSS.
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