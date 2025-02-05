import React from 'react'
import UseFetch from './UseFetch'
function TestUseFetch() {
    const {data , pending , error} = UseFetch('https://dummyjson.com/products?limit=100' , {})
  return (
    <div>
    {pending && <h3>pending please wait</h3> }
    { error && <h3>some error occured </h3>}
    <div>
        {
             data?.products?.length ? data.products.map((item , index)=> <p key={index}>{item.title}</p>) : !pending && <p>Sorry data is not found</p>
        }
    </div>
    </div>
  )
}

export default TestUseFetch