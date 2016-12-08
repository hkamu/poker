//app.js
//var pickedTiles = [];

//var DealerArray = [0,1,2,3,4];

var tile;
var tile_D;
var hint_tile;
var tile_Box;
var moves = 0;
var hint;
var help_img;
var hint_flg;

var yama = [];

var gameLayer = cc.Layer.extend({
    init: function() {
      this._super();
      var size = cc.director.getWinSize();

      //ヒントをapp.js上で表示する
      hint = new Help();
      this.addChild(hint,2);
      hint.setVisible(false);
      hint_flg = false;
      tile = [];


    //背景
    var TitleBG_png = cc.Sprite.create(res.TitleBG_png);
     TitleBG_png.setPosition(size.width / 2, size.height / 1);
    this.addChild(TitleBG_png);

      //ヒントボタン
    for(i=0;i<1;i++){
            hint_tile = new MemoryTile();
            this.addChild(hint_tile,0);
            //タイルを格子状に配置する計算式
            hint_tile.setPosition(size.width / 1.2, size.height / 1.1);
        }

        //山
        for(var i=0; i<4;i++){
          for(var j=0; j<5; j++){
            yama.push(j);
          }
        }
    for (var i = 0; i < 10; i++) {
         var rnd1 = Math.floor(Math.random() * 20);
         var rnd2 = Math.floor(Math.random() * 20);
         var wk = yama[rnd1];
         yama[rnd1] = yama[rnd2];
         yama[rnd2] = wk;
      }
  console.log(yama);


        //プレイヤー側カード並べる
    for(i=0;i<5;i++){
            var number = yama[i];
            tile[i] = new PlayerTile(number);
            //tile.cardval = PlayerArray[i];
            this.addChild(tile[i],0);
            console.log(tile[i].value);
            //タイルを格子状に配置する計算式
            tile[i].setPosition(40+i*60,100);
        }

        //ディーラー側カード並べる
    for(i=0;i<5;i++){
            var nunber = yama[i];
            tile_D = new DealerTile(number);
            //tile_D.pictureValue = DealerArray[i];
            this.addChild(tile_D,0);
            //タイルを格子状に配置する計算式
            tile_D.setPosition(40+i*60,350);
        }
        //手札チェック
        Cardcheck();

    cc.eventManager.addListener(listener, this);
  },
});
//ヒントボタン実装
var MemoryTile = cc.Sprite.extend({
    ctor:function() {
        this._super();
        this.initWithFile(res.hint_btn_png);
    }
});

//プレイヤー画像表示
var PlayerTile = cc.Sprite.extend({
  value:null,
   PlayerArray: [res.heart_png,res.spade_png,res.clover_png,res.Dia_png,res.peace_png],
    ctor:function(number) {
        this._super();
        //var rnd = Math.floor(Math.random() * 5);
          this.initWithFile(this.PlayerArray[number]);
          this.value = number;

    }
});

//ディーラー画像表示
var DealerTile = cc.Sprite.extend({
    ctor:function() {
        this._super();
        this.initWithFile(res.dealer_png);
    }
});
//--------------------ヒント関係-----------------------------------
var listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function (touch, event) {
        //if(pickedTiles.length<2){
            tile_Box = hint_tile.getBoundingBox();
            if (cc.rectContainsPoint(tile_Box, touch.getLocation())) {
              if (hint_flg == false) {
                hint.setVisible(true);
                hint_flg = !hint_flg;
              }else {
                hint.setVisible(false);
                hint_flg = !hint_flg;
              }
              }
          //}
          return true;
      }
});

var Help = cc.Layer.extend({
  ctor: function(){
    this._super();
    var size = cc.director.getWinSize();

    help_img = new cc.Sprite(res.hint_png);
    help_img.setPosition(cc.p(size.width * 0.5, size.height * 0.5));
    help_img.setScale(1);
    this.addChild(help_img);
  }
});

//カードチェック
function Cardcheck(){
  var pair = 0;
    for(var i = 0; i < 4; ++i){
        for(var j = i+1; j < 5; ++j){
            if(tile[i].value == tile[j].value)
                ++pair;
        }
    }
    switch (pair) {
      case 0:
        console.log("ノーペア");
        break;
      case 1:
        console.log("1ペア");
        break;
      case 2:
        console.log("2ペア");
        break;
      case 3:
        console.log("3カード");
        break;
      case 4:
        console.log("フルハウス");
        break;
      case 6:
        console.log("4カード");
        break;
      case 10:
        console.log("5カード");
        break;

      default:

    }
}

var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new gameLayer();
        layer.init();
        this.addChild(layer);
    }
});
