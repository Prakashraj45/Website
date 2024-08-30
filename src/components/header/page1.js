import React from "react";
import googleceo from '../assets/google ceo.jpg'
import hyundaiceo from '../assets/hyundai ceo.jpg'
import microsoftceo from '../assets/microsoft ceo.jpg'

const BlogCard = ({ category, image, date, author, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <span className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full inline-block mb-2">
          {category}
        </span>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex items-center">
          <img
            src={author.image}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="text-blue-500 font-semibold">Read More</button>
          <button className="text-blue-500 font-semibold">Share</button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      category: "Vue",
      image: `${googleceo}`,
      date: "24 March 2023",
      author: { name: "Daniel Martin", image: `${googleceo}` },
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet.",
    },
    {
      category: "Automobile",
      image: `${hyundaiceo}`,
      date: "23 April 2023",
      author: { name: "Daniel Martin", image: `${hyundaiceo}` },
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet.",
    },
    {
      category: "Mobile App",
      image: `${microsoftceo}`,
      date: "30 January 2023",
      author: { name: "Daniel Martin", image:`${microsoftceo}` },
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet.",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h3 className="text-center text-3xl font-medium mb-8 text-orange-500">Our Blog</h3>
        <h1 className="text-center text-3xl font-bold mb-10">Latest Blog & News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;