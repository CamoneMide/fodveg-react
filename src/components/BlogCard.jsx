import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowBarRight, BsArrowRight } from "react-icons/bs";
// import PropTypes from "prop-types";
// Consider using a date formatting library like date-fns or moment.js for relative time
// import { formatDistanceToNow } from 'date-fns';

const BlogCard = ({
  imageUrl,
  tag,
  datePosted,
  title,
  description,
  authorImageUrl,
  authorName,
  readMoreLink,
}) => {
  // Function to calculate relative time (e.g., "3 days ago")
  // const timeAgo = formatDistanceToNow(new Date(datePosted), { addSuffix: true });

  return (
    <div className="w-full max-w-[502px] overflow-hidden flex flex-col gap-[24px] group/fBlog">
      <div className="w-full h-full max-h-[300px] rounded-[8px] overflow-hidden">
        <img
          className="object-cover size-full rounded-[8px] group-hover/fBlog:scale-[1.1] transition-all duration-[2500ms]"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-[24px]">
        <div>
          <span className="inline-block px-[24px] py-[8px] rounded-tr-[16px] rounded-bl-[16px] bg-[#FEC7404D] text-[#000000] text-[14px] font-[400] leading-[21px] tracking-[0%]">
            {tag}
          </span>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span className="text-[#606060] text-[14px] font-[500] leading-[21px] tracking-[0%] flex flex-row items-center gap-[16px]">
            <span>{new Date(datePosted).toLocaleDateString()}</span>
            <span>|</span>
            <span>7 Mins read</span>
          </span>

          <h5 className="text-[#264653] text-[24px] font-[700] leading-[36px] tracking-[0%] cursor-pointer">
            {title}
          </h5>
          <p className="mt-[8px] text-[#606060] text-[16px] font-[500] leading-[24px] tracking-[0%]">
            {description}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center gap-[12px]">
            <div className="size-[48px] rounded-full">
              <img
                className="object-contain rounded-full size-full"
                src={authorImageUrl}
                alt={authorName}
              />
            </div>
            <p className="text-[#606060] text-[16px] font-[600] leading-[24px] tracking-[0%]">
              {authorName}
            </p>
          </div>
          <div className="flex items-center group/bLink text-[#7EB23D] transition-all">
            <a
              href={readMoreLink}
              className="text-[16px] font-[700] leading-[24px] tracking-[0%] flex flex-col "
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
            >
              Read More
              <span className="h-[2px] w-[0%] group-hover/bLink:w-[100%] bg-[#7EB23D] transition-all duration-500" />
            </a>
            <BiChevronRight
              size={25}
              className="mx-[6px] group-hover/bLink:ml-[12px] group-hover/bLink:mr-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// BlogCard.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   datePosted: PropTypes.string.isRequired, // Or PropTypes.instanceOf(Date)
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   authorImageUrl: PropTypes.string.isRequired,
//   authorName: PropTypes.string.isRequired,
//   readMoreLink: PropTypes.string.isRequired,
// };

export default BlogCard;
