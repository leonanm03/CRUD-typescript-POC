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
