import { useEffect, useState } from 'react';
import { Card } from '../Card';
import { Container, Title } from './styles';

export function Painel() {
    return (
        <Container>
            <Title>Draw <span>Hourglass</span></Title>
            <Card />
        </Container>
    );
}