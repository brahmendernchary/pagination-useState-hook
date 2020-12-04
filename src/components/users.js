import React from "react";
import { USER_PER_PAGE } from "../utils/constants";
import User from "./User";

const users = ({ users, page }) => {
  const starIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(starIndex, starIndex + USER_PER_PAGE);

  return selectedUsers.map((user) => (
    <User user={user} key={user.login.uuid} />
  ));
};

export default users;
