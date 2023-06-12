import React from "react";
import bgText from "/images/game-responsibly-text.png";
import gameResImg from "/images/game_responsibly_nav_3.jpg"

export default function GameResponsibly() {
  return (
    <>
      <div className="bg-grBg">
        <img src={bgText} alt="" className="block mx-auto" />
      </div>

      <div className="lg:flex justify-evenly items-center hidden py-8">
        <a
          href="#safe--gaming"
          className="bg-grNav1 w-[380px] h-[214px] flex justify-center items-end text-white p-5 font-teko text-2xl"
        >
          IN-GAME FEATURES FOR SAFE GAMING
        </a>
        <a
          href="#game--responsibly"
          className="bg-grNav2 w-[380px] h-[214px] flex justify-center items-end text-white p-5 font-teko text-2xl"
        >
          WHY GAME RESPONSIBLY?
        </a>
        <a
          href="#battle--together"
          className="bg-grNav3 w-[380px] h-[214px] flex justify-center items-end text-white p-5 font-teko text-2xl"
        >
          INDIA, LET'S BATTLE THIS TOGETHER!
        </a>
      </div>

      <hr />

      <div id="safe--gaming" className="w-[80%] mx-auto mt-20">
        <h1 className="font-oswald text-4xl tracking-tighter font-semibold text-[#333] mb-10">
          IN GAME FEATURES FOR SAFE GAMING
        </h1>
        <p className="font-teko text-[#666] text-lg">
          As a parent, we know most of the time you are wondering why your child
          is spending so much time with their phone.
        </p>
        <p className="font-teko text-[#666] text-lg mb-8">
          What games are they playing? Who are they talking to?
        </p>
        <iframe
          width="300"
          height="170"
          src="https://www.youtube.com/embed/NP-uLAZo1yc"
          title="Game Responsibly | BGMI | KRAFTON"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mb-10 lg:hidden"
        ></iframe>

        {/* For desktop */}
        <iframe
          width="1200"
          height="675"
          src="https://www.youtube.com/embed/NP-uLAZo1yc"
          title="Game Responsibly | BGMI | KRAFTON"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mb-10 hidden lg:block"
        ></iframe>
        <p className="font-teko text-[#666] text-lg">
          When we launched Battlegrounds Mobile India, we truly believed that
          creating a culture of responsible gaming was our responsibility too.
        </p>
        <p className="font-teko text-[#666] text-lg mb-8">
          So, here’s what we did about it.
        </p>

        <ul className="list-disc">
          <li className="text-[#333]">
            <h3 className="font-teko font-bold text-xl">
              VIRTUAL WORLD WARNING MESSAGE
            </h3>
            <p className="font-teko text-lg text-[#666]">
              Just before the game starts, we have made sure that our players
              are aware of the virtual world they are entering.
            </p>
            <p className="font-teko text-lg text-[#666] mb-8">
              The in-game audio reinforces that this game exists in a virtual
              world and is not their real life.
            </p>
          </li>

          <li className="text-[#333]">
            <h3 className="font-teko font-bold text-xl">OTP AUTHENTICATION</h3>
            <p className="font-teko text-lg text-[#666]">
              Every player, below the age of 18, needs to register a parent or a
              guardian before they start play for the first time. An OTP will be
              sent to the registered person’s number,
            </p>
            <p className="font-teko text-lg text-[#666] mb-8">
              post which the child is allowed to play the game.
            </p>
          </li>

          <li className="text-[#333]">
            <h3 className="font-teko font-bold text-xl">BREAKTIME REMINDERS</h3>
            <p className="font-teko text-lg text-[#666]">
              Some games can get intense and make players lose track of time.
              But with our timely breaktime reminders, we have made sure that
              our players get the required downtime.
            </p>
            <p className="font-teko text-lg text-[#666] mb-8">
              These reminders help them look up from their game and get back to
              real life, maintaining a healthy game-life balance.
            </p>
          </li>

          <li className="text-[#333]">
            <h3 className="font-teko font-bold text-xl">GAMEPLAY LIMITS</h3>
            <p className="font-teko text-lg text-[#666]">
              With a strict gameplay limit in place, we have made sure that
              players below 18 years do not indulge in gaming for more than 3
              hours per day.
            </p>
            <p className="font-teko text-lg text-[#666] mb-8">
              This automatically helps them treat gaming as an activity
              performed in moderation.
            </p>
          </li>

          <li className="text-[#333]">
            <h3 className="font-teko font-bold text-xl">DAILY SPEND LIMITS</h3>
            <p className="font-teko text-lg text-[#666] mb-8">
              We have also set an in-game daily spend limit of Rs. 7000 that
              automatically stops them from overspending and overgaming.
            </p>
          </li>

          <li className="text-[#333]">
            <h3 className="font-teko font-bold text-xl">
              MODERATED GAME GRAPHICS
            </h3>
            <p className="font-teko text-lg text-[#666] mb-10">
              We have sensitised in-game graphics to inculcate a healthy and
              responsible gaming culture. We have reduced violence, nudity,
              bloodshed and set parameters that keep the language in check
            </p>
          </li>
        </ul>

        <p className="font-teko text-lg text-[#666] mb-10">
          This is just a start. There is a long way to go but with your
          continued support, we are sure to grow the love for gaming in every
          household.
        </p>
      </div>

      <div id="game--responsibly" className="w-[80%] mx-auto mt-20">
        <h1 className="font-oswald text-4xl tracking-tighter font-semibold text-[#333] mb-10">
          WHY GAME RESPONSIBLY?
        </h1>
        <p className="font-teko text-[#666] text-lg">
          We know you love hot-dropping into Erangel, acing those headshots or
          maybe spending hours trying to improve that finish count, but when you
          play for hours, you hardly find time to look up at the world.
        </p>
        <p className="font-teko text-[#666] text-lg">
          We are here to remind you that the real world is equally exciting too.
          We at Battlegrounds Mobile India, share the same passion for gaming as
          you.
        </p>
        <p className="font-teko text-[#666] text-lg">
          At the same time we urge you to look-up every now and then from your
          game as well. Enjoy our games in moderation, maintain a healthy
          game-life balance and spend quality time in the real world.
        </p>
        <p className="font-teko text-[#666] text-lg my-5">
          P.S. If you’re stuck on the other end, here’s how you can get your
          friends to look up.
        </p>

        <iframe
          width="300"
          height="170"
          src="https://www.youtube.com/embed/n8iNT78L2J8"
          title="Look Up | Game Responsibly"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="lg:hidden"
        ></iframe>

        <iframe
          width="1200"
          height="675"
          src="https://www.youtube.com/embed/n8iNT78L2J8"
          title="Look Up | Game Responsibly"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="hidden lg:block"
        ></iframe>

        <p className="font-teko text-[#666] text-lg mt-5">Always remember,</p>
        <p className="font-teko text-[#666] text-lg mb-10">
          TREAT GAMING AS A FORM OF ENTERTAINMENT AND DON’T LET IT OVERPOWER
          YOUR LIFE. GAME RESPONSIBLY.
        </p>
      </div>

      <div id="battle--together" className="w-[80%] mx-auto mt-20">
      <h1 className="font-oswald text-4xl tracking-tighter font-semibold text-[#333] mb-10">
      INDIA, LET'S BATTLE THIS TOGETHER!
        </h1>
        <p className="font-teko text-[#666] text-lg">
        As a country in awe of gaming, we at Krafton salute your passion.
        </p>
        <p className="font-teko text-[#666] text-lg mb-10">
        However, we want you to show the same passion for responsible gaming as well.
        </p>
        <img src={gameResImg} alt="" className="mb-10" />
        <p className="font-teko text-[#666] text-lg">
        Always remember, Battlegrounds Mobile India is meant for your entertainment.
        </p>
        <p className="font-teko text-[#666] text-lg mb-32">
        So keep it light and have fun!
        </p>
      </div>
    </>
  );
}
