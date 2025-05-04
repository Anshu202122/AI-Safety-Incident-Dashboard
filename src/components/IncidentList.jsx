import IncidentItem from "./IncidentItem";

const IncidentList = ({ incidents, expandedIds, toggleExpand, onDelete, onEdit }) => (
    <div className="incident-list">
        {incidents.map(incident => (
            <IncidentItem
                key={incident.id}
                incident={incident}
                expanded={expandedIds.includes(incident.id)}
                toggleExpand={toggleExpand}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        ))}
    </div>
);

export default IncidentList;
