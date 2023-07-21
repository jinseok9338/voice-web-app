import React from "react";
import LoginForm from "./LoginForm";
import useLogin from "src/Api/Login";
import TokenManager from "src/utils/tokenManager";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const useMutation = useLogin();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const { username, password } = event.currentTarget.elements as any; // As any is required here as HTMLFormControlsCollection does not have index signature.
    const data = await useMutation.mutateAsync({
      username: username.value,
      password: password.value,
    });
    TokenManager.setTokens({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    });
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">
      <LoginForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default LoginPage;
