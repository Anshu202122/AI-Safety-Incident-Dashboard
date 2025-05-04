import React, { useState, useMemo, useEffect } from "react";
import { mockIncidents } from "./data/mockData";
import IncidentList from "./components/IncidentList";
import FilterControls from "./components/FilterControls";
import SortControls from "./components/SortControls";
// import ReportForm from "./components/ReportForm";
import EditModal from "./components/EditModal";
import ReportModal from "./components/ReportModal";

const App = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [expandedIds, setExpandedIds] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [showReportModal, setShowReportModal] = useState(false);


  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  const visibleIncidents = useMemo(() => {
    let list = [...incidents];
    if (filter !== "All") {
      list = list.filter(i => i.severity === filter);
    }
    list.sort((a, b) =>
      sortOrder === "Newest"
        ? new Date(b.reported_at) - new Date(a.reported_at)
        : new Date(a.reported_at) - new Date(b.reported_at)
    );
    return list;
  }, [incidents, filter, sortOrder]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const addIncident = (newIncident) => {
    setIncidents(prev => [
      ...prev,
      {
        ...newIncident,
        id: prev.length + 1,
        reported_at: new Date().toISOString()
      }
    ]);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const deleteIncident = (id) => {
    setIncidents(prev => prev.filter(incident => incident.id !== id));
  };
  
  // const editIncident = (updatedIncident) => {
  //   setIncidents(prev =>
  //     prev.map(incident =>
  //       incident.id === updatedIncident.id ? updatedIncident : incident
  //     )
  //   );
  // };
  

  const [showEditModal, setShowEditModal] = useState(false);
  const [incidentToEdit, setIncidentToEdit] = useState(null);
  
  const handleEdit = (incident) => {
    setIncidentToEdit(incident);
    setShowEditModal(true);
  };
  
  const saveEditedIncident = (updatedIncident) => {
    setIncidents((prev) =>
      prev.map((i) => (i.id === updatedIncident.id ? updatedIncident : i))
    );
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>AI Safety Incident Dashboard</h1>
        <button className={`btn ${theme.toLowerCase()}`} onClick={toggleTheme} style={{ padding: "0.5rem 1rem", borderRadius: "8px" }}>
        <img
          src={theme === "light" ? "/moon.png" : "/light.png"}
          alt="Toggle theme"
          style={{ width: "24px", height: "24px" }}
        />
        </button>
      </div>


      <button
        className={`btn ${theme}`}
        onClick={() => setShowReportModal(true)}
        style={{ padding: "0.5rem 1rem", borderRadius: "8px", marginTop: "1rem" }}
      >
  + Add New Incident
</button>



      <FilterControls filter={filter} setFilter={setFilter} theme={theme} />
      <SortControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <IncidentList
        incidents={visibleIncidents}
        expandedIds={expandedIds}
        toggleExpand={toggleExpand}
        onDelete={deleteIncident}
        onEdit={handleEdit}
      />
      <EditModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={saveEditedIncident}
        incident={incidentToEdit}
        theme={theme}

      />

      <ReportModal
        show={showReportModal}
        onClose={() => setShowReportModal(false)}
        onAddIncident={addIncident}
        theme={theme}
      />

      {/* <ReportForm addIncident={addIncident} theme={theme} /> */}
    </div>
  );
};

export default App;
