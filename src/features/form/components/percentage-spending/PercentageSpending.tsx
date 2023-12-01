import Cell from '@/components/ui/cell/Cell'
import { IBrandsAmount } from '@/store/slices/brandsAmount.slice'
import PsForOne from './components/ps-for-one/PsForOne'
import PsForTwo from './components/ps-for-two/PsForTwo'

const PercentageSpending = ({ amount }: IBrandsAmount) => {
  return (
    <Cell title='Percentage spending' ghost>
      {amount === 'one' ? <PsForOne /> : <PsForTwo />}
    </Cell>
  )
}

export default PercentageSpending