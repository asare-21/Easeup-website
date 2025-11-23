import DownloadApp from "@/components/products/DownloadApp"
import Hero from "@/components/products/Hero"
import ProductDescription from "@/components/products/ProductDescription"
import Footer from "@/components/ui/Footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Products - EaseUp Mobile App',
  description: 'Discover the EaseUp mobile app - your gateway to connecting with skilled handymen. Download now for seamless home improvement services.',
}

export default function Page() {
    return (
        <main className="w-full h-fit    bg-background">
        <Hero/>
        <ProductDescription/>
        <DownloadApp/>
        <Footer/>
       </main>
    )
}
