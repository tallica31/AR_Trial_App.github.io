# AR_Trial_App

初回授業（1コマ）で実装できる、無料寄りのWeb ARサンプルです。

## できること

- Android / iOS のブラウザで実行（HTTPS配信時）
- カメラで `Hiro` マーカーを認識するとハイライト表示
- ハイライト領域をタップすると3Dオブジェクトを表示

> 補足: 本サンプルの「物体認識」は、授業で成功率を上げるために **マーカー認識** を採用しています。

## 技術スタック

- [A-Frame](https://aframe.io/)
- [AR.js (A-Frame)](https://github.com/AR-js-org/AR.js/)
- 静的ファイル配信（GitHub Pagesなど）

## ローカル実行

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いてください。

## スマホでの実行

1. このリポジトリを GitHub に push
2. GitHub Pages を有効化（`main` ブランチ / root）
3. 配布URLへスマホからアクセス
4. カメラ権限を許可
5. Hiroマーカーを映す

Hiroマーカー（印刷・表示用）:
- https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png

## ファイル構成

- `index.html`: ARシーン定義
- `app.js`: マーカー認識時のハイライト・タップ・3D生成ロジック
- `styles.css`: 画面上部HUDのスタイル
