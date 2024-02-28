import "./hero.css";

import { useEffect, useState } from "react";

export default function Hero({ items, interval }) {
    const [index, setIndex] = useState(0);
    const [prev_index, setPrevIndex] = useState(0);
    const _prev_index = index-1 >= 0 ? index-1 : items.length-1;
    const _next_index = index+1 < items.length ? index+1 : 0;

    const slide_next = () => {
        setPrevIndex(index);
        setIndex(_next_index);
    }

    const slide_prev = () => {
        setPrevIndex(index);
        setIndex(_prev_index);
    }

    const preload = () => {
        for (let i=0; i<items.length; i++) {
            var img = new Image();
            img.src = items[i].image;
        }
    }

    const animate = () => {
        const slideshow = document.getElementById("slideshow-container");
        const nodes = slideshow.getElementsByClassName("hero");
        for (let i=0; i<nodes.length; i++) {
            const node = nodes[i];
            node.style.left = `${(-100 * index)}%`;
        }
    }

    useEffect(() => {
        const intervalId = setInterval(slide_next, interval)
        preload();

        return () => { clearInterval(intervalId); };
    });

    useEffect(() => {
        animate();
    });

    const apply_min = index - 1
    const apply_max = index + 1;
    return (
        <div id="slideshow-container" className="hero-container">
            <svg className="hero-arrow" style={{left: 0}} onClick={slide_prev} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                {items.map((item, i) => {
                    const apply = (i >= apply_min && i <= apply_max);
                    const curr_children = item.children;
                    const curr_image = item.image;
                    const curr_bgpos = item.bgpos;
                    const curr_style = {
                        backgroundImage: `url(${curr_image})`,
                        backgroundPosition: curr_bgpos,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }

                    const wrapper_justify = item.justify;
                    const wrapper_align = item.align;
                    const wrapper_style = {
                        justifyContent: wrapper_justify,
                        alignItems: wrapper_align,
                    };

                    const card_left = item.right;
                    const card_right = item.left;
                    const card_down = item.up;
                    const card_up = item.down;
                    const card_style = {
                        top: card_up,
                        bottom: card_down,
                        left: card_left,
                        right: card_right,
                    };

                    return (
                        <div key={i} className="hero" style={apply ? curr_style : {}}>
                            <div className="hero-wrapper" style={wrapper_style}>
                                <div className="hero-card" style={card_style}>
                                    {curr_children}
                                </div>
                            </div>
                        </div>
                    );
                })}
            <svg className="hero-arrow" style={{right: 0}} onClick={slide_next} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>
    );
}
