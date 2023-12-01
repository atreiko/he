interface ISpaceBetween {
  left: string | null;  
  right: string | null;
}

const SpaceBetween = ({ left = '', right = '' }: ISpaceBetween) => { 
  return (
    <div className='flex justify-between items-center mb-2 last:mb-0'>
      <h5 className='text-neutral-300'>{left}</h5>
      <span className='text-neutral-300 font-medium'>{right}</span>
    </div>
  );
};

export default SpaceBetween;
