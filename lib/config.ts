// Constantes globales del proyecto
export const SITE_URL = "https://www.lebenix.com";
export const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://app.lebenix.com";
export const APP_REGISTER_URL = `${APP_URL}/register`;
