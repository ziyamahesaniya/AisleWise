import { Redirect } from "expo-router";
import { useAuth } from "../lib/auth-context";
import { LoadingScreen } from "../components/LoadingScreen";

export default function Index() {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen message="Restoring your session..." />;
  }

  if (session) {
    return <Redirect href="/(protected)" />;
  }

  return <Redirect href="/(auth)/welcome" />;
}