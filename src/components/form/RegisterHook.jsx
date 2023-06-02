import { useForm } from "react-hook-form";
import InputHook from "../input/inputHook";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 3,
    value: "developer",
    text: "Developer",
  },
];

const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .email("Wrong format")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/, {
        message:
          "Your password must have at least 8 characters, 1 uppercase, 1 lower case,",
      }),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select Male or Female"),
    term: yup.boolean().required("Please agree with term"),
    job: yup.string().required("Please select your job"),
  })
  .required();

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("errors", errors);

  const onSubmitHandler = (value) => {
    console.log("onSubmitHandler", value);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
          type="text"
        ></InputHook>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message} </p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
          type="email"
        ></InputHook>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message} </p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
          type="password"
        ></InputHook>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message} </p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message} </p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
        ></DropdownHook>
        {errors.job && (
          <p className="text-red-500 text-sm">{errors.job.message} </p>
        )}
      </div>

      <div className=" mb-5">
        <CheckboxHook
          control={control}
          name="term"
          text="I accept terms and conditions "
        ></CheckboxHook>
        {errors.term && (
          <p className="text-red-500 text-sm">{errors.term.message} </p>
        )}
      </div>

      <button className="w-full bg-blue-500 text-white rounded-lg mt-5 font-semibold p-5">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
