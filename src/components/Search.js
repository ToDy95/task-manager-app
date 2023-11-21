import React, { useState, useEffect } from 'react'

const Search = ({ data, searchData }) => {
  const [input, setInput] = useState('')
  const [filterData, setFilterData] = useState([])



  useEffect(() => {
    setFilterData(data.filter(find => find.message.toLowerCase().includes(input.toLowerCase())))
    searchData(filterData)
  }, [input])

  return (
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
  )
}

export default Search
