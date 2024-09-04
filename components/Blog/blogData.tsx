import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Optimizing Product Selection for Retail Success",
    paragraph:
      "Discover strategies for enhancing your product selection process to boost retail success. Learn how to choose the right products.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "A Guide to Tailored Experiences",
    paragraph:
      "Discover how to design experiences that resonate with your audience by tailoring offerings to individual needs.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Unlocking the Power of AI in the Fraud Detection Module",
    paragraph:
      "Explore how AI can transform fraud detection by improving accuracy and efficiency. Learn about advanced techniques to identify and prevent fraudulent activities effectively.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
