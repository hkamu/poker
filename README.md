##### 06_particle2dx_js  
[https://hosokawa9360.github.io/06_particle2dx_js/](https://hosokawa9360.github.io/06_particle2dx_js/)  

### particle2dx を使ってパーティクルを作成する演習  
https://hosokawa9360.github.io/06_particle2dx_js/  

### その１ 多くのパラメータを実装する  
https://github.com/hosokawa9360/06_particle2dx_js/issues/2  

### その２　背景とキャラクターを表示させる  
背景とキャラクターをパーティクルに組み合わせるといい感じになる  


### その３　プリセットのParticleFireを使用する  
CPU負荷が大きいので観察したら、コメントアウトか消すこと。  
https://github.com/hosokawa9360/06_particle2dx_js/issues/3  

### その4　プリセットのParticleFireに設定を追加する  
https://github.com/hosokawa9360/06_particle2dx_js/issues/4  

### その５　Particle2dxの背景用にスクリーンショットを作成する
Particle2dxの背景用に火、水、木属性のキャラクターと敵キャラクターを配置する。  

配置し終えたら、画面表示させ、スクリーンショットを保存する。(PNG画像)  
Particle2dx用にスクリーンショットを加工。  
Particle2dxで画面サイズを1200×600のサイズにする。  
画面サイズの並びの「background」をクリックすると、背景用のカラーパレットとαブレンドのスライダー、背景用の画像のアップロード領域が表示されます。  
「background DropPNG」と表示された枠内に、上記のスクリーンショットをドラッグ＆ドロップでアップロードして背景に設置する。  


### その６　Particle2dxで火属性のパーティクルを作成する  
https://github.com/hosokawa9360/06_particle2dx_js/issues/1  

Ｍｏｄｅ：Ｇｒａｖｉｔｙ  
* Motion   
    * Angle  0 1  
    * GravityXY 1580 0  
* Color&Shape  
    * Start Size 12 0  
    * End Seze 40 0   
    * Start Red 1 0
    * End Red 1 0
    * Start Green 0.2 0
    * End Green 0.4 0
    * Start Blue 0.2 0.2
    * End Blue 0.8 0   

作成したパーティクルの保存は、画面右上にある編集機能の「Export」から行う。「Export」リンクをクックすると、Ｅｘｐｏｒｔ設定が表示される。  
filenameにはﾌｧｲﾙ名を入力する　（例：Fire_Attack1.plist)  

その下にCocos2d-xロゴが入った２つのダウンロードボタンがある。  
 1.　パーティクルのパラメータファイル（.plist)の中にＰＮＧイメージを含める形式でダウンロードする  
 2.　パーティクルのパラメータﾌｧｲﾙとＰＮＧﾌｧｲﾙを個別にダウンロードする  

今回は、１.の形式でダウンロードする。  
１．の形式では、パーティクルのパラメータとＰＮＧを別々に管理しなくて済む。  
２．の形式てでは、画像を差し替えて、同じパラメータを使うといったような用途では便利。  
