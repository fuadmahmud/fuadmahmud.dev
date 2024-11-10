import { format } from "date-fns";
import BlogPost from "../../components/BlogPost";
import { MdArrowForward, MdOutlineWork } from "react-icons/md";
import FlipCard from "../../components/FlipCard";
import { useQuery } from "react-query";
import { getArticles } from "../../actions";

const EXP_VALUES = [
  {
    year: "2024",
    items: [
      {
        job: "Software Developer (Frontend)",
        company: "IDStar Cipta Teknologi",
        startDate: "08/01/2024",
        endDate: "",
        employeementStatus: "Contract",
        location: "Jakarta, Indonesia",
        workingArrangement: "Hybrid",
        description: "Placement in CIMB niaga",
        categories: ["banking", "frontend", "typescript"],
        imgUrl:
          "https://mlfndndycuywtfnqphjc.supabase.co/storage/v1/object/public/images/idstar.png",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        job: "Software Developer (Frontend)",
        company: "Bank DBS Indonesia",
        startDate: "03/06/2023",
        endDate: "07/31/2024",
        employeementStatus: "Full-time",
        location: "Jakarta, Indonesia",
        workingArrangement: "Hybrid",
        description: `• Enhanced Web Security Code Quality:
Identified and upgraded dependencies in multiple micro frontend applications and secure web with End
of Support (EOS) status, reducing the risk of security vulnerabilities using sonarqube and nexus-iq.
• Automated Unsecured Loan Application (Kredit Tanpa Agunan) Journey:
Implemented web automation in the onboarding loan application (KTA) journey using
playwright, resulting in a reduction in time spent by Quality Assurance (QA) for testing user accounts with disbursed loans.
• Security Encryption Migration:
Enhance encryption protocols for the onboarding processes of credit cards and unsecured
loans, as well as for resetting and activating card PINs.
• Facial Recognition integration in Credit Card onboarding:
Integrate the FR web SDK for CC onboarding, allowing users to complete the liveness
challenge online, eliminating the need to visit the nearest branch.`,
        categories: [
          "banking",
          "frontend",
          "typescript",
          "microfronted",
          "gatsby.js",
        ],
        imgUrl:
          "https://mlfndndycuywtfnqphjc.supabase.co/storage/v1/object/public/images/dbs.jpg",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        job: "Software Developer (Frontend)",
        company: "Telkom Indonesia",
        startDate: "10/01/2020",
        endDate: "02/28/2023",
        employeementStatus: "Contract",
        location: "Jakarta, Indonesia",
        workingArrangement: "Remote",
        description: `• Provide a web application for cashiers to collect and record revenue from sales drivers, replacing the previous manual system.
• Web order management was designed to ensure that our users (distributors/outlets) were able to make an order without downloading an app.
• Developed an admin order management system that addresses the various demands of our many users while simultaneously enhancing the user experience through user input.`,
        categories: [
          "redux.js",
          "frontend",
          "typescript",
          "javascript",
          "react.js",
          "next.js",
        ],
        imgUrl:
          "https://mlfndndycuywtfnqphjc.supabase.co/storage/v1/object/public/images/telkom.png",
      },
      {
        job: "Junior Software Developer",
        company: "PT. Balen Insan Kreasindo",
        startDate: "01/01/2020",
        endDate: "04/30/2020",
        employeementStatus: "Contract",
        location: "Jakarta, Indonesia",
        workingArrangement: "On Site",
        description:
          "Create a React Native mobile application that truck drivers and owners can use to monitor speed, position, and fuel volume. Truck speed and position are supplied via the driver application and retrieved via websocket by the truck owner application. Other data is received via IoT devices.",
        categories: ["android", "javascript", "react-native", "linux"],
        imgUrl: "",
      },
    ],
  },
];

const Blog = () => {
  const query = useQuery("articles", getArticles);
  const articles = query?.data?.data;

  return (
    <div className="pt-4 lg:pt-20">
      <h2 className="text-3xl mb-4 font-bold">Experiences</h2>
      <div>
        {EXP_VALUES.map((exp) => {
          return (
            <div
              className="flex flex-col border-l-2 border-sky-500 p-4 pt-0"
              key={exp.year}
            >
              <div className="flex items-center">
                <MdArrowForward className="mr-2" />
                <p className="font-semibold text-base">{exp.year}</p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {exp.items.map((item) => {
                  return (
                    <FlipCard key={item.company}>
                      <FlipCard.Front classNames="flex flex-row items-center gap-4 p-4">
                        {item.imgUrl ? (
                          <img
                            alt={item.company}
                            src={item.imgUrl}
                            className="rounded h-8 w-8"
                          />
                        ) : (
                          <MdOutlineWork className="rounded h-8 w-8" />
                        )}
                        <div>
                          <h6 className="font-semibold text-lg">{item.job}</h6>
                          <p>
                            {item.company} · {item.employeementStatus}
                          </p>
                        </div>
                      </FlipCard.Front>
                      <FlipCard.Back classNames="flex flex-col p-4 justify-center">
                        <p>
                          {format(item.startDate, "MMM-yyyy")} -{" "}
                          {item.endDate
                            ? format(item.endDate, "MMM-yyyy")
                            : "Present"}{" "}
                          · 4 months
                        </p>
                        <p>
                          {item.location} · {item.workingArrangement}
                        </p>
                        <p className="mt-2 truncate text-ellipsis">
                          {item.description}
                        </p>
                        <div className="flex gap-2 truncate">
                          {item.categories.map((category) => {
                            return (
                              <p className="font-semibold" key={category}>
                                {category}
                              </p>
                            );
                          })}
                        </div>
                      </FlipCard.Back>
                    </FlipCard>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="text-3xl mb-4 font-bold mt-8">Blog & Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {articles?.map((article) => {
          return (
            <BlogPost key={article.id} classNames="!w-full">
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
    </div>
  );
};

export default Blog;
