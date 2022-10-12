import UserFrom from "../components/UserFrom";

const AddUser = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <a href="/">Back to users list</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add a new user
              </li>
            </ol>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <h1 className="text-center">Add a user</h1>
            <UserFrom />
          </div>
        </section>
      </main>
    </>
  );
};

export default AddUser;
