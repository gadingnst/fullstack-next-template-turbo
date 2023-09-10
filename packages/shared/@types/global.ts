import { type NextPage } from 'next';

export type NextPageComponent<T> = NextPage<T>;

export interface NextPageProps<T = Record<string, string>> {
  params: T;
  searchParams: Record<string, string|string[]|undefined>;
}

export interface HttpResponse<T = any> {
  status: string;
  message?: string;
  payload?: T;
}
