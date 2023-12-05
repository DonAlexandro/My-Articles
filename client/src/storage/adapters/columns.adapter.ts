import localForage from 'localforage';
import { StorageWorker } from '../storage';

type ColumnVisiblityType = {
  [key: string]: {
    [x: string]: boolean;
  };
};

class ColumnsAdapter {
  private storage = new StorageWorker<LocalForage>(localForage);

  async getColumnVisibility() {
    const columnVisibility = (await this.storage.getItem('columnVisibility')) as ColumnVisiblityType;

    if (!columnVisibility) {
      return {};
    }

    return columnVisibility;
  }

  async setColumnVisibility(id: string, state: { [key: string]: boolean }) {
    const columnVisibility = await this.getColumnVisibility();

    this.storage.setItem('columnVisibility', { ...columnVisibility, [id]: state });
  }
}

export const columnsAdapter = new ColumnsAdapter();
