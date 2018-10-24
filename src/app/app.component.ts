import {ViewChildren, AfterViewInit, Component} from '@angular/core';

import {originalGifs} from './shared/gifs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('bwGif') bwGifElements;
  loading = true;

  originalGifs = originalGifs;
  gifs = [];
  numOfColumns = 2;
  percentageSimilarSizeAllowed = 10;
  percentageSimilarSizeUpdated = false;

  constructor() {
    /* make copies */
    this.originalGifs = JSON.parse(JSON.stringify(originalGifs));
    this.gifs = JSON.parse(JSON.stringify(originalGifs));
  }

  ngAfterViewInit() {
    setTimeout(() => {
      for (let i = 0; i < this.bwGifElements._results.length; i++) {
        const nativeElem = this.bwGifElements._results[i].nativeElement;
        this.originalGifs[i].naturalWidth = nativeElem.naturalWidth;
        this.originalGifs[i].naturalHeight = nativeElem.naturalHeight;
        this.originalGifs[i].widthHeightRatio = Math.floor(
          this.originalGifs[i].naturalWidth / this.originalGifs[i].naturalHeight * 10.0
        ) / 10.0;
      }
      this.loading = false;
      this.updateSizes();
    }, 1000);
  }

  /* Updates the sizes of the gifs by similar width/height ratios and num of columns */
  updateSizes() {
    if (this.bwGifElements && this.bwGifElements._results) {

      const result = this.originalGifs.reduce(function (r, a) {
        r[a.widthHeightRatio] = r[a.widthHeightRatio] || [];
        r[a.widthHeightRatio].push(a);
        return r;
      }, Object.create(null));


      const x = JSON.parse(JSON.stringify(result));
      const updatedArr = [];

      this.mergeSimilarRatios(x);
      while (this.percentageSimilarSizeUpdated) {
        this.mergeSimilarRatios(x);
      }

      for (const property in x) {
        if (x.hasOwnProperty(property.toString())) {
          const arr = x[property.toString()];

          this.setFxFlexOptions(arr);

          for (let i = 0; i < arr.length; i++) {
            updatedArr.unshift(arr[i]);
          }
        }
      }

      this.gifs = updatedArr;
      console.log(result);
      console.log(x);
      console.log(this.gifs);
    }
  }

  /* Merges similar ratios together in an object */
  mergeSimilarRatios(groupedObject) {
    this.percentageSimilarSizeUpdated = false;
    for (const property in groupedObject) {
      if (groupedObject.hasOwnProperty(property.toString())) {
        let arr = groupedObject[property.toString()];

        // percentage similar combine
        for (const property2 in groupedObject) {
          if (groupedObject.hasOwnProperty(property.toString())) {
            if (property !== property2) {
              const percentageDifference = Math.abs(this.getPercentageChange(property, property2));
              if (percentageDifference <= this.percentageSimilarSizeAllowed) {
                const arr2 = groupedObject[property2.toString()];
                arr = arr.concat(arr2);
                const newRatio = (parseFloat(property) + parseFloat(property2)) / 2.0;
                if (!groupedObject[newRatio]) {
                  groupedObject[newRatio.toString()] = arr;
                } else {
                  groupedObject[newRatio.toString()] = groupedObject[newRatio.toString()].concat(arr);
                }
                delete groupedObject[property.toString()];
                delete groupedObject[property2.toString()];
                this.percentageSimilarSizeUpdated = true;
                return;
              }
            }
          }
        }
      }
    }
  }

  /* Sets the flex values to be used by the view to know how much real estate to give to this gif*/
  setFxFlexOptions(arr) {
    // set everyone as equal
    for (let i = 0; i < arr.length; i++) {
      arr[i].fxFlex = 100 / this.numOfColumns;
    }

    // set apart last items
    // if last items doesnt fit in columns then move to new full column
    if (arr.length % this.numOfColumns !== 0) {
      const lastNumOfItemsToCheck = arr.length % this.numOfColumns;
      const fxFlex = 100 / lastNumOfItemsToCheck;
      for (let i = 0; i < lastNumOfItemsToCheck; i++) {
        arr[arr.length - 1 - i].fxFlex = fxFlex;
      }
    }
  }

  /* Generic function */
  getPercentageChange(oldNumber, newNumber) {
    const decreaseValue = oldNumber - newNumber;
    return (decreaseValue / oldNumber) * 100;
  }

}
