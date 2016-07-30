export default class TransitionComponent implements ng.IComponentOptions {
    public controller = TransitionController
    public template = require('./transition.html')
    public bindings: any = {
        transition: '='
    }
}

class TransitionController {}