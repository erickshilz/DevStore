'use client';

import { useCart } from '@/contexts/cart-context';
import Product from '@/data/types/product';
import { Minus, Plus } from 'lucide-react';

export default function CartModal() {
  const { addToCart, removeFromCart, items, isCartModalOpen } = useCart();

  function handleDecrementCartItem(productId: number) {
    removeFromCart(productId);
  }

  function handleIncrementCartItem(product: Product) {
    addToCart(product);
  }

  if (items.length) {
    return (
      isCartModalOpen && (
        <div className='bg-zinc-900 absolute z-10 top-10 right-0 p-2 rounded-xl border-2 border-zinc-800 flex flex-col gap-4 w-64'>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className='flex items-center justify-between gap-2 p-2'
              >
                <strong className='text-sm font-normal'>{item.title}</strong>

                <span className='text-sm'>{item.quantity}</span>

                <div className='flex items-center justify-between gap-2'>
                  <button
                    onClick={() => handleDecrementCartItem(item.id)}
                    type='button'
                    className='p-1'
                  >
                    <Minus className='w-4 h-4' />
                  </button>

                  <span className='h-4 bg-zinc-800 w-[2px]' />

                  <button
                    onClick={() => handleIncrementCartItem(item)}
                    type='button'
                    className='p-1'
                  >
                    <Plus className='w-4 h-4' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  } else {
    {
      return (
        isCartModalOpen && (
          <div className='bg-zinc-900 absolute z-10 top-10 right-0 p-2 rounded-xl border-2 border-zinc-800 flex flex-col gap-4 w-64 text-sm text-center'>
            Ainda não há itens no carrinho
          </div>
        )
      );
    }
  }
}
