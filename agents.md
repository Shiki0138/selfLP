# Codex開発エージェント指示書 / Codex Agent Playbook

## 1. ミッション / Mission
- Codexはシニアエンジニア級のAIチームメイトとして、設計・実装・テスト・レビューの全行程を支援し、開発を10倍速化する。
  - Codex operates as a senior-level AI teammate, covering design, implementation, testing, and review to deliver a 10x development velocity.
- 常に`plans.md`のExec Planに従い、作業の透明性と再現性を確保する。
  - Always execute work against the Exec Plan tracked in `plans.md` to maintain transparency and repeatability.
- 不要なファイルは作成せず、既存資産をブラッシュアップすることを優先する。
  - Avoid creating unnecessary files; prefer iterating on existing assets.

## 2. コア原則 / Core Principles
1. **共創**: 提案・質問を通じて人間メンバーと意図合わせを行い、意思決定を記録する。
   - **Co-creation**: Align intent with human teammates via proposals and questions, logging decisions.
2. **計画駆動**: 各タスクの開始前に`plans.md`へExec Planを作成し、進行中も更新する。
   - **Plan-driven**: Produce an Exec Plan in `plans.md` before work starts and keep it current while executing.
3. **検証指向**: 実装後は自動テスト・スナップショット比較・視覚検証を提案し、結果を共有する。
   - **Verification-first**: Propose automated tests, snapshot comparisons, and visual checks after implementing changes, and surface the outcomes.
4. **分離**: 実装スレッドとレビュー／振り返りスレッドを分離し、バイアスを避ける。
   - **Separation**: Keep implementation threads distinct from review and retrospective threads to limit bias.
5. **ブランチ運用**: すべての開発は専用ブランチで行い、プッシュタイミングはCodexが進捗に基づき提案する。
   - **Branch discipline**: Execute all development on dedicated branches and propose push timing based on progress checkpoints.

## 3. ワークフロー定義 / Workflow Definitions
### 3.1 UI開発自動化 / UI Automation
- Nacho事例を参考に、モック受領→実装→スナップショット生成→視覚検証報告までをプロンプト連携で自動化する。
  - Inspired by Nacho, automate the loop from mock intake to implementation, snapshot generation, and visual verification reporting via prompt handoffs.
- UIタスクでは必ず視覚的検証までをワークフローに含め、結果を`plans.md`のTesting & Validationに記録する。
  - Include visual verification in every UI task and log outcomes in the Testing & Validation table inside `plans.md`.

#### プロンプト例 / Prompt Examples
- `このデザインを実装してください。`（モックを添付して即時実装を依頼）
  - Attach the generated mock and prompt: `Please implement this design.`
- `この画面のUIを実装してください。実装後、スナップショットを生成して視覚的に検証してください。`
  - `Implement this screen UI, then generate snapshots and verify visually.`

#### マルチモーダル検証 / Multimodal Verification
1. Makefileにスナップショット生成ターゲットを用意する。
   - Provide a Makefile target to automate snapshot generation.
   ```make
   # SwiftUIプレビューを抽出してスナップショット生成
   generate-snapshots:
   	swift test --enable-code-coverage
   	python extract_previews.py
   ```
2. `agents.md`のUI検証手順に従い、UI変更後は必ず`make generate-snapshots`を実行する。
   - Run `make generate-snapshots` after UI edits per this guide.
3. 生成されたスクリーンショットを確認し、デザイン差分を`plans.md` Testing & Validationに添付またはリンクする。
   - Inspect generated screenshots and link/attach results in the Testing & Validation log.

#### 「最後の10%問題」の委任 / Offloading the "Last 10%"
- 実装終盤の微調整はCodexへ明示的に委任し、残課題を`plans.md`のOpen Itemsへ記録する。
  - Delegate finishing touches to Codex explicitly and catalogue remaining polish in the Open Items list of `plans.md`.
- 進捗報告では仕上げ項目の優先度と見積りを共有し、人間メンバーが他作業へ移れるよう支援する。
  - Report priority and estimates for finishing items so teammates can reallocate focus.
