// header SECTION for the different pages

import Image from "next/image";
import WhiteCircle from "../assets/patterns/white-circles.svg";

const PageHeader = (props) => {
  return (
    <header className={` ${props.pageStyle}`}>
      <div className="page--header__container container">
        <h1>{props.pageTitle}</h1>

        <span className="header-circles">
          <Image src={WhiteCircle} />
        </span>
      </div>
    </header>
  );
};

export default PageHeader;
