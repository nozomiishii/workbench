import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js 101</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen flex flex-col justify-center'>
        <Image
          className='m-auto my-4 w-24 sm:w-auto'
          src='/assets/logo.png'
          alt='logo'
          width={500}
          height={500}
        />
        <h1 className='mx-auto text-4xl font-bold'>Welcome to Next.js 101!</h1>
        <Link href='/pageTwo'>
          <a>Go page2</a>
        </Link>
      </main>
    </div>
  );
}
