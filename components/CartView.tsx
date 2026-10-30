"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { openWhatsApp } from "@/lib/whatsapp";

export default function CartView() {
  const { items, isReady, removeItem, updateQuantity, subtotal, clearCart } =
    useCart();

  const shipping = 0;
  const total = subtotal + shipping;

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const lines = items.map(
      (i, idx) =>
        `${idx + 1}. ${i.name} - Size: ${i.size}, Colour: ${i.color}, Qty: ${
          i.quantity
        }, Price: $${i.price} each, Subtotal: $${i.price * i.quantity}`
    );
    const message = `Hello VELORA, I would like to place an order:\n\n${lines.join(
      "\n"
    )}\n\nSubtotal: $${subtotal}\nShipping: Complimentary\nTotal: $${total}\n\nPlease confirm availability, delivery, and payment details. Thank you.`;
    openWhatsApp(message);
  };

  if (!isReady) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Loading cart...
        </p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center flex flex-col items-center gap-6">
        <span className="material-symbols-outlined text-[64px] text-on-surface-variant/40">
          shopping_bag
        </span>
        <h1 className="font-headline-lg text-headline-lg uppercase text-primary">
          Your Bag is Empty
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Discover our curated collections and add pieces to your bag to begin.
        </p>
        <Link
          href="/products"
          className="px-8 py-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-[0.2em] hover:bg-secondary transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="flex items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">
            YOUR SELECTION
          </span>
          <h1 className="font-headline-lg text-headline-lg uppercase text-primary mt-1">
            Shopping Bag
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {items.reduce((s, i) => s + i.quantity, 0)} item
            {items.reduce((s, i) => s + i.quantity, 0) !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={clearCart}
          className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors"
        >
          Clear Bag
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.cartKey}
              className="flex gap-4 bg-surface-container-low p-4 shadow-sm"
            >
              <div className="w-28 h-36 shrink-0 bg-surface-container overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-title-md text-title-md text-primary font-serif">
                      {item.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Size: {item.size} - Colour: {item.color}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.cartKey)}
                    aria-label="Remove item"
                    className="text-on-surface-variant hover:text-error transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="inline-flex items-center border border-outline-variant">
                    <button
                      onClick={() =>
                        updateQuantity(item.cartKey, item.quantity - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-title-md text-title-md text-primary">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.cartKey, item.quantity + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-title-md text-title-md text-primary font-bold">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-surface-container-low p-6 shadow-sm sticky top-32 flex flex-col gap-5">
            <h2 className="font-headline-md text-headline-md uppercase text-primary">
              Order Summary
            </h2>
            <div className="flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="text-on-surface font-bold">${subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-on-surface font-bold">
                  {shipping === 0 ? "Complimentary" : `$${shipping}`}
                </span>
              </div>
              <div className="border-t border-outline-variant pt-3 flex items-center justify-between font-title-md text-title-md text-primary">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-4 bg-[#25D366] text-white font-label-lg text-label-lg uppercase tracking-[0.2em] hover:opacity-90 transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Order via WhatsApp
            </button>
            <Link
              href="/products"
              className="w-full py-3 text-center font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Continue Shopping
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">
              Opening WhatsApp pre-fills your order message. You must press Send
              to confirm. No order is confirmed until sent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}