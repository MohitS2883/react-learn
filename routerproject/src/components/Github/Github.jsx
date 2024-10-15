import React, { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data,setData] = React.useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/MohitS2883')
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    return (
        <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img className='mx-auto' src={data.avatar_url} alt="Profile Photo" width={300} />
        <h1>{data.login}</h1>
        <h5>{data.name}</h5>
        </div>
        
        </>
    )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/MohitS2883')
    return response.json()
}