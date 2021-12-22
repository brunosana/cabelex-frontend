import React, { useRef, useEffect, ReactElement } from "react";
import { IconBaseProps } from "react-icons/lib";
import { useField } from "@unform/core";

import {
    Container,
    Error
} from './styles';
import { FiAlertCircle } from "react-icons/fi";
import { main } from "../../styles/themes/main";

interface ISelect {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<ISelect> = ({ name, icon: Icon, children, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const optionRefs = useRef<HTMLOptionElement[]>([]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: optionRefs.current,
      getValue: (refs: HTMLOptionElement[]) => {
        return refs.find((ref) => ref.selected)?.value || "";
      },
      setValue: (refs: HTMLOptionElement[], value: string) => {
        const option = refs.find((ref) => ref.value === value);

        if (option) option.selected = true;
      },
      clearValue: (refs: HTMLOptionElement[]) => {
        refs.forEach((ref) => (ref.selected = false));
      }
    });
  }, [fieldName, registerField]);

  return (
    <Container>
        { Icon && <Icon size={27}/> }
        <select name={fieldName} defaultValue={defaultValue} {...rest}>
        {React.Children.map(children, (child) =>
            React.cloneElement(child as ReactElement, {
                ref: (ref: HTMLOptionElement) => optionRefs.current.push(ref)
            })
            )}
        </select>
        {
                error &&
                <Error title={error}>
                    <FiAlertCircle color={main.colors.error} size={26}/>
                </Error>

            }
    </Container>
  );
};

export { Select };
