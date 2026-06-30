"use client";

import { useCart } from "@/components/CartProvider";
import { signatureProducts } from "@/lib/signatureCollectionData";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const products = cart
    .map((id) => signatureProducts.find((p) => p.slug === id))
    .filter(Boolean);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const checkout = async () => {
    let newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    let isValid = true;

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    // ✅ Proceed only if valid
    await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        items: products,
      }),
    });

    alert("Order submitted!");
    clearCart();
  };

  if (!products.length) {
    return (
      <div className="min-h-screen bg-[#051711] text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl text-[#D4AF37] font-serif mb-4">
          Your Cart is Empty
        </h1>

        <p className="text-white/60 mb-6 max-w-md">
          Looks like you haven’t added anything yet. Explore our premium
          collection and find something you love.
        </p>

        <a
          href="/products"
          className="bg-[#D4AF37] text-black px-6 py-3 rounded font-medium hover:opacity-90 transition"
        >
          Browse Products
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1B4D3E] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl text-[#D4AF37] font-serif">Your Cart</h1>

        {products.map((item: any) => (
          <div
            key={item.slug}
            className="flex gap-6 border-b border-white/10 pb-6"
          >
            <div className="relative w-32 h-24">
              <Image
                src={item.heroImage}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl">{item.name}</h2>
              <p className="text-[#D4AF37]">{item.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.slug)}
              className="text-red-400"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="space-y-4 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-[#D4AF37]">Checkout</h2>

          <input
            placeholder="Name*"
            className="w-full p-3 bg-white/10"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          <input
            placeholder="Email*"
            className="w-full p-3 bg-white/10"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}

          <input
            placeholder="Phone No*"
            className="w-full p-3 bg-white/10"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm">{errors.phone}</p>
          )}

          <textarea
            placeholder="Address"
            className="w-full p-3 bg-white/10"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <button
            onClick={checkout}
            className="bg-[#D4AF37] text-black px-8 py-3 rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
