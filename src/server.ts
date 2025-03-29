import app from './app';
import config from './config/config';
import logger from './util/logger';

export const server = app.listen(config.PORT);

;(() => {
    try {
        // Database connection

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