
import { ChangeEventHandler } from 'react';

import { ControlsComponent } from 'app/shared/components';
import { UserForm } from '..';

type Props = {
    user: UserForm,
    isLoading: boolean,
    errors?: any,
    setValueField: ChangeEventHandler
};

const { InputComponent, ButtonSubmitComponent } = ControlsComponent;

export const FormComponent: React.FC<Props> = ({ user, isLoading, errors, setValueField }: Props) => {

    return (
        <>
            <InputComponent label='Correo electrónico' name='email'
                onChange={setValueField} type='email' value={user.email} error={errors.email} />

            <InputComponent label='Contraseña' name='password'
                onChange={setValueField} type='password' value={user.password} error={errors.password} />

            <ButtonSubmitComponent isLoading={isLoading} />
        </>
    );
};