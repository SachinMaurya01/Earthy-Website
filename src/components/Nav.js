import React from 'react'

const Nav = () => {
  return (
    <>
    <div style={{display:'flex',height:'80px',backgroundColor:'black',color:'white',justifyContent:'space-between',alignItems:'center',}}>
        <h1 style={{padding:'20px'}}>Navbar</h1>
        <div style={{alignContent:'end',float:'right',fontSize:'20px',position:'relative'}}>
            <ul style={{display:'flex',textDecorationStyle:'none',marginTop:'10px',}}>
                <li className='lia' style={{padding:'40px',listStyle:'none',display:'block'}}>Home</li>
                <li className='lia' style={{padding:'40px',listStyle:'none',display:'block'}}>About</li>
                <li className='lia' style={{padding:'40px',listStyle:'none',display:'block'}}>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav