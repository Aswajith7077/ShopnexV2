import { JSX } from "react";

type RadialChartConfigType = {
	dataKey:string;
	stackId:string;
	cornerRadius:number;
	fill:string;
	className:string;
}

type RadialStackedProps = {
  start_angle: number;
  end_angle: number;
  inner_radius: number;
  outer_radius: number;
  className?: string;
  card_config?: RadialChartConfigType[];
  card_footer?: JSX.Element;
};


export type{
    RadialChartConfigType,
    RadialStackedProps
}