export default function config($stateProvider, $urlRouterProvider): void {
    $urlRouterProvider.otherwise('/landing/accounts/029js3kd')

    $stateProvider
        .state('auth', {
            abstract: true,
            url: '/auth'
        })
        .state('auth.login', {
            url: '/login',
            template: '<mb-login></mb-login>'
        })
        .state('landing', {
            url: '/landing',
            template: '<mb-app></mb-app>'
        })
}