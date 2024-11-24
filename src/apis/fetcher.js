import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MiIsIkhldEhhblN0cmluZyI6IjI2LzA0LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NTYyNTYwMDAwMCIsIm5iZiI6MTcxODAzODgwMCwiZXhwIjoxNzQ1NzczMjAwfQ.dB37yIT7JCR8-a4XuqTFyZfc5Mr5r0V5icCjUZrxFnI",
  },
});

export default fetcher;
