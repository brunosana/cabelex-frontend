import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle  } from 'react-icons/fi';
import { useField } from '@unform/core';

import {
    Container,
    Error
} from './styles';
import { main } from '../../styles/themes/main';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({ name, icon: Icon, ...rest }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [onFocus, setOnFocus] = useState(false);
    const [onFill, setOnFill] = useState(false);

    const { 
        fieldName, defaultValue, error, registerField
    } = useField(name);

    const handleInputBlur = useCallback(()=>{
        setOnFocus(false);
        setOnFill(!!inputRef.current?.value);
    },[]);

    const handleInputFocus = useCallback(() => {
        setOnFocus(true);
    }, []);

    useEffect(()=> {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <Container
            isErrored={!!error}
            isFocused={onFocus}
            isFilled={onFill}
        >
            { Icon && <Icon size={27}/> }
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
            {
                error &&
                <Error title={error}>
                    <FiAlertCircle color={main.colors.error} size={26}/>
                </Error>

            }
        </Container>
    );
}

export { Input };