import './field-select.css';

export type SelectType = {
  value: string;
  label: string;
};

export interface IFieldSelectProps {
  id: string;
  name: string;
  label: string;
  register?: any;
  tooltip: string;
  options: SelectType[];
}

const FieldSelect: React.FC<IFieldSelectProps> = ({ id, name, label, tooltip, options, register }) => {
  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <>
      <label className='selectLabel' data-tooltip={tooltip} htmlFor={id}>
        {label}
      </label>
      <select className='select' id={id} {...register(name)}>
        {renderOptions}
      </select>
    </>
  );
};

export default FieldSelect;
