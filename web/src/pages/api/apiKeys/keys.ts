export const keys = () => {
    return {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.P_KEY_ID,
    "private_key": process.env.P_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509,
    "client_x509_cert_url": process.env.CLIENT_X509,
    "universe_domain": process.env.U_DOMAIN
  }}
  