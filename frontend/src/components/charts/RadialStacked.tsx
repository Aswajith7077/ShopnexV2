import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RadialStackedProps } from "@/types/charts/radial.stacked";

export const description = "A radial chart with stacked sections";

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

const chartConfig = {
  desktop: {
    label: "Deals",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Consumed",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;



export function ChartRadialStacked({
  start_angle,
  end_angle,
  inner_radius,
  outer_radius,
  className,
  card_config,
  card_footer,
}: RadialStackedProps) {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <Card
      className={`flex flex-col bg-slate-900 ${
        className !== undefined ? className : ""
      }`}
    >
      <CardHeader className="items-center pb-0">
        <CardTitle>Transactions</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-full"
        >
          <RadialBarChart
            data={chartData}
            startAngle={start_angle}
            endAngle={end_angle}
            innerRadius={inner_radius}
            outerRadius={outer_radius}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                         Transactions
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <div>
              
            </div>

            {/* Config for the Chart */}
            {card_config &&
              card_config.map((record, index) => {
                return <RadialBar key={index} {...record} />;
              })}
            {card_footer}
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
