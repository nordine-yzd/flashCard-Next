// import { Layout } from "../../components/layout";
import React from "react";
import styles from "../../styles/Home.module.css";
import FlashCardRadio from "./radio";
import arrayQuestAnsw from "../data/dataQuiz";
import { NextPage } from "next";
import { Layout } from "../components/layout";

const Test: NextPage = () => {
  return (
    <Layout>
      <FlashCardRadio bdd={arrayQuestAnsw}></FlashCardRadio>
    </Layout>
  );
};

export default Test;
