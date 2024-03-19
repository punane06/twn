import React from 'react'

const List = async () => {
async function getData() {
  const res = await fetch('https://midaiganes.irw.ee/api/list?limit=500')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


  const data = await getData()
  console.log(data)
  return (
    <div>List</div>
  )
}

export default List