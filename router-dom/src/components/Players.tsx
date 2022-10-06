export const Players = () => {
  const teams = ["Neymar", "Kross", "Ronaldo", "Mbappé", "Kane"];
  return (
    <>
      <h1>Players</h1>
      <ul>
        {teams.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </>
  );
};
