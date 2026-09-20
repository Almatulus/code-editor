import { users } from "../database/schema";

export default defineEventHandler(async (event) => {
  return useDrizzle()
    .insert(users)
    .values({
      email: "a.kaipzhanov@gmail.com",
      password: await hashPassword("almat123"),
    })
    .returning({
      id: users.id,
      email: users.email,
    })
    .get();
});
