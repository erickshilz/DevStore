import Skeleton from '@/components/skeleton';

export default function SearchLoading() {
  return (
    <div className='grid grid-cols-3 gap-6'>
      <Skeleton className='h-[320px] bg-zinc-900 rounded-lg' />
      <Skeleton className='h-[320px] bg-zinc-900 rounded-lg' />
      <Skeleton className='h-[320px] bg-zinc-900 rounded-lg' />
      <Skeleton className='h-[320px] bg-zinc-900 rounded-lg' />
      <Skeleton className='h-[320px] bg-zinc-900 rounded-lg' />
      <Skeleton className='h-[320px] bg-zinc-900 rounded-lg' />
    </div>
  );
}
