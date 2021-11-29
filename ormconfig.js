module.exports = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: process.env.DB_PASSWORD,
	database: 'vn-ecommerce',
	entities: ['dist/**/*.entity.js'],
	migrations: ['dist/migrations/*.js'],
	cli: {
		migrationsDir: 'dist/migrations',
	},
};
