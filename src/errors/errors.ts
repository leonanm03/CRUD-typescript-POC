function conflictError(message: string) {
  return {
    name: "ConflictError",
    message,
  };
}

function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

function badRequestError(message: string[]) {
  return {
    name: "BadRequestError",
    message,
  };
}

export default {
  conflictError,
  notFoundError,
  badRequestError,
};
