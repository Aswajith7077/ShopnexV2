import { ContentType } from "@/types/landing/navbar.type";

const contents:ContentType[] = [
  {
    title: "Credits",
    type: "single_image_column",
    subcontents: [
      {
        title: "Buyer Scoring",
        url: "/credits/buyer-scoring",
        description:
          "View your buyer score and how it affects your shopping experience.",
      },
      {
        title: "Dealer Scoring",
        url: "/credits/dealer-scoring",
        description:
          "View your dealer score and how it affects your selling experience.",
      },
      {
        title: "Nex Offers",
        url: "/credits/nex-offers",
        description:
          "Get exclusive offers and discounts based on your shopping habits.",
      },
    ],
  },
  {
    title: "Pricing",
    type: "double_column",
    subcontents: [
      {
        title: "Free",
        url: "/pricing/individuals/free",
        description: "Free plan for individuals with basic features.",
      },
      {
        title: "Pro",
        url: "/pricing/individuals/pro",
        description: "Pro plan for individuals with additional features.",
      },
      {
        title: "Premium",
        url: "/pricing/individuals/premium",
        description: "Premium plan for individuals with full features.",
      },
      {
        title: "Basic",
        url: "/pricing/businesses/basic",
        description: "Basic plan for small businesses.",
      },
      {
        title: "Platinum",
        url: "/pricing/businesses/platinum",
        description:
          "Premium plan for large businesses with advanced features.",
      },
    ],
  },
  {
    title: "Dealers",
    type: "double_column",

    subcontents: [
      {
        title: "Featured Dealers",
        url: "/dealers/featured",
        description: "Explore our featured dealers for the best deals.",
      },
      {
        title: "Top Rated",
        url: "/dealers/top-rated",
        description: "Explore our top-rated dealers for the best deals.",
      },
      {
        title: "Connections",
        url: "/dealers/connections",
        description: "Find connections with other dealers and buyers.",
      },
      {
        title: "Promotions",
        url: "/dealers/promotions",
        description: "Get a chance to display banners and promotions.",
      },
    ],
  },
  {
    title: "Help",
    type: "single_image_column",
    subcontents: [
      {
        title: "FAQs",
        url: "/help/faqs",
        description:
          "Frequently asked questions about our services and features.",
      },
      {
        title: "Contact Us",
        url: "/help/contact",
        description: "For any inquiries or support, please reach out to us.",
      },
      {
        title: "Support",
        url: "/help/support",
        description:
          "Get assistance with our community or through our support channels.",
      },
    ],
  },
];


export{
    contents,
}