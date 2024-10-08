import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <header>
        <h1 className="font-semibold">Login</h1>
        <h3>Login to your account.</h3>
      </header>
      <main className="flex flex-col gap-4 items-center w-[80%] place-self-center">
        <Input name="Email" variant="default" placeholder="Email:" />
        <Input
          name="Password"
          variant="default"
          placeholder="Password:"
          type="password"
        />
        <Button variant={"default"} className="w-full">
          Login
        </Button>
        <p>
          Not a member yet?
          <strong className="text-primary font-bold"> Register.</strong>
        </p>
      </main>
    </form>
  );
};

export default LoginForm;
