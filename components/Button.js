import classNames from 'classnames';

export const Button = () => {
  const isLoading = true;
  const btnClass = classNames(
    'bg-red-500 hover:bg-red-600 text-sm text-white p-2 rounded',
    {
      'opacity-50 cursor-not-allowed': isLoading,
    }
  );
  return (
    <button className={btnClass} disabled={isLoading} type='submit'>
      {isLoading ? 'Processing' : 'Sign Up'}
    </button>
  );
};
