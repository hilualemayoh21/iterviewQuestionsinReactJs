import React from 'react'

function User({user}) {

  const {avatar_url , created_at , followers , following,public_repos,name, login}=user;
  const createdat=  new Date(created_at);
  return (
    <div className="w-full flex flex-col items-center border-2 border-slate-900 p-4 lg:p-2 rounded-md">
      <div className="w-[150px] h-[150px]  m-5 ">
        <img src={avatar_url}  className="w-full h-full rounded-full"/>
      </div>
      <div className="flex flex-col md:flex-row md:gap-[4em] p-4 lg:p-2 md:text-xl text-sm gap-[1em] font-md md:font-bold items-center justify-center">
       
        <a href={`https://github.com/${login}`}target="_blank" className="font-normal text-md text-blue-500 underline">{login || name}</a>
     
      <div className="">
        <p>Created at {`${createdat.getDate()} ${createdat.toLocaleString("en-us" , {month:"short"})} ${createdat.getFullYear()}`} </p>
      </div>
      </div>
      <div className="md:text-xl md:font-bold font-md text-md ">
        <div className="flex gap-5  py-1 md:py-8">
        <p>Public repos</p>
        <p>{public_repos}</p>
      </div>
        <div className="flex gap-3 py-1 md:py-6 ">
        <p>followers</p>
        <p>{followers}</p>
      </div>
      <div className="flex gap-3  py-1 md:py-6">
        <p>following</p>
        <p>{following}</p>
      </div>
      
      </div>

    </div>
  )
}

export default User