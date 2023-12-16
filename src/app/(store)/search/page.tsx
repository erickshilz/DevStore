import api from '@/data/api';
import Product from '@/data/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface SearchParams {
  searchParams: {
    q: string;
  };
}

async function searchProducts(query: string) {
  const response = await api(`/products/search?q=${query}`, {
    // next: {
    // revalidate: 60 * 30, // 30 minutos
    // },
  });

  const products = await response.json();

  return products;
}

export default async function Search({ searchParams }: SearchParams) {
  const { q: query } = searchParams;

  if (!query) {
    redirect('/');
  }

  const products = await searchProducts(query);

  return (
    <main className='flex flex-col gap-4'>
      <p className='text-sm'>
        Resultados para: <span className='font-semibold'>{query}</span>
      </p>
      <div className='grid grid-cols-3 gap-6'>
        {products ? (
          products.map((productResult: Product) => {
            return (
              <Link
                key={productResult.id}
                href={`/product/${productResult.slug}`}
                className='group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end'
              >
                <Image
                  src={productResult.image}
                  width={480}
                  height={480}
                  quality={100}
                  alt={productResult.title}
                  className='group-hover:scale-105 transition-transform duration-500'
                />

                <div className='absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
                  <strong className='text-sm truncate'>
                    {productResult.title}
                  </strong>
                  <span className='flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
                    {productResult.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </Link>
            );
          })
        ) : (
          <h2 className='col-span-3 row-span-3 place-self-center text-5xl mt-60 text-zinc-800 font-bold'>
            Produto não encontrado
          </h2>
        )}
      </div>
    </main>
  );
}
