import { useState } from "react";

export function GeneralInfo({
  name,
  phone,
  email,
  generalInfo,
  onSetName,
  onSetPhone,
  onSetEmail,
  onSetGeneralInfo,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleCollapsed() {
    setIsCollapsed((collapsed) => !collapsed);
  }
  const info = { name, phone, email };
  function handleSubmit(e) {
    if (!name && !phone && !email) {
      setIsSubmitted(() => false);
    } else {
      setIsSubmitted(() => true);
    }
    e.preventDefault();
    onSetGeneralInfo(() => info);
    onSetName(() => "");
    onSetPhone(() => "");
    onSetEmail(() => "");
  }

  function handleEdit() {
    setIsSubmitted(() => false);
    onSetName(() => generalInfo.name);
    onSetPhone(() => generalInfo.phone);
    onSetEmail(() => generalInfo.email);
  }
  return (
    <div className="general">
      <div className="headline">
        <h3>General Information</h3>
        <p onClick={handleCollapsed}>⬇</p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={!isCollapsed ? "collapse" : ""}
      >
        <label htmlFor="Name">Name</label>
        <input
          value={name}
          placeholder="Name"
          type="text"
          onChange={(e) => onSetName(e.target.value)}
        />
        <label htmlFor="Phone">Phone</label>
        <input
          value={phone}
          placeholder="Phone"
          type="number"
          onChange={(e) => onSetPhone(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          value={email}
          placeholder="Email"
          type="text"
          onChange={(e) => onSetEmail(e.target.value)}
        />
        {
          <input
            className={isSubmitted ? "invisible" : ""}
            type="submit"
            value="Submit"
          ></input>
        }
        {isSubmitted && (
          <button onClick={handleEdit} type="button">
            Edit
          </button>
        )}
      </form>
    </div>
  );
}
