const FilterControls = ({ filter, setFilter, theme }) => {
    const levels = ["All", "Low", "Medium", "High"];
    return (
        <div className="filters">
            {levels.map(level => (
                <button
                    key={level}
                    className={filter === level ? `active ${theme}` : ""}
                    onClick={() => setFilter(level)}
                >
                    {level}
                </button>
            ))}
        </div>
    );
};

export default FilterControls;
