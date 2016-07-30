import 'angular'
import 'angular-ui-router'

import '../constants'

import ApplicationComponent from './components/application/application'
import NavBarComponent from './components/navbar/navbar'
import ProfileWidgetComponent from './components/profile-widget/profile-widget'
import MenuComponent from "./components/menu/menu";
import config from './config/config'

angular.module('mb.application', ['ui.router', 'mb.constants'])
    .component('mbApp', new ApplicationComponent())
    .component('mbNavBar', new NavBarComponent())
    .component('mbMenu', new MenuComponent())
    .component('mbProfileWidget', new ProfileWidgetComponent())
    .config(config)