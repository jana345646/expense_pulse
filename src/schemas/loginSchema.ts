// z is an object in zod by it we can reach the functions  that will validate the data

import z from "zod";

// loginSchema is the variable that will hold the schema that will be returned by the object method ,
// z.object we use it to tell zod the the data that will be returned from the user must be an object and  must conatin this prperties with it's rules

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "The email is required" })

    //email is a method to check if the email is valid

    .email({ message: "The email is invalid" }),

  password: z

    // string because some passwords could contain letters , and we will not make any calculations on it

    // the second argument is written in an object due to the syntax and because that it can hold multiple properties

    .string()
    .min(6, { message: "The password must be at least 6 characters" }),
});

// infer is a method that will automatically detect the type of the schema

// we use type because we export the type of the schema automatically and type is used with the =
// but interface is not used with the = and we use it with the object that we write it manually only

export type loginFormData = z.infer<typeof loginSchema>;
