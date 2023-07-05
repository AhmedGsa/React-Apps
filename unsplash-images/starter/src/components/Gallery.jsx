import { useQuery } from '@tanstack/react-query'
import React from 'react'
import customAxios from '../custom-axios'
import { useGlobalContext } from '../context'

const Gallery = () => {
    const {searchValue} = useGlobalContext()
    const {data, isLoading, error} = useQuery({
        queryKey: ["gallery", searchValue],
        queryFn: () => customAxios.get(`/`, {params: {query: searchValue}})
    })
    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h2>{error.response.data.errors[0]}</h2>
    }
  return (
    <div className='image-container'>
        {data?.data?.results?.map((img) => <img className='img' key={img.id} src={img.urls.raw}></img>)}
    </div>
  )
}

export default Gallery