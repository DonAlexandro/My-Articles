/**
 * It's a wrapper around the Storage interface that provides a set of methods to interact with the
 * storage instance.
 * Put the instance of the storage you need into the constructor.
 */
export class StorageWorker<S extends LocalForage | Storage> {
  /** It's a private property that is used to store the instance of the Storage interface. */
  private storageInstance: S;

  constructor(instance: S) {
    this.storageInstance = instance;
  }

  /**
   * The function sets a value with provided name to the storage.
   *
   * @param {string} name - The name of the item to be stored.
   * @param {string} value - The value to be stored.
   */
  setItem<V>(name: string, value: V) {
    this.storageInstance.setItem(name, value as string);
  }

  /**
   * This function gets an item from storage by the provided name.
   *
   * @param {string} name - The name of the item to get from the storage.
   *
   * @returns The value of the item with the name passed in.
   */
  getItem(name: string) {
    return this.storageInstance.getItem(name);
  }

  /**
   * It removes an item from the storage instance.
   *
   * @param {string} name - The name of the item to remove.
   */
  removeItem(name: string) {
    this.storageInstance.removeItem(name);
  }
}
