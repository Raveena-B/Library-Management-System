import React from 'react'
import image2 from '../asserts/images/2.png';
import image3 from '../asserts/images/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Box } from '@mui/material';


const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='footer-title'>
            <i>Contact us for all your library and educational inquiries and we are happy to guide you through</i>
        </h4>
        <div className='row'>
        <div className='column'>
        <div className="logo-column">
          <img src={image2} alt="Logo" className="logo" />
          <img src={image3} alt="Logo" className="logo-nipm" />
        </div>      
        </div>
        <div className='text-column'><h3 >National Institute Of Plantation <br/>Management</h3></div>
        <div className='text2-column'>Follow Us On</div>
        <div className='column'>
            <FontAwesomeIcon icon="faFacebook" />
            <FontAwesomeIcon icon="faInstagram" />
            <FontAwesomeIcon icon="faLinkedin" />
            
        </div>
        </div>
        <div className='row'>
            <div className='column-footer'>
                LIBRARY NETWORK
                <Box
                 height={200}
                 width={200}
                 my={4}
                 display="flex"
                 alignItems="center"
                 gap={4}
                 p={2}
                 sx={{ border: '2px solid grey' }}>
                    asdaaaddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Box>
            </div>
            <div className='column-footer'>
                QUICK lINKS
            </div>
            <div className='column-footer'>
                CONTACT US
            </div>
        </div>
    </div>
  )
}

export default Footer