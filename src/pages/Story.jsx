import React, { useEffect } from 'react'

const Story = () => {
  useEffect(() => {
    document.title = 'Our Story — Ascension Ranch'

    const desc = "Ascension Ranch grew from a calling to return to living in reciprocity with the land.";
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', desc)

    const setOg = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', prop)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setOg('og:title', 'The Story of Ascension Ranch')
    setOg('og:description', desc)
    setOg('og:image', `${import.meta.env.BASE_URL}images/home.jpg`)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-serif text-[#2D2926]">
      <header className="relative h-72 md:h-96 flex items-end">
        <img src={`${import.meta.env.BASE_URL}images/home.jpg`} alt="Ascension Ranch" className="absolute inset-0 w-full h-full object-cover brightness-[0.55]" />
        <div className="relative z-10 w-full max-w-5xl mx-auto p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">The Story of Ascension Ranch</h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl">A living, cinematic invitation — where land and people rise together.</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
        {/* Scene 1 — The Call */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Scene I — The Call</h2>
          <p className="text-lg text-[#5C5752] mb-4">Ascension Ranch was born from a calling.</p>
          <p className="text-[#5C5752] mb-4">Fawad Atebar traveled across more than 30 countries, moving through cities and cultures, until a quiet knowing arrived: we have lost touch with the living pulse beneath our feet.</p>
          <div className="rounded-lg bg-[#F5F2ED] p-6 italic text-[#2D2926] shadow-inner">“Return to the land. Remember how to belong.”</div>
        </section>

        {/* Scene 2 — The Land */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Scene II — The Land</h2>
            <p className="text-[#5C5752] mb-4">This place became an answer. A mosaic of oak savannah, rolling pastures, and shoreline where practical stewardship and ancient practices meet modern intention.</p>
            <p className="text-[#5C5752] mb-4">Systems were redesigned so that waste becomes nourishment and every element — soil, plant, animal, and human — supports the rest.</p>
          </div>
          <div>
            <img src={`${import.meta.env.BASE_URL}images/cairo.jpg`} alt="Ranch life" className="w-full h-56 object-cover rounded-sm shadow-lg" />
          </div>
        </section>

        {/* Scene 3 — The Animals & Community */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Scene III — The Co‑Hosts</h2>
          <p className="text-[#5C5752] mb-4">Horses, sheep, cows, goats, chickens, and ducks are partners — not props. They shape the land and teach us reciprocity. Guests are invited to join the rhythm, not watch from a distance.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <img src={`${import.meta.env.BASE_URL}images/laila.jpg`} alt="Laila" className="w-full h-40 object-cover rounded-sm shadow" />
            <img src={`${import.meta.env.BASE_URL}images/home.jpg`} alt="Landscape" className="w-full h-40 object-cover rounded-sm shadow" />
            <img src={`${import.meta.env.BASE_URL}images/cairo.jpg`} alt="Mustangs" className="w-full h-40 object-cover rounded-sm shadow" />
          </div>
        </section>

        {/* Scene 4 — Innovation & Healing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Scene IV — Innovation & Healing</h2>
          <p className="text-[#5C5752] mb-4">Ascension Ranch is also a living laboratory — renewable systems, soil-building projects, and wellness practices that restore both ground and spirit.</p>
        </section>

        {/* Finale — Invitation */}
        <section className="py-12 rounded-lg bg-gradient-to-r from-[#FDFCF8] to-[#F5F2ED] text-center">
          <h3 className="text-3xl font-extrabold mb-4">More than a destination</h3>
          <p className="max-w-3xl mx-auto text-[#5C5752] mb-6">Ascension Ranch is a living embodiment of regeneration — a place where ancient wisdom meets modern intention, and where the seeds of a more harmonious future are quietly taking root.</p>
          <a href={`${import.meta.env.BASE_URL}`} className="inline-block bg-[#A67C52] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#8B6541]">Plan your visit</a>
        </section>

        <div className="mt-10 text-center">
          <a href={`${import.meta.env.BASE_URL}`} className="text-sm font-bold uppercase tracking-widest text-[#A67C52]">← Back to Home</a>
        </div>
      </main>
    </div>
  )
}

export default Story
