export default interface SelectedItem<T = any> {
  value: T;
  label: string;
  selected: boolean;
  disabled: boolean;
}
