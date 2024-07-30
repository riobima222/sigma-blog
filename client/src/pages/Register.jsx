import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/util/Button";
import Input from "../components/util/Input";

const RegisterPage = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const handleSeePassword = () => {
    setPasswordHidden(!passwordHidden);
  };

  const handleSubmit = () => {};

  return (
    <div className="bg-[#eb3d4b] min-h-screen flex flex-col justify-center items-center gap-4 px-3">
      <div className="max-w-[22em] w-full flex flex-col justify-center gap-4">
        <h1 className="text-xl text-white tracking-widest font-bold text-center">
          <span className="italic">R</span>eg<span className="italic">i</span>
          ster
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 bg-white p-6"
        >
          <Input type="text" name="username" placeholder="username" />
          <Input type="email" name="email" placeholder="email" />
          <div className="border-b-[1.9px] border-[#eb3d4b] flex items-end justify-between">
            <input
              className="focus:outline-none py-1 px-2 w-full"
              type={passwordHidden ? "password" : "text"}
              name="password"
              placeholder="password"
            />
            {passwordHidden ? (
              <FaRegEyeSlash
                onClick={handleSeePassword}
                className="m-1 hover:cursor-pointer text-gray-500"
              />
            ) : (
              <FaRegEye
                onClick={handleSeePassword}
                className="m-1 hover:cursor-pointer text-gray-500"
              />
            )}
          </div>
          <Button type="submit">Register</Button>
          <span className="text-sm text-center">
            have accout ?{" "}
            <Link className="underline italic text-[#eb3d4b]" to="/auth/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
