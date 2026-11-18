import React from 'react'

const Navbar = ({settoogle}) => {
  return (
    <div className='flex justify-between items-center bg-black text-white p-4 m-1 rounded-xl'>
      <img
      className='rounded-full cursor-pointer'
      width={40}
      src="https://imgs.search.brave.com/-utnLBGoBy9PDOyNdFB60OhdmiHjusMTt8Ji4i2KfdA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL21vZGVybi1i/b3VudGktd29yZG1h/cmstbG9nby13aXRo/LW9yZ2FuaWMtbGVh/Zi1kZXRhaWxfMTI5/NjUwLTUzNi5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA" alt="" />
      <div className="details flex items-center gap-4">
        <p className='text-x font-semibold cursor-pointer'>Home</p>
        <p className='text-x font-semibold cursor-pointer'>About</p>
        <p className='text-x font-semibold cursor-pointer'>Contact</p>
      </div>
      <button onClick={()=>settoogle((prev)=>!prev)} className=' p-3 bg-blue-500 font-semibold rounded-xl cursor-pointer  '>Add Card</button>
    </div>
  )
}

export default Navbar
