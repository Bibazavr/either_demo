interface IResp<R> {
  data: R;
  ok: boolean;
}
export const request = async <R>(
  url: string,
  data: Record<string, unknown>
): Promise<IResp<R>> => {
  try {
    const resp = await fetch('test.com/api/v1/' + url, {
      ...data,
    }).then((resp) => {
      return resp;
    });
    return { data: await resp.json(), ok: resp.ok };
  } catch (e) {
    const error = { ...e };
    error.biba = 'biba';
    throw error;
  }
};
