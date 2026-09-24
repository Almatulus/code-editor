import { users } from "../database/schema";
import { validateEmail, validatePassword } from "~/utils/validation";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  if (!email || !password) {
    throw createError({
      status: 400,
      message: "Поле email или password обязательны!",
    });
  }

  const db = useDrizzle();

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .get();

  if (!user) {
    throw createError({
      status: 401,
      message: "Данного пользователя не существует",
    });
  }

  const isPasswordExist = await verifyPassword(user.password, password);

  if (!isPasswordExist) {
    throw createError({
      status: 401,
      message: "Неверный пароль",
    });
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
    },
    loggedInAt: Date.now(),
  });

  return {
    id: user.id,
    email: user.email,
  };
});
