import styles from "./AnimatedButton.module.css";
import { classNames as clsx } from "../../utils";
import { useGlobalQueryState } from "../../hooks";

interface IAnimatedButton {
  classNames?: string;
  text: string;
}

const AnimatedButton = ({ text, classNames = "" }: IAnimatedButton) => {
  const { getData } = useGlobalQueryState();
  const darkMode = getData("theme");
  return (
    <button
      className={clsx(
        styles["animated-button"],
        classNames,
        "shadow-sky-500 shadow-[0_0_0_2px]"
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={styles["arr-2"]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className={styles["text"]}>{text}</span>
      <span className={`${styles["circle"]} bg-sky-500`}></span>
      <svg
        viewBox="0 0 24 24"
        className={clsx(
          styles["arr-1"],
          darkMode ? "fill-white" : "fill-[#212121]"
        )}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
};

export default AnimatedButton;
