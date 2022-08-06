import React from "react";

const UserDetails = ({ formData, setFormData, page, setPage }) => {
  return (
    <div
      className="userform"
    >
      <div className="step-title">
        <h2>Welcome! First Things first...</h2>
        <p>You can always change them later.</p>
      </div>

      <label className="form-label">Full Name</label>
      <input
        type="text"
        placeholder="Full Name"
        className="form-group"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <label className="form-label">Display Name</label>
      <input
        type="text"
        className="form-group"
        placeholder="Display"
        value={formData.displayname}
        onChange={(e) => setFormData({ ...formData, displayname: e.target.value })}
      />

      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default UserDetails;