import React from 'react'

function Image() {
  return (
    <section id="imageType" className="image__wrap section nexon">
    <h2>Artist gallery</h2>
    <p>아티스트의 스냅입니다. 더 많은 사진은 아티스트의 이름을 클릭해주세요.</p>
    <div className="image__inner container">
        <article className="image">
            <div className="image__header">
                <figure className="image__figure">
                    <img src="http://res.heraldm.com/phpwas/restmb_allidxmake.php?idx=5&simg=201903111510202682667_20190311151139_02.jpg" alt="애교만점 웰시코기"/>
                </figure>
            </div>
            <div className="image__body">
                <a href="#" className="image__btn">pH-1</a>
            </div>
        </article>
        <article className="image">
            <div className="image__header">
                <figure className="image__figure">
                    <img src="https://img.vogue.co.kr/vogue/2022/05/style_628edcc00b58b-800x1109.jpg" alt="애교만점 웰시코기"/>
                </figure>
            </div>
            <div className="image__body">
                <a href="#" className="image__btn">백예린</a>
            </div>
        </article>
        <article className="image">
            <div className="image__header">
                <figure className="image__figure">
                    <img src="https://w.namu.la/s/1bd87f4ee76457e83afbf1f95eb34f3ea5656e6120877a68884b249522d48adb68ccbd1be31786eb86298b307ad43ce83a8fe33507cabe02860070cf11cbd927740381c5a4ffd3e63826ed5dea6f6d5c366ee628acceb68bd3e3f893f6459a8b" alt="애교만점 웰시코기"/>
                </figure>
            </div>
            <div className="image__body">
                <a href="#" className="image__btn">Ash Island</a>
            </div>
        </article>
    </div>
</section>
  )
}

export default Image;