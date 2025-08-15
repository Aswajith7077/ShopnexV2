import { ChartRadialStacked } from "@/components/charts/RadialStacked";
import Avatar from "@/components/profile/avatar";
import Details from "@/components/profile/details";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadialChartConfigType } from "@/types/charts/radial.stacked";

const angles = {
  start_angle: 210,
  end_angle: -30,
  inner_radius: 100,
  outer_radius: 150,
};

const card_config: RadialChartConfigType[] = [
  {
    dataKey: "desktop",
    stackId: "a",
    cornerRadius: 5,
    fill: "var(--color-desktop)",
    className: "stroke-transparent stroke-2",
  },
  {
    dataKey: "mobile",
    fill: "var(--color-mobile)",
    stackId: "a",
    cornerRadius: 5,
    className: "stroke-transparent stroke-2",
  },
];

const Profile = () => {
  return (
    <section className="flex flex-row my-10 pr-20 pl-10 h-full">
      <ScrollArea className="w-3/4 h-[85vh] overflow-auto custom-scroll-hide">
        <div className="flex flex-col mr-5 gap-5 ">
          <div className="flex flex-row gap-5 w-full">
            <ChartRadialStacked
              {...angles}
              className="w-1/2"
              card_config={card_config}
            />
            <ChartRadialStacked
              {...angles}
              className="w-1/2"
              card_config={card_config}
            />
          </div>
        </div>
      </ScrollArea>
      <div className="flex flex-col w-1/4 ml-5 h-full gap-7">
        <Avatar />
        <Button className="w-full py-6 rounded-xl">Edit Profile</Button>
        <Details />
      </div>
    </section>
  );
};

export default Profile;
