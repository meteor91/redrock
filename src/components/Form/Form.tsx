import React from 'react';
import {
    FormProvider,
    useForm,
    type FieldValues,
    type DefaultValues,
} from 'react-hook-form';
import { FormInput } from './components/FormInput';

interface FormProps<T> {
    onSubmit: (data: T) => void;
    children?: React.ReactNode;
    defaultValues: DefaultValues<T>;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const Form = <T extends FieldValues,>(props: FormProps<T>): React.ReactElement => {
    const { defaultValues, onSubmit, children } = props;
    const methods = useForm<T>({
        defaultValues,
    });
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

Form.FormInput = FormInput;
