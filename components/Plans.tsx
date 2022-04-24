import { CheckIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { loadCheckout } from '../lib/stripe'
import Loader from './Loader'
import Table from './Table'

interface Props {
    products: Product []
}
const Plans = ({ products }: Props) => {
    
    const {logout, user} = useAuth()
    const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
    const [isBillingLoading, setisBillingLoading] = useState(false)

    const subscribeToPlan = () => {
      if (!user) return
      loadCheckout(selectedPlan?.prices[0].id!)
      setisBillingLoading(true)
    }

  return (
    <div>
        <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='border-b border-white/10 bg-[#141414]'>
          <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
          </Link>
          <button
          onClick={logout}
          className='text-lg font-medium hover:underline'>
              Sign Out
          </button>
      
      </header>
      <main className='pt-28 max-w-5xl mx-auto px-5 pb-12 transition-all md:px-10'>
          <h1 className='mb-3 text-3xl font-medium'>
              Choose the plan thats right for you.
          </h1>
          <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
          </ul>

          <div className='mt-4 flex flex-col space-x-4'>
              <div className='flex w-full items-center justify-end self-end md:w-3/5'>
                  {products.map((product) => (
                      <div 
                      className={`planBox ${selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"}`}
                      key={product.id}
                      onClick={() => setSelectedPlan(product)}>
                          {product.name}
                      </div>
                  ))}
              </div>
              <Table products={products} selectedPlan ={selectedPlan}/>
              <button
            disabled={!selectedPlan || isBillingLoading}
            className={`self-center w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && 'opacity-60'
            }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              'Subscribe'
            )}
          </button>
          </div>
      </main>
    </div>
  )

}

export default Plans