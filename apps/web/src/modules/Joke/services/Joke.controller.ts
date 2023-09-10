/* eslint-disable tsdoc/syntax */
import Controller from 'shared/server/Controller';

import JokeModel from '@/modules/Joke/services/Joke.model';

class CJoke extends Controller {
  /**
   * Use arrow function to create Controller method.
   * @see https://www.geeksforgeeks.org/arrow-functions-in-javascript/
   * @param req Request
   */
  public index = async() => {
    try {
      const payload = await JokeModel.all();
      return this.sendJSON(200, {
        message: 'Success get all jokes.',
        payload
      });
    } catch (err) {
      return this.handleError(err);
    }
  };

  public insert = async(req: Request) => {
    try {
      const body = await req.json();
      const { setup, delivery } = body;
      const errors: string[] = [];
      if (!setup) errors.push('field "setup" is required.');
      if (!delivery) errors.push('field "delivery" is required.');
      if (errors.length) {
        this.setError(400, errors, 'Validation error.');
        return;
      }
      const payload = await JokeModel.insert({ setup, delivery });
      return this.sendJSON(201, {
        message: 'Success add new Joke.',
        payload
      });
    } catch (err) {
      return this.handleError(err);
    }
  };
}

const JokeController = new CJoke();

export default JokeController;
