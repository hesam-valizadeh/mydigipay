export class ListModel<DataModel> {
  data: DataModel[];
  item = (index: number): DataModel | null => (this.data && this.data.length && this.data[index] ? this.data[index] : null);

  constructor(data?: DataModel[]) {
    this.data = data ?? [];
  }
}
