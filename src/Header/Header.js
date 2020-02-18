import React from 'react';
import imgHeader from '../img/header4.png'

function Header() {

    let backImg = {
        backgroundImage: `url(${imgHeader})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200px',
        width: '100%',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <div style={backImg}>
                <h1 style={{color: 'white'}}>ПОРТФОЛИО FRONT-END РАЗРАБОТЧИКА</h1>
        </div>
  );
}

export default Header;
