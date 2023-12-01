'use client';

import React, { useEffect } from 'react';
import { useForm, get, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Cell from '@/components/ui/cell/Cell';
import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';

import { useAppDispatch } from '@/store/hooks';
import { IHookah, setHookah } from '@/store/slices/hookah.slice';
import { IBrandsAmount } from '@/store/slices/brandsAmount.slice';

import { HOOKAH_FIELDS as fields } from '../../constants/fields.constants';

import { HookahSchema } from './hookah.schema';

const Hookah = ({ amount }: IBrandsAmount) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<IHookah>({
    mode: 'onChange',
    resolver: zodResolver(HookahSchema),
    defaultValues: {
      hookahPrice: '',
      salaryPerOneHookah: '0',
      additionalExpenses: '0',
    }
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    (amount === 'one' || amount === 'two') && reset();
  }, [amount, reset]);

  const onSubmit: SubmitHandler<IHookah> = (data) => {
    dispatch(setHookah(data));
  };

  return (
    <Cell title='Hookah'>
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
    </Cell>
  );
};

export default Hookah;
