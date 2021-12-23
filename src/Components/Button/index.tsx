import React, { ButtonHTMLAttributes } from 'react';


import { Container } from './styles';

export type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
    return(
        <Container type='button' {...rest}>
            {children}
        </Container>
    );
};
