const colors = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
  '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5'
];

export default function getColor(country) {
  const index = Math.abs(country.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colors.length;
  return colors[index];
}