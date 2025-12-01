const FilterCafes = ({ selectedSubway, onSubwayChange }) => {
  const subwayStations = [
    {
      name: "Арбатская",
      code: "Arbat",
    },
    {
      name: "Александровский сад",
      code: "Alexanders Garden",
    },
    {
      name: "Московская",
      code: "Moscow",
    },
    {
      name: "Парк Культуры",
      code: "Culture",
    },
    {
      name: "Театральная",
      code: "Theater",
    },
  ];

  return (
    <div className="controls">
      <select 
        name="subway" 
        id="subway" 
        value={selectedSubway} 
        onChange={(e) => onSubwayChange(e.target.value)}
      >
        <option value="All">Все</option>
        {subwayStations.map((station) => (
          <option key={station.code} value={station.code}>
            {station.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;
