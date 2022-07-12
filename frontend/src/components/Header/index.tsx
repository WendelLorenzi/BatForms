import { Container, ContainerHeader, ContainerImage, ContainerButton } from './styles';
import BruceHeader from '../../assets/bruceHeader.svg';
import React from 'react';
import { Button } from '@mui/material';

const Header: React.FC = () => {
    return (
    <>
        <Container>
            <ContainerHeader>
                <ContainerImage>
                    <BruceHeader />
                </ContainerImage>
                <ContainerButton>
                    <Button variant="outlined">
                        Produtos Batcaverna
                    </Button>
                </ContainerButton>
            </ContainerHeader>
        </Container>
    </>
    );
};

export default Header;