import { useSelector } from "react-redux";
function Fugure({ SkillData }) {
  const isDark = useSelector((state) => state.theme.value);
  return SkillData.map((value, index) => {
    return (
      <figure key={index} className="w-[100%]  rounded m-1 p-1">
        <h1
          className={`pt-3 text-2xl ${
            isDark ? `text-big-stone-200` : `text-big-stone-800`
          } font-semibold mb-2 capitalize`}
        >
          <i className={value.class}></i> {value.category}
        </h1>
        {value.skills.map((val, index) => {
          return (
            <span
              key={index}
              className="m-1 inline-block capitalize bg-big-stone-200 text-big-stone-900 font-medium rounded-sm hover:scale-[1.03]
            hover: shadow
         transition  py-1 px-2  "
            >
              {val}
            </span>
          );
        })}
      </figure>
    );
  });
}

export default Fugure;
