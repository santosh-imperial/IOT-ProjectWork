import React from 'react';

interface RecipeImageProps {
  imageUrl: string;
  recipeName: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ imageUrl, recipeName }) => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden mb-6">
      <img 
        src={imageUrl} 
        alt={recipeName}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RecipeImage;