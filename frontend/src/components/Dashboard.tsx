import Banner from "@/components/dashboard/Banner";
import FeaturedCategories from "@/components/dashboard/FeaturedCategories";
import AdCards from "@/components/dashboard/AdCards";
import { ScrollArea } from "@/components/ui/scroll-area";
import PopularItems from "@/components/dashboard/PopularItems";

const Dashboard = () => {

  return <ScrollArea className="flex-grow overflow-auto p-5">
      <div className="flex items-center flex-row gap-4 mx-5 mb-7">
        <div className="flex flex-row gap-4 items-start justify-center">
          <p className="text-3xl">{`Welcome`}</p>
          <p className="font-bold text-3xl">{`Aswajith`}</p>
        </div>
      </div>
      <Banner />
      <FeaturedCategories />
      <AdCards />
      <PopularItems />
    </ScrollArea>;
};

export default Dashboard;
