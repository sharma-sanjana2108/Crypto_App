import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import "../styles/faq.css";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ marginBottom: 5, marginTop: 12 }}>
        <Typography className="faq-header" variant="h3">
          Frequently Asked Questions (FAQs)?
        </Typography>

        <div className="faq">
          <Accordion sx={{ backgroundColor: "black", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">What is crypto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                Cryptocurrency is a digital or virtual currency that operates on
                distributed ledger technology called a blockchain and uses
                cryptography for security. It is decentralized and operates
                independently of a central bank. Unlike traditional currencies,
                cryptocurrencies are not backed by a physical commodity or
                government, and their value is determined by market demand and
                supply. Cryptocurrencies can be used to buy goods and services,
                transfer funds, and trade in markets. Popular cryptocurrencies
                include Bitcoin, Ethereum, Litecoin, Ripple, and Cronos.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "black", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h4">How to buy crypto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                To buy crypto, follow these general steps: Choose a crypto
                platform to use, like the Crypto.com Exchange or Crypto.com App.
                Create an account on the chosen platform by providing personal
                information and ID verification, also known as ‘Know Your
                Customer’ (KYC) procedures. Deposit fiat currency or another
                cryptocurrency into the newly created account. The Crypto.com
                App supports bank transfers, credit cards, debit cards, and
                cryptocurrency transfers to buy crypto, depending on region.
                Navigate to the ‘Buy’ section of the Crypto.com Exchange or App
                and select the crypto to buy. Enter the amount of cryptocurrency
                to buy and confirm the transaction. The crypto will be deposited
                into the account. From here, it can be transferred to other
                crypto wallets or converted back to fiat currency and paid out
                to a bank account.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "black", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h4">How to trade crypto?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                To trade cryptocurrency, follow these general steps: Choose a
                cryptocurrency exchange that supports trading. A popular option
                is the Crypto.com Exchange. Create an account on the chosen
                platform and perform ID verification, known as KYC (‘Know Your
                Customer’). Deposit funds into the newly created account using a
                supported payment method. The Crypto.com Exchange supports bank
                transfers and credit/debit cards. Navigate to the trading
                section of the platform and select the cryptocurrency pair to
                trade. Choose whether to buy or sell the cryptocurrency, and
                enter the amount to trade. Set the preferred price and order
                type. There are several types of orders, including market
                orders, limit orders, stop orders, and crypto options, which
                allow users to buy or sell at a specific price or under certain
                conditions. Submit the trade order and wait for it to be
                executed. Depending on market conditions, the trade may be
                filled immediately, or it may take time to be filled. Monitor
                trades and adjust strategies as necessary.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "black", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h4">
                {" "}
                What is the future of crypto trading in India?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                Since 2020, Crores of Indians have dipped their toes into
                cryptos, and with the number going up every day, India looks
                exciting for the crypto revolution. The government is also
                actively trying to set up a regulatory framework for its smooth
                functioning, the recent MCA amendment being the first step.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: "black", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h4">
                How to earn rewards on crypto?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                Users can earn rewards on their cryptocurrency holdings through
                various products that offer rewards-bearing accounts or lending
                services. Here are some ways to earn rewards on cryptocurrency:
                The Crypto.com App, Exchange, and DeFi Wallet all offer
                different ways to earn rewards on crypto, called Crypto Earn.
                Create an account on the chosen platform and deposit
                cryptocurrency holdings into the rewards account. Depending on
                the platform, users may earn rewards through lending their
                cryptocurrency to other users or by locking up their
                cryptocurrency for a period of time. Some products offer fixed
                reward rates (e.g., the Crypto.com Visa Card), while others may
                offer variable rates that depend on market conditions (e.g., the
                'Earn' feature in the Crypto.com DeFi Wallet). Monitor rewards
                and adjust strategies as necessary.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default Faq;
