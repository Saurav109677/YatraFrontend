import { memberList } from "../db/memberList";

export default () => {
  return (
    <div>
      <h1>Here are your members</h1>
      {memberList.map((mem) => (
        <>
          <h1>{mem.personId}</h1>
          <h1>{mem.dependents.length}</h1>
        </>
      ))}
    </div>
  );
};
