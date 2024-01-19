interface ImageProps {
  img: string;
  alt: string;
}

interface imageCardProps {
  name: string;
  img: string;
  description: string;
  category: string;
}

interface buttonImageProps {
  title: string;
  category: string;
}

interface footerMenuProps {
  title: string;
  links: { title: string; url: string }[];
}

export const IMAGE_MENU: ImageProps[] = [
  {
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    alt: "certifFrontEnd",
  },
  {
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    alt: "certifReact",
  },
  {
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    alt: "certifJavascript",
  },
  {
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    alt: "certifJava",
  },
];

export const IMAGE_CARD: imageCardProps[] = [
  {
    name: "frontend 1",
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    description: "Angga Adytya",
    category: "frontend",
  },
  {
    name: "backend",
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    description: "Angga Adytya",
    category: "backend",
  },
  {
    name: "database",
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    description: "Angga Adytya",
    category: "database",
  },
  {
    name: "frontend 2",
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    description: "Angga Adytya",
    category: "frontend",
  },
  {
    name: "frontend 3",
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    description: "Angga Adytya",
    category: "frontend",
  },
  {
    name: "frontend 4",
    img: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
    description: "Angga Adytya",
    category: "frontend",
  },
];

export const BUTTON_IMAGE: buttonImageProps[] = [
  {
    title: "All",
    category: "all",
  },
  {
    title: "Frontend",
    category: "frontend",
  },
  {
    title: "Backend",
    category: "backend",
  },
  {
    title: "Database",
    category: "database",
  },
];

export const FOOTER_LINKS: footerMenuProps[] = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
