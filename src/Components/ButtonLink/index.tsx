import React from 'react';
import { Button, IButton } from '../Button';

import { Container } from './styles';

interface IButtonLink extends IButton {
    to: string;
}

const ButtonLink: React.FC<IButtonLink> = ({ to, children, ...rest }) => {
    return(
        <Container to={to}>
            <Button {...rest}>
                {children}
            </Button>
        </Container>
    );
};

export { ButtonLink }