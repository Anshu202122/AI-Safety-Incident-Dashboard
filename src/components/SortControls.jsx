const SortControls = ({ sortOrder, setSortOrder }) => (
    <div className="sort-controls">
        <label>Sort by Date: </label>
        <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
        >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
        </select>
    </div>
);

export default SortControls;
