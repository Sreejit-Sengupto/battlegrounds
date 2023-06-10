/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'teko': ['Teko', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/bgmi_cover.jpeg')",
        'hero_mob': "url('src/assets/main_bg_m1.jpg')",
        'hmpg_section2_bgimg': "url('src/assets/videot_bg.jpg')",
        'newsBanner': "url('src/assets/news-section-banner.jpg')",
        'homeNews': "url('src/assets/home_news_bg.jpg')",
        'carouselImg': "url('src/assets/CarouselBg.jpg')",
        'downloadImg': "url('src/assets/download-section-bg.jpg')",
        'grBg': "url('src/assets/game-responsibly-bg.jpg')",
        'grNav1': "url('src/assets/game_responsibly_nav_1_thumb.jpg')",
        'grNav2': "url('src/assets/game_responsibly_nav_2_thumb.jpg')",
        'grNav3': "url('src/assets/game_responsibly_nav_3_thumb.jpg')",
        'bgRedeem': "url('src/assets/bg_redeem.jpg')",
      },
      fontFamily: {
        headliner: "'Headliner', 'sans-serif"
      },
      sepia: {
        100: '1'
      },
      saturate: {
        200: '2'
      },
      hueRotate: {
        45: '45deg'
      }
    },
  },
  plugins: [],
}