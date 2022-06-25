import { Box, styled, Card } from '@mui/material';

export const Container: any = styled(Card)({
});

export const ContainerHeader: any = styled(Box)({
    display: "flex",
    backgroundColor: '#000000',
});

export const ContainerImage: any = styled(Box)({
    // '& svg': {
    //     height: '25px',
    //     width: '25px',
    // }
});

export const ContainerButton: any = styled(Box)({
    display: "inline-flex",
    gap: '20px',
    '& button': {
        color: '#ffffff',
    },
});