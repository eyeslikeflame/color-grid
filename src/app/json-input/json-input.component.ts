import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Cell } from '../cell';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnInit {

  constructor(public appService: AppService) { }

  public showJsonCopy = false;
  public showJsonPaste = false;

  public copyJson(event) {
    event.srcElement.disabled = false;
    event.srcElement.select();
    document.execCommand("copy");
  }

  /**
   * Ввод JSON в поле
   * @param event
   */
  public inputJson(event): void {
    try {
      const json = JSON.parse(event.srcElement.value);
      this.validateJson(json);
      this.appService.emptyCells = json;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Проверка JSON.
   * На всякий случай
   * Пользователю иногда нельзя доверять даже такие вещи
   * Можно было бы еще проверять на значения, а не только ключи, но в следующий раз.
   * @param json
   */
  private validateJson(json) {
    json.map((el, index) => {
      let keys;

      if ( !(el === null || el instanceof Object ) ) {
        throw new Error(`array element is invalid at index ${index}` );
      }
      if (el instanceof Object) {
        keys = checkObjectKeys(el, index);
      }

    });

    /**
     * Проверка объекта на ключи
     * @param el
     * @param i
     */
    function checkObjectKeys(el, i) {
      for (let key of Object.keys(el)) {
        if (key !== 'r' && key !== 'g' && key !== 'b' && key !== 'rgb') {
          throw new Error(`object has invalid format at position ${i}. please check your inputs`);
        }
      }
    }
  }

  ngOnInit() {
  }

}
