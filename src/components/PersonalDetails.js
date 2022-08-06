import React from "react";


const PersonalDetails = ({ formData, setFormData, page, setPage }) => {

  return (
    <div className="userform">
      <div className="step-title">
        <h2>Let's set up a home for all your work</h2>
        <p>You can always create another workspace later.</p>
      </div>

      <label className="form-label">Workspace Name</label>
      <input
        type="text"
        placeholder="Name"
        value={formData.workspacename}
        onChange={(e) => setFormData({ ...formData, workspacename: e.target.value })}
      />
      <label className="form-label">Workspace URL(optional)</label>
      <div className="input-group mb-3">
        <span className="input-group-text" >www.eden.com/</span>
        <input type="text"
          placeholder="Example"
          value={formData.workspaceurl}
          onChange={(e) => setFormData({ ...formData, workspaceurl: e.target.value })}
        />
      </div>
      <div className="button__group">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;