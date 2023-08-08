import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { GeneralInfo } from "./components/general";
import { EducationalInfo } from "./components/educational";
import { PracticalInfo } from "./components/practical";
import { CV } from "./components/cv";
import "./style.scss";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [fromMonth2, setFromMonth2] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [toMonth2, setToMonth2] = useState("");
  const [generalInfo, setGeneralInfo] = useState({});
  const [college, setCollege] = useState("");
  const [subject, setSubject] = useState("");
  const [eduInfo, setEduInfo] = useState({});
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [role, setRole] = useState("");
  const [companyInfo, setCompanyInfo] = useState({});

  return (
    <div className="app">
      <Header />
      <GeneralInfo
        name={name}
        phone={phone}
        email={email}
        generalInfo={generalInfo}
        onSetName={setName}
        onSetPhone={setPhone}
        onSetEmail={setEmail}
        onSetGeneralInfo={setGeneralInfo}
      />
      <EducationalInfo
        fromMonth={fromMonth}
        toMonth={toMonth}
        college={college}
        subject={subject}
        eduInfo={eduInfo}
        onSetFromMonth={setFromMonth}
        onSetToMonth={setToMonth}
        onSetCollege={setCollege}
        onSetSubject={setSubject}
        onSetEduInfo={setEduInfo}
      />
      <PracticalInfo
        fromMonth2={fromMonth2}
        toMonth={toMonth2}
        company={company}
        position={position}
        role={role}
        companyInfo={companyInfo}
        onSetFromMonth={setFromMonth2}
        onSetToMonth={setToMonth2}
        onSetCompany={setCompany}
        onSetPosition={setPosition}
        onSetRole={setRole}
        onSetCompanyInfo={setCompanyInfo}
      />
      <CV
        name={name}
        phone={phone}
        email={email}
        fromMonth={fromMonth}
        toMonth={toMonth}
        fromMonth2={fromMonth2}
        toMonth2={toMonth2}
        generalInfo={generalInfo}
        college={college}
        subject={subject}
        eduInfo={eduInfo}
        company={company}
        position={position}
        role={role}
        companyInfo={companyInfo}
      />
    </div>
  );
}

export default App;
