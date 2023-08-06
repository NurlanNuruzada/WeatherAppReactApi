import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/syleAbout.module.css";
export function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const dataArray = [
    {
      name: "Nurlan",
      surname: "Nuruzada",
      age: "18",
      Hobbies: "Gaming,Coding",
    }
  ];
  // Check if dataArray is defined before accessing its first element
  if (!dataArray || dataArray.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <div>
       {dataArray.map((x) => (
        <div> 
          <h2 className={styles.aboutMe}>About Me</h2>
          <p>Name: {x.name}</p>
          <p>Surname: {x.surname}</p>
          <p>Age: {x.age}</p>
          <p>Hobbies: {x.Hobbies}</p>
        </div>
      ))}
      <h2 className={styles.aboutMe}> 🏄‍♂️ Nurlan Nuruzada</h2>
        <p>
        I am an 18-year-old full-stack web developer with a passion for learning
        new skills. With expertise in front-end and back-end technologies,
        including HTML, CSS, JavaScript, React, and Node.js, I am dedicated to
        staying up-to-date with industry trends. As a team player with excellent
        communication skills, I bring a strong work ethic and problem-solving
        abilities to any project. When I am not coding, you can find me
        indulging in my hobbies, such as reading, playing games, and exploring
        new cultures. My determination and hunger for learning drive me to make
        a significant impact in the field of web development and beyond. I am
        constantly pushing the boundaries of my expertise and seeking
        opportunities for growth.
        </p>
        <br />
        <a href="https://github.com/nurlannuruzada?tab=repositories">
          👨‍💻 All of my projects are available at{" "}
        </a>
        <a>
          <br />
          📫 How to reach me : nurlan.nuruzade205@gmail.com
        </a>
        <h3 align="left">Connect with me:</h3>
        <p align="left">
          <a href="https://instagram.com/nurlan_nuruzada" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
              alt="nurlan_nuruzada"
              height="30"
              width="40"
            />
          </a>
          <a href="https://medium.com/@nurlan nuruzada" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg"
              alt="@nurlan nuruzada"
              height="30"
              width="40"
            />
          </a>
        </p>
        <h3 align="left">Languages and Tools:</h3>
        <p align="left">
          {" "}
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/cpp/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="cplusplus"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/cs/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="csharp"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://dotnet.microsoft.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
              alt="dotnet"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.microsoft.com/en-us/sql-server"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
              alt="mssql"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
        </p>
        <button onClick={handleNavigate}>Go to Home</button>
      </div>
    </div>
  );
}
