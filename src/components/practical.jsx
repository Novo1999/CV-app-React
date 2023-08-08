import { useState } from "react";
export function PracticalInfo({
  fromMonth,
  onSetFromMonth,
  toMonth,
  company,
  position,
  role,
  companyInfo,
  onSetToMonth,
  onSetCompany,
  onSetPosition,
  onSetRole,
  onSetCompanyInfo,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleCollapsed() {
    setIsCollapsed((collapsed) => !collapsed);
  }
  const info = { company, position, role };
  function handleSubmit(e) {
    if (!company && !position && !role) {
      setIsSubmitted(() => false);
    } else {
      setIsSubmitted(() => true);
    }
    e.preventDefault();
    onSetCompanyInfo(() => info);
    onSetCompany(() => "");
    onSetPosition(() => "");
    onSetRole(() => "");
  }
  function handleEdit() {
    setIsSubmitted(() => false);
    onSetCompany(() => companyInfo.company);
    onSetPosition(() => companyInfo.position);
    onSetRole(() => companyInfo.role);
  }
  return (
    <div className="practical">
      <div className="headline">
        <h3 className="xp">Experience</h3>
        <p onClick={handleCollapsed}>⬇</p>
      </div>
      <form onSubmit={handleSubmit} className={!isCollapsed ? "collapse" : ""}>
        <label htmlFor="Company Name">Company Name</label>
        <input
          value={company}
          placeholder="Company Name"
          type="text"
          onChange={(e) => onSetCompany(e.target.value)}
        />
        <label htmlFor="Position">Position</label>
        <input
          value={position}
          placeholder="Position"
          type="text"
          onChange={(e) => onSetPosition(e.target.value)}
        />
        <label htmlFor="Role">Role</label>
        <input
          value={role}
          placeholder="Role"
          type="text"
          onChange={(e) => onSetRole(e.target.value)}
        />
        <label htmlFor="from">From</label>
        <input
          value={fromMonth}
          placeholder="Enrolled in"
          type="month"
          onChange={(e) => onSetFromMonth(e.target.value)}
        />
        <label htmlFor="from">To</label>
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
