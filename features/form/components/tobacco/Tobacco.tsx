import Cell from '@/components/ui/cell/Cell';
import OneTobacco from './components/OneTobacco';
import TwoTobaccos from './components/TwoTobaccos';
import { IBrandsAmount } from '@/store/slices/brandsAmount.slice';

const Tobacco = ({ amount }: IBrandsAmount) => {
  return <Cell title='Tobacco'>{amount === 'one' ? <OneTobacco /> : <TwoTobaccos />}</Cell>;
};

export default Tobacco;
