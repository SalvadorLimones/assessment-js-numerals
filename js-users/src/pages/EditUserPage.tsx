import UserFrom from "../components/UserFrom";

const EditUserPage = () => {
  return (
    <>
      <main>
        <section>
          <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="mb-3">Edit user data</h1>
              <UserFrom />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditUserPage;
