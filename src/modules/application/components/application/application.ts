import './application.scss'

export default class ApplicationComponent implements ng.IComponentOptions {
    public controller = ApplicationController
    public template = require('./application.html')
}

class ApplicationController {}