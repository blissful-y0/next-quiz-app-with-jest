import { useContext } from "react";
import { GlobalContext } from "../../../pages/_app";
import MainUI from "./main.presenter";
import { ChangeEvent } from "react";

function Main() {
  const { setUserName } = useContext(GlobalContext);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return <MainUI onChangeInput={onChangeInput} />;
}

export default Main;
