
export interface ILocalDataSource {
    request(key: string): Promise<any>
}

class LocalDataSource implements ILocalDataSource {
    async request(key: string): Promise<any> {
        return '';
    }
    // TODO: Implement datasource methods with specific dependencies
}