import { NextResponse } from 'next/server';

import { type HttpResponse } from 'shared/@types/global';
import HttpError from 'shared/server/HttpError';

abstract class Controller {
  protected response = NextResponse;

  protected sendJSON<T>(statusCode: number, data: Pick<HttpResponse<T>, 'payload'|'message'>) {
    return this.response.json({
      ...data,
      status: 'success'
    }, { status: statusCode });
  }

  protected setError<E = string[]>(code: number, errors: E, message?: string) {
    throw new HttpError(code, errors, message ?? 'HTTP errors has occured.');
  }

  protected handleError(error: Error|unknown) {
    return HttpError.handle(error as Error);
  }
}

export default Controller;
