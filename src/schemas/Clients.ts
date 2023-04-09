import { ClientDb, ClientInput } from "../protocols/protocols.js";
import Joi from "joi";

export const createClientSchema = Joi.object<ClientInput>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  cpf: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),
  phone: Joi.string()
    .length(12)
    .pattern(/^[0-9]+$/)
    .required(),
  address: Joi.string().required(),
});

export const updateClientAddressSchema = Joi.object<
  Pick<ClientInput, "address">
>({
  address: Joi.string().required(),
});

export const clientIdSchema = Joi.object<Pick<ClientDb, "id">>({
  id: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
});
