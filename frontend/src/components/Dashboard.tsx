import Banner from "@/components/dashboard/Banner";
import FeaturedCategories from "@/components/dashboard/FeaturedCategories";
import AdCards from "@/components/dashboard/AdCards";
import { ScrollArea } from "@/components/ui/scroll-area";
import PopularItems from "@/components/dashboard/PopularItems";
import Footer from "@/components/landing/Footer";
import EndCard from "@/components/dashboard/EndCard";
import { useContext } from "react";
import { AuthContext } from "@/context/auth.context";

const Dashboard = () => {

  const auth = useContext(AuthContext)

  return <ScrollArea className="flex-grow overflow-auto">
      <div className="flex items-center flex-row gap-4 mx-15 mb-7">
        <div className="flex flex-row gap-4 items-start justify-center">
          <p className="text-3xl">{`Welcome`}</p>
          <p className="font-bold text-3xl">{auth?.fullname}</p>
        </div>
      </div>
      <Banner />
      <FeaturedCategories />
      <AdCards />
      <PopularItems />
      <EndCard />
      <Footer/>
    </ScrollArea>;
};

export default Dashboard;
