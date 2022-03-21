// import { Layout } from "../../components/layout";
import React from "react";
import styles from "../../styles/Home.module.css";
import FlashCardInput from "../../components/input";
import arrayQuestAnsw from "../../data/dataQuiz";
import { NextPage } from "next";
import { Layout } from "../../components/layout";

const Inpu: NextPage = () => {
  return (
    <Layout>
      <FlashCardInput bdd={arrayQuestAnsw}></FlashCardInput>
    </Layout>
  );
};

export default Inpu;
