import "./main.css";
import { useSelector } from "react-redux";
function Home() {
  const isDark = useSelector((state) => state.theme.value);
  const Texts = useSelector((state) => state.lang.home);

  return (
    <section
      className={`m-auto w-[75%] text-center rounded-lg home
    ${
      isDark
        ? `text-big-stone-100 bg-big-stone-900 hover:text-big-stone-200`
        : `text-big-stone-900 hover:text-big-stone-600 `
    } `}
    >
      <h1
        className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl
      xl:text-8xl mb-5 mt-20  rtl "
      >
        {Texts.welcome}
        <br />
        {Texts.mayName}
      </h1>
      <span className="dark:text-white text-[0.5rem] block m-auto sm:text-[0.9rem] w-[75%] md:w-[90%] main-container">
        {Texts.introduc}
      </span>
    </section>
  );
}

export default Home;
