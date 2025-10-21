"use client"

import Image from 'next/image'
import PaymentForm from '@/components/PaymentForm'
import ShippingForm from '@/components/ShippingForm'
import { CartItemTypes } from '@/types'
import { ArrowRight, Trash2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
]

const cartItems: CartItemTypes = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColour: "gray"
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColour: "gray"
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColour: "black"
  }
]

const CartPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [shippingForm, setShippingForm] = useState(null)

  const activeStep = parseInt(searchParams.get("step") || "1")

  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>
      {/* Title */}
      <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>

      {/* Steps indicator */}
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
        {steps.map(step => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 
            ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white flex items-center justify-center
              ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium 
              ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* Main Section */}
      <div className='w-full flex flex-col lg:flex-row gap-16'>
        {/* LEFT SIDE */}
        <div className='w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8'>
          {activeStep === 1 ? (
            cartItems.map(item => (
              <div key={item.id} className='flex items-center justify-between gap-8'>
                {/* Image and details */}
                <div className='flex gap-8 items-center'>
                    {/* Image */}
                  <div className='relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden'>
                    <Image
                      src={item.images[item.selectedColour]}
                      alt={item.description}
                      fill
                      className='object-contain rounded-md'
                    />
                  </div>
                  <div>
                    <h3 className='font-medium text-gray-800'>{item.name}</h3>
                    <p className='text-sm text-gray-500'>Size: {item.selectedSize.toUpperCase()}</p>
                    <p className='text-sm text-gray-500'>Color: {item.selectedColour}</p>
                    <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
                    <p className='text-sm text-gray-800 font-semibold mt-6'>Rs. {item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  className='w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center
                  hover:bg-red-200 transition-all cursor-pointer'
                >
                  <Trash2 className='w-4 h-4' />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className='text-sm text-gray-500'>
              Please fill in the shipping form to continue.
            </p>
          )}
        </div>

        {/* RIGHT SIDE - Cart Summary */}
        <div className='w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max'>
          <h2 className='font-semibold'>Cart Details</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between text-sm'>
              <p className='text-gray-500'>Subtotal</p>
              <p className='font-medium'>
                Rs. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(0)}
              </p>
            </div>

            <div className='flex justify-between text-sm'>
              <p className='text-gray-500'>Discount (10%)</p>
              <p className='font-medium'>Rs. 100</p>
            </div>

            <div className='flex justify-between text-sm'>
              <p className='text-gray-500'>Shipping Fee</p>
              <p className='font-medium'>Rs. 100</p>
            </div>

            <hr className='border-gray-200' />

            <div className='flex justify-between'>
              <p className='text-gray-800 font-semibold'>Total</p>
              <p className='font-medium'>
                Rs. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(0)}
              </p>
            </div>
          </div>

          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className='w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer
              flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300'
            >
              Continue
              <ArrowRight className='w-4 h-4' />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage
