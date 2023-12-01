import Cell from '@/components/ui/cell/Cell';
import PpgForOne from './components/ppg-for-one/PpgForOne';
import PpgForTwo from './components/ppg-for-two/PpgForTwo';
import CoalsCost from './components/coals-cost/CoalsCost';
import FbpForOne from './components/fbp-for-one/FbpForOne';
import FbpForTwo from './components/fbp-for-two/FbpForTwo';
import { IBrandsAmount } from '@/store/slices/brandsAmount.slice';

const IntermediateResults = ({ amount }: IBrandsAmount) => {  
  return (
    <Cell title='Intermediate results' ghost>
      {amount === 'one' ? <PpgForOne /> : <PpgForTwo />} 
      <CoalsCost /> 
      {amount === 'one' ? <FbpForOne /> : <FbpForTwo />}
    </Cell>
  );
};

export default IntermediateResults;
