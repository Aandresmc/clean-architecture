import TextField from '@material-ui/core/TextField/TextField';
import { ChangeEventHandler } from 'react';
import { JsxAttribute } from 'typescript';


type Props = {
    name: string,
    label: string,
    type: inputsType,
    value: string,
    error?: string,
    onChange: ChangeEventHandler,
    props?: JsxAttribute[]
};


type inputsType = 'text' | 'email' | 'password' | 'number'

export const InputComponent: React.FC<Props> = (_props: Props) => {

    const { name, label, type, value, error = null, onChange, props } = _props;

    return (
        <TextField
            variant='outlined'
            margin='dense'
            {...props}
            type={type}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />

    );
};