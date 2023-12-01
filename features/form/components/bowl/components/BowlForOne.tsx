'use client';

import React from 'react';
import { useForm, get, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';

import { useAppDispatch } from '@/store/hooks';
import { IBowl, setBowl } from '@/store/slices/bowl.slice';

import {
  BOWL_FIELDS as fields,
  BOWL_PERCENTAGE_FIRST_SELECT as options,
} from '@/features/form/constants/fields.constants';

import { BowlForOneSchema } from '../bowl.schema';

const BowlForOne: React.FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<IBowl>({
    mode: 'onChange',
    resolver: zodResolver(BowlForOneSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IBowl> = (data) => {
    dispatch(setBowl(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ id, name, label, tooltip }) => (
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
      ))}

      <div className='flex justify-end mt-5'>
        <Button typeIcon={!isValid ? null : 'Done'} isValid={isValid}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default BowlForOne;
