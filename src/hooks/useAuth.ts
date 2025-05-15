import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query"; // Ensure this is from @tanstack/react-query
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../services/axios-client";
import { AuthContext } from "../context/AuthContext";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";
import { queryClient } from "../services/query-client";
import { extractErrorMessage } from "../utils/formmaters";
const useAuth = () => {
  const navigate = useNavigate();
  const { authDetails, updateAuth } = useContext(AuthContext);
  const [otpRequested, setOtpRequested] = useState(false);

  const client = axiosClient(authDetails?.token?.token);

  const storedUserEmail = (email) => {
    if (email) {
      localStorage.setItem("register_email", email)
    } else {
      return localStorage.getItem("register_email");
    }
  }

  // Login Mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const { data } = await client.post("/login", credentials);
      if (!data?.data?.user) {
        throw new Error("Invalid response: User data not found");
      }
      return data.data;
    },
    onSuccess: (userData) => {
      updateAuth(userData); // Immediately update auth state
      onSuccess({ message: "Login Successful!", success: "Continuing to dashboard" });
      if (userData?.user?.lastRoleId === 2) {
        navigate("/promoter/events");
      } else {
        navigate("/attendee/home");
      }
    },
    onError: (error) => {
      onFailure({ message: "Login Failed", error: extractErrorMessage(error) });
    },
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: async (userData) => {
      const { data } = await client.post("/register", userData);
      return data;
    },
    onSuccess: (userData) => {
      setOtpRequested(true);
      storedUserEmail(userData?.data?.email)
      navigate("/email-verification");
      onSuccess({ message: "Registration Successful!", success: userData?.message || "User created successfully" });
    },
    onError: (err) => {
      onFailure({ message: "Registration Failed", error: extractErrorMessage(err) });
    },
  });

  // Mutation for updating profile
  const updateProfile = useMutation({
    mutationFn: async (profileData) => {
      if (!authDetails?.user?.profile?.userId) {
        throw new Error("User ID not found");
      }

      const { data } = await client.put(
        `/profile/${authDetails.user.profile.userId}`,
        profileData, // Profile data must be in the second argument
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      if (!data && data?.status) {
        throw new Error(data?.message || "Error updating profile");
      }

      return data.data;
    },
    onSuccess: (updatedUser) => {
      const { user, ...other } = authDetails
      updateAuth({ ...other, user: { ...user, ...updatedUser } })
      onSuccess({ message: "Profile Update", success: "Profile updated successfully!" });
    },
    onError: (err) => {
      onFailure({ message: "Failed to update profile", error: extractErrorMessage(err) });
    },
  });



  const requestOtpMutation = useMutation({
    mutationFn: async (info) => {
      const email = storedUserEmail(info?.email); // Call function to get email
      if (!email) {
        throw new Error("No email provided");
      }
      const { data } = await client.post("/resend-otp", { email: email });
      if (!data?.success) {
        throw new Error("An error occurred");
      }
      return data;
    },
    onSuccess: (data) => {
      setOtpRequested(true);
      onSuccess({ message: "OTP Requested!", success: data?.message || "Please check your mail" });

    },
    onError: (err) => {
      setOtpRequested(false);
      onFailure({ message: "Can't Request OTP", error: extractErrorMessage(err) });
    },
  });
  
  const verifyOtpMutation = useMutation({
    mutationFn: async (otpData) => {
      const email = storedUserEmail(otpData?.email); // Call function to get email
      if (!email) {
        throw new Error("No email provided");
      }
      const { data } = await client.post("/verify-otp", { ...otpData, email: email });
      if (!data?.success) {
        throw new Error("Invalid response: User data not found");
      }
      return data.data;
    },
    onSuccess: (userData) => {
      updateAuth(userData);
      navigate("/login");
      onSuccess({ message: "OTP Verified!", success: "Proceeding to login" });
    },
    onError: (err) => {
      onFailure({ message: "OTP Verification Failed", error: extractErrorMessage(err) });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      queryClient.clear(); // Clear all cached data
    },
    onSuccess: () => {
      updateAuth(null); // Reset auth state
      navigate("/login", { replace: true });
      onSuccess({
        message: "Logout successful",
        success: "You have been logged out.",
      });
    },
    onError: (err) => {
      onFailure({ message: "Logout Failed", error: err.message });
    },
  });

  // Check if any mutation is loading
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
    storedUserEmail
  };
};

export default useAuth;
