import React from "react";
import Fugure from "./Fugure";
import { useSelector } from "react-redux";
function Skill() {
  const isDark = useSelector((state) => state.theme.value);
  const data = [
    {
      category: "programming language",
      class: "fa-solid fa-code",
      skills: ["C#", "visual basic", "javascript", "html", "css"],
    },
    {
      category: "database",
      class: "fa-solid fa-database",
      skills: [
        "sql",
        "pl-sql",
        "sql server",
        "mongodb",
        "json",
        "access",
        "dbms",
        "D-dbms",
      ],
    },
    {
      category: "framework",
      class: "fa-brands fa-phoenix-framework",
      skills: ["express js", "jQuery", "tailwind", "bootstrap"],
    },
    {
      category: "library",
      class: "fa-solid fa-book",
      skills: ["React"],
    },
    {
      category: "creating",
      class: "fa-brands fa-uncharted",
      skills: [
        "windowse application",
        "mobile application",
        "database schema",
        "website",
        "web application",
      ],
    },
  ];
  return (
    <section
      className={`m-auto w-[75%] p-1  main-container  ${
        isDark ? `text-big-stone-100 bg-big-stone-900` : `text-big-stone-900 `
      }  `}
    >
      <h1
        className={` text-3xl font-bold ${
          isDark ? `text-big-stone-100 bg-big-stone-900` : `text-big-stone-900`
        }`}
      >
        My Skills
      </h1>

      <Fugure SkillData={data} />
    </section>
  );
}

export default Skill;
