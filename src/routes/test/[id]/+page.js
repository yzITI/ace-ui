// this function might be called on server during SSR!
export function load (ctx) {
  console.log(ctx)
  let name = ctx.url.searchParams.get('name') // query params
  return { name, ...ctx.params }
}