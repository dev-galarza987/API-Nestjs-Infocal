import { DataSource } from "typeorm"

export const MySQLDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_MYSQL_HOST,
    port: parseInt(process.env.DB_MYSQL_PORT ?? '3306', 10) || 3306,
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
});

export const PostgreSQLDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_POSTGRES_HOST,
    port: parseInt(process.env.DB_POSTGRES_PORT ?? '5432', 10) || 5432,
    username: process.env.DB_POSTGRES_USER,
    password: process.env.DB_POSTGRES_PASSWORD,
    database: process.env.DB_POSTGRES_DATABASE,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
});

export const databaseProviders = [
    {
        provide: 'MYSQL_DATA_SOURCE',
        useFactory: async () => {
            try {
                await MySQLDataSource.initialize();
                console.log('--> Conectado a MySQL');
                return MySQLDataSource;
            } catch (error) {
                console.log('Error al conectar a MySQL:', error);
                throw error;
            }
        },
    },
    {
        provide: 'POSTGRESQL_DATA_SOURCE',
        useFactory: async () => {
            try {
                await PostgreSQLDataSource.initialize();
                console.log('--> Conectado a PostgreSQL');
                return PostgreSQLDataSource;
            } catch (error) {
                console.log('Error al conectar a PostgreSQL:', error);
                throw error;
            }
        },
    },
];