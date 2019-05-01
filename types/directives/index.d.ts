import { BvPlugin } from '../bv-plugin'

// Default export is a plugin that installs all plugins
declare const BDirectivesPlugin: BDirectivesPlugin
export default BDirectivesPlugin
export interface BDirectivesPlugin extends BvPlugin {}

// Export all directive group plugins as named exports
export * from './plugins'

// Export all legacy named directive group plugins as named exports
export * from './plugins-legacy'

// Named exports of all directives
export * from './toggle'
export * from './modal'
export * from './scrollspy'
export * from './tooltip'
export * from './popover'
