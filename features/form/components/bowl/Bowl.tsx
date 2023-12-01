import Cell from '@/components/ui/cell/Cell'
import BowlForOne from './components/BowlForOne'
import BowlForTwo from './components/BowlForTwo'
import { IBrandsAmount } from '@/store/slices/brandsAmount.slice'

const Bowl = ({ amount }: IBrandsAmount) => {
  return (
    <Cell title='Bowl'>{amount === 'one' ? <BowlForOne /> : <BowlForTwo />}</Cell>
  )
}

export default Bowl