import { FieldType } from '@/interfaces';
import {
  PROFILE_AVATAR,
  PROFILE_EMAIL,
  PROFILE_PASSWORD,
  PROFILE_USERNAME,
} from './string.constants';

//? Profile
export const PROFILE_UPDATE_FIELDS: ReadonlyArray<FieldType> = [
  {
    id: 'name',
    name: 'name',
    label: 'user name',
    tooltip: PROFILE_USERNAME
  },
  {
    id: 'user-image',
    name: 'image',
    label: 'user image',
    tooltip: PROFILE_AVATAR
  },
]

//? SignUp

export const SIGN_UP_FIELDS: ReadonlyArray<FieldType> = [
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    tooltip: PROFILE_EMAIL
  },
  {
    id: 'name',
    name: 'name',
    label: 'name',
    tooltip: PROFILE_USERNAME
  },
  {
    id: 'password',
    name: 'password',
    label: 'password',
    tooltip: PROFILE_PASSWORD
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    label: 'confirm password',
    tooltip: PROFILE_PASSWORD
  },
]

