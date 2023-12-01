import Link from 'next/link';
import Button from '@/components/ui/button/Button';
export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='container min-h-screen flex justify-center items-center'>

        <div className='w-full h-full'>
          <div className='w-1/2'>
            <h1 className='text-6xl mb-4'>
              <span className='text-green-400'>Optimize</span> Hookah{' '} {/* indigo, sky, teal*/}
              <span className='text-green-400'>Expenses</span>.
            </h1>
            <p className='text-lg mb-4'>
              Get a preliminary cost calculation of your hookah - know the exact numbers before
              placing your order!
            </p>
            <Link href='/form' className='inline-block'>
              <Button>Calculate</Button>
            </Link>
          </div>
        </div>
        
      </div>
    </main>
  );
}
