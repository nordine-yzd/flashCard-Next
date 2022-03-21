// import { Layout } from "../../components/layout";
import React from "react";
import styles from "../../styles/Home.module.css";
import FlashCardMentale from "../../components/mental";
import arrayQuestAnsw from "../../data/dataQuiz";
import { NextPage } from "next";
import { Layout } from "../../components/layout";

const Classic: NextPage = () => {
  return (
    <Layout>
      <FlashCardMentale bdd={arrayQuestAnsw}></FlashCardMentale>
    </Layout>
  );
};

export default Classic;
