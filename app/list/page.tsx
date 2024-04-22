"use client"
import React from 'react'

// const getData = async() => {
//   const res = await fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
//   if(!res.ok)
//     {
//       throw new Error("Failed to fetch data")
//     }
//   return res.json
// }

  // async function getData() {
  //   const res = await fetch('https://midaiganes.irw.ee/api/list?limit=500')

  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data')
  //   }
    
  //   return res.json()
  // }

const List = async () => {

  const res = await fetch('https://midaiganes.irw.ee/api/list/972d2b8a');
  const data = await res.json();

  // const data = await getData()
  // console.log(data)
  return (
    <div>
      <h1>Table</h1>
      <div>
      {data.id}
        {/* {data.map((list: any) => 
        {
          return <p>{list.firstname}</p>
        })} */}
      </div>
    </div>
  )
}

export default List