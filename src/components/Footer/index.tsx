import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="px-8 py-4 mt-4 border-t border-gray-300 bg-white dark:bg-zinc-900"
      id="footer"
    >
      <ul>
        <li className="mb-4">
          <a href="#about">About</a>
        </li>
        <li className="mb-4">
          <a href="#works">Project and Experience</a>
        </li>
        <li className="flex flex-row space-x-2">
          <a href="https://github.com/fuadmahmud" target={"_blank"}>
            <AiFillGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/fuadmahmud/" target={"_blank"}>
            <AiFillLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/fuadmahmudi/" target={"_blank"}>
            <AiFillInstagram size={24} />
          </a>
          <a href="mailto:fuadmahmud@hotmail.com" target={"_blank"}>
            <AiFillMail size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
