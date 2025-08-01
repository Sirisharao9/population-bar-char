import { motion } from 'framer-motion';
import { scaleLinear, scaleBand } from 'd3-scale';
import { useMemo } from 'react';
import getColor from '../utils/colors';

export default function BarChart({ data }) {
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => b.Population - a.Population).slice(0, 15);
  }, [data]);

  const width = 700; 
  const height = 500; 
  const padding = 180;

  const xScale = scaleLinear()
    .domain([0, sortedData[0].Population])
    .range([0, width - padding - 50]); 

  const yScale = scaleBand()
    .domain(sortedData.map(d => d.Country))
    .range([0, height - 40])
    .padding(0.2);

  const barHeight = yScale.bandwidth();

  return (
    <div className="flex justify-center">
      <svg 
        width={width + 100} 
        height={height} 
        className="bg-white rounded-lg shadow p-4"
      >
        <g transform={`translate(${padding}, 20)`}>
          {sortedData.map((d) => (
            <motion.rect
              key={d.Country}
              x={0}
              y={yScale(d.Country)}
              width={xScale(d.Population)}
              height={barHeight}
              fill={getColor(d.Country)}
              rx={4} // rounded corners for bars
              initial={{ width: 0 }}
              animate={{ width: xScale(d.Population) }}
              transition={{ duration: 0.5 }}
            />
          ))}

          {/* Country Labels */}
          {sortedData.map(d => (
            <text
              key={d.Country + '-label'}
              x={-20}
              y={yScale(d.Country) + barHeight / 1.5}
              textAnchor="end"
              style={{ fontSize: '14px', fill: '#222', fontWeight: '600' }}
            >
              {d.Country}
            </text>
          ))}

          {/* Population Values */}
          {sortedData.map(d => (
            <text
              key={d.Country + '-value'}
              x={xScale(d.Population) + 10}
              y={yScale(d.Country) + barHeight / 1.5}
              style={{ fontSize: '12px', fill: '#555' }}
            >
              {d.Population.toLocaleString()}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
