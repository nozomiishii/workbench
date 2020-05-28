import React, { useRef, useEffect } from "react";
import imgGirl from "./images/bags.JPG";
import imgBoy from "./images/black.JPG";

import { TweenMax, TimelineLite, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // content
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, "start")
      .from(
        girlImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(boyImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        boyImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);
  return (
    <div className="hero" ref={(el) => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease coused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behavior</div>
                </div>
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                mollitia repudiandae, officiis atque omnis at animi laudantium
                praesentium fugit dicta magni, ipsum veniam labore? Ullam ipsum
                inventore voluptatum culpa laboriosam.
              </p>
              <div className="btn-row">
                <button className="expore-button">explore</button>
                <div className="arrow-icon">↓</div>
              </div>
            </div>
          </div>
          <div className="hero-images">
            　
            <div className="hero-images-inner" ref={(el) => (images = el)}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="img-girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="img-boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
