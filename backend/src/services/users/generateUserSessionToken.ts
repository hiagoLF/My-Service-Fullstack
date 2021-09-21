import { sign } from "jsonwebtoken";

export default function generateUserSessionToken(
  userId: string
): string | undefined {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error();
  }

  const jwtToken = sign({}, jwtSecret, {
    subject: userId,
    expiresIn: '1d',
  });

  console.log(jwtSecret)

  return jwtToken;
}
