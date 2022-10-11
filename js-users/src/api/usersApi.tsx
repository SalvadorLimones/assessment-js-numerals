import axios from "axios";

export const usersApi = () => {
  const instance = axios.create({
    baseURL: "https://assessment-users-backend.herokuapp.com",
    timeout: 5000,
  });

  const get = async (path: string) => {
    try {
      const resp = await instance.get(path + ".json");
      return resp;
    } catch (err: any) {
      return err.response;
    }
  };

  /*   const post = async (path, data) => {
    try {
      const resp = await instance.post(path, data, {
        headers: { authorization: localStorage.getItem("token") },
      });
      return resp;
    } catch (err) {
      return err.response;
    }
  };


  const del = async (path) => {
    try {
      const resp = await instance.delete(path, {
        headers: { authorization: localStorage.getItem("token") },
      });
      return resp;
    } catch (err) {
      return err.response;
    }
  }; */

  return { get, /* post,   del, */ _instance: instance };
};
