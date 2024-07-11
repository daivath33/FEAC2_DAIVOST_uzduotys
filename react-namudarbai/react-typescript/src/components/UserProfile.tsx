import React from "react";

interface User {
  name: string;
  age: number;
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="userProfile">
       <h2>USER DATA:</h2>
      <h2>name: {user.name}</h2>
      <h2>age: {user.age}</h2>
    </div>
  );
};

export default UserProfile;
