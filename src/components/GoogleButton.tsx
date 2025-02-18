import { Button } from "./ui/button";
import google from "/google.png";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();
  const onGoogleSignIn = () => {
    // When the button is clicked, trigger a sign-in flow with Google as the
    // authentication provider.
    // See: https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
    //
    // Add code over here
  };
  return (
    <div>
      <div className="mt-4 flex flex-row items-center justify-center gap-x-3">
        <div className="h-[1px] flex-1 bg-muted-foreground" />
        <div className="text-lg text-foreground">Or</div>
        <div className="h-[1px] flex-1 bg-muted-foreground" />
      </div>
      <Button className="mt-5 w-full" variant={"outline"} type="button">
        <img src={google} alt="Google" className="mx-2 h-5 w-5" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default GoogleButton;
