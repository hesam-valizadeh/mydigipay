export class ListModel<DataModel> {
  public data: DataModel[];

  public constructor(data?: DataModel[]) {
    this.data = data ?? [];
  }
  public item = (index: number): DataModel | null => {
    const exists = 
      this.data.length > index && 
      this.data[index] !== undefined;

    return exists ? this.data[index] : null;
  };
}