const planets = [
  { name: "Mercury", temperature: 440, distance: 0.39 },
  { name: "Venus", temperature: 737, distance: 0.72 },
  { name: "Earth", temperature: 288, distance: 1 },
  { name: "Mars", temperature: 253, distance: 1.5 },
  { name: "Jupiter", temperature: 163, distance: 5.2 },
  { name: "Saturn", temperature: 133, distance: 9.58 },
  { name: "Uranus", temperature: 78, distance: 19.22 },
  { name: "Neptune", temperature: 73, distance: 30.05 },
];
// Task 1: filter out planets in which the temperature is between 253 K and 323 K, inclusive.
const tempZone = planets.filter(
  (planet) => planet.temperature >= 253 && planet.temperature <= 323
);

console.log(tempZone);

//Task 2: Filter out planets in which the distance from the Sun is between 0.75 and 1.5 AU, inclusive.
const distanceZone = planets.filter(
  (planet) => planet.distance >= 0.75 && planet.distance <= 1.5
);

console.log(distanceZone);
