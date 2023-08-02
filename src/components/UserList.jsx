import ErrorMessage from "./shared/ErrorMessage";
import LoadingMessage from "./shared/LoadingMessage";
import useFetchUserList from "../hooks/useFetchUserList";

const UserList = () => {
  const { isLoading, isError, data, error } = useFetchUserList();

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (isError) {
    return (
      <ErrorMessage
        error={`User data could not be retrieved: ${error.message}`}
      />
    );
  }
  // if loading & error are passed - data will be available
  if (!data) throw new Error("we should not reach this");

  return (
    <>
      <div style={{ margin: "10% auto", width: "1000px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Target Score</th>
              <th>Actual Score</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              const { name, target, actual, points } = user;

              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{target}%</td>
                  <td>
                    <span
                      className={`actual-score ${
                        index < 3 ? "red-bg" : "green-bg"
                      }`}
                    >
                      {actual}%
                    </span>
                  </td>
                  <td>{points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
