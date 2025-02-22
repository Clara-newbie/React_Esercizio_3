import { useMemo } from "react";

const list = [
  {
    name: "Clara",
    age: 24,
    id: "#1",
  },
  {
    name: "Sara",
    age: 23,
    id: "#2",
  },
  {
    name: "Alice",
    age: 16,
    id: "#3",
  },
];

export default function FilteredList() {
  const adult = useMemo(() => {
    return list.filter((person) => person.age > 18);
  }, [list]);

  return (
    <ul>
      {adult.map((item) => (
        <li key={item.id}>
          {item.name} : {item.age}
        </li>
      ))}
    </ul>
  );
}
