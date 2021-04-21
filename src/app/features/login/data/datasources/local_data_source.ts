
export interface ILocalDataSource {
    request(key: String): Promise<any>
}

class LocalDataSource implements ILocalDataSource {
    async request(key: String): Promise<any> {
        return '';
    }
}