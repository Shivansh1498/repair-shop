import { tickets } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
  id: z.union([z.number(), z.literal("(NEW)")]),
  title: (schema) => schema.min(1, "Title is required"),
  description: (schema) => schema.min(1, "Description is required"),
  tech: z.email("Email is required"),
});

export const selectTicketSchema = createInsertSchema(tickets);

export type insertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type selectTicketSchemaType = z.infer<typeof selectTicketSchema>;
