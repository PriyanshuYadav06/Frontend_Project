import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-4 flex-row justify-between">
      <NavLink  className="text-[#535bf2]" to="/">Home</NavLink>
      <NavLink  className="text-[#535bf2]" to="/pastes">Pastes</NavLink>
    </div>
  );
}
