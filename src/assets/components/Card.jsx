import React from 'react'

const Card = ({element, Deletecard}) => {
  return (
    <div className='h-80 border flex flex-col gap-4 w-60 rounded-xl p-4 bg-black'>
     <div className="image  h-50 rounded overflow-hidden shadow-lg">
  <img
    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
    src={element.image}
    alt="Preview"
  />
</div>
      <h2 className="text-xl font-semibold text-white">{element.name}</h2>
      <h3 className="text-white" >{element.email}</h3>
      <h3 className="text-white" > {element.phone}</h3>
      <div className="buttons flex w-full justify-between">
        <button className ="h-10 cursor-pointer p-2 rounded-xl text-white w-[45%] bg-yellow-400">Update</button>
        <button onClick={Deletecard} className ="h-10 cursor-pointer p-2 rounded-xl text-white w-[45%] bg-red-500">Delete</button>
      </div>
    </div>
  )
}

export default Card
