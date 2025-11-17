export const AppConfig = () => ({
    port: parseInt(process.env.PORT ?? '3000', 10) || 3000,
    database: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT ?? '3306', 10) || 3306,
        name: process.env.DB_NAME || 'InfocalFinishDB',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
    },
    jwtSecret: process.env.JWT_SECRET || 'GALARZA_SECRET_KEY',
});