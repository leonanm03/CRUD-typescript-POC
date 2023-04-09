import db from "../config/database.js";
import { QueryResult } from "pg";
import { ClientInput } from "../protocols/protocols.js";

export async function searchByEmail(email: string): Promise<QueryResult> {
  const result = await db.query(
    `
        SELECT * FROM clients
        WHERE email = $1
    `,
    [email]
  );

  return result;
}

export async function searchByCpf(cpf: string): Promise<QueryResult> {
  const result = await db.query(
    `
        SELECT * FROM clients
        WHERE  cpf = $1
    `,
    [cpf]
  );

  return result;
}

export async function searchById(id: number): Promise<QueryResult> {
  const result = await db.query(
    `
        SELECT * FROM clients
        WHERE id = $1
    `,
    [id]
  );

  return result;
}

export async function createClient(client: ClientInput): Promise<void> {
  const { name, email, cpf, phone, address } = client;
  await db.query(
    `
            INSERT INTO clients (name, email, cpf, phone, address)
            VALUES ($1, $2, $3, $4, $5)
        `,
    [name, email, cpf, phone, address]
  );
}

export async function searchAllClients(): Promise<QueryResult> {
  const result = await db.query(
    `
    SELECT id, name, email, cpf, phone, address FROM clients
    `
  );
  return result;
}

export async function updateClientAddress(
  id: number,
  address: string
): Promise<void> {
  await db.query(
    `
    UPDATE clients
    SET address = $1
    WHERE id = $2
    `,
    [address, id]
  );
}

export async function deleteClientById(id: number): Promise<void> {
  await db.query(
    `
    DELETE FROM clients
    WHERE id = $1
    `,
    [id]
  );
  return;
}
