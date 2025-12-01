import { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes.jsx';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState('All');

  useEffect(() => {
    fetch('/cafes')
      .then(response => response.json())
      .then(data => {
        setCafes(data.cafes);
      })
      .catch(error => {
        console.error('Ошибка при загрузке кафе:', error);
      });
  }, []);

  const filteredCafes = selectedSubway === 'All' 
    ? cafes 
    : cafes.filter(cafe => cafe.subwayCode === selectedSubway);

  return (
    <div className="cafesTable">
      <FilterCafes 
        selectedSubway={selectedSubway} 
        onSubwayChange={setSelectedSubway} 
      />
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
          <li key={cafe.id} className="card">
            <img 
              src={cafe.img || 'https://via.placeholder.com/150'} 
              alt="" 
            />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;
