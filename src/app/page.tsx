'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpSchemaType, SignUpSchema } from "./schemas/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });


  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {

    console.log(data);

  }




  return (
    <main className="max-w-2xl  rounded-2xl border border-zinc-100   p-12 shadow-xl  mx-auto ">



      <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto flex gap-8 flex-col">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Create New Account</h1>



        {/* Name */}
        <div className="flex gap-6 ">
          <div >
            <label htmlFor="firstName" className="text-md block mb-2  font-medium ">First Name</label>
            <input type="text" id="firstName" className="px-4 py-2 border rounded-lg" placeholder="First Name"  {...register("firstName")} />

            {errors.firstName && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.firstName?.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="text-md block mb-2  font-medium ">Last Name</label>
            <input type="text" id="lastName" className="px-4 py-2 border rounded-lg" placeholder="Last Name"  {...register("lastName")} />
          </div>
          {errors.lastName && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.lastName?.message}
            </p>
          )}
        </div>


        {/* Email */}

        <div>
          <label htmlFor="email" className="text-md block mb-2  font-medium ">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" placeholder="email@example.com"  {...register("email")} />
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.email?.message}
            </p>
          )}
        </div>


        {/* Password */}

        <div className="flex gap-6 ">
          <div>
            <label htmlFor="password" className="text-md block mb-2  font-medium ">Password</label>
            <input type="password" id="password" className="w-full px-4 py-2 border rounded-lg" placeholder=""  {...register("password")} />
            {errors.password && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>



          <div>
            <label htmlFor="confirmPassword" className="text-md block mb-2  font-medium ">Confirm Password</label>
            <input type="password" id="confirmPassword" className="w-full px-4 py-2 border rounded-lg"  {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
        </div>



        <div className="mb-4">
          <input type="checkbox" id="terms" />
          <label
            htmlFor="terms"
            className="ml-2 mb-2 text-sm font-bold text-gray-700"
          >
            Accept Terms & Conditions
          </label>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg min-w-full  sm:w-auto px-5 py-2.5 text-center ">Submit</button>



        <hr className=" border-t" />
        <div className="flex flex-col gap-1">
          <div className="text-center">
            <a
              className=" text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center">
            <a
              className=" text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="#"
            >
              Already have an account? Login!
            </a>
          </div>
        </div>


      </form>
    </main>
  );
}
