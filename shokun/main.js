// タブのDOMを取得し、変数で定義
const tabs = document.getElementsByClassName('menu_item');
// tabsを配列に変換する
const tabsAry = Array.from(tabs);

// クラスの切り替えをtabSwitch関数で定義
function tabSwitch(event) {
  //全消し
  const activeTag = Array.from(document.getElementsByClassName('active'));
  activeTag[0].classList.remove('active');

  const showTag = Array.from(document.getElementsByClassName('show'));
  showTag[0].classList.remove('show');

  //クッリクイベントのターゲットに状態の追加
  event.target.classList.add('active');

  const index = tabsAry.indexOf(event.target);
  // クリックしたcontentクラスにshowクラスを追加する
  document.getElementsByClassName('content')[index].classList.add('show');
}

// タブメニューの中でクリックイベントが発生した場所を探し、下で定義したtabSwitch関数を呼び出す
tabsAry.forEach((tab) => {
  tab.addEventListener('click', tabSwitch);
});
