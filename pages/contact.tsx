import ContactSection from '@/components/Contact/ContactSection'
import SeoLayout from '@/components/Seo/SeoLayout'
import React from 'react'

function Contact() {
    return (
        <>
            <SeoLayout
                title='Contact - Best Online Shopping Platform'
                description='The one stop shop for all your shopping needs.'
                image='/home.png'
            >

                <ContactSection />
            </SeoLayout>
        </>
    )
}

export default Contact