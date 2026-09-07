function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Christian Josh E. Sapuras</h1>
        <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
        <hr className="mt-8 border-slate-200" />
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-slate-700">
            I am from the Island of Siargao, Surigao del Norte. I am a third-year BSIT student at Cebu Institute of Technology – University. I am passionate about technology and enjoy learning new things in the field of information technology.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            Hometown: Siargao, Surigao del Norte
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Riding my bicycle around the island</li>
            <li>Playing video games</li>
            <li>Listening to music</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-slate-700">
            christianjosh.sapuras@cit.edu
            <br />
            @sejseven on Instagram
          </p>
        </section>

      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </>
  )
}

export default App
