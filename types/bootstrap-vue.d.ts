declare module 'bootstrap-vue' {
  import { Component, ComponentOptions, AsyncComponent, DirectiveOptions } from 'vue'
  import { BvPlugin } from './bv-plugin'
  import { BvEvent } from './bv-event'

  import Modal, { BModal, BvModalEvent } from './components/modal'
  import Toast, { BToast, BToaster } from './components/toast'
  import Table, { BTable } from './components/table'

  export {
    BvEvent
    BvModalEvent
  }

  export const Alert: BvPlugin
  export const BAlert: Component | ComponentOptions | AsyncComponent

  export const Badge: BvPlugin
  export const BBadge: Component | ComponentOptions | AsyncComponent

  export const Breadcrumb: BvPlugin
  export const BBreadcrumb: Component | ComponentOptions | AsyncComponent
  export const BBreadcrumbItem: Component | ComponentOptions | AsyncComponent
  export const BBreadcrumbLink: Component | ComponentOptions | AsyncComponent

  export {
    Modal,
    BModal
  }

  export const Progress: BvPlugin
  export const BProgress: Component | ComponentOptions | AsyncComponent
  export const BProgressBar: Component | ComponentOptions | AsyncComponent

  export const Spinner: BvPlugin
  export const BSpinner: Component | ComponentOptions | AsyncComponent

  export {
    Table,
    BTable
  }

  export {
    Toast,
    BToast,
    BToaster
  }
}
