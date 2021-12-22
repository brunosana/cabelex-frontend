import React from 'react';

import {
    Container
} from './styles';

interface ITooltip {
    title: string;
    className?: string;
}

const Tooltip: React.FC<ITooltip> = ({ title, className, children }) => {
    return(
        <Container className={className}>
            {children}
            <span>{title}</span>
        </Container>
    );
}

export { Tooltip }