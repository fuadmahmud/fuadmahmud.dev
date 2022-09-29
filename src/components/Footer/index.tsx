import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="px-8 py-4 border-t border-gray-300" id="footer">
      <ul>
        <li className="mb-4">About</li>
        <li className="mb-4">Project and Experience</li>
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