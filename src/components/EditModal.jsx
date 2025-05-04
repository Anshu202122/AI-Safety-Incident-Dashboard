import React, { useState, useEffect } from "react";
import "./EditModal.css";

const EditModal = ({ show, onClose, onSave, incident,theme }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "Low",
  });

  useEffect(() => {
    if (incident) {
      setFormData({
        title: incident.title,
        description: incident.description,
        severity: incident.severity,
      });
    }
  }, [incident]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...incident, ...formData });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className={`modal-box ${theme}`}>
        <h2>Edit Incident</h2>
        <label>
          Title:
          <input name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Severity:
          <select name="severity" value={formData.severity} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose} className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
