export type ClientDb = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  address: string;
};

export type ClientInput = Omit<ClientDb, "id">;
