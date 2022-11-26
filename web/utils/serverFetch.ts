import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export const serverFetch = (
  input: RequestInfo | URL,
  context?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  init?: RequestInit | undefined
): Promise<Response> => {
  const cookie = context?.req.headers.cookie
  const options = cookie
    ? { ...init, headers: { ...init?.headers, cookie } }
    : undefined
  return fetch(`${process.env.ROOT_URL}${input}`, options)
}
