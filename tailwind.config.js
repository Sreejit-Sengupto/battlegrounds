/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'teko': ['Teko', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
      'headliner': ['Headliner', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/bgmi_cover.jpeg')",
        'hero_mob': "url('/images/main_bg_m1.jpg')",
        'hmpg_section2_bgimg': "url('/images/videot_bg.jpg')",
        'newsBanner': "url('/images/news-section-banner.jpg')",
        'homeNews': "url('/images/home_news_bg.jpg')",
        'carouselImg': "url('/images/CarouselBg.jpg')",
        'downloadImg': "url('/images/download-section-bg.jpg')",
        'grBg': "url('/images/game-responsibly-bg.jpg')",
        'grNav1': "url('/images/game_responsibly_nav_1_thumb.jpg')",
        'grNav2': "url('/images/game_responsibly_nav_2_thumb.jpg')",
        'grNav3': "url('/images/game_responsibly_nav_3_thumb.jpg')",
        'bgRedeem': "url('/images/bg_redeem.jpg')",
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