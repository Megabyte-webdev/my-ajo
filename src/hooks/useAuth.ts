import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../services/axios-client";
import { AuthContext } from "../context/AuthContext";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";
import { queryClient } from "../services/query-client";
import { extractErrorMessage } from "../utils/formmaters";

// Add types if available
interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  data: {
    email: string;
    [key: string]: any;
  };
  message?: string;
  user?: any;
}

const useAuth = () => {
  const navigate = useNavigate();
  const { authDetails, updateAuth } = useContext(AuthContext);
  const [otpRequested, setOtpRequested] = useState(false);
  const client = axiosClient(authDetails?.token?.token);

  // Fixed: explicitly handle return type
  const storedUserEmail = (email?: string): string | null | void => {
    if (email) {
      localStorage.setItem("register_email", email);
    } else {
      return localStorage.getItem("register_email");
    }
  };

  const loginMutation = useMutation({
    mutationFn: async (credentials: Credentials) => {
      const { data } = await client.post("/login", credentials);
      if (!data?.data?.user) throw new Error("Invalid response: User data not found");
      return data.data;
    },
    onSuccess: (userData: UserData) => {
      updateAuth(userData);
      onSuccess({ message: "Login Successful!", success: "Continuing to dashboard" });

      if (userData?.user?.lastRoleId === 2) {
        navigate("/promoter/events");
      } else {
        navigate("/attendee/home");
      }
    },
    onError: (error: any) => {
      onFailure({ message: "Login Failed", error: extractErrorMessage(error) });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: any) => {
      const { data } = await client.post("/register", userData);
      return data;
    },
    onSuccess: (userData: UserData) => {
      setOtpRequested(true);
      storedUserEmail(userData?.data?.email || "");
      navigate("/email-verification");
      onSuccess({
        message: "Registration Successful!",
        success: userData?.message || "User created successfully",
      });
    },
    onError: (err: any) => {
      onFailure({ message: "Registration Failed", error: extractErrorMessage(err) });
    },
  });

  const updateProfile = useMutation({
    mutationFn: async (profileData: FormData) => {
      const userId = authDetails?.user?.profile?.userId;
      if (!userId) throw new Error("User ID not found");

      const { data } = await client.put(`/profile/${userId}`, profileData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!data?.status) throw new Error(data?.message || "Error updating profile");

      return data.data;
    },
    onSuccess: (updatedUser: any) => {
      const { user, ...other } = authDetails || {};
      updateAuth({ ...other, user: { ...user, ...updatedUser } });
      onSuccess({ message: "Profile Update", success: "Profile updated successfully!" });
    },
    onError: (err: any) => {
      onFailure({ message: "Failed to update profile", error: extractErrorMessage(err) });
    },
  });

  const requestOtpMutation = useMutation({
    mutationFn: async (info: { email?: string }) => {
      const email = storedUserEmail(info?.email) || "";
      if (!email) throw new Error("No email provided");

      const { data } = await client.post("/resend-otp", { email });
      if (!data?.success) throw new Error("An error occurred");

      return data;
    },
    onSuccess: (data: any) => {
      setOtpRequested(true);
      onSuccess({ message: "OTP Requested!", success: data?.message || "Please check your mail" });
    },
    onError: (err: any) => {
      setOtpRequested(false);
      onFailure({ message: "Can't Request OTP", error: extractErrorMessage(err) });
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: async (otpData: { email?: string; code: string }) => {
      const email = storedUserEmail(otpData?.email) || "";
      if (!email) throw new Error("No email provided");

      const { data } = await client.post("/verify-otp", { ...otpData, email });
      if (!data?.success) throw new Error("Invalid response: User data not found");

      return data.data;
    },
    onSuccess: (userData: UserData) => {
      updateAuth(userData);
      navigate("/login");
      onSuccess({ message: "OTP Verified!", success: "Proceeding to login" });
    },
    onError: (err: any) => {
      onFailure({ message: "OTP Verification Failed", error: extractErrorMessage(err) });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      queryClient.clear();
    },
    onSuccess: () => {
      updateAuth(null);
      navigate("/login", { replace: true });
      onSuccess({ message: "Logout successful", success: "You have been logged out." });
    },
    onError: (err: any) => {
      onFailure({ message: "Logout Failed", error: err.message });
    },
  });

  const isLoading = {
    login: loginMutation.isPending,
    signUp: registerMutation.isPending,
    requestOtp: requestOtpMutation.isPending,
    verifyOtp: verifyOtpMutation.isPending,
    logout: logoutMutation.isPending,
    updateProfile: updateProfile.isPending,
    overall:
      loginMutation.isPending ||
      registerMutation.isPending ||
      requestOtpMutation.isPending ||
      verifyOtpMutation.isPending ||
      logoutMutation.isPending,
  };

  return {
    login: loginMutation.mutate,
    signUp: registerMutation.mutate,
    verifyOtp: verifyOtpMutation.mutateAsync,
    requestOtp: requestOtpMutation.mutateAsync,
    logout: logoutMutation.mutate,
    updateProfile: updateProfile.mutateAsync,
    otpRequested,
    isLoading,
    storedUserEmail,
  };
};

export default useAuth;
                  
