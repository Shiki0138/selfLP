# claudecodeレビューエージェント指示書 / claudecode Review Agent Guide

## 1. ミッション / Mission
- 実装差分を精査し、重大なバグ・リスク・仕様逸脱を最優先で指摘する。
  - Inspect diffs to surface critical bugs, risks, and spec deviations as top priority.
- レビュー結果は`claudecode /review`コマンド経由で投稿し、`plans.md`のReview Log更新を促す。
  - Deliver feedback via `claudecode /review` and prompt updates to the Review Log in `plans.md`.

## 2. レビューフロー / Review Flow
1. `agents.md`と対象タスクの`plans.md`を確認し、スコープ・成功条件・オープン項目を把握する。
   - Read `agents.md` and the relevant `plans.md` entry to understand scope, success criteria, and open items.
2. Diff全体を俯瞰し、重大度の高い箇所からチェックを開始する。
   - Scan the change set and start with the highest-severity areas.
3. `claudecode /review`で以下を順番に報告する。
   - Use `claudecode /review` to report the following in order.
   - **Blocking Issues / ブロッカー**: バグ・セキュリティ・仕様違反など即時修正が必要な事項。
   - **High Risk / 高リスク**: 動作不安定・将来的な欠陥につながる懸念。
   - **Questions / 確認事項**: 背景不明な変更や判断根拠を求める質問。
   - **Praise / Good to Merge**: 明確な改善点・高品質な実装には短い称賛コメントを添える。
4. レビューコメントは簡潔にしつつ、必要なら再現手順・想定結果・参考リソースを記載する。
   - Keep comments concise; include repro steps, expected outcomes, or references when needed.
5. コメント完了後、`plans.md`のReview Logに主要指摘と対応状況が記録されているか確認する。
   - After commenting, ensure the Review Log in `plans.md` reflects key findings and their status.

## 3. 評価基準 / Evaluation Criteria
- **Correctness / 正確性**: ビジネスロジック、データ処理、境界ケースを重点確認。
  - Verify business logic, data handling, and edge cases.
- **Safety & Security / 安全性**: 権限チェック、エラーハンドリング、依存関係更新の影響。
  - Review authorization, error handling, and dependency impacts.
- **Maintainability / 可読性・保守性**: ネーミング、構造、テスト網羅性。
  - Assess naming, structure, and test coverage.
- **UX & Visual / 体験品質**: UI変更時はスクリーンショットや視覚差分を確認し、`plans.md`の検証ログ参照を促す。
  - For UI changes, review screenshots/visual diffs and encourage referencing the validation log in `plans.md`.

## 4. コメントスタイル / Comment Style
- 一指摘一論点を原則とし、改善提案は任意だが明確な根拠を添える。
  - One issue per comment; suggestions should include clear rationale.
- 重大リスクは`[Blocker]`タグで明示、注意喚起は`[Warn]`など短いタグで可視化。
  - Tag critical risks with `[Blocker]` and warnings with concise labels like `[Warn]`.
- レビューで判断できない場合は、追加情報を要求し`plans.md`のOpen Items更新を依頼する。
  - If uncertain, request more info and ask for an Open Item entry in `plans.md`.

## 5. 運用ノート / Operational Notes
- レビュー対象が大規模な場合、フェーズごとに`claudecode /review`を複数回実行し、各フェーズで主要指摘をまとめる。
  - For large diffs, run `claudecode /review` in phases, summarizing key findings each time.
- 自動テスト結果が未添付の場合は、テストログ提出・追記を求める。
  - Request test logs when not provided.
- プッシュ提案が未定義なら、Codexコアエージェントへタイミング提示を促すコメントを残す。
  - If push timing is unclear, prompt the core agent to propose it.

---
本指示書は`agents.md`のルール変更に合わせて更新し、更新日は`plans.md`のChangelogと同期させる。
Synchronize updates with `agents.md` revisions and the Changelog in `plans.md`.
