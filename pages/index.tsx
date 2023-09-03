import React from 'react'
import Banner from '@/components/Banner/Banner'
import Layout from '@/components/Layout/Layout'
import HomeSection from '@/components/Home/HomeSection'
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper'
import SeoLayout from '@/components/Seo/SeoLayout'

export default function Home() {
  return (
    <SeoLayout
      title='Shopping Cart - Best Online Shopping Platform'
      description='The one stop shop for all your shopping needs.'
      image='/home.png'
    >
      <div>
        <Layout>
          <Banner />
          <MaxWidthWrapper>
            <HomeSection />
          </MaxWidthWrapper>
        </Layout>
      </div>
    </SeoLayout>
  )
}
