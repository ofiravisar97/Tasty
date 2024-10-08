import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-neutral-300 flex items-center justify-center">
      <main className="bg-white min-h-[60%] rounded-2xl shadow-md flex p-4 w-[95%] md:w-[50%] gap-4">
        <section className="flex-grow">
          <LoginForm />
        </section>
        <section className="bg-primary items-center justify-center rounded-2xl flex-grow flex flex-col gap-4">
          <h1 className="font-semibold text-4xl text-white">TastyTies</h1>
          <h4 className="text-lg text-white">A tastefull way to connect</h4>
        </section>
      </main>
    </div>
  );
};

export default Login;
