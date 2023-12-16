'use client';

import { useCart } from '@/contexts/cart-context';
import Product from '@/data/types/product';

export default function AddToCartButton(product: Product) {
  const { addToCart } = useCart();

  async function handleAddProductToCart() {
    addToCart(product);
  }

  return (
    <button
      onClick={handleAddProductToCart}
      type='button'
      className='mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors font-semibold text-white'
    >
      Adicionar ao Carrinho
    </button>
  );
}
