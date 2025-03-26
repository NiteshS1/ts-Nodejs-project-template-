import app from './app';
import config from './config/config';

export const server = app.listen(config.PORT);

// ;(() => {
//     try {
//         // Database connection

//         // console.info(`APPLICATION_STARTED`, {
//         //     meta: {
//         //         PORT: config.PORT,
//         //         SERVER: config.SERVER_URL
//         //     }
//         // });
//     } catch (error) {
//         // console.error(`APPLICATION_ERROR`, { meta: error });

//         server.close((error) => {
//             if (error) {
//                 // console.error(`APPLICATION_ERROR`, { meta: error });
//             }

//             process.exit(1);
//         })
//     }
// })();