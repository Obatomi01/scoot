import JoinUs from "../../assets/images/join-us.jpg";

import Feature from "../feature";

import useGsap from "../useGsap";

const SayHello = () => {
  useGsap();
  return (
    <section className="say-hello">
      <Feature
        h3Text="Care to join our mission?"
        pText="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        imageSrc={JoinUs}
        imageAlt="Care to join our mission?"
        arrow="left"
        imgSide="right"
        addButton={true}
        btnText="Say Hello"
      />
    </section>
  );
};

export default SayHello;
