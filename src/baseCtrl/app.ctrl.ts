import {makeObservable, observable} from 'mobx';

class AppCtrl {
  text: string = '';

  value: number = 1;

  constructor() {
    makeObservable(this, {
      text: observable,
      value: observable,
      // setText: action,
      // setValue: action,
      // reset: action
    });
  }

  setText(payload: string) {
    this.text = payload;
  }

  setValue(payload: number) {
    this.value = payload;
  }

  reset() {
    this.text = '';
  }
}

export default AppCtrl;
