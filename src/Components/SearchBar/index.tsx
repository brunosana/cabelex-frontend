import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { BiSearch } from 'react-icons/bi';

import {
    Container,
} from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const SearchBar: React.FC<IInputProps> = ({ name, ...rest }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [onFocus, setOnFocus] = useState(false);
    const [onFill, setOnFill] = useState(false);

    const handleInputBlur = useCallback(()=>{
        setOnFocus(false);
        setOnFill(!!inputRef.current?.value);
    },[]);

    const handleInputFocus = useCallback(() => {
        setOnFocus(true);
    }, []);

    return (
        <Container
            isFocused={onFocus}
            isFilled={onFill}
        >
            <BiSearch size={34}/>
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
}

export { SearchBar };