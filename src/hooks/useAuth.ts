import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../services/axios-client";
import { AuthContext } from "../context/AuthContext";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";
import { queryClient } from "../services/query-client";
import { extractErrorMessage } from "../utils/formmaters";

type Token = string;

type UserData = {
  user: {
    id: string;
    name: string;
    email: string;
    lastRoleId?: number;
    profile?: {
      userId?: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  token: Token;
};

type AuthUser = {
  id: string;
  name: string;
  email: string;
  token: Token;
  user?: any;
};

const useAuth = () => {
  const navigate = useNavigate();
  const { authDetails, updateAuth } = useContext(AuthContext);
  const [otpRequested, setOtpRequested] = useState(false);

  const client = axiosClient(authDetails?.token);

  const storedUserEmail = (email?: string) => {
    if (email) {
      localStorage.setItem("register_email", email);
    } else {
      return localStorage.getItem("register_email");
    }
  };

  const formatAuthUser = (userData: UserData): AuthUser => {
    return {
      id: userData.user.id,
      name: userData.user.name,
      email: userData.user.email,
      token: userData.token,
      user: userData.user,
    };
  };

  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const { data } = await client.post("/login", credentials);
      if (!data?.data?.user) throw new Error("User data not found");
      return data.data as UserData;
    },
    onSuccess: (userData) => {
      updateAuth(formatAuthUser(userData));
      onSuccess({ message: "Login Successful!", success: "Continuing to dashboard" });
      if (userData.user.lastRoleId === 2) {
        navigate("/promoter/events");
      } else {
        navigate("/attendee/home");
      }
    },
    onError: (error) => {
      onFailure({ message: "Login Failed", error: extractErrorMessage(error) });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: any) => {
      const { data } = await client.post("/register", userData);
      return data;
    },
    onSuccess: (res) => {
      setOtpRequested(true);
      storedUserEmail(res?.data?.email);
      navigate("/email-verification");
      onSuccess({ message: "Registration Successful!", success: res?.message });
    },
    onError: (err) => {
      onFailure({ message: "Registration Failed", error: extractErrorMessage(err) });
    },
  });

  const updateProfile = useMutation({
    mutationFn: async (profileData: any) => {
      const userId = authDetails?.user?.profile?.userId;
      if (!userId) throw new Error("User ID not found");
      const { data } = await client.put(`/profile/${userId}`, profileData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (!data?.data) throw new Error(data?.message || "Error updating profile");
      return data.data;
    },
    onSuccess: (updatedUser) => {
      if (authDetails) {
        updateAuth({
          ...authDetails,
          user: {
            ...authDetails.user,
            ...updatedUser,
          },
        });
      }
      onSuccess({ message: "Profile Updated", success: "Profile updated successfully!" });
    },
    onError: (err) => {
      onFailure({ message: "Failed to update profile", error: extractErrorMessage(err) });
    },
  });

  const requestOtpMutation = useMutation({
    mutationFn: async (info: { email?: string }) => {
      const email = storedUserEmail(info?.email);
      if (!email) throw new Error("No email provided");
      const { data } = await client.post("/resend-otp", { email });
      if (!data?.success) throw new Error("An error occurred");
      return data;
    },
    onSuccess: (data) => {
      setOtpRequested(true);
      onSuccess({ message: "OTP Requested!", success: data?.message || "Check your email." });
    },
    onError: (err) => {
      setOtpRequested(false);
      onFailure({ message: "OTP Request Failed", error: extractErrorMessage(err) });
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: async (otpData: { code: string; email?: string }) => {
      const email = storedUserEmail(otpData?.email);
      if (!email) throw new Error("No email provided");
      const { data } = await client.post("/verify-otp", { ...otpData, email });
      if (!data?.success) throw new Error("Verification failed");
      return data.data as UserData;
    },
    onSuccess: (userData) => {
      updateAuth(formatAuthUser(userData));
      navigate("/login");
      onSuccess({ message: "OTP Verified!", success: "Proceeding to login" });
    },
    onError: (err) => {
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
      onSuccess({ message: "Logout Successful", success: "You have been logged out." });
    },
    onError: (err) => {
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
      logoutMutation.isPending ||
      updateProfile.isPending,
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
                  
