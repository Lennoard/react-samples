export const Teams = () => {
  const teams = ["Brazil", "Germany", "USA", "France", "England"];
  return (
    <>
      <h1>Teams</h1>
      <ul>
        {teams.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </>
  );
};
