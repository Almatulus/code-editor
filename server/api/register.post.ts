import { users } from "../database/schema";
import { validateEmail, validatePassword } from "~/utils/validation";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const emailError = validateEmail(email);

  if (emailError) {
    throw createError({
      status: 400,
      message: emailError,
    });
  }

  const passwordError = validatePassword(password);

  if (passwordError) {
    throw createError({
      status: 400,
      message: passwordError,
    });
  }

  const db = useDrizzle();

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .get();

  if (existingUser) {
    throw createError({
      status: 409,
      message: "Данный email уже существует",
    });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await db
    .insert(users)
    .values({
      email: email,
      password: hashedPassword,
    })
    .returning({
      id: users.id,
      email: users.email,
    })
    .get();

  await setUserSession(event, {
    user: {
      id: newUser.id,
      email: newUser.email,
    },
    loggedInAt: Date.now(),
  });

  return newUser;
});
