import { OAuth2Client } from "google-auth-library";
import AppError from "../../config/AppError";

const googleAuthCLient = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);

type UserProfileType = {
  email: string | undefined;
  name: string | undefined;
  imageUrl: string | undefined;
};

export default async function getUserProfileFromGoogle(
  token: string
): Promise<UserProfileType> {
  const googleUser = await googleAuthCLient.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_AUTH_CLIENT_ID,
  });

  const payloadResult = googleUser.getPayload();

  if (!payloadResult) {
    throw new AppError("User not found on Google", 404);
  }

  const { email, name, picture: imageUrl } = payloadResult;
  return { email, name, imageUrl };
}
