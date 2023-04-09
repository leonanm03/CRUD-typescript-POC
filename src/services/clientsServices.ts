import { ClientDb, ClientInput } from "../protocols/protocols.js";
import errors from "../errors/errors.js";
import {
  createClient,
  deleteClientById,
  searchAllClients,
  searchByCpf,
  searchByEmail,
  searchById,
  updateClientAddress,
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

async function getAll(): Promise<ClientDb[]> {
  const { rows: clients, rowCount } = await searchAllClients();

  if (!rowCount) throw errors.notFoundError();

  return clients;
}

async function updateAddress(id: number, address: string): Promise<void> {
  const { rowCount } = await searchById(id);

  if (!rowCount) throw errors.notFoundError();

  await updateClientAddress(id, address);

  return;
}

async function deleteClient(id: number): Promise<void> {
  const { rowCount } = await searchById(id);

  if (!rowCount) throw errors.notFoundError();

  await deleteClientById(id);

  return;
}

export default {
  create,
  getAll,
  updateAddress,
  deleteClient,
};
