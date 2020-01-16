import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

type NavProps = {
    message: string,
    bet: number,
    balance: number
};

const Nav: React.FC<NavProps> = ({ message, bet, balance }) => {
    return (
        <Container>
            <Row className="navBackground">
                <Col className="center primaryColor">{getNavMessage(message, balance)}</Col>
            </Row>
        </Container>
    );
}

function getNavMessage(message: string, balance: number): string {
    if (message === 'Bust!' || message === 'You Win!' || message === 'Dealer Wins!' || message === 'Tie!') {
        return 'Result : ' + message;
    } else {
        return 'Current Balance : ' + balance;
    }
}

export default Nav;