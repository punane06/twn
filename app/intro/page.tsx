import React from 'react'

const intro = () => {
  return (
    <div className='w-full h-fitt max-w-[1000px] m-auto'>
      <h2 className='text-center'>Funktsionaalsed nõuded</h2>
      <p className='pt-10'>Artikli vaade on lihtne: tee päring ja kuva saadud vastus.</p>
      <p className='pt-10'>
        Tabeli vaate puhul soovime näha, kuidas sa Array-dega ringi käia oskad:<br />
        Tabelis tuleb saadud vastus tabeli ridadel välja kuvada, sh tabelile 3-sammuline sorteerimine peale panna (Asc, Desc, Default).<br />
        Tabelile tuleb ka lehejaotus külge panna. Funktsionaalsus peaks olema 1:1 proovitöö lehel oleva lehejaotusega.
      </p>
      <h2 className='text-center pt-[60px]'>Mittefunktsionaalsed nõuded</h2>
      <p className='pt-10'>
        * Proovitöö lahendamiseks peab kasutama Vue, React või Angular raamistiku.<br />
        * Proovitöö puhul soovitame vältida väliseid mooduleid (paginator, table sorter, jne).<br />
        * Kujundus ei pea olema sama, mis proovitööl, aga selle järgi tegemine annab lisapunkte.
      </p>
      <h2 className='text-center pt-[60px]'>Api</h2>
      <div className='text-center mt-10'>
        <a href='https://midaiganes.irw.ee/api/list/972d2b8a' target="_blank" className='button'>Artikkel</a>
        <a href='https://midaiganes.irw.ee/api/list?limit=500' target="_blank" className='button ml-4'>Nimekiri</a>
      </div>
      <h2 className='text-center pt-[60px]'>Materjalid</h2>
      <div className='text-center mt-10'>
        <a href='https://proovitoo.twn.ee/assets/fonts.zip' target="_blank" className='button'>Font</a>
        <a href='https://proovitoo.twn.ee/assets/graphics.zip' target="_blank" className='button ml-4'>Graafika</a>
      </div>
    </div>
  )
}

export default intro