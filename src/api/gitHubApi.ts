import axios from "axios";

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Autorization: 'Bearer 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'
  }
})