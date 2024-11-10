import { Articles } from "../types";
import { fetch } from "../utils";

export const getArticles = async (): Promise<Articles> =>
  fetch.get("/articles").then((res) => res.data);
