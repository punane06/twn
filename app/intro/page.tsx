import React from 'react'

const intro = () => {
  return (
    <div className='w-full h-full overflow-auto'>
      <h2 className='text-center'>Funktsionaalsed nõuded</h2>
      <p className='py-10'>Artikli vaade on lihtne: tee päring ja kuva saadud vastus.</p>
      <p className='py-10'>
        Tabeli vaate puhul soovime näha, kuidas sa Array-dega ringi käia oskad:<br />
        Tabelis tuleb saadud vastus tabeli ridadel välja kuvada, sh tabelile 3-sammuline sorteerimine peale panna (Asc, Desc, Default).<br />
        Tabelile tuleb ka lehejaotus külge panna. Funktsionaalsus peaks olema 1:1 proovitöö lehel oleva lehejaotusega.
      </p>
      <h2 className='text-center pt-[60px]'>Mittefuktsionaalsed nõuded</h2>
      <p className='py-10'>
        * Proovitöö lahendamiseks peab kasutama Vue, React või Angular raamistiku.<br />
        * Proovitöö puhul soovitame vältida väliseid mooduleid (paginator, table sorter, jne).<br />
        * Kujundus ei pea olema sama, mis proovitööl, aga selle järgi tegemine annab lisapunkte.
      </p>
      <h2 className='text-center pt-[60px]'>Api</h2>
      <div className='text-center mt-10'>
        <button>Artikkel</button>
        <button className='ml-4'>Nimekiri</button>
      </div>
      <h2 className='text-center pt-[60px]'>Materjalid</h2>
      <div className='text-center mt-10'>
        <button>Font</button>
        <button className='ml-4'>Graafika</button>
      </div>
    </div>
  )
}

export default intro