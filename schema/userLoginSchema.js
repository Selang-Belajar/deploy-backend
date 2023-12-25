const { z } = require("zod");

const validateLoginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

module.exports = validateLoginSchema;
