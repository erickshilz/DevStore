'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  FormEvent,
  useState,
  useRef,
  FormEventHandler,
  ChangeEvent,
} from 'react';

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const [queryParams, setQueryParams] = useState<string>('');

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/search?q=${queryParams}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className='flex max-w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700'
    >
      <Search className='w-5 h-5 text-zinc-500' />{' '}
      <input
        value={queryParams}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setQueryParams(event.target.value)
        }
        type='search'
        placeholder='Buscar produtos...'
        className='flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500'
      />
    </form>
  );
}
