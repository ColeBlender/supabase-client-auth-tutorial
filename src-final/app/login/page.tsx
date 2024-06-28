import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <main className="flex flex-col w-full items-center">
      <div className="flex w-full max-w-sm flex-col items-center rounded-lg p-8 bg-slate-300">
        <h1 className="mb-8 text-center text-2xl font-semibold">Login</h1>

        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
