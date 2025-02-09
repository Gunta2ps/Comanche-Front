import Joi from "joi";
import { subYears } from "date-fns";

export const createUserValidator = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email is invalid",
    }),
  phone: Joi.string()
    .pattern(/^02\d{8}$/)
    .required()
    .messages({
      "string.empty": "Phone is required",
      "string.pattern.base":
        "Phone number must have 10 digits and start with 02",
    }),
  bdate: Joi.date().less(subYears(new Date(), 20)).required().messages({
    "date.less": "You must be older than 20 years",
    "date.base": "Invalid birth date",
    "any.required": "Birth Date is required",
  }),
  address: Joi.string().trim().optional(),
});

export const editUesrValidator = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": "Name is required",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Email is invalid",
      }),
    phone: Joi.string()
      .pattern(/^02\d{8}$/)
      .required()
      .messages({
        "string.empty": "Phone is required",
        "string.pattern.base":
          "Phone number must have 10 digits and start with 02",
      }),
    bdate: Joi.date().less(subYears(new Date(), 20)).required().messages({
      "date.less": "You must be older than 20 years",
      "date.base": "Invalid birth date",
      "any.required": "Birth Date is required",
    }),
    address: Joi.string().trim().optional(),
  });
