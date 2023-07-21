import { useMutation } from "react-query";

type LoginData = {
  username: string;
  password: string;
};

type LoginResult = {
  access_token: string;
  refresh_token: string;
  expiration: Date;
};

const useLogin = () => {
  const login = async ({
    username,
    password,
  }: LoginData): Promise<LoginResult> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  return useMutation(login);
};

export default useLogin;
