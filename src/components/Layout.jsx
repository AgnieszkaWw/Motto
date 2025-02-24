
import { useState } from "react";
import App from "../App";
import HeaderImage from "./HeaderImage/HeaderImage";
import CROCUS_IMG from "../assets/c4.jpg"; // Importuj domyślny obrazek

export default function Layout() {
  const [headerImage, setHeaderImage] = useState(CROCUS_IMG);

  const changeHeaderImage = (newImage) => {
    setHeaderImage(newImage);
  };

  return (
    <div>
      <HeaderImage headerImage={headerImage} />
      <App changeHeaderImage={changeHeaderImage} />
    </div>
  );
}