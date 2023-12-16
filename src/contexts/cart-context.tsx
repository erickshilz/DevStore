'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import Product from '@/data/types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: ({}: Product) => void;
  isCartModalOpen: boolean;
  setIsCartModalOpen: Dispatch<SetStateAction<boolean>>;
  removeFromCart: (productId: number) => CartItem[] | void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === product.id);

      if (productInCart) {
        return state.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...state, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productId: number) {
    const itemNoCarrinho = cartItems.find((item) => item.id === productId);

    if (itemNoCarrinho!.quantity > 1) {
      const novoCarrinho = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });

      setCartItems(novoCarrinho);
      return;
    }

    const novoCarrinho = cartItems.filter((item) => item.id !== productId);
    setCartItems(novoCarrinho);
    return;
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        isCartModalOpen,
        setIsCartModalOpen,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
