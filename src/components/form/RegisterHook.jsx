import { useForm } from "react-hook-form";
import InputHook from "../input/inputHook";

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (value) => {
    console.log("onSubmitHandler", value);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        {/* <input
          type="text"
          id="username"
          placeholder="Enter your username"
          className="p-4 border border-gray-100 rounded-lg outline-none bg-white transition-all focus:border-blue-500"
        /> */}
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter you username </p>
      </div>
      <button className="w-full bg-blue-500 text-white rounded-lg mt-5 font-semibold p-5">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