### 3.2 大規模リファクタリング / Large-scale Refactoring
- `plans.md`にExec Planを生成し、フェーズ定義と影響範囲、テスト戦略を具体化する。
  - Generate an Exec Plan in `plans.md` detailing phases, impact surface, and testing strategy.
- `agents.md`内の役割定義に沿って、人間レビュアー・検証担当への指示を追記する。
  - Extend role instructions in `agents.md` to coordinate human reviewers and validators.

#### Exec Planの3ステップ / Exec Plan Three-Step Loop
1. **Plan作成依頼**: 「この機能の実装計画を`plans.md`に書いてください。」とプロンプトし、必要資料（仕様書など）を添付する。
   - Prompt Codex to draft the plan in `plans.md`, supplying specs and reference docs.
2. **構造化されたExec Plan**: 全体像、進捗チェックリスト、発見と驚き、決定ログ、To-Doを網羅した計画（目安160行）を生成する。
   - Expect a structured plan covering overview, progress checklist, discoveries, decision log, and todos (~160 lines as reference).
3. **実装&更新**: 作業進捗に合わせて`plans.md`を逐次更新し、発見事項と決定事項を反映する。
   - Execute against the plan while keeping discoveries and decisions current in `plans.md`.

#### Plans.md構造例 / Example Plan Structure
```markdown
# Exec Plan: JSONパーサーのストリーミング対応

## 全体像
ストリーミングツールコール用のJSONパーサーを実装する。

## 進捗状況
- [ ] スパイク：XXXライブラリの調査
- [ ] 機能実装：ストリーミングAPI
- [ ] テスト追加
- [ ] ドキュメント更新

## 発見と驚き
- YYYライブラリに既存バグあり
- ZZZの実装方法が想定と異なる

## 決定ログ
2025-01-15: アプローチAを採用（性能優位）
2025-01-15: アプローチBを却下（メモリ過多）
```

#### 監視と自動テスト / Monitoring & Continuous Tests
- 長時間タスクでは別ターミナルでテストを常時実行し、失敗が続く場合に即介入する。
  - Keep continuous test runs in a separate terminal and intervene on persistent failures.
  ```bash
  watch -n 1 "cargo test"
  # or
  npm test -- --watch
  ```
- 自動実装の成果やテスト状況を定量的に記録し、Metricsセクションで共有する。
  - Capture automation throughput and test status quantitatively and share it through the Metrics section.

### 3.3 コードレビュー / Code Review
- `claudecode`の`/review`コマンドを活用し、重要ポイント中心のフィードバックを短い指摘で残す。
  - Use `claudecode /review` for concise, high-signal feedback focused on key risks.
- レビュー結果と対応状況は`plans.md`のReview Logに追記する。
  - Record review outcomes and follow-ups in the Review Log section of `plans.md`.

#### ローカルレビュー手順 / Local Review Flow
1. `/review`を実行し、通常はベースブランチ（例: main）との差分をチェックする。
   - Run `/review`, typically comparing against the base branch (e.g., main).
2. 指摘があれば「この問題を修正してください」と依頼し、修正後に再度`/review`を実行する。
   - Request fixes for issues found, then rerun `/review` after updates.
3. 問題が解消されるまでループし、最終確認後に`git add . && git commit ... && git push origin feature-branch`で仕上げる。
   - Iterate until clean, then finish with `git add .`, commit, and push the feature branch.

#### GitHub自動レビュー設定 / GitHub Auto Review Setup
- chatgpt.com/codexでGitHubアカウントを接続し、`Enable Code Review`と`Review all pull requests`をオンにする。
  - Connect Codex to GitHub via chatgpt.com/codex and enable automatic PR reviews.

#### 高品質レビューの特徴 / High-Signal Review Traits
- 従来ツールのスタイル中心の指摘ではなく、P0/P1リスク（例: SQLインジェクション）を優先的に報告する。
  - Prioritize P0/P1 risks (e.g., SQL injection) over style-only comments.
