import React from "react";
import { Entry } from "../form_helpers/constants";

interface UserEntryProps {
  entry: Entry;
  // handleEntryDelete: () => void,
  // handleEntryUpdate: () => void,
}

const UserEntry: React.FC<UserEntryProps> = ({
  entry: { name, description, location, date },
}) => {
  return (
    <div className="flex border-solid">
      <div>{name}</div>
      <div>{description}</div>
      <div>{location}</div>
      <div>{date}</div>
    </div>
  );
};

export default UserEntry;
