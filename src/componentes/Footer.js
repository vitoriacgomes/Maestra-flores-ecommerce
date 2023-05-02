import React from 'react';

const Footer = () =>{
    return(
        <div className='main-footer'>
            <div className='container-footer'>
                <hr />
                <div className='raw'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Designed by Vitória Gomes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
