export default defineNuxtRouteMiddleware((to, from) => {
  console.log('check global =>', { to, from });
});
