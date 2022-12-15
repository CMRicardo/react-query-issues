import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/gitHubApi";
import { Issue } from "../interfaces";

const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>("/issues", {
    headers: {
      Autorization: null,
    },
  });

  return data;
};

export const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues);
  return { issuesQuery };
};
