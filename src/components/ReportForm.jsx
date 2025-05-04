import { useState } from "react";

const ReportForm = ({ addIncident, theme, onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("Low");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return alert("Please fill all fields.");
        addIncident({ title, description, severity });
        setTitle("");
        setDescription("");
        setSeverity("Low");
        onClose();
    };

    return (
        <form className="report-form" onSubmit={handleSubmit}>
            {/* <h2>Report New Incident</h2> */}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <select value={severity} onChange={e => setSeverity(e.target.value)} className={theme === "dark" ? "select-dark" : ""}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button type="submit">Submit Incident</button>
        </form>
    );
};

export default ReportForm;
