// apps/auth-service/src/app/schemas/userJoiSchema.ts
import Joi from '@hapi/joi';

export const userJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  isAdmin: Joi.boolean().default(false),
});
