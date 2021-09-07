import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, SetStateAction, useState } from "react";
import { IData } from "../src/component/quiz/quiz.type";

export const GlobalContext = createContext({
  data: [
    {
      category: "",
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: [""],
    },
  ],
  setData: (_: SetStateAction<IData[]>) => {},
  userName: "",
  setUserName: (_: SetStateAction<string>) => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<IData[]>([
    {
      category: "",
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: [""],
    },
  ]);

  const [userName, setUserName] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ data, setData, userName, setUserName }}>
      <Component {...pageProps} />;
    </GlobalContext.Provider>
  );
}
export default MyApp;
