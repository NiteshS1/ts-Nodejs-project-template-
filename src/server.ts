import app from './app';
import config from './config/config';
import databaseService from './service/databaseService'
import logger from './util/logger';

export const server = app.listen(config.PORT);

;void (async () => {
    try {
        // Database connection
        const connection = await databaseService.connect();
        logger.info(`DATABASE_CONNECTION`, {
            meta:{
                CONNECTION_NAME: connection.name,
            }
        })

        logger.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER: config.SERVER_URL
            }
        });
    } catch (error) {
        logger.error(`APPLICATION_ERROR`, { meta: error });

        server.close((error) => {
            if (error) {
                logger.error(`APPLICATION_ERROR`, { meta: error });
            }

            process.exit(1);
        })
    }
})();