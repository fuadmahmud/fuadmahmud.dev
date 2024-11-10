import { ReactNode } from "react";
import { classNames } from "../../utils";

export const Title = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <p className={classNames(className, "font-semibold text-lg mb-2")}>
    {children}
  </p>
);

export const SubTitle = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => <p className={classNames(className, "text-md mb-2")}>{children}</p>;
