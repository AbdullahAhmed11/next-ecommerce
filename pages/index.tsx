import React from 'react'
import Banner from '@/components/Banner/Banner'
import Layout from '@/components/Layout/Layout'
import HomeSection from '@/components/Home/HomeSection'
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper'


export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
        <MaxWidthWrapper>
          <HomeSection />
        </MaxWidthWrapper>
      </Layout>
    </div>
  )
}
