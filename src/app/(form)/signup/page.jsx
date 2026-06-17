import { lazy } from "@/lib/lazy";

const Signup = lazy(() => import("@/MainComponents/form/SignupPage"));

const SignupPage = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default SignupPage;
