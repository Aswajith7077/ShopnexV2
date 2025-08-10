import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const contents = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "/" },
      { name: "Pricing", url: "/pricing" },
      { name: "About Us", url: "/about" },
      { name: "faq", url: "/faq" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Deals & Promotions", url: "/deals" },
      { name: "Blog", url: "/blog" },
      { name: "Help Center", url: "/help" },
      { name: "Support", url: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Use", url: "/terms-of-use" },
      { name: "Terms of Service", url: "/terms" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center h-150 p-7 rounded-lg  bg-black text-white">
      {/* Quick Links */}
      <div className="flex flex-col p-5 md:flex-row justify-center mt-5 space-x-0 md:space-x-8 space-y-4 md:space-y-0">
        <div className="flex flex-col w-[50%] md:w-1/3">
          <h2 className="text-2xl px-4 text-left font-semibold">Zevrin</h2>
          <p className="text-sm mt-5 px-4 text-left text-gray-400">
            Zevrin is your one-stop shop for all your needs. We offer a wide
            range of products and services to make your shopping experience
            seamless and enjoyable.
          </p>
        </div>
        {/* Map through contents to create sections */}
        <div className="flex flex-row md:w-1/2 ml-10 lg: w-[25%]">
          {contents.map((content, index) => {
            return (
              <div key={index} className="flex flex-col mt-4 gap-0 w-full">
                <h2 className="text-lg px-4 text-left font-semibold">
                  {content.title}
                </h2>
                <ul className="flex flex-col mt-2">
                  {content.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant={"link"}
                      className="text-sm h-7 text-left mt-1"
                    >
                      <Link to={link.url} className="text-gray-400 w-full">
                        {link.name}
                      </Link>
                    </Button>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:w-1/5 gap-6 py-4 lg:w-[25%] mr-10 ">
          <h2 className="text-lg pr-4 w-full text-left font-semibold">
            {"Get Updates"}
          </h2>
          <p className="font-open-sans text-[14px] text-gray-400">
            By this you can stay up to date with the latest tech and updates
            with Zevrin
          </p>
          <div className="flex flex-row justify-center items-center gap-5">
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2 px-4 py-2 bg-gray-900 text-gray-400 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="mt-3 w-1/4 rounded-full px-5" variant={"ghost"}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[95%] items-center justify-center pt-7 my-3">
        <p className="text-sm">{"© 2023 Zevrin. All rights reserved."}</p>
      </div>
    </footer>
  );
};

export default Footer;
