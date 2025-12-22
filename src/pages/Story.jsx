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

    // IntersectionObserver: add .is-active to the section when it is centered
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active')
        } else {
          entry.target.classList.remove('is-active')
        }
      })
    }, { threshold: 0.6 })

    const sections = Array.from(document.querySelectorAll('.story-section'))
    sections.forEach((s) => observer.observe(s))

    return () => {
      sections.forEach((s) => observer.unobserve(s))
      // leave title/meta as-is
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-serif text-[#2D2926]">
      <header className="relative h-72 md:h-96 flex items-end">
        <img src={`${import.meta.env.BASE_URL}images/home.jpg`} alt="Ascension Ranch" className="absolute inset-0 w-full h-full object-cover brightness-[0.55]" />
        <div className="relative z-10 w-full max-w-5xl mx-auto p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">The Story of Ascension Ranch</h1>
          <p className="mt-4 text-sm md:text-base text-white/90 max-w-3xl">A living embodiment of regeneration — where land and people rise together.</p>
        </div>
      </header>

      <main className="story-scroll">
        {/* Each section becomes a hero-style full-screen block on larger screens */}
        <section className="story-section">
          <div className="content text-center px-6">
            <p className="text-lg font-semibold">Ascension Ranch was born from a calling.</p>
          </div>
        </section>

        <section className="story-section">
          <div className="content px-6">
            <p>
              Its founder, Fawad Atebar, has lived many lives in one — traveling through more than 30 countries, immersing himself in diverse cultures, and experiencing the pulse of modern city life.
            </p>
          </div>
        </section>

        <section className="story-section">
          <div className="content px-6">
            <p>
              Along that journey came a quiet realization: somewhere along the way, humanity began to drift from its roots — from the rhythms of the Earth, from reciprocity, from living in harmony with the land that sustains us.
            </p>
          </div>
        </section>

        <section className="story-section">
          <div className="content px-6">
            <p>
              Ascension Ranch emerged as a response to that knowing. This land exists as an invitation — to return. To remember what it feels like to live symbiotically with Mother Earth, rather than in opposition to her.
            </p>
            <p className="mt-4">
              To experience a way of life where systems support one another, where waste becomes nourishment, and where stewardship replaces extraction.
            </p>
          </div>
        </section>

        <section className="story-section">
          <div className="content px-6">
            <blockquote className="my-6 border-l-4 border-[#A67C52] pl-4 italic text-[#2D2926]">“A place to remember how to belong to the land.”</blockquote>
            <p>
              At its heart, Ascension Ranch is a working regenerative ranch. Horses, cows, sheep, goats, chickens, and ducks are not just residents here — they are partners in a living, circular ecosystem.
            </p>
            <p className="mt-4">
              Together, they help regenerate the land, build soil health, and create local sustainability through time-tested agricultural practices rooted in respect and care.
            </p>
          </div>
        </section>

        <section className="story-section">
          <div className="content px-6">
            <p>
              Through agritourism, the ranch opens its gates to the wider community — offering a glimpse into a way of life that many have forgotten, yet deeply long for.
            </p>
            <p className="mt-4">
              Guests are invited not just to observe, but to feel what it means to live in relationship with the land.
            </p>
          </div>
        </section>

        <section className="story-section">
          <div className="content px-6">
            <p>
              Beyond agriculture, Ascension Ranch is also a place of innovation and healing. It serves as a living laboratory for renewable energy systems, and as a sanctuary for multiple wellness modalities — where restoration happens not only in the body, but in the spirit.
            </p>
          </div>
        </section>

        <section className="story-section">
          <div className="content text-center px-6">
            <p className="font-semibold">This is more than a campground. More than a destination.</p>
            <p className="mt-4">
              Ascension Ranch is a living embodiment of regeneration — a place where ancient wisdom meets modern intention, where land and people rise together, and where the seeds of a more harmonious future are quietly, steadily taking root.
            </p>
            <div className="mt-8">
              <a href={`${import.meta.env.BASE_URL}`} className="text-sm font-bold uppercase tracking-widest text-[#A67C52]">← Back to Home</a>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Story
