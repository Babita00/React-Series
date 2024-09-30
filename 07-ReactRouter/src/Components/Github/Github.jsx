import { useEffect, useState } from "react"

function Github() {

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/Babita00')
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            
        })
    })
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers:{data.followers}
    <img src={data.avatar_url } alt="avatar" width="100"  />
    <p>Profile URL: {data.html_url}</p>
    <p>Username: {data.login}</p>

    </div>
  )
}

export default Github