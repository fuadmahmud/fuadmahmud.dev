import { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogPost = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <div className={`w-full md:w-1/2 lg:w-1/3 ${classNames}`}>{children}</div>
  );
};

interface IBlogHeader {
  imgUrl: string;
  author: string;
  publishedDate: string;
  category: string | string[];
}

BlogPost.Header = ({
  imgUrl,
  author,
  publishedDate,
  category,
}: IBlogHeader) => {
  return (
    <div
      className="flex flex-col w-full h-64 justify-end bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="h-1/3 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 text-white p-4">
        <div className="flex flex-row justify-between">
          <p>{author}</p>
          <p>{category}</p>
        </div>
        <p>{publishedDate}</p>
      </div>
    </div>
  );
};

interface IBlogBody {
  title: string;
  shortDesc: string;
  url: string;
}

BlogPost.Body = ({ title, shortDesc, url }: IBlogBody) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 mt-4">
      <h6 className="font-semibold text-lg hover:underline">{title}</h6>
      <p className="line-clamp-3">{shortDesc}</p>
      <Link className="w-max" to={`/blog/${url}`}>
        <div className="flex gap-1 items-center font-semibold">
          Read Post
          <MdArrowOutward />
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
