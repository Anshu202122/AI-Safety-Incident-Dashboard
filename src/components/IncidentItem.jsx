import "./IncidentItem.css";

const IncidentItem = ({ incident, expanded, toggleExpand, onDelete, onEdit }) => {
    const { id, title, severity, reported_at, description } = incident;

    return (
        <div className="incident-item">
            <div className="header">
                <div className="header-left">
                    <h3 className="title">{title}</h3>
                    <span className={`badge ${severity.toLowerCase()}`}>{severity}</span>
                </div>
                <div className="header-center">
                    <span className="date">{new Date(reported_at).toLocaleDateString()}</span>
                </div>
                <div className="header-right">
                    <button onClick={() => toggleExpand(id)}>
                        {expanded ? "Hide Details" : "View Details"}
                    </button>
                    <button onClick={() => onEdit(incident)}>Edit</button>
                    <button onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div>
            {expanded && (
            <div className="description-box">
              <p className="description">{description}</p>
            </div>
            )}
        </div>
    );
};


export default IncidentItem;
