import UserFrom from "../components/UserFrom";

const AddUserPage = () => {
  return (
    <>
      <main>
        <section>
          <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="mb-3">Add a user</h1>
              <UserFrom />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddUserPage;
