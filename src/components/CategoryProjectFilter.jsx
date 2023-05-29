import React, { useState } from "react";

const CategoryProjectFilter = () => {
  const categories = ["Category 1", "Category 2", "Category 3"]; // Replace with your own category options
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    // Perform any other actions based on the selected category
  };

  return (
    <div className="mx-2">
      <select
        value={selectedCategory}
        onChange={(e) => handleSelectCategory(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryProjectFilter;
