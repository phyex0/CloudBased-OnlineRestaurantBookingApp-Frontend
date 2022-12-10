import React from 'react'
import OrderHeader from '../../components/OrderHeader.js'
import HeroSection from '../../components/HeroSection'
import Categories from '../../components/Categories.js'
import Campaigns from '../../components/Campaigns'
import Cards from '../../components/Cards'
import { useWindowWidth } from '@react-hook/window-size'

function Order() {
    const width = useWindowWidth()
    return (
        <>
            <OrderHeader />
            {width < 640 && <Campaigns />}
            <HeroSection />
            <Categories />
            <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
                {width > 640 && <Campaigns />}
                <Cards />
            </div>

        </>
    )
}

export default Order