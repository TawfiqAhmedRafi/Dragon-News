import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, details } =
    news;

  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow ">
      {/* Author Info */}
      <div className="flex justify-between items-center px-5 py-3  bg-base-300 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-accent">{date}</p>
          </div>
        </div>
        <div className="flex gap-5 ">
          <MdOutlineBookmarkBorder />
          <FaShareAlt />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
      </div>
      {/* News Image */}
      <figure className="px-5">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <p className="text-sm text-gray-700 line-clamp-4">{details}
            
        </p>
        <Link to={`/news-details/${id}`} className="text-orange-400 font-semibold hover:underline hover:font-bold">Read More</Link>

        {/* Tags */}
        <div className="mt-0 flex flex-wrap gap-2">
          {/* {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs text-secondary"
            >
              #{tag}
            </span>
          ))} */}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 border-t-1 border-base-300 pt-3">
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-sm font-semibold text-accent">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2 text-accent text-sm">
            <FaEye />
            {total_view.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
