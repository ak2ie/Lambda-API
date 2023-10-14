# Lambda API サーバ

- AWS Lambda
  - 関数 URL を利用し、API Gateway は利用しない
- AWS CDK で IaC
- バックエンドフレームワークには Express
- TypeScript だが、JavaScript も利用可能

# 開発環境構築

## 前提

- Node.js がインストール済

## 構築方法

`.env`をプロジェクトディレクトリ直下に作成

```text
LINE_TOKEN=....
```

# 実行方法

## ローカル

```bash
$ NODE_ENV=develop npx ts-node lambda/src/index.ts
```

# デプロイ

## GitHub Actions

## 手動
