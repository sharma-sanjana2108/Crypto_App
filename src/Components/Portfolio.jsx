import { Container, Typography } from "@mui/material";
import '../styles/portfolio.css'
import React from "react";

const Portfolio = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{paddingBlock: 8 }}
      >
        <Typography className="portfolio-header"
          color={"white"}
          bgcolor={"black"}
          textAlign={"center"}
          paddingTop={"30px"}
          variant="h3"
        >
          Kickstart your cryptocurrency portfolio journey now.
        </Typography>

        <Typography
          color={"grey"}
          bgcolor={"black"}
          textAlign={"center"}
          variant="h5"
        >
          Dive into crypto trading for a feature-packed journey.
        </Typography>

        <Container className="portfolio-single"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "60px",
          }}
        >
          <Typography className="portfolio-steps"
            variant="h6"
            fontSize={"30px"}
            textAlign={"center"}
            color={"white"}
            bgcolor={"black"}
          >
            Step 1
            <Typography sx={{fontSize:"25px"}}>
              Complete your KYC <br /> in Minutes
            </Typography>
          </Typography>

          <Typography className="portfolio-steps"
            variant="h6"
            fontSize={"30px"}
            textAlign={"center"}
            color={"white"}
            bgcolor={"black"}
          > Step 2
            <Typography sx={{fontSize:"25px"}}>
              Link your bank account <br /> and make your first deposit
            </Typography>
          </Typography>

          <Typography className="portfolio-steps"
            variant="h6"
            fontSize={"30px"}
            textAlign={"center"}
            color={"white"}
            bgcolor={"black"}
          >Step 3
            <Typography sx={{fontSize:"25px"}}>
              Start investing in Bitcoin, <br /> Ethereum & 100+ other cryptos
            </Typography>
          </Typography>

        </Container>
      </Container>
    </>
  );
};

export default Portfolio;
