import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useAuthContext } from "@/context/auth.context";

type ProfileDetailType = {
  icon: JSX.Element;
  label: string;
  value: string;
};

const details: ProfileDetailType[] = [
  {
    icon: <FaLocationDot size={24} />,
    label: "Location",
    value: "177,139, LBH road",
  },
  {
    icon: <FaPhone size={24} />,
    label: "Phone",
    value: "+91 12345 67890",
  },
  {
    icon: <FaAward size={24} />,
    label: "Rank",
    value: "281,201",
  },
  {
    icon: <MdEmail size={24}/>,
    label:"Email",
    value: ""
  }
];

const description = `Temp Steels is a trusted dealer of premium-quality steel pipes, serving industries such as construction, plumbing, oil & gas, and infrastructure. `;

const Details = () => {

  const auth = useAuthContext();
  details[3].value = auth.email;

  return (
    <div className="flex flex-col gap-5">
      <p className="text-justify text-base">{description}</p>
      <div className="flex flex-col gap-1">
        {details.map((record, index) => {
          return (
            <div className="flex flex-row items-center px-4 gap-4" key={index}>
              {record.icon}
              <p className="font-semibold text-sm w-2/5">{record.label}</p>
              <Button
                variant={"link"}
                className="flex text-left cursor-pointer w-3/5"
              >
                <p>{record.value}</p>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
