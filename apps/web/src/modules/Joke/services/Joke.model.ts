import Model from '@/common/server/Model';

export interface JokeFields<T = string|number> {
  readonly _id?: T;
  setup: string;
  delivery: string;
}

class MJoke extends Model<JokeFields> {
  protected collectionName = 'jokes';
}

const JokeModel = new MJoke();

export default JokeModel;
