import React from "react";

// The component is now a standard JS function, relying on PropTypes or
// implicit prop types if type checking is needed elsewhere.

const ServicePage = ({ title, description, image, features }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full max-h-[400px] object-cover rounded-lg shadow-md mb-6"
        />
      )}

      <p className="text-lg text-gray-700 mb-6">{description}</p>

      {features && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              ✅ {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicePage;