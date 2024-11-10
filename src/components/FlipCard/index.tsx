import styles from "./FlipCard.module.css";
import { classNames as clsx } from "../../utils";
import { ReactNode } from "react";

interface IFlipCard {
  children: ReactNode;
}

const FlipCard = ({ children }: IFlipCard) => {
  return (
    <div className={clsx(styles["flip-card"], "w-full md:w-1/2 lg:w-1/2")}>
      <div className={styles["flip-card-inner"]}>{children}</div>
    </div>
  );
};

FlipCard.Front = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={clsx(
        classNames,
        styles["flip-card-front"],
        "bg-zinc-800 text-white dark:bg-white dark:text-zinc-800"
      )}
    >
      {children}
    </div>
  );
};

FlipCard.Back = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={clsx(
        classNames,
        styles["flip-card-back"],
        "bg-zinc-800 text-white dark:bg-white dark:text-zinc-800"
      )}
    >
      {children}
    </div>
  );
};

export default FlipCard;
