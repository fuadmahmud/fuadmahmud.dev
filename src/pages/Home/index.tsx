import { useQuery } from "react-query";
import ProfilePicture from "../../assets/profile-picture.jpg";
import { getArticles } from "../../actions";
import BlogPost from "../../components/BlogPost";
import { format } from "date-fns";
import AnimatedButton from "../../components/AnimatedButton";
import { Link } from "react-router-dom";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import anime from "animejs";

const Home = () => {
  const query = useQuery("articles", getArticles);
  const articles = query?.data?.data?.slice(0, 3);
  const worksSection = useRef(null);
  const { ref: worksRef, entry } = useIntersection({
    root: worksSection.current,
    threshold: 0.1,
  });

  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });
    if (entry?.isIntersecting) {
      articles?.forEach((_, index) =>
        tl.add({ targets: `.blog_item_${index + 1}`, translateX: 0 })
      );
    } else {
      articles?.forEach((_, index) =>
        tl.add({ targets: `.blog_item_${index + 1}`, translateX: "-200%" })
      );
    }
  }, [entry]);

  return (
    <div className="pt-4">
      <section className="min-h-[calc(100vh-4rem)]">
        <img
          src={ProfilePicture}
          alt="profile-picture"
          loading="lazy"
          className="rounded-full h-24 w-24 grayscale mt-4"
        />
        <h1 className="font-bold text-3xl mt-8 italic">fuadmahmud.dev</h1>
        <h3 className="text-lg mt-4">Software Engineer</h3>
        <p className="mt-4">Likes to solve problems and a life long learner.</p>
      </section>
      <section className="min-h-[25vh]" id="about">
        <div className="flex flex-row items-center mb-4">
          <span className="mr-4">About</span>
          <div className="w-full bg-gray-300 h-px" />
        </div>
        <span className="font-bold">Hi there! Welcome 👋</span>
        <p className="mt-4">
          Let me introduce my self, I'm Fuad Mahmud a Software Engineer or
          whatever you like to named it, based in Jakarta Indonesia.
        </p>
      </section>
      <section className="min-h-screen flex flex-col items-center" id="works">
        <div className="flex flex-row items-center mb-4 w-full">
          <div className="w-full bg-gray-300 h-px" />
          <span className="ml-4">Blog & Projects</span>
        </div>
        <div
          className="flex flex-col md:lg:flex-row items-center gap-4"
          ref={worksRef}
        >
          {articles?.map((article, index) => {
            return (
              <BlogPost key={article.id} classNames={`blog_item_${index + 1}`}>
                <BlogPost.Header
                  imgUrl={article.imgUrl}
                  author={"Fuad Mahmud"}
                  category={"Frontend"}
                  publishedDate={format(article.publishedAt, "PP")}
                />
                <BlogPost.Body
                  title={article.title}
                  shortDesc={article.description}
                  url={article.slug}
                />
              </BlogPost>
            );
          })}
        </div>
        <Link className="justify-self-end" to="/blog">
          <AnimatedButton classNames="mt-8" text="Click for more" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
