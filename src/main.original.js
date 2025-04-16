import { AppContext } from './context/AppContext';
import ProductList from './data/Product.json'; //상품 데이터 Json
import { createUI } from './component/createUi'; //화면 그려주는 곳
import * as Utils from './utils/index.js';

let lastSel;

function main() {
  const ui = createUI();

 
  AppContext.cartDisp = ui.cartDisp;
  AppContext.sum = ui.sum;
  AppContext.sel = ui.sel;
  AppContext.addBtn = ui.addBtn;
  AppContext.stockInfo = ui.stockInfo;
  AppContext.productList = ProductList;

  Utils.updateSelOpts(AppContext);
  Utils.calcCart(AppContext);

  AppContext.addBtn.addEventListener('click', () => Utils.handleAddtoCart(AppContext));
  AppContext.cartDisp.addEventListener('click', (e) => Utils.handleCartActions(e, AppContext));

  //번개세일
  setTimeout(function () {
    setInterval(function () {
      let luckyItem = ProductList[Math.floor(Math.random() * ProductList.length)];
      if (Math.random() < 0.3 && luckyItem.q > 0) {
        luckyItem.val = Math.round(luckyItem.val * 0.8);
        alert('번개세일! ' + luckyItem.name + '이(가) 20% 할인 중입니다!');
        Utils.updateSelOpts();
      }
    }, 30000);
  }, Math.random() * 10000);

  setTimeout(function () {
    setInterval(function () {
      if (lastSel) {
        let suggest = ProductList.find(function (item) {
          return item.id !== lastSel && item.q > 0;
        });
        if (suggest) {
          alert(suggest.name + '은(는) 어떠세요? 지금 구매하시면 5% 추가 할인!');
          suggest.val = Math.round(suggest.val * 0.95);
          Utils.updateSelOpts();
        }
      }
    }, 60000);
  }, Math.random() * 20000);
}

main();
