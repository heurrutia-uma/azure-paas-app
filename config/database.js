import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'uma',
  'superuser',
  'T@^v7Bj5t@ZauS',
  {
    host: 'medecpro.postgres.database.azure.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true, 
          rejectUnauthorized: false, // Permite conexiones sin certificado válido
        },
      },
    logging: false, // Desactiva logs de SQL en consola
  }
);

sequelize.authenticate()
  .then(() => console.log('Conexión a PostgreSQL establecida correctamente'))
  .catch(err => console.error('Error al conectar con PostgreSQL:', err));
