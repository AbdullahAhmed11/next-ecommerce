import React from "react";
import Layout from "../Layout/Layout";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { RiCustomerServiceFill, RiRobotFill } from '@/assets/icons';


function ContactSection() {

    const contactsData = [
        {
            Icon: RiCustomerServiceFill,
            title: 'Talk to our customer service',
            subtitle:
                "We'll help you answer your question and try to solve your problem.",
            navigateTo: '/live-chat',
            buttonTitle: 'Live Chat'
        },
        {
            Icon: RiRobotFill,
            title: 'Product and account support',
            subtitle:
                "Our help center is fresh and always open for public. If you can't find the answer you're looking for, we're here to lend a hand.",
            navigateTo: '/support',
            buttonTitle: 'Go to help center'
        }
    ];

    return (
        <>
            <Layout>
                <MaxWidthWrapper>
                    <div className="flex items-center justify-center flex-col dark:text-white ">
                        <h1 className="text-2xl mt-4">Contact us</h1>
                        <div className="md:flex-row flex flex-col  items-center justify-center gap-2 w-full mt-6 mb-20 ">
                            {
                                contactsData.map((prop) => (
                                    <div className="md:w-2/4 w-full border-2 h-30 flex items-center justify-center flex-col p-3 gap-3 rounded-md text-center">
                                        <div className="w-14 h-14 border-2 rounded-full flex items-center justify-center ">
                                            <prop.Icon className="text-2xl" />
                                        </div>
                                        <h1 className="text-2xl font-bold" >{prop.title}</h1>
                                        <p className="text-center text-secondary ">{prop.subtitle}</p>
                                        <button className="w-5/6 border-2 p-2 rounded-lg">
                                            {prop.buttonTitle}
                                        </button>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </MaxWidthWrapper>
            </Layout>

        </>
    )
}

export default ContactSection;