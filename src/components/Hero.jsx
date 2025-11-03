import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-600">Kesehatan • Edukasi • Masyarakat</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Kesehatan & Norma Sosial
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-gray-600 md:text-lg">
              Menjelajahi bagaimana norma sosial membentuk perilaku sehat: dari kebersihan diri, vaksinasi, hingga dukungan kesehatan mental.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#grafik" className="rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                Lihat Grafik
              </a>
              <a href="#norma" className="rounded-lg bg-gray-900/5 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-900/10">
                Pelajari Norma
              </a>
            </div>
          </div>
          <div className="relative h-[420px] w-full sm:h-[480px] md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
