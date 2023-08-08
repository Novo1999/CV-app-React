import html2pdf from "html2pdf.js";

export function CV({
  name,
  phone,
  email,
  fromMonth,
  toMonth,
  fromMonth2,
  toMonth2,
  generalInfo,
  college,
  subject,
  eduInfo,
  company,
  position,
  role,
  companyInfo,
}) {
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function generatePdf() {
    const elem = document.querySelector(".cv");
    const opt = {
      margin: 1,
      filename: "CV.pdf",
      image: { type: "png", quality: 1 },
      html2canvas: {
        scale: 2,
        allowTaint: true,
        width: 640,
        height: 800,
      },
    };
    html2pdf().set(opt).from(elem).save();
  }

  return (
    <>
      <div className="cv">
        <GeneralSection
          name={name}
          phone={phone}
          email={email}
          generalInfo={generalInfo}
        />
        <EducationalSection
          months={months}
          fromMonth={fromMonth}
          toMonth={toMonth}
          college={college}
          subject={subject}
          eduInfo={eduInfo}
        />
        <CompanySection
          months={months}
          fromMonth2={fromMonth2}
          toMonth2={toMonth2}
          company={company}
          position={position}
          role={role}
          companyInfo={companyInfo}
        />
      </div>
      <SaveButton onGeneratePdf={generatePdf} toMonth2={toMonth2} />
    </>
  );
}

function GeneralSection({ name, phone, email, generalInfo }) {
  return (
    <div className="general-section">
      <h1 className="capitalize">
        Name: {(name.length < 30 && name) || generalInfo.name}
      </h1>
      <p>Phone: {(phone.length < 15 && phone) || generalInfo.phone}</p>
      <p>
        Email:{" "}
        {email.includes("@") && email.length < 30
          ? email
          : "" || generalInfo.email}
      </p>
    </div>
  );
}

function EducationalSection({
  months,
  fromMonth,
  toMonth,
  college,
  subject,
  eduInfo,
}) {
  return (
    <div className="educational-section">
      <span>College</span>
      <hr />
      <h3 className="capitalize">{college || eduInfo.college}</h3>
      <span>Subject</span>
      <hr />
      <p>
        {subject || eduInfo.subject} ({months[+fromMonth.slice(-2) - 1]}
        {` ${fromMonth.slice(0, -3)}`} - {months[+toMonth.slice(-2) - 1]}
        {` ${toMonth.slice(0, -3)}`})
      </p>
    </div>
  );
}

function CompanySection({
  months,
  fromMonth2,
  toMonth2,
  company,
  position,
  role,
  companyInfo,
}) {
  return (
    <div className="company-section">
      <span className="capitalize">Company</span>
      <hr />
      <h3>
        {company || companyInfo.company} ({months[+fromMonth2.slice(-2) - 1]}
        {` ${fromMonth2.slice(0, -3)}`} - {months[+toMonth2.slice(-2) - 1]}
        {` ${toMonth2.slice(0, -3)}`})
      </h3>
      <span className="capitalize">Position</span>
      <hr />
      <p className="capitalize">{position || companyInfo.position}</p>
      <span>Role</span>
      <hr />
      <p>{role || companyInfo.role}</p>
    </div>
  );
}

function SaveButton({ toMonth2, onGeneratePdf }) {
  return (
    toMonth2 && (
      <div>
        <button className="save" onClick={onGeneratePdf}>
          Save
        </button>
      </div>
    )
  );
}
