import { motion } from 'framer-motion';

const data = [
  { label: 'Kebersihan', value: 86, color: '#ef4444' },
  { label: 'Aktivitas Fisik', value: 72, color: '#22c55e' },
  { label: 'Gizi Seimbang', value: 65, color: '#3b82f6' },
  { label: 'Tidur Cukup', value: 78, color: '#f59e0b' },
];

export default function AnimatedChart() {
  const maxValue = 100;

  return (
    <section id="grafik" className="relative bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Dampak Norma Sosial terhadap Perilaku Sehat
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Persentase kepatuhan terhadap praktik sehat dalam komunitas yang menerapkan norma positif.
            </p>
          </div>
          <div className="text-sm text-gray-500">Sumber: Studi fiktif untuk demonstrasi visual</div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="grid grid-cols-4 items-end gap-4 sm:gap-6" style={{height: 260}}>
                {data.map((d, i) => (
                  <div key={d.label} className="flex flex-1 flex-col items-center">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(d.value / maxValue) * 220}px` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ type: 'spring', stiffness: 140, damping: 18, delay: i * 0.08 }}
                      className="w-full rounded-t-md"
                      style={{ background: `linear-gradient(180deg, ${d.color}, ${d.color}99)` }}
                    />
                    <div className="mt-3 text-center">
                      <div className="text-sm font-semibold text-gray-900">{d.value}%</div>
                      <div className="text-xs text-gray-600">{d.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Sparkline values={data.map(d => d.value)} colors={data.map(d => d.color)} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Ringkasan</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Norma sosial yang kuat mendorong perilaku sehat melalui penularan positif: ketika komunitas menghargai kebersihan, aktivitas fisik, dan pola makan seimbang, individu cenderung mengikuti.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Teladan komunitas meningkatkan kepatuhan</li>
              <li>Dukungan sosial mengurangi hambatan perilaku</li>
              <li>Pengingat bersama membangun kebiasaan sehat</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkline({ values, colors }) {
  const width = 560;
  const height = 120;
  const padding = 16;
  const maxV = 100;
  const step = (width - padding * 2) / (values.length - 1);
  const points = values.map((v, i) => [padding + i * step, height - padding - (v / maxV) * (height - padding * 2)]);
  const d = points.map((p, i) => (i === 0 ? `M ${p[0]},${p[1]}` : `L ${p[0]},${p[1]}`)).join(' ');

  const gradientId = 'spark-gradient';

  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-28 w-full">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            {colors.map((c, i) => (
              <stop key={i} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={c} />
            ))}
          </linearGradient>
        </defs>
        <motion.path
          d={d}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r="5"
            fill={colors[i]}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 260, damping: 14 }}
          />
        ))}
      </svg>
    </div>
  );
}
