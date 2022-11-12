// import HeaderNav from "../headerNav";
import PageHeader from "../../components/pageHeader";
import WhatWeBring from "../../components/about/whatWeBring";
import FooterNav from "../../components/footerNav";
import OurValues from "../../components/ourValues";
import Footer from "../../components/footer";
import Faqs from "../../components/about/faqs";
import Header from "../../components/home/header";

const HOWITWORKS = [
  {
    id: "q1",
    question: "How do I download the app?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
    showAnswer: false,
  },
  {
    id: "q2",
    question: "Can I find a nearby Scoots?",
    answer: "Yes. All you need to do is to check for an available scoot",
    showAnswer: false,
  },
  {
    id: "q3",
    question: "Do I need a license to ride?",
    answer:
      "Yes. You need a driver's license to ride for us to know your ability",
    showAnswer: false,
  },
];

const SAFEDRIVING = [
  {
    id: "q4",
    question: "Should I wear a helmet?",
    answer:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
    showAnswer: false,
  },
  {
    id: "q5",
    question: "How about the rules & regulations?",
    answer: "We follow the country's rules and regulations",
    showAnswer: false,
  },
  {
    id: "q6",
    question: "What if I damage my Scoot?",
    answer:
      "If you damage your scoot, you have to get a new one which is worth the spoilt one.",
    showAnswer: false,
  },
];

const About = (props) => {
  return (
    <header>
      <Header />
      <PageHeader pageStyle="about--page__header" pageTitle="About" />
      <WhatWeBring />
      <OurValues text="Our Values" />
      <Faqs firstArr={props.howItWorks} secondArr={props.safeDriving} />
      <Footer />
      <FooterNav />
    </header>
  );
};

export async function getStaticProps() {
  return {
    props: {
      howItWorks: HOWITWORKS,
      safeDriving: SAFEDRIVING,
    },
  };
}

export default About;
