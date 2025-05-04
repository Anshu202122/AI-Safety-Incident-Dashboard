import React from "react";
import "./EditModal.css"; // Reuse modal styling
import ReportForm from "./ReportForm";

const ReportModal = ({ show, onClose, onAddIncident, theme }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className={`modal-box ${theme}`}>
        <h2>Report New Incident</h2>
        <ReportForm addIncident={onAddIncident} theme={theme} onClose={onClose} />
        <div className="modal-actions">
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
