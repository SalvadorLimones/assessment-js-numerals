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

  const post = async (path: string, data: {}) => {
    try {
      const resp = await instance.post(path + ".json", data);
      return resp;
    } catch (err: any) {
      return err.response;
    }
  };

  const put = async (path: string, data: {}) => {
    try {
      const resp = await instance.put(path + ".json", data);
      return resp;
    } catch (err: any) {
      return err.response;
    }
  };

  return { get, post, put, _instance: instance };
};
