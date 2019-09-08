Vue.filter('number_format', function(val) {
  return val.toLocaleString();
});

var app = new Vue ({
  el: '#app',
  data: {
    //「セール対象」のチェック状態 true:チェックあり false:チェックなし
    showSaleItem: false,
    //「送料無料」のチェック状態 true:チェックあり false:チェックなし
    showDelvFree: false,
    //「並び替え」の選択値 1:標準 2:価格が安い順
    sortOrder: 1,
    // 商品リスト
    products: [
      //好きな画像を入れてください。
      { id: 1, name: '商品タイトル<br>説明', price: 1750, image: 'images/image.jpg', delv: 0, isSale: true },
      { id: 2, name: '商品タイトル<br>説明', price: 1700, image: 'images/image.jpg', delv: 0, isSale: false },
      { id: 3, name: '商品タイトル<br>説明', price: 1750, image: 'images/image.jpg', delv: 120, isSale: true },
      { id: 4, name: '商品タイトル<br>説明', price: 1944, image: 'images/image.jpg', delv: 0, isSale: false },
      { id: 5, name: '商品タイトル<br>説明', price: 1750, image: 'images/image.jpg', delv: 0, isSale: true },
      { id: 6, name: '商品タイトル<br>説明', price: 1944, image: 'images/image.jpg', delv: 120, isSale: false }
    ]
  },
  computed: {
    // 絞り込み後の商品リストを返す算出プロパティ
    filleredList: function() {
      // 絞り込み後の商品リストの格納
      var newList = [];
      for (var i = 0; i < this.products.length; i++) {
        var isShow = true;
        // i番目の商品が表示対象か判定
        // 「セール対象」チェックありで、セール対象商品ではない場合
        if (this.showSaleItem && !this.products[i].isSale) {
          isShow = false;
        }
        // 「送料無料」チェックありで、送料ありの商品の場合
        if (this.showDelvFree && this.products[i].delv > 0) {
          isShow = false;
        }
        // 表示対象の商品だけを新しい配列に追加する
        if (isShow) {
          newList.push(this.products[i]);
        }
      }
      // 並び替え機能
      if (this.sortOrder == 1) {

      }
      else if (this.sortOrder == 2) {
        // 価格が安い順に並び替える
        newList.sort(function(a,b) {
          return a.price - b.price;
        });
      }
      else if (this.sortOrder == 3) {
        // 価格が高い順に並び替える
        newList.sort(function(a,b) {
          return b.price - a.price;
        });
      }
      // 絞り込み後の商品リストを返す
      return newList;
    }
  }
});
