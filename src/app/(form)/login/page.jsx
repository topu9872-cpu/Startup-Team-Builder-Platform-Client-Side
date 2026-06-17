import { lazy } from "@/lib/lazy";

const Login=lazy(()=>import("@/MainComponents/form/LoginPage"));

const LoginPage = () => {
  return (
    <div>
        <Login/>
    </div>
  );
};

export default LoginPage;