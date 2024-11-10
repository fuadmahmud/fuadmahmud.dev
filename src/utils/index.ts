import axios from "axios";

export const classNames = (className?: string, ...args: string[]) =>
  [...args, className].filter(Boolean).join(" ");

export const fetch = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api",
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_CMS_TOKEN,
  },
  timeout: 30000,
});
