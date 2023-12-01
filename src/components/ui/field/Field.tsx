import './field.css';

interface IFieldProps {
  id: string;
  name: string;
  label: string;
  register?: any;
  error?: string | null;
  tooltip: string;
  disabled?: boolean | undefined;
}

const Field: React.FC<IFieldProps> = ({ id, name, label, tooltip, register, error, disabled = false }) => {
  return (
    <div className='relative'>
      <label className='fieldLabel' data-tooltip={tooltip} htmlFor={id}>
        {label}
      </label>
      <input
        className='field'
        id={id}
        type='text'
        {...register(name)}
        disabled={disabled}
        autoComplete='off'
      />
      {error && (
        <p className='absolute right-0 top-2 text-xs text-red-500 text-shad whitespace-nowrap'>
          {error}
        </p>
      )}
    </div>
  );
};

export default Field;
