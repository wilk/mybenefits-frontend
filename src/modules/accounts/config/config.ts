export default function config($stateProvider): void {
    $stateProvider
        .state('landing.accounts', {
            url: '/accounts/:id?',
            template: '<mb-account layout="column" flex></mb-account>'
        })
}