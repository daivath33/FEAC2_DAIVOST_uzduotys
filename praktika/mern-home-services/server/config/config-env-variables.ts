import dotenv from 'dotenv';
dotenv.config();

interface EnvVariables {
  SERVER_PORT?: string;
  DB_CONNECTION?: string;
  TOKEN_SECRET?: string;
  TOKEN_EXPIRATION?: string;
  CLIENT_URL?: string;
}

interface RequiredEnvVariables extends EnvVariables {
  SERVER_PORT: string;
  DB_CONNECTION: string;
  TOKEN_SECRET: string;
  TOKEN_EXPIRATION: string;
  CLIENT_URL: string;
}

const {
  SERVER_PORT,
  DB_CONNECTION,
  TOKEN_SECRET,
  TOKEN_EXPIRATION,
  CLIENT_URL
} = process.env as EnvVariables;

const requiredEnvVariables: Partial<RequiredEnvVariables> = {
  SERVER_PORT,
  DB_CONNECTION,
  TOKEN_SECRET,
  TOKEN_EXPIRATION,
  CLIENT_URL
};

const missingEnvVariables: string[] = [];

Object.entries(requiredEnvVariables).forEach(([key, value]) => {
  if (!value) {
    missingEnvVariables.push(key);
  }
});

if (missingEnvVariables.length > 0) {
  const missingVariableNames = missingEnvVariables.join('\t\n');
  throw new Error('Variables are not provided in .env file: \n' + missingVariableNames + '\n');
}


const envVariables = {
  server: {
    port: SERVER_PORT!,
  },
  jwt: {
    secret: TOKEN_SECRET!,
    expiration: TOKEN_EXPIRATION!,
  },
  db: {
    connection: DB_CONNECTION!,
  },
  client: {
    url: CLIENT_URL!,
  }
}

export default envVariables;