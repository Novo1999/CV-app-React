import { useState } from "react";
export function EducationalInfo({
  fromMonth,
  onSetFromMonth,
  toMonth,
  onSetToMonth,
  onSetCollege,
  onSetSubject,
  onSetEduInfo,
  college,
  subject,
  eduInfo,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleCollapsed() {
    setIsCollapsed((collapsed) => !collapsed);
  }
  const info = { college, subject };
  function handleSubmit(e) {
    if (!college && !subject) {
      setIsSubmitted(() => false);
    } else {
      setIsSubmitted(() => true);
    }
    e.preventDefault();
    onSetEduInfo(() => info);
    onSetCollege(() => "");
    onSetSubject(() => "");
  }
  function handleEdit() {
    setIsSubmitted(() => false);
    onSetCollege(() => eduInfo.college);
    onSetSubject(() => eduInfo.subject);
  }
  console.log(eduInfo);
  return (
    <div className="educational">
      <div className="headline">
        <h4>Educational Information</h4>
        <p onClick={handleCollapsed}>⬇</p>
      </div>
      <form onSubmit={handleSubmit} className={!isCollapsed ? "collapse" : ""}>
        <label htmlFor="College Name">College</label>
        <input
          value={college}
          placeholder="College Name"
          type="text"
          onChange={(e) => onSetCollege(e.target.value)}
        />
        <label htmlFor="Subject">Subject</label>
        <input
          value={subject}
          placeholder="Subject"
          type="text"
          onChange={(e) => onSetSubject(e.target.value)}
        />
        <label htmlFor="Enrolled in">From</label>
        <input
          value={fromMonth}
          placeholder="Enrolled in"
          type="month"
          onChange={(e) => onSetFromMonth(e.target.value)}
        />
        <label htmlFor="Enrolled in">To</label>
        <input
          value={toMonth}
          placeholder="Enrolled in"
          type="month"
          onChange={(e) => onSetToMonth(e.target.value)}
        />
        <input
          className={isSubmitted ? "invisible" : ""}
          type="submit"
          value="Submit"
        ></input>
        {isSubmitted && (
          <button onClick={handleEdit} type="button">
            Edit
          </button>
        )}
      </form>
    </div>
  );
}
