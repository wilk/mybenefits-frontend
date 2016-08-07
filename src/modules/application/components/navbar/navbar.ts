import "./navbar.scss"

export default class NavBarComponent implements ng.IComponentOptions {
    public controller = NavBarController
    public template = require('./navbar.html')
}

class NavBarController {
    public currentState: string

    constructor(private $mdDialog, private $state, private $stateParams, private Accounts, private $rootScope) {}

    async $onInit() {
        this.$rootScope.$on('$stateChangeSuccess', async function (evt, toState) {
            if (!toState.name.includes('accounts')) return

            this.currentState = (await this.Accounts.get(this.$stateParams.id)).label
        }.bind(this))

        if (this.$state.current.name.includes('accounts')) {
            this.currentState = (await this.Accounts.get(this.$stateParams.id)).label
        }
    }

    async editAccount(evt) {
        try {
            let scope = this.$rootScope.$new()
            scope.account = await this.Accounts.get(this.$stateParams.id)
            this.$mdDialog.show({
                template: `<mb-account-dialog account="account"></mb-account-dialog>`,
                parent: angular.element(document.body),
                targetEvent: evt,
                clickOutsideToClose: true,
                scope: scope
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    async removeAccount(evt) {
        let account = await this.Accounts.get(this.$stateParams.id)
        let confirm = this.$mdDialog.confirm()
            .title('Confirm')
            .textContent(`Are you sure to remove ${account.label} account?`)
            .ok('Remove')
            .cancel('Cancel')
            .targetEvent(evt)

        try {
            let result = await this.$mdDialog.show(confirm)
            // @todo: remove account through Accounts service
            this.$mdDialog.cancel()
        }
        catch (err) {

        }
    }
}