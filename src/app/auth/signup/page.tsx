import SignUpForm from "./signupForm";

const SignUpPage = () => {
  return (
    <div className="bg-white text-gray-950 p-8 rounded-lg shodow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
