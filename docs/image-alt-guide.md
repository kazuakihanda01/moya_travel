# MOYA Travel Image Alt Guide

MOYA Travelで使用する画像altテキストの管理台帳。

このファイルを画像altテキストの正本として管理する。

## 基本ルール

- 「地名 → 具体的な場所 → 写っているもの・状況」を基本とする
- 写真から確認できない情報や宣伝文句を入れない
- SEOキーワードを不自然に詰め込まない
- 装飾目的の画像は alt="" を使用する
- 新しい画像を追加した場合は、この台帳も更新する
- altを変更する場合は、実装とこの台帳を同時に更新する

## Alt Text Registry

| No. | Image | Section | Alt |
|---:|---|---|---|
| 1 | hero-mountain.png | HERO | 山形県最上郡金山町の山霧に包まれる竜馬山 |
| 2 | journey-walk.svg.jpg | JOURNEYS 01 | 山形県最上郡金山町の大堰公園を流れる大堰と古民家 |
| 3 | journey-stay.jpg | JOURNEYS 02 | 山形県最上郡舟形町の小国川沿いに広がる鮎の里と猿羽根山 |
| 4 | journey-field.jpg | JOURNEYS 03 | 山形県最上地域をめぐり、カメラを手に撮影ワークショップを楽しむ仲間 |
| 5 | BF_13147.jpg | Capture Tokyo × MOYA Travel | 山形県最上郡金山町上春木地区の山里で大型カメラを構える写真家たち |
| 6 | partners_top.jpg | PARTNERS | 山形県最上郡金山町のシェーネスハイム金山の全景 |

## 3. 実装時の注意

- 上記6画像以外のaltは今回変更しない
- 画像ファイルそのものは変更しない
- 画像のファイル名・パスを変更しない
- レイアウト、サイズ、表示位置を変更しない
- CSSを変更しない
- 表示テキストを変更しない
- SEO title / description / canonical / metadataBase は変更しない
- OGP / Twitter metadata は変更しない
- robots.txt / sitemap は変更しない
- JSON-LD等の構造化データは追加しない
- 新しいページは作成しない

## 4. 確認

実装後、以下を確認してください。

- 6画像すべてに指定したaltが設定されている
- docs/image-alt-guide.md の内容と実装が一致している
- それ以外のaltが変更されていない
- 画像表示・レイアウトに変更がない
- TypeScript / lintで今回の変更に起因するエラーがない
- 意図していないファイルが変更されていない
