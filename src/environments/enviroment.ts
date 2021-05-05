import { PathUri } from "./path";

const PORT = ':8443';
const { REACT_APP_API_HOST_AWS } = process.env


const security: PathUri = {
    baseUrl: REACT_APP_API_HOST_AWS,
    port: PORT,
    context: '/services',
    service: '/security',
};

export const enviroments = {
    security,
};
