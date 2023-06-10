function SubHero() {
  return (
    <>
      <div className="bg-hmpg_section2_bgimg">
        <h1 className="font-oswald font-bold text-center text-2xl lg:text-5xl text-[#333] pt-[5rem] lg:pt-[10rem] lg:pb-[2.5rem]">
          INDIA IS PUSHING RANK, AND YOU
        </h1>
        <div className="flex justify-center items-center">
          {/* For mobile view */}
          <iframe
            className="lg:hidden py-8"
            width="360"
            height="200"
            src="https://www.youtube.com/embed/jWtgNcKb8sQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          {/* For desktop view */}
          {/* <iframe
            className="hidden lg:block py-8"
            width="1460"
            height="867"
            src="https://www.youtube.com/embed/jWtgNcKb8sQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <iframe
            width="1200"
            height="700"
            src="https://www.youtube.com/embed/jWtgNcKb8sQ"
            title="India Is Pushing Rank, And You? | BGMI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="hidden lg:block py-8"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default SubHero;
