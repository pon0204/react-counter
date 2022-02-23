# react-counter

React練習用。じゅんやと達郎にReactの基礎を学んでもらう。

[完成目標]

https://main.d3rjpii5y3vsdh.amplifyapp.com/


[要件]

- カウントのプラス、マイナス、リセットができる
- カウンター自体を増やせる。削除できる
- カウンターに入力欄があり、タイトルを入力できる
- 複数のカウンターの合計値とタイトルが表示される


## 環境構築

### 事前準備

Dockerとgitを自分のPCに導入する。 (導入してある場合はしなくてOK)

[docker]
https://www.docker.com/get-started

https://chigusa-web.com/blog/windows%E3%81%ABdocker%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%97%E3%81%A6python%E7%92%B0%E5%A2%83%E3%82%92%E6%A7%8B%E7%AF%89/

[dokcerとは]
https://qiita.com/minato-naka/items/e9cd026747693759800c

[git]
https://www.sejuku.net/blog/73444

[gitとは]
https://www.sejuku.net/blog/5756


### 開発環境構築

レポジトリをclone
```
git clone https://github.com/pon0204/react-counter.git
```

フォルダを移動
```
cd react-counter
```

docker 起動
```
docker compose up
```

localhostをブラウザで開く
http://localhost:3000/


## git コマンド

```
// ブランチ作成 ＆ ブランチ移動
git checkout -b [ブランチ名]

// ブランチ移動
git checkout [ブランチ]

// コミット準備
git add . 

// コミット
git commit -m 'コミット名'

// githubにpush
git push origin [ブランチ名]

```

## tailwind使い方

公式ドキュメントを見る
https://tailwindcss.com/

vscodeの拡張機能をインストールする
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

以下の様に、classNameの中に使用したいclass名を指定する。
```
<p>className="text-center text-red-900 m-4 p-4"</p>

// 適用されるクラス
text-align: center;
color: red;
margin: 16px;
padding: 16px;

<div className="flex gap-x-10">
<p>伊藤</p>
<p>豪士</p>
</div>

// 適用されるクラス
display: flex;
column-gap: 2.5rem /* 40px */;

```

よく使うコマンド。
忘れたら公式ドキュメントで使いたいcssを検索すれば出てきます。
https://tailwindcss.com/

```

// -の後に数字が入る。数字は基本的に4の倍数を使用できる。
1~10,12,16,20,24,28....96まで

//[]を使用することで自由に記述出来る。
m-[300 px]

// margin 
m-4
mt-4 // margin-top
mb-4 // margin-bottom
mr-4 // margin-right
ml-4 // margin-left
mx-4 // x軸のみ
my-4 // y軸のみ

mx-auto // x軸で真ん中に寄せる
my-auto // y軸で真ん中に寄せる


// padding。mariginと書き方同じ
p-4 


// text-align
text-center
text-right
text-left


// font-size
f-4

// width, height

w-4
w-full // width: 100%
w-1/2 // width: 50%
w-[300px] // width: 300px

h-4
h-full // height: 100%
h-1/2 // height: 50%
h-[300px] // height: 300px


// 色
// 式はこんな漢字
要素(text)-色(red)-色味強さ(50~900)

text-red-900 // color: red

bg-red-900 // background-color: red


// display
flex // display:flex

block // display: none

hidden // display: none

```

