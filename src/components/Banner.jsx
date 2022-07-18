import React from 'react'

function Banner() {
  return (
    <>
        <section id="bannerType" className="banner__wrap nexon">
            <h2 className="ir_so">슬라이드 영역</h2>
            <div className="banner__inner">
                <div className="banner">
                    <div className="banner__img">
                        <div className="desc">
                            <h3>YOUTUBE</h3>
                            <p>더 많은 노래는 유튜브에서 확인하실 수 있습니다.<br/>
                                구독과 좋아요 알림 설정까지 ~!
                            </p>
                            <div className="btn">
                                <a href="#" className="white">자세히 보기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Banner;