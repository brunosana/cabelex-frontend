import React from 'react';
import { IconBaseProps } from 'react-icons';

import {
    Container
} from './styles';

interface IOptions {
    to: string;
    icon: React.ComponentType<IconBaseProps>;
}

const OptionsButton: React.FC<IOptions> = ({ to, icon: Icon }) => {
    return(
        <Container to={to}>
            <Icon />
        </Container>
    );
}

export { OptionsButton };