import { useForm } from "react-hook-form";
import { Button } from "./components/atoms/Button/Button";
import { Input } from "./components/atoms/Input/Input";

function App() {
  const { register, handleSubmit } = useForm();

  const handleRegisterTest = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Button width="200px">Click</Button>
      <div>
        <form onSubmit={handleSubmit(handleRegisterTest)}>
          <Input name="firstName" register={register} />
          <Button width="200px" type="submit">
            Test Form
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
