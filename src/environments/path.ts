
export interface PathUri {
    baseUrl?: string;
    port: string;
    context: string;
    service: string;
}

export default function generateUri(path: PathUri): string {
    return path.baseUrl + path.port + path.context + path.service;
}
