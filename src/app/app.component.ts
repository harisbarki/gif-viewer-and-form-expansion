import {ViewChildren, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  direction = 'row';

  @ViewChildren('bwGif') bwGifElements;

  originalGifs = [
    {
      url: 'assets/bw-gif (1).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (2).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (3).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (4).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (5).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (6).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (7).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (8).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (9).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (10).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (11).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (12).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (13).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (14).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (15).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (16).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (17).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (18).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100
    },
    {
      url: 'assets/bw-gif (19).gif',
      naturalWidth: 0,
      naturalHeight: 0,
      widthHeightRatio: 0,
      fxFlex: 100,
    },
  ];

  numOfColumns = 2;
  percentageSimilarSizeAllowed = 70;
  percentageSimilarSizeUpdated = false;
  gifs = [];

  constructor() {
    this.gifs = JSON.parse(JSON.stringify(this.originalGifs));
  }

  getPercentageChange(oldNumber, newNumber) {
    const decreaseValue = oldNumber - newNumber;
    return (decreaseValue / oldNumber) * 100;
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

      this.updateSizes();
    }, 500);
  }

  mergeSimilarRatios(x) {
    this.percentageSimilarSizeUpdated = false;
    for (const property in x) {
      if (x.hasOwnProperty(property.toString())) {
        let arr = x[property.toString()];

        // percentage similar combine
        for (const property2 in x) {
          if (x.hasOwnProperty(property.toString())) {
            if (property !== property2) {
              const percentageDifference = Math.abs(this.getPercentageChange(property, property2));
              if (percentageDifference <= this.percentageSimilarSizeAllowed) {
                const arr2 = x[property2.toString()];
                arr = arr.concat(arr2);
                const newRatio = (parseFloat(property) + parseFloat(property2)) / 2.0;
                if (!x[newRatio]) {
                  x[newRatio.toString()] = arr;
                } else {
                  x[newRatio.toString()] = x[newRatio.toString()].concat(arr);
                }
                delete x[property.toString()];
                delete x[property2.toString()];
                this.percentageSimilarSizeUpdated = true;
                return;
              }
            }
          }
        }
      }
    }
  }

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

}
