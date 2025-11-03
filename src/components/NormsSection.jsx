import { Heart, Shield, Activity, Leaf, Users, CheckCircle } from 'lucide-react';

const items = [
  {
    icon: Heart,
    title: 'Kesehatan Mental & Empati',
    text: 'Normalisasi mencari bantuan profesional, berbagi perasaan, dan memberi ruang aman untuk bercerita.',
  },
  {
    icon: Shield,
    title: 'Vaksinasi & Perlindungan Diri',
    text: 'Menjadikan imunisasi sebagai kebiasaan kolektif untuk melindungi kelompok rentan.',
  },
  {
    icon: Activity,
    title: 'Aktivitas Fisik Bersama',
    text: 'Membangun budaya jalan pagi, bersepeda, atau senam rutin secara komunitas.',
  },
  {
    icon: Leaf,
    title: 'Gizi Seimbang',
    text: 'Menghargai pola makan seimbang, porsi wajar, dan berbagi resep sehat.',
  },
  {
    icon: Users,
    title: 'Etika Sosial Sehat',
    text: 'Salam tanpa kontak saat sakit, etika batuk/bersin, dan menghormati ruang pribadi.',
  },
];

export default function NormsSection() {
  return (
    <section id="norma" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Norma Sosial untuk Hidup Sehat</h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Norma sosial adalah aturan tak tertulis yang membimbing perilaku. Ketika komunitas menyepakati standar sehat, individu lebih mudah membentuk kebiasaan baik.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
                <CheckCircle className="h-4 w-4" />
                Rekomendasi berbasis bukti perilaku sehat
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
