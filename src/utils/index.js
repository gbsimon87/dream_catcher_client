export const truncate = (input, allowedLength) =>
  input.length > 5 ? `${input.substring(0, allowedLength)}...` : input;
