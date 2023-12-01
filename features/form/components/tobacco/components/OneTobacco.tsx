'use client';

import React from 'react';
import { SubmitHandler, useForm, get, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';

import { useAppDispatch } from '@/store/hooks';
import { ITobacco, setTobacco } from '@/store/slices/tobacco.slice';

import { TOBACCO_FIELDS_FOR_ONE as fields } from '@/features/form/constants/fields.constants';

import { OneTobaccoSchema } from '../tobacco.schema';

const OneTobacco: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch
  } = useForm<ITobacco>({
    mode: 'onChange',
    resolver: zodResolver(OneTobaccoSchema),
  });

  const dispatch = useAppDispatch();
  
  const onSubmit: SubmitHandler<ITobacco> = (data) => {
    dispatch(setTobacco(data));
  };

  const renderFields = fields.map(({ id, name, label, tooltip }) => (
    <React.Fragment key={id}>
      <Field
        id={id}
        register={register}
        name={name}
        tooltip={tooltip}
        label={label}
        error={get(errors, name)?.message}
      />
    </React.Fragment>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderFields}
      <div className='flex justify-end mt-5'>
        <Button typeIcon={!isValid ? null : 'Done'} isValid={isValid}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default OneTobacco;
