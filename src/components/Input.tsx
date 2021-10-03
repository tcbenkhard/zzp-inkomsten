import React from "react";
import './Input.scss';

interface InputProps {
    name: string;
    id: string;
    prefix?: string;
    onChange: (value: string) => void;
    value?: string | number;
}

export const Input = (props: InputProps) => {

    const handleChange = (event: any) => {
        console.log('Handle in Input')
        props.onChange(event.target.value || '');
    }

    const renderPrefix = () => {
        if(props.prefix) return (props.prefix)
    }

    return (
        <span className={'form-input'}>
            <label htmlFor={props.id}>{props.name}</label>
            <span>{renderPrefix()} <input className={'form-input-input'} name={props.id} id={props.id} value={props.value} onChange={handleChange}/></span>
        </span>
    )
}