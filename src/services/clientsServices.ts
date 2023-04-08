import { ClientInput } from "protocols/protocols";
import errors from "../errors/errors.js";
import {
  createClient,
  searchByEmailorCpf,
} from "../repositories/clientsRepositories.js";

async function create(client: ClientInput): Promise<void> {
  console.log("entrei no service");

  const clientAlreadyExists = await searchByEmailorCpf(
    client.email,
    client.cpf
  );

  if (clientAlreadyExists) {
    throw errors.conflictError(
      `email ${client.email} or cpf ${client.cpf} already exists`
    );
  }

  await createClient(client);

  return;
}

export default {
  create,
};
