import React, { useState } from 'react';
import stays from '../data/stays';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StayDetail = ({ slug }) => {
  const stay = stays.find(s => s.slug === slug);

  if (!stay) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Stay not found</h2>
          <p className="mt-4">We couldn't find that stay. <a href={import.meta.env.BASE_URL} className="text-[#A67C52]">Return home</a></p>
        </div>
      </div>
    );
  }

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + stay.images.length) % stay.images.length);
  const next = () => setIdx((i) => (i + 1) % stay.images.length);

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-serif text-[#2D2926]">
      <header className="py-8 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <a href={import.meta.env.BASE_URL} className="text-lg font-bold uppercase">Ascension Ranch</a>
        </div>
        <div>
          <a href={import.meta.env.BASE_URL} className="text-sm text-[#A67C52] font-bold">Back</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-40">
        <div className="relative rounded-sm overflow-hidden mb-8">
          <img src={stay.images[idx]} alt={stay.name} className="w-full h-96 object-cover" />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <button onClick={prev} className="bg-white/90 p-2 rounded-full shadow"><ChevronLeft className="w-5 h-5" /></button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button onClick={next} className="bg-white/90 p-2 rounded-full shadow"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">{stay.name}</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest bg-white/90 px-3 py-1 rounded-full">{stay.tag}</span>
          <span className="text-lg font-bold text-[#A67C52]">{stay.price}</span>
        </div>

        <div className="prose max-w-none mb-8">
          <p>{stay.desc}</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3">Details</h3>
            <ul className="list-disc pl-5 text-sm text-[#5C5752]">
              <li><strong>Capacity:</strong> {stay.details?.capacity || '—'}</li>
              <li><strong>Vehicle:</strong> {stay.details?.vehicle || '—'}</li>
              <li><strong>Facilities:</strong> {stay.details?.facilities?.join(', ') || '—'}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Book & Policies</h3>
            <p className="text-sm text-[#5C5752]">Bookings are handled externally. Please contact us for availability and group policies. Minimum stay and seasonal pricing may apply.</p>
          </div>
        </section>

        <div className="mb-24">
          <a className="inline-block bg-[#A67C52] text-white px-8 py-3 rounded-sm font-bold" href="#contact">Inquire / Book</a>
        </div>
      </main>
    </div>
  );
};

export default StayDetail;
