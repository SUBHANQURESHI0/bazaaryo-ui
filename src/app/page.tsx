import HeroSection from "@/components/HeroSection"
import ProductList from "@/components/ProductList"


const Homepage = async ({searchParams}:{searchParams : Promise<{category : string}>}) => {
  const category = (await searchParams).category
  return (
    <div className=''>
      <HeroSection/>
      <ProductList category={category} params="homepage"/>
    </div>
  )
}

export default Homepage