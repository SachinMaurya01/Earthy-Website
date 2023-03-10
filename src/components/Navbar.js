import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ height: "200", width: '100%', backgroundColor: 'rgb(210, 71, 71)' }}>
                <div className="container-fluid" style={{ color: 'white' }}>
                    <a className="navbar-brand" href="/">
                        <img src="ear.webp" alt='/' style={{ heigh: 80, width: 70, marginLeft: '100%', }}></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div style={{ marginLeft: '20%',position:'relative' }}>
                            <p style={{ margin: 0, fontSize: 30 }}><b>Earthly</b></p>
                            <span style={{ margin: 0, }}>Sustainable products at affordable prices</span>
                        </div>
                        <ul class="navbar-nav" style={{ marginLeft: '35%', display: 'flex' }}>
                            <li class="nav-item" >
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/" style={{ color: 'white' }} >Shop</a>
                            </li>
                            <li class="nav-item">
                                <button style={{ borderRadius: '20px', justifyContent: "center", backgroundColor: 'rgb(210, 71, 71)', color: 'white', height: '40px',width:'100px' }}><span>Get in touch</span></button>
                            </li>
                            <li class="nav-item">
                                <i class="bi bi-cart2"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar