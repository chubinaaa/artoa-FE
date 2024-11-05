import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div
        className="w-3/6 rounded-lg p-8 text-white shadow-lg"
        style={{ backgroundColor: " #121212" }}
      >
        <h2 className="text-2xl">Hello!</h2>
        <p className="text-2xl">
          Create an ArtOa account
          <br />
        </p>

        <span className=" "> Already have an account? </span>
        <a href="/login" className="text-base text-orange-500 hover:underline">
          Log in.
        </a>

        <form className="mt-6">
          <label className="text-m my-2 block">Email Address</label>
          <Input
            type="email"
            placeholder="Email Address"
            className="placeholder:text-m"
          />
          <label className="text-m my-2 block">Enter Password</label>
          <Input type="password" placeholder="Password" />
          <label className="text-m my-2 block">Repeat Password</label>
          <Input type="password" placeholder="Repeat Password" />

          <div className="my-8 flex items-center">
            <input
              type="checkbox"
              className="size-4 rounded border-gray-600 text-orange-500 checked:bg-orange-500 focus:ring-0"
            />
            <label className="text-sm text-gray-400">
              By creating an account, I agree to the{" "}
              <a href="/terms" className="text-orange-500 hover:underline">
                Terms and Conditions
              </a>
              .
            </label>
          </div>
          <Button className="w-full">Create Account</Button>
        </form>

        <div className="my-6 text-center text-gray-500">or</div>

        <div className="space-y-2">
          <button className="flex w-full items-center justify-center rounded border bg-input-background py-2 text-xs hover:bg-gray-600">
            <span className="mr-2">🔍</span> Sign up with Google
          </button>
          <button className="flex w-full items-center justify-center rounded border bg-input-background py-2 text-xs hover:bg-gray-600">
            <span className="mr-2">📘</span> Sign up with Facebook
          </button>
          <button className="flex w-full items-center justify-center rounded border bg-input-background py-2 text-xs hover:bg-gray-600">
            <span className="mr-2 text-xs">💼</span> Sign up with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
