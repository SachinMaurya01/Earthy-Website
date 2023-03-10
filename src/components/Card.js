import React from 'react';
import data from './Data';

const Card = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {
                    data.map((dat, id) => {
                        return (
                            <div className="card" key={id} >
                                <img src={dat.src} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"><b>{dat.name}<br /> {dat.money}</b> </p>
                                    <button style={{ alignItems: 'center', width: '100%', backgroundColor: 'black', color: 'white', borderRadius: '20px', height: '40px' }} > Add To cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
                <div className="card"  >
                    <img src="mug.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><b>Plant Based Reusable Cups<br /> €2.39</b> </p>
                        <button style={{ alignItems: 'center', width: '100%', backgroundColor: 'black', color: 'white', borderRadius: '20px', height: '40px' }} > Add To cart</button>
                    </div>
                </div>
                <div className="card"  >
                    <img src="mug.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><b>Plant Based Reusable Cups<br /> €2.39</b> </p>
                        <button style={{ alignItems: 'center', width: '100%', backgroundColor: 'black', color: 'white', borderRadius: '20px', height: '40px' }} > Add To cart</button>
                    </div>
                </div>
                <div className="card"  >
                    <img src="mug.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><b>Plant Based Reusable Cups<br /> €2.39</b> </p>
                        <button style={{ alignItems: 'center', width: '100%', backgroundColor: 'black', color: 'white', borderRadius: '20px', height: '40px' }} > Add To cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;