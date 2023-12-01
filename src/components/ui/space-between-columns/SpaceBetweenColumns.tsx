interface ISpaceBetweenColumns {
  title: string | null | undefined;
  args: (string | null | undefined)[];
}

const SpaceBetweenColumns = ({ title, args }: ISpaceBetweenColumns) => {
  return (
    <div className='mb-2 last:mb-0'>
      <h5>{title}</h5>

      {args.length > 1 &&
        args.map(
          (arg, index) =>
            index % 2 === 0 && (
              <div key={index / 2} className='flex justify-between items-center'>
                <span className='text-neutral-400'>{arg}</span>
                <span className='text-neutral-300 font-medium `'>{args[index + 1]}</span>
              </div>
            )
        )}
    </div>
  );
};

export default SpaceBetweenColumns;
