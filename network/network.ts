import { Either, left, right } from '@sweet-monads/either';

interface IResp<R> {
  data: R;
  ok: boolean;
}
interface Error {
  biba: string;
}
export const request = async <R>(
  url: string,
  data: Record<string, unknown>
): Promise<Either<Error, IResp<R>>> => {
  try {
    const resp = await fetch('test.com/api/v1/' + url, {
      ...data,
    }).then((resp) => {
      return resp;
    });
    return right({ data: await resp.json(), ok: resp.ok });
  } catch (e) {
    const error = { ...e };
    error.biba = 'biba';
    return left(error);
  }
};
