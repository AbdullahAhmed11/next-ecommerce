import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'
import Layout from '@/components/Layout/Layout'


export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
      </Layout>
    </div>
  )
}
