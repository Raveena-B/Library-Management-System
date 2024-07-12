import React from "react";
import image2 from "../asserts/images/2.png";
import image3 from "../asserts/images/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { experimentalStyled as styled } from "@mui/material/styles";
// import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#9ba5d3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#000000",
}));

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="footer-title">
        <i>
          Contact us for all your library and educational inquiries and we are
          happy to guide you through
        </i>
      </h4>
      <div className="row">
        <div className="column">
          <div className="logo-column">
            <img src={image2} alt="Logo" className="logo" />
            <img src={image3} alt="Logo" className="logo-nipm" />
          </div>
        </div>
        <div className="text-column">
          <h2 className="footer-tag">
            National Institute of Plantation and Management
          </h2>
        </div>
        <div className="text2-column">
          <b>Follow Us On</b>
        </div>
        <div className="column-socialIcons">
          <FontAwesomeIcon icon={faFacebook} className="socialIcon" />
          <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
          <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
        </div>
      </div>
      <div className="row">
        <div className="column-footer">
          <b>LIBRARY NETWORK</b>
          <p className="footerPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem
          </p>
        </div>
        <div className="column-footer">
          <div>
            <b>QUICK lINKS</b>
          </div>
          <div className="row">
            <Box sx={{ width: "100%", mt: 3 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>
                    <a href="#services">Services</a>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <a href="#e-resources">E-Resources</a>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <a href="#policies">Policies</a>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <a href="#contactus">Contact Us</a>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <a href="#staff">Staff</a>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <a href="#history">History</a>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
        <div className="column-footer">
          <b>CONTACT US</b>
          <div className="column-contactus">
            <p sx={{ mt: 2, mb: 1 }}>
              Library Office :<br />
              <br />
            </p>
            <p sx={{ mb: 2 }}>Tel : +94 0713246656 Ext:8520</p>
            <p>Email : nipm@gmail.com</p>
          </div>
          
        </div>
        <div>
          <hr />
        </div>
        
      </div>
      <hr
          style={{
            color: "#B2BEB5",
            backgroundColor: "#000000",
            height: "0.3px",
            width:"95%",
            borderColor: "#B2BEB5",
          }}
        />  
        <p className="cpytext" sx={{mt:8}}>@2024 All right reserved</p><br/>
    </div>
  );
};

export default Footer;
