import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar, BsPlus, BsDash } from "react-icons/bs"; // Import icons
import Button from "./Button";

// Helper function to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <BsStarFill size={20} key={`full-${i}`} className="text-[#FFC107]" />
    );
  }
  if (halfStar) {
    stars.push(<BsStarHalf size={20} key="half" className="text-[#FFC107]" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <BsStar size={20} key={`empty-${i}`} className="text-gray-300" />
    );
  }
  return stars;
};

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  // Basic validation for product prop
  if (!product) {
    return <div>Product data is missing.</div>;
  }

  const { id, image, name, description, rating, price, discountPercentage } =
    product;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent quantity less than 1
  };

  const handleAddToCartClick = () => {
    console.log(`Adding ${quantity} of ${name} (ID: ${id}) to cart`);
    // Call the passed-in function when available
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  const discountedPrice = discountPercentage
    ? (price * (1 - discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className="rounded-[16px] overflow-hidden relative bg-[var(--text-color-white)] p-[16px] md:p-[24px] 2xl:p-[32px] flex flex-col gap-[55px] h-fit w-full max-w-[501px] group">
      {/* Discount Tag */}
      {discountPercentage && (
        <div className="absolute top-[15px] right-0 bg-[#FEC740] text-[var(--text-color)] text-[16px] px-2 py-1 rounded-l-[24px] p-[8px] font-[700] leading-[24px] tracking-[0%]">
          -{discountPercentage}%
        </div>
      )}

      {/* Product Image */}
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full max-w-[200px] h-[238px] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-contain h-full w-full group-hover:scale-[1.2] transition-all duration-[2000ms]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[24px]">
        {/* Product Info */}
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[var(--text-color)] font-[700] text-[24px] leading-[36px] tracking-[0%] truncate">
            {name}
          </h3>
          <p className="text-[#606060] font-[500] text-[16px] leading-[24px] tracking-[0%]">
            {description}
          </p>
        </div>

        {/* Rating */}
        <div
          className={`grid transition-all duration-500 ${
            discountPercentage
              ? "opacity-100 grid-rows-[1fr]"
              : "opacity-0 grid-rows-[0fr] group-hover:opacity-100 group-hover:grid-rows-[1fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex items-center gap-[1.8px]">
              {renderStars(rating)}
              <span className="text-[#606060] font-[500] text-[16px] leading-[24px] tracking-[0%] ml-[8px]">
                ({rating.toFixed(1)})
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          {/* Price */}
          <div className="flex flex-col gap-[2px]">
            {discountedPrice ? (
              <>
                <h4 className="text-[var(--text-color)] font-[700] text-[28px] leading-[42px] tracking-[0%] truncate">
                  ${discountedPrice}
                </h4>
                <span className="line-through text-[#606060] font-[500] text-[16px] leading-[24px] tracking-[0%]">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <h4 className="text-[var(--text-color)] font-[700] text-[28px] leading-[42px] tracking-[0%] truncate">
                ${price.toFixed(2)}
              </h4>
            )}
          </div>

          {/* Quantity */}
          <div className="hidden 2xl:flex items-center justify-between border-[1px] border-[#E8E8E8] rounded-[8px] text-[#000] w-[90px] h-[30px]">
            <button
              onClick={handleDecrement}
              className="hover:bg-[#E8E8E8] border-[1px] border-[#D2D2D2] rounded-l-[8px] h-full w-[30px] flex justify-center items-center cursor-pointer"
              aria-label="Decrease quantity"
            >
              <BsDash size={10} />
            </button>
            <span className="h-full w-[30px] flex justify-center items-center bg-[#E8E8E8] font-[700] text-[12px] leading-[25.2px] tracking-[0%]">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="hover:bg-[#E8E8E8] border-[1px] border-[#D2D2D2] rounded-r-[8px] h-full w-[30px] flex justify-center items-center cursor-pointer"
              aria-label="Increase quantity"
            >
              <BsPlus size={10} />
            </button>
          </div>

          {/* Add to Cart */}
          <div onClick={handleAddToCartClick}>
            <Button
              text={"Add to Cart"}
              lite={false}
              size={24}
              icon={true}
              iconPosition={"left"}
              iconName={"BsPlusCircle"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
