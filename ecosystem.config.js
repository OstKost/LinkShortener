module.exports = {
	/**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
	apps: [
		// APP
		{
			name: 'URL Shortener',
			script: './server/index.js',
			env: {
				NODE_ENV: 'production',
				PORT: 80
			},
			env_dev: {
				NODE_ENV: 'dev',
				PORT: 5000
			}
		},
		// CRON for crealing urls
		{
			name: 'cron',
			script: './server/cron/watchingExpiredUrls.js'
		}
	]
}
