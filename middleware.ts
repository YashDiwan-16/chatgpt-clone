import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

 const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)',]);

 export default clerkMiddleware((auth, req) => {
   if (isProtectedRoute(req)) auth().protect()
 })

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect()
//   }
// })


export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|we  bp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
