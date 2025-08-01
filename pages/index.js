import { useState } from 'react';
import BarChart from '../components/BarChart';
import YearNavigator from '../components/YearNavigator';
import populationData from '../public/generated.json';

export default function Home() {
  const [yearIndex, setYearIndex] = useState(0);

  const years = populationData.map(item => item.Year);
  const currentYearData = populationData[yearIndex];

  const handlePrev = () => {
    if (yearIndex > 0) setYearIndex(yearIndex - 1);
  };

  const handleNext = () => {
    if (yearIndex < years.length - 1) setYearIndex(yearIndex + 1);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Population by Country - {currentYearData.Year}</h1>
      <YearNavigator
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={yearIndex === 0}
        disableNext={yearIndex === years.length - 1}
      />
      <BarChart data={currentYearData.Countries} />
    </div>
  );
}