import "./navbar.scss"

export default class NavBarComponent implements ng.IComponentOptions {
    public controller = NavBarController
    public template = require('./navbar.html')
}

class NavBarController {
    public currentState = 'Accounts'
}