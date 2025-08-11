import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/data/api/auth.data";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useApiMutation, writeCredentials } from "@/hooks/useApiService";
import { API_ENDPOINTS } from "@/constants/api.enpoints";
import { REQUEST_METHODS } from "@/constants/api.enum";
import { LoginRequestType, LoginResponseType } from "@/types/api/auth.type";
import { AppName, LogoIcon } from "@/constants/app.details";

const FormComponent = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  const { mutate, isLoading } = useApiMutation<
    LoginRequestType,
    LoginResponseType
  >(API_ENDPOINTS.LOGIN_ENDPOINT, REQUEST_METHODS.POST);

  const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
    mutate(values, {
      onSuccess: (response) => {
        writeCredentials(response);
        navigate("/home/dashboard");
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-screen flex-col justify-between w-full lg:w-1/2 bg-slate-300 dark:bg-black py-20"
      >
        <div className="flex flex-row w-full px-20 lg:px-[22%] justify-end">
          <Button
            variant={"ghost"}
            className="cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </Button>
        </div>
        <div className="flex flex-col px-20 lg:px-[22%] gap-4 w-full">
          <img src="#" alt="" />

          <h2 className="font-semibold text-3xl w-full">
            Zevrin Welcomes you{" "}
          </h2>
          <p className="w-full mb-5 dark:text-gray-400 text-sm">
            Enter your credentials
          </p>

          <FormField
            name={"username"}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Username"
                    type="name"
                    className="bg-slate-900 py-6 px-6 rounded-lg text-md"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name={"password"}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    className="bg-slate-900 py-6 px-6 rounded-lg text-md"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row items-center w-full justify-between pl-2">
            <div className="flex flex-row gap-3">
              <Checkbox className="border-slate-500" />
              <Label>Remember Me</Label>
            </div>
            <Button variant={"link"} className="py-1 my-1 cursor-pointer ">
              Forgot Password
            </Button>
          </div>
          <Button
            variant={"default"}
            disabled={isLoading}
            className="rounded-lg text-base cursor-pointer py-6 w-full"
          >
            {isLoading ? "Logging In..." : "Login"}
          </Button>
          <div className="flex flex-row items-center px-2 w-full">
            <div className="hidden border-slate-400 md:inline w-1/3 border h-0" />
            <Label className="text-center w-full md:w-1/3 my-3 justify-center">
              Or Continue With
            </Label>
            <div className="hidden border-slate-400 md:inline w-1/3 border h-0" />
          </div>
          <Button
            variant={"outline"}
            className="py-6 rounded-full border-gray-900 w-full cursor-pointer"
          >
            Continue with Google
          </Button>
        </div>

        <div className="flex flex-row w-full justify-center ">
          <Button
            variant={"link"}
            className="text-base text-gray-400 cursor-pointer"
          >
            Privacy
          </Button>
          <Button
            variant={"link"}
            className="text-base text-gray-400 cursor-pointer"
          >
            Terms and Conditions
          </Button>
        </div>
      </form>
    </Form>
  );
};

const Login = () => {
  document.body.classList.add("dark");
  return (
    <main className="flex flex-row w-screen h-screen bg-gray-400 dark:bg-gradient-to-br dark:from-slate-950 to-slate-900 ">
      <div className="hidden lg:flex flex-col justify-between lg:w-1/2 p-15">
        <div className="flex flex-row items-center gap-3">
          <img src={LogoIcon} className="w-15 aspect-square " />
          <h1 className="text-3xl font-bold ">{AppName}</h1>
        </div>
        <p className="font-semibold text-lg">
          This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.
        </p>
      </div>
      <FormComponent />
    </main>
  );
};

export default Login;
