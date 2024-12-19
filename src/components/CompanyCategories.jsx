import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import { companyCategories } from '../utils/constants';

const CompanyCategories = () => {
  return (
    <div className="grid grid-cols-4 gap-2 w-[60%] m-auto">
      {companyCategories.map((category) => (
        <CategoryCard 
          key={category.id} // Ensure 'id' is a unique identifier in the companyCategories array
          CategoryIcon={category.icon} 
          categoryText={category.text} 
          categoryLink={category.path} 
        />
      ))}
    </div>
  );
};

export default CompanyCategories;
