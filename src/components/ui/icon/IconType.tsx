import { MdDone, MdErrorOutline, MdBarChart } from 'react-icons/md';
import { HiArrowUp, HiArrowDown, HiCog } from 'react-icons/hi'
import { HiXMark } from 'react-icons/hi2';
import { FaPercentage } from 'react-icons/fa'
import { MdGetApp } from 'react-icons/md';
import { CiSaveDown1 } from 'react-icons/ci'
import { BiReset } from 'react-icons/bi'
import { FcGoogle} from 'react-icons/fc'
import { PiIntersectDuotone, PiIntersectThreeDuotone, PiLeafDuotone, PiSubtractDuotone, PiCircle, PiCircleFill, PiCircleDuotone, PiCircleHalfDuotone } from 'react-icons/pi'

// import { v4 } from 'crypto';
// import { v4 as uuidv4  } from 'uuid';

export type IconType =
  | 'Done'
  | 'Error'
  | 'Chart'
  | 'GiveMoney'
  | 'PayMoney'
  | 'PercentageRed'
  | 'PercentageGreen'
  | 'Reset'
  | 'Save'
  | 'Cancel'
  | 'Google'
  | 'Settings';

export const iconTypes = new Map([
  ['Done', <MdDone fill='#86EFAC' />],
  ['Error', <MdErrorOutline fill='#EF4444' />],
  ['Chart', <MdBarChart fill='#FDE68A' />],
  ['GiveMoney', <HiArrowDown fill='#EF4444' />],
  ['PayMoney', <HiArrowUp fill='#86EFAC' />],
  ['PercentageRed', <FaPercentage fill='#EF4444' />],
  ['PercentageGreen', <FaPercentage fill='#86EFAC' />],
  ['Reset', <BiReset fill='#EF4444' />],
  ['Save', <MdGetApp fill='#86EFAC' />],
  ['Cancel', <HiXMark fill='#EF4444' />],
  ['Google', <FcGoogle />],
  ['Settings', <HiCog />],
])