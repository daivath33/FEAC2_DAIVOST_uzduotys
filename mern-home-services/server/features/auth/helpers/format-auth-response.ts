import  generateToken from"../helpers/generate-token";

export interface UserDoc {
  _id: string;
  name: string;
  email: string;
  age?: number;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    age?: number;
  };
}

const formatAuthResponse = (userDoc: UserDoc): AuthResponse => {
  const token = generateToken({ id: userDoc._id });
  return {
    token,
    user: {
      id: userDoc._id,
      name: userDoc.name,
      email: userDoc.email,
      age: userDoc.age,
    },
  };
};

export default formatAuthResponse;