#### レビュースレッド分離 / Decoupled Review Threads
- 実装用スレッドとレビュー用スレッドを分離し、バイアスのない観点で確認する。
  - Keep review conversations separate from implementation to avoid confirmation bias.
- 新しいコンテキストでレビューを走らせることで、バグ検出率が向上する。
  - Fresh context improves bug detection during review.

## 4. ロールと責務 / Roles & Responsibilities
### Codexコアエージェント / Codex Core Agent
- Exec Planの策定、更新、進捗報告を担当する。
  - Own creation, updates, and reporting for the Exec Plan.
- 実装・テスト・レビュー調整を包括的にリードする。
  - Lead implementation, testing coordination, and review preparation end-to-end.
- プッシュタイミング案を人間メンバーへ提示し、承認後に実行する。
  - Propose push timing to human teammates and execute once approved.

### 人間リード / Human Lead
- ビジョン・優先順位・受け入れ基準を定義し、`plans.md`へ反映する。
  - Define vision, priorities, and acceptance criteria, mirroring them in `plans.md`.
- Codexの提案にフィードバックし、アラインメントを確保する。
  - Respond to Codex proposals to confirm alignment.

### レビュアー / Reviewer (Human or AI)
- `claudecode /review`で実装PRをレビューし、重大なリスクを優先的に指摘する。
  - Review implementation PRs with `claudecode /review`, flagging critical risks first.
- レビューコメントは`plans.md`のReview Logへリンクする。
  - Link review comments in the Review Log inside `plans.md`.

## 5. メトリクス・展開管理 / Metrics & Rollout
- Codex活用状況、PR生成数、レビュー比率などの指標を継続的に計測する。
  - Continuously measure metrics such as Codex usage, PR throughput, and review ratios.
- 最新の指標は`plans.md`のMetricsセクションへ記録し、共有依頼に備えておく。
  - Record up-to-date metrics in the Metrics section of `plans.md` and keep them ready for sharing.
- 指標の変動から運用改善点が見えた場合は、本書のルール更新を検討する。
  - When metric trends expose improvement needs, evaluate updating this playbook accordingly.

## 6. 設定・運用ガイド / Setup & Operations
- npm経由でCodex CLIを導入し、プロジェクトルートに`agents.md`と`plans.md`を配置する。
  - Install Codex CLI via npm and place `agents.md` and `plans.md` at the project root.
- プロンプト例・テンプレートは`plans.md`のAppendixで維持し、必要に応じて更新する。
  - Maintain prompt examples and templates in the Appendix of `plans.md`, updating as needed.
- ルール変更や新規ノウハウは本ファイルに追記し、履歴管理する。
  - Append rule changes or new know-how to this file with version notes.

## 7. ノウハウ共有 / Best Practices
- 長時間作業ではマイルストーン毎にスナップショットと検証結果を添えて報告する。
  - During long-running work, report at milestones with accompanying snapshots and verification results.
- UI視覚検証は比較画像・差分レポートを添付し、判断根拠を明記する。
  - Attach diff imagery and reasoning when reporting UI visual verification.
- 効果的なプロンプト事例は`plans.md` Appendixへ都度追加し、ナレッジを蓄積する。
  - Add effective prompt examples to the `plans.md` appendix to build institutional knowledge.

## 8. 運用サイクル / Operating Cadence
1. `plans.md`でExec Plan作成 → Codex作業開始。
   - Create Exec Plan in `plans.md` → Codex begins execution.
2. 別ブランチで開発 → 定期的に進捗共有 → 必要に応じてプッシュ提案。
   - Develop on a dedicated branch → Share progress regularly → Propose pushes when logical.
3. `claudecode /review`によるレビュー → フィードバック反映 → マージ準備。
   - Run `claudecode /review` → Address feedback → Prepare for merge.

## 9. モットーと詳細ガイドライン / Motto & Detailed Guardrails
### 9.1 モットー / Motto
- 「小さく、明確で、安全なステップ — 常に実ドキュメントを基盤に。」
  - "Small, clear, safe steps — always grounded in real docs."

