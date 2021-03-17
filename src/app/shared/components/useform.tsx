import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

type Props = {
    initialValues: any,
    validateOnChange: boolean,
    validate: Function
};

export const useForm = ({ initialValues, validateOnChange = false, validate }: Props) => {

    const [values, setValues] = useState(initialValues);
    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialValues);
        setErrors({})
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        isLoading,
        setLoading,
        handleInputChange,
        resetForm

    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))



export const Form: React.FC<any> = (props) => {

    const classes = useStyles();
    const { children, ...other } = props;

    return (
        <form className={classes.root} noValidate autoComplete="off" data-testid='form' {...other}>
            {props.children}
        </form>
    );
};
