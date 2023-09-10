/* eslint-disable tsdoc/syntax */
/**
 * @route `/api/jokes`
 * @dir `app/api/jokes/route.ts`
 */

import withVerifyAppKey from '@/common/server/middlewares/withVerifyAppKey';
import JokeController from '@/modules/Joke/services/Joke.controller';

export const GET = JokeController.index;
export const POST = withVerifyAppKey(JokeController.insert);
