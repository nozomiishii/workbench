import SignupForm from './SignupForm';

const outcomes = [
  'How to build this landing page with Next.js',
  'How to create API endpoint and integrate with ConvertKit API',
  'How to use React Hook Form and TailwindCSS',
];

const Hero = () => {
  return (
    <div className='border border-gray-200 md:flex md:flex-row'>
      <div className='bg-gray-100 text-center md:w-1/3'>
        <img className='object-contain mx-auto' src='/assets/logo.png' />
      </div>
      <div className='px-4 md:px-8 self-center md:w-2/3'>
        <h2 className='font-bold text-2xl mb-3'>what you'll learn</h2>
        <ul className='mb-6'>
          {outcomes.map((i) => (
            <li key={i} className='text-gray-700 flex mb-2'>
              <span className='opacity-75'>{i}</span>
            </li>
          ))}
        </ul>
        <SignupForm title='Leave your email below, to be notified when this course is ready.' />
      </div>
    </div>
  );
};

export default Hero;
