export const classNames = (className?: string, ...args: string[]) =>
  [...args, className].filter(Boolean).join(" ");
