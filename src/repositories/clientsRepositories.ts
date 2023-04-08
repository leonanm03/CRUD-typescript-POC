import db from "config/database";
import { Client, QueryResult } from "pg";
import { ClientInput } from "protocols/protocols";

export async function searchByEmailorCpf(
  email: string,
  cpf: number
): Promise<QueryResult> {
  console.log("procurei o email e o cpf");

  const result = await db.query(
    `
        SELECT * FROM clients
        WHERE email = $1 OR cpf = $2
    `,
    [email, cpf]
  );

  return result;
}

export async function createClient(client: ClientInput): Promise<void> {
  console.log("tentei criar o cliente");

  const { name, email, cpf, phone, address } = client;
  await db.query(
    `
            INSERT INTO clients (name, email, cpf, phone, address)
            VALUES ($1, $2, $3, $4, $5)
        `,
    [name, email, cpf, phone, address]
  );
}
