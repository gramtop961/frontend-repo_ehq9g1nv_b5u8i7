export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© 2025 Sehat Bersama. Edukasi kesehatan berbasis norma sosial.</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#grafik" className="text-gray-600 hover:text-gray-900">Grafik</a>
            <a href="#norma" className="text-gray-600 hover:text-gray-900">Norma</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Kebijakan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