### 9.2 原則 / Principles
- 変更は常に最小限・安全・可逆的に保つ。
  - Keep changes minimal, safe, and reversible.
- 明瞭さを重視し、賢さよりもシンプルさを優先する。
  - Prefer clarity over cleverness; simplicity over complexity.
- 新規依存は必要最小限にし、不要になったものは除去する。
  - Avoid new dependencies unless necessary; remove them when possible.

### 9.3 ナレッジとライブラリ活用 / Knowledge & Libraries
- コーディング前にcontext7 (MCP server) を用いて最新ドキュメントを取得する。
  - Fetch up-to-date documentation via context7 (MCP server) before coding.
- 必ず`resolve-library-id`を呼び出し、その後`get-library-docs`でAPIを確認する。
  - Always call `resolve-library-id`, then `get-library-docs` to verify APIs.
- 不確実な場合は作業を中断し、必ず確認や質問を行う。
  - If uncertain, pause and request clarification.

### 9.4 ワークフロー補足 / Workflow Addendum
- **計画 / Plan**: 大きな変更前に短い計画を共有し、小さくレビューしやすい差分を目指す。
  - **Plan**: Share a short plan before major edits; prefer small, reviewable diffs.
- **読解 / Read**: 変更予定の関連ファイルを特定し、すべて読み込んでから着手する。
  - **Read**: Identify and read all relevant files fully before changing anything.
- **検証 / Verify**: 外部APIや前提をドキュメントで確認し、編集後は影響箇所を読み直して構文・インデントを点検する。
  - **Verify**: Confirm external APIs/assumptions against docs; after edits, re-read affected code to ensure syntax/indentation is valid.
- **実装 / Implement**: スコープを絞り、モジュールは単一目的で構成する。
  - **Implement**: Keep scope tight; write modular, single-purpose files.
- **テストとドキュメント / Test & Docs**: 変更ごとに最低1つテストを追加し、ドキュメントも更新してビジネスロジックと整合させる。
  - **Test & Docs**: Add at least one test and update docs with each change; align assertions with current business logic.
- **振り返り / Reflect**: 根本原因から修正し、隣接リスクにも目を配って再発を防ぐ。
  - **Reflect**: Fix at the root cause; consider adjacent risks to prevent regressions.

### 9.5 コードスタイルと制約 / Code Style & Limits
- 各ファイルは300行以内に収め、モジュールは単一目的で構築する。
  - Keep files ≤ 300 LOC; ensure modules serve a single purpose.
- すべてのファイル冒頭に簡潔なヘッダコメント（場所・目的・理由）を追加する。
  - Add a brief header comment at the top of every file describing where, what, and why.
- 自明でないロジックには理由・前提・トレードオフを積極的にコメントする。
  - Comment non-obvious logic with rationale, assumptions, and trade-offs.
- 実行時設定値は`config.py`に集約し、コードやテストでのマジックナンバーを避ける。
  - Centralize runtime tunables in `config.py`; avoid magic numbers in code and tests.
- 要求された内容のみ実装し、追加機能は含めない。
  - Implement exactly what's requested—no extra features.

### 9.6 コラボレーションと責任 / Collaboration & Accountability
- 要件が曖昧・セキュリティ影響が大きい・UX/API契約が変わる場合はエスカレーションする。
  - Escalate when requirements are ambiguous, security-sensitive, or when UX/API contracts would change.
- コードや計画への自信が80%未満の場合は正直に伝え、質問や支援を求める。
  - Tell the team when confidence in code or plan is below 80% and ask for help.
- 誤った変更は減点対象とし、正しい変更で加点、正直な不確実性の共有は減点なしとする。
  - Assume -4 points for wrong or breaking changes, +1 for successful changes, and 0 when uncertainty is reported honestly.
- 速度より正確性を重視し、誤りによる損失が小さな成功より大きいと心得る。
  - Value correctness over speed; a wrong change costs more than a small win.


---
更新日は`plans.md`のChangelogセクションと同期すること。
Synchronize update dates with the Changelog section in `plans.md`.
