import React, { useState } from "react";
import "./nav.css";

const NavBar = () => {
  const [navPosition, setnavPosition] = useState("");
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
   
    if (prevScrollpos > currentScrollPos) {
      setnavPosition("active ok");
    }else if(prevScrollpos === currentScrollPos){
      setnavPosition("active ok")
    }
     else {
      setnavPosition("hidden");
    }
    
    prevScrollpos = currentScrollPos;
  };

  return (
    <div>
       <iframe
        src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FKathmandu"
        width="100%"
        height="90"
        frameborder="0"
        seamless
      ></iframe>
      <nav className={navPosition}>navbar</nav>
     
     
      <br />
      <p>
        quibusdam ad voluptatum nobis velit ipsa quod saepe voluptates? Est modi
        possimus alias. Est numquam commodi culpa expedita, odit quam nihil co
        rrupti? Impedit deleniti vitae ea dolorum, aspernatur ratione quisquam
        esse sed nostrum, non e rror quidem molestias, libero quia tempore at
        quibusdam sapiente aut eos? Doloremque eaque quo, e xcepturi sequi
        commodi tenetur culpa quibusdam eius recusandae itaque inventore facilis
        amet adipisc i expedita, dolorem aliquid magnam. Tempore, dolorem
        doloribus minima nam exercitationem quae dolore perspiciatis eaque non
        laboriosam dicta dolor deleniti quas eveniet deserunt aut praesentium
        blanditiis sint possimus, iure atque laborum commodi! Fuga quis placeat
        minus odit dolore distinctio dolores autem beatae? Hic est sunt minima
        necessitatibus tempora ea? Expedita sapiente enim itaque. Ipsa impedit
        consequuntur, quia seq ui illum veritatis cupiditate debitis omnis animi
        accusamus harum sint consequatur et aut eum atque itaque nisi ? Repellat
        atque, minus amet mollitia dolore, enim illum quam suscipit quaerat,
        minima doloribus? Eveniet ipsam fuga, dignissimos soluta itaque modi
        fugit quia nisi culpa eius odio eaque minima odit voluptate adipisci,
        inc idunt aliquid temporibus consectetur molestias similique. Beatae
        dignissimos voluptatem officia quaerat. Iste sunt nam porro cum tenetur
      </p>
      <br />{" "}
      <p>
        architecto explicabo illum quam Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur quas i repellendus sed mollitia, autem,
        quibusdam ad voluptatum nobis velit ipsa quod saepe voluptates? Est modi
        possimus alias. Est numquam commodi culpa expedita, odit quam nihil co
        rrupti? Impedit deleniti vitae ea dolorum, aspernatur ratione quisquam
        esse sed nostrum, non e rror quidem molestias, libero quia tempore at
        quibusdam sapiente aut eos? Doloremque eaque quo, e xcepturi sequi
        commodi tenetur culpa quibusdam eius recusandae itaque inventore facilis
        amet adipisc i expedita, dolorem aliquid magnam. Tempore, dolorem
        doloribus minima nam exercitationem quae dolore perspiciatis eaque non
        laboriosam dicta dolor deleniti quas eveniet deserunt aut praesentium
        blanditiis sint possimus, iure atque laborum commodi! Fuga quis placeat
        minus odit dolore distinctio dolores autem beatae? Hic est sunt minima
        necessitatibus tempora ea? Expedita sapiente enim itaque. Ipsa impedit
        consequuntur, quia seq ui illum veritatis cupiditate debitis omnis animi
        accusamus harum sint consequatur et aut eum atque itaque nisi ? Repellat
        atque, minus amet mollitia dolore, enim illum quam suscipit quaerat,
        minima doloribus? Eveniet ipsam fuga, dignissimos soluta itaque modi
        fugit quia nisi culpa eius odio eaque minima odit voluptate adipisci,
        inc idunt aliquid temporibus consectetur molestias similique. Beatae
        dignissimos voluptatem officia quaerat. Iste sunt nam porro cum tenetur
        architecto explicabo illum quam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur quas i repellendus sed mollitia, autem,
        quibusdam ad voluptatum nobis velit ipsa quod saepe voluptates? Est modi
        possimus alias. Est numquam commodi culpa expedita, odit quam nihil co
        rrupti? Impedit deleniti vitae ea dolorum, aspernatur ratione quisquam
        esse sed nostrum, non e rror quidem molestias, libero quia tempore at
        quibusdam sapiente aut eos? Doloremque eaque quo, e xcepturi sequi
        commodi tenetur culpa quibusdam eius recusandae itaque inventore facilis
        amet adipisc i expedita, dolorem aliquid magnam. Tempore, dolorem
        doloribus minima nam exercitationem quae dolore perspiciatis eaque non
        laboriosam dicta dolor deleniti quas eveniet deserunt aut praesentium
        blanditiis sint possimus, iure atque laborum commodi! Fuga quis placeat
        minus odit dolore distinctio dolores autem beatae? Hic est sunt minima
        necessitatibus tempora ea? Expedita sapiente enim itaque. Ipsa impedit
        consequuntur, quia seq ui illum veritatis cupiditate debitis omnis animi
        accusamus harum sint consequatur et aut eum atque itaque nisi ? Repellat
        atque, minus amet mollitia dolore, enim illum quam suscipit quaerat,
        minima doloribus? Eveniet ipsam fuga, dignissimos soluta itaque modi
        fugit quia nisi culpa eius odio eaque minima odit voluptate adipisci,
        inc idunt aliquid temporibus consectetur molestias similique. Beatae
        dignissimos voluptatem officia quaerat. Iste sunt nam porro cum tenetur
        architecto explicabo illum quam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur quas i repellendus sed mollitia, autem,
        quibusdam ad voluptatum nobis velit ipsa quod saepe voluptates? Est modi
        possimus alias. Est numquam commodi culpa expedita, odit quam nihil co
        rrupti? Impedit deleniti vitae ea dolorum, aspernatur ratione quisquam
        esse sed nostrum, non e rror quidem molestias, libero quia tempore at
        quibusdam sapiente aut eos? Doloremque eaque quo, e xcepturi sequi
        commodi tenetur culpa quibusdam eius recusandae itaque inventore facilis
        amet adipisc i expedita, dolorem aliquid magnam. Tempore, dolorem
        doloribus minima nam exercitationem quae dolore perspiciatis eaque non
        laboriosam dicta dolor deleniti quas eveniet deserunt aut praesentium
        blanditiis sint possimus, iure atque laborum commodi! Fuga quis placeat
        minus odit dolore distinctio dolores autem beatae? Hic est sunt minima
        necessitatibus tempora ea? Expedita sapiente enim itaque. Ipsa impedit
        consequuntur, quia seq ui illum veritatis cupiditate debitis omnis animi
        accusamus harum sint consequatur et aut eum atque itaque nisi ? Repellat
        atque, minus amet mollitia dolore, enim illum quam suscipit quaerat,
        minima doloribus? Eveniet ipsam fuga, dignissimos soluta itaque modi
        fugit quia nisi culpa eius odio eaque minima odit voluptate adipisci,
        inc idunt aliquid temporibus consectetur molestias similique. Beatae
        dignissimos voluptatem officia quaerat. Iste sunt nam porro cum tenetur
        architecto explicabo illum quam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur quas i repellendus sed mollitia, autem,
        quibusdam ad voluptatum nobis velit ipsa quod saepe voluptates? Est modi
        possimus alias. Est numquam commodi culpa expedita, odit quam nihil co
        rrupti? Impedit deleniti vitae ea dolorum, aspernatur ratione quisquam
        esse sed nostrum, non e rror quidem molestias, libero quia tempore at
        quibusdam sapiente aut eos? Doloremque eaque quo, e xcepturi sequi
        commodi tenetur culpa quibusdam eius recusandae itaque inventore facilis
        amet adipisc i expedita, dolorem aliquid magnam. Tempore, dolorem
        doloribus minima nam exercitationem quae dolore perspiciatis eaque non
        laboriosam dicta dolor deleniti quas eveniet deserunt aut praesentium
        blanditiis sint possimus, iure atque laborum commodi! Fuga quis placeat
        minus odit dolore distinctio dolores autem beatae? Hic est sunt minima
        necessitatibus tempora ea? Expedita sapiente enim itaque. Ipsa impedit
        consequuntur, quia seq ui illum veritatis cupiditate debitis omnis animi
        accusamus harum sint consequatur et aut eum atque itaque nisi ? Repellat
        atque, minus amet mollitia dolore, enim illum quam suscipit quaerat,
        minima doloribus? Eveniet ipsam fuga, dignissimos soluta itaque modi
        fugit quia nisi culpa eius odio eaque minima odit voluptate adipisci,
        inc idunt aliquid temporibus consectetur molestias similique. Beatae
        dignissimos voluptatem officia quaerat. Iste sunt nam porro cum tenetur
        architecto explicabo illum quam..
      </p>
    </div>
  );
};

export default NavBar;
