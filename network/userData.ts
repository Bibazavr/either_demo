import { request } from './network';

export interface IUser {
  firstname: string;
  lastname: string;
}

export const userData = (id: number) => {
  return request<IUser>('userData/', { id });
};
