import { ClientInput } from "../protocols/protocols.js";
import errors from "../errors/errors.js";
import {
  createClient,
  searchByCpf,
  searchByEmail,
} from "../repositories/clientsRepositories.js";

async function create(client: ClientInput): Promise<void> {

  const { rowCount: emailAlreadyExists } = await searchByEmail(client.email);
  if (emailAlreadyExists) {
    throw errors.conflictError(`email ${client.email} already exists`);
  }

  const { rowCount: cpfAlreadyExists } = await searchByCpf(client.cpf);
  if (cpfAlreadyExists) {
    throw errors.conflictError(`cpf ${client.cpf} already exists`);
  }

  await createClient(client);

  return;
}

export default {
  create,
};
