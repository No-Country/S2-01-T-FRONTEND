export const EXPRESIONES = {
  USER: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  NAME: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  PASSWORD: /^[a-zA-Z0-9\_\-.]{6,12}$/, // 6 a 12 digitos.
  EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  PHONE: /^\d{6,14}$/, // 7 a 14 numeros.
  ADDRESS: /^[a-zA-ZÀ-ÿ0-9\s\-.]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  IDENT: /^\d{6,16}$/, // 7 a 14 numeros.
};
