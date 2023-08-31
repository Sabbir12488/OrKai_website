import Layout from '@/components/Layout'
import React from 'react'

const NewProducts = () => {
  return (
    <Layout>
        <h1>New Product</h1>
        <label>Product name</label>
        <input type="text" placeholder='Product name' />
        <label>Description</label>
        <textarea placeholder='description'></textarea>
        <label>Price (<b>BDT</b>)</label>
        <input type="number" placeholder='0.0 ৳' />
        <button className='btn-primary'>Save</button>
    </Layout>
  )
}

export default NewProducts