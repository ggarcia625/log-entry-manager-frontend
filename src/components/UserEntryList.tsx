import UserEntry from "./UserEntry";

const UserEntryList = () => {
  const entries = [
    { date: "Today", description: "Test-1", location: "USA", name: "John" },
    { date: "yesterday", description: "Test-2", location: "USA", name: "Jan" },
  ];
  return (
    <div>
      <ul>
        {entries.map((entry) => (
          <li>
            <UserEntry entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserEntryList;
