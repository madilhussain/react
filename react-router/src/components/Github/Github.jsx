import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/madilhussain')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <>
        <div>Github: {data.followers}</div>
        <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github