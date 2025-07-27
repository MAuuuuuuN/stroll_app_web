# 散歩提案アプリ

## 概要
このアプリでは、外に出たいけど特に目的がない人や運動したいけど気力が湧かない人のために、散歩のルートを提案するアプリです。

## 内容
ユーザーがカテゴリーを選択すると、現在地から近いそのカテゴリーに沿った目的地を提案します。
その目的地を選択すると、現在地から目的地、そして最初の位置まで戻ってくるルートを表示します。

### カテゴリー
- カフェ
- 本屋
- 観光地
- 景色

など

## 技術的内容
- フレームワークに`React`、CSSフレームワークに`Tailwind`を使用します。
- Google Mapの表示に`Google Maps Platform`の`Maps JavaScript API`、ライブラリに`React Google Maps`を使用します。

### 使用技術

*   React
*   TypeScript
*   Vite
*   Tailwind CSS

## コマンド

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
# /stroll_app_web/stroll_app_webの階層で実行
npm run dev
```