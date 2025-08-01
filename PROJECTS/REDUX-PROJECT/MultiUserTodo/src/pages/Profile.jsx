import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../features/auth/authSlice";
import toast from "react-hot-toast";
export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
    return null;
  }
  function handleLogout() {
    toast.success("Logout", {
      duration: 2000,
    });
    dispatch(logout());
    navigate("/");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          User Profile
        </h1>
        <div className="flex flex-col gap-3">
          <div className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="text-gray-700">
            <strong>Password:</strong> ******
          </div>
          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded  cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
