/**
 * Type containing class definitions for different alert types
 * @link https://getbootstrap.com/docs/5.0/components/alerts/#examples
 */
export type AlertTypes =
  | 'alert-primary'
  | 'alert-secondary'
  | 'alert-success'
  | 'alert-danger'
  | 'alert-warning'
  | 'alert-info'
  | 'alert-light'
  | 'alert-dark';

/**
 * Alert events
 * @link https://getbootstrap.com/docs/5.0/components/alerts/#events
 */
export enum EventType {
  Close = 'close.bs.alert',
  Closed = 'closed.bs.alert',
}
