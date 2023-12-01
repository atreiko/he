'use client';

import React, { useEffect } from 'react';
import { useForm, get, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Cell from '@/components/ui/cell/Cell';
import Field from '@/components/ui/field/Field';
import FieldSelect from '@/components/ui/field-select/FieldSelect';
import Button from '@/components/ui/button/Button';

import { useAppDispatch } from '@/store/hooks';
import { ICoal, setCoal } from '@/store/slices/coal.slice';
import { IBrandsAmount } from '@/store/slices/brandsAmount.slice';

import {
  COAL_FIELDS as fields,
  COAL_PIECES_PER_KG_SELECT as selectFields,
} from '../../constants/fields.constants';
import { COAL_PIECES_PER_KG_TOOLTIP as selectTooltip } from '../../constants/strings.constants';

import { CoalSchema } from './coal.schema';

const Coal = ({ amount }: IBrandsAmount) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset
  } = useForm<ICoal>({
    mode: 'onChange',
    resolver: zodResolver(CoalSchema),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    (amount === 'one' || amount === 'two') && reset();
  }, [amount, reset]);

  const onSubmit: SubmitHandler<ICoal> = (data) => {
    dispatch(setCoal(data));
  };

  return (
    <Cell title='Coal'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSelect
          id='pieces-per-kg'
          name='coalPiecesPerKg'
          label='pieces per kilogram'
          tooltip={selectTooltip}
          options={selectFields}
          register={register}
        />

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

export default Coal;
