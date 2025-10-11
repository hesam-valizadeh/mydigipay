export class ListModel<DataModel> {
  data: Array<DataModel>;
  item = (index: number): DataModel | null => this.data && this.data.length && this.data[index] ? this.data[index] : null;

  constructor(data?: Array<DataModel>) {
    this.data = data ?? [];
  }
}
