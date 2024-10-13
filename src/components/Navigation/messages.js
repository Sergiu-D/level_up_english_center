// Assets
import placeholderImage from "../../../public/assets/image-placeholder.jpg";

export const navigationLinks = [
  {
    label: "Acasa",
    path: "/",
  },
  {
    label: "Cursuri",
    path: "/",
    featured: {
      title: "shadcn/ui",
      description:
        "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
      image: placeholderImage,
    },
    subLinks: [
      {
        label: "Introduction",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
        path: "/getting-started/introduction",
        image: placeholderImage,
      },
      {
        label: "Installation",
        description: "How to install dependencies and structure your app.",
        path: "/getting-started/installation",
        image: placeholderImage,
      },
      {
        label: "Typography",
        description: "Styles for headings, paragraphs, lists...etc",
        path: "/getting-started/typography",
        image: placeholderImage,
      },
    ],
  },
  {
    label: "Oferte",
    path: "/oferte",
  },
  {
    label: "Despre noi",
    path: "/despre-noi",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
