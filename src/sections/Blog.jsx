import React from "react";
import shopingImg2 from "../assets/images/shopingImg2.jpg";
import { BlogCard, Button, Container, SectionHeadPar } from "../components";
import { BsClock, BsRecycle, BsTruck } from "react-icons/bs";
import { blogs } from "../constants";

const Blog = () => {
  return (
    <>
      {/* Responsive padding */}
      <div className="bg-[#FFFFFF] pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <Container>
          {/* Stack layout, responsive gap */}
          <div className="flex flex-col lg:flex-row gap-12 md:gap-[60px] lg:gap-[50px]">
            {/* Left Image Box */}
            {/* Removed fixed height, responsive margin */}
            <div className="w-full lg:h-[672px] lg:w-1/2 xl:max-w-[772px] relative cardShadow2 mt-8 md:mt-12 lg:mt-[56px]">
              <img
                src={shopingImg2}
                alt="shopingImg"
                className="object-cover w-full h-full rounded-lg" // Use h-auto, adjusted rounding
              />
              {/* Info Box - Static below image on small/medium, absolute on large */}
              {/* Responsive size, padding, gap, typography, icon size. Adjusted positioning */}
              <div className="translate-y-[40%] absolute right-0 bottom-0 w-[70%] sm:w-3/4 md:w-1/2 lg:w-[300px] xl:w-[364px] h-auto bg-[#FFFFFF] cardShadow3 rounded-lg p-4 md:p-6 lg:p-8 xl:p-[40px] flex flex-row items-center gap-3 md:gap-4 lg:gap-[16px] lg:translate-x-[15%] lg:translate-y-[15%] xl:translate-x-[20%] xl:translate-y-[20%]">
                {" "}
                {/* Adjusted translate slightly */}
                {/* Responsive icon container & icon */}
                <div className="size-12 md:size-16 lg:size-20 xl:size-[86px] bg-[#7EB23D80] rounded-full flex items-center justify-center shrink-0">
                  <BsTruck className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[var(--text-color)]" />
                </div>
                {/* Responsive text */}
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-base md:text-lg lg:text-xl font-bold leading-snug text-[#264653]">
                    {" "}
                    {/* Adjusted typography */}
                    Free Delivery
                  </h4>
                  <p className="text-[#606060] text-sm md:text-base font-normal leading-normal">
                    {" "}
                    {/* Adjusted typography */}
                    On orders over $50
                  </p>
                </div>
              </div>
            </div>
            {/* Right Text Box */}
            {/* Responsive padding, gap */}
            <div className="bg-[#F9FAFB] lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-[40px] p-4 md:p-6 lg:p-0 lg:bg-transparent">
              {" "}
              {/* Added padding for small screens */}
              {/* Responsive padding, gap */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] lg:pr-0 lg:pl-0 lg:mt-[42px]">
                {" "}
                {/* Removed fixed padding */}
                {/* Responsive typography */}
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-snug text-[#264653]">
                  {" "}
                  {/* Adjusted typography */}
                  Get Fresh Groceries Delivered to Your Door
                </h4>
                {/* Responsive typography */}
                <p className="text-[#606060] text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                  {" "}
                  {/* Adjusted typography */}
                  Experience the convenience of having fresh, high-quality
                  groceries delivered right to your doorstep. We carefully
                  select and pack your items to ensure maximum freshness and
                  satisfaction.
                </p>
              </div>
              {/* Responsive layout & gap */}
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-[50px]">
                {" "}
                {/* Stack on smallest, responsive gap */}
                {/* Fast Delivery */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {" "}
                  {/* Responsive gap */}
                  <div className="flex flex-row items-center gap-3 md:gap-4">
                    {" "}
                    {/* Responsive gap */}
                    {/* Responsive icon container & icon */}
                    <div className="size-12 md:size-16 lg:size-20 xl:size-[86px] bg-[#7EB23D80] rounded-full flex items-center justify-center shrink-0">
                      <BsClock className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[var(--text-color)]" />
                    </div>
                    {/* Responsive typography */}
                    <h4 className="text-base md:text-lg lg:text-xl font-semibold leading-snug text-[#264653]">
                      {" "}
                      {/* Adjusted typography */}
                      Fast Delivery
                    </h4>
                  </div>
                  {/* Responsive typography */}
                  <p className="text-[#606060] text-sm md:text-base font-medium leading-normal">
                    {" "}
                    {/* Adjusted typography */}
                    Same-day delivery available for orders placed before 2 PM
                  </p>
                </div>
                {/* Quality Promise */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {" "}
                  {/* Responsive gap */}
                  <div className="flex flex-row items-center gap-3 md:gap-4">
                    {" "}
                    {/* Responsive gap */}
                    {/* Responsive icon container & icon */}
                    <div className="size-12 md:size-16 lg:size-20 xl:size-[86px] bg-[#7EB23D80] rounded-full flex items-center justify-center shrink-0">
                      <BsRecycle className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[var(--text-color)]" />
                    </div>
                    {/* Responsive typography */}
                    <h4 className="text-base md:text-lg lg:text-xl font-semibold leading-snug text-[#264653]">
                      {" "}
                      {/* Adjusted typography */}
                      Quality Promise
                    </h4>
                  </div>
                  {/* Responsive typography */}
                  <p className="text-[#606060] text-sm md:text-base font-medium leading-normal">
                    {" "}
                    {/* Adjusted typography */}
                    100% satisfaction guaranteed or your money back
                  </p>
                </div>
              </div>
              {/* Call Us Box */}
              {/* Responsive margin, padding, width, layout */}
              <div className="mt-4 md:mt-6 lg:mt-[16px] flex flex-col sm:flex-row justify-between items-center rounded-lg bg-[#7EB23D26] px-4 py-3 md:px-6 md:py-4 lg:px-[40px] lg:py-[16px] w-full gap-4">
                {" "}
                {/* Responsive padding, w-full, gap */}
                {/* Responsive layout & gap */}
                <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-[24px]">
                  {/* Responsive icon container & icon */}
                  <div className="size-12 md:size-16 lg:size-20 xl:size-[86px] bg-[#7EB23D80] rounded-full flex items-center justify-center shrink-0">
                    <BsClock className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[var(--text-color)]" />
                  </div>
                  {/* Responsive text & gap */}
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-[16px]">
                    {/* Responsive typography */}
                    <h4 className="text-sm md:text-base lg:text-lg font-bold leading-snug text-[#264653]">
                      {" "}
                      {/* Adjusted typography */}
                      Call us to order
                    </h4>
                    {/* Responsive typography */}
                    <p className="text-[#7EB23D] text-base md:text-lg lg:text-xl font-medium leading-snug">
                      {" "}
                      {/* Adjusted typography */}
                      +5-618-805-40108
                    </p>
                  </div>
                </div>
                <Button
                  to={"/"}
                  text={"Order Now"}
                  lite={false}
                  // size={24} // Removed fixed size
                  icon={false}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Responsive padding */}
      <div className="bg-[#F4F5F5] py-16 md:py-20 lg:py-24 xl:py-32">
        <Container>
          <SectionHeadPar
            headText={"Our Blogs"}
            parText={
              "Don't just take our word for it - hear from our satisfied customers" // Consider making this text dynamic or shorter
            }
          />
          {/* Responsive margin, grid columns, gap */}
          <div className="grid grid-cols-1 gap-10 mt-12 md:mt-16 lg:mt-20 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
            {blogs.map((blog) => {
              return (
                <BlogCard // Assuming BlogCard is responsive internally
                  key={blog.id}
                  imageUrl={blog.imageUrl}
                  tag={blog.tag}
                  datePosted={blog.datePosted}
                  title={blog.title}
                  description={blog.description}
                  authorImageUrl={blog.authorImageUrl}
                  authorName={blog.authorName}
                  readMoreLink={blog.readMoreLink}
                />
              );
            })}
          </div>
        </Container>

        {/* <div className="my-[136px]">
          <ScrollingIcons data={scrollIcons} direction="right" />
        </div> */}
      </div>
    </>
  );
};

export default Blog;
