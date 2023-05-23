const RegisterHook = () => {
  return (
    <div className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          className="p-4 border border-gray-100 rounded-lg outline-none bg-white transition-all focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">Please enter you username </p>
      </div>
    </div>
  );
};

export default RegisterHook;
