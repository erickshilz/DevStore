'use client';

import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import CartModal from './cart-modal';

export default function CartWidget() {
  const { items, setIsCartModalOpen } = useCart();

  function handleOpenCartModal() {
    setIsCartModalOpen((state) => !state);
  }

  return (
    <div className='relative'>
      <button
        onClick={handleOpenCartModal}
        className='flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-zinc-900'
      >
        <ShoppingBag className='h-4 w-4' />

        <span className='text-sm'>Cart ({items.length})</span>
      </button>
      <CartModal />
    </div>
  );
}
