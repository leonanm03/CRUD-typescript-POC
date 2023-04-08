export type ClientDb = {
  id: number;
  name: string;
  email: string;
  cpf: number;
  phone: number;
  address: string;
};

export type ClientInput = Omit<ClientDb, "id">;
