import React, { ButtonHTMLAttributes } from 'react';


import { Container } from './styles';

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButton> = ({ children, ...rest }) => {
    return(
        <Container type='button' {...rest}>
            {children}
        </Container>
    );
};

export { Button }