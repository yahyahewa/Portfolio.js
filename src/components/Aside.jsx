import { useSelector } from "react-redux";
function Aside() {
  const isDark = useSelector((state) => state.theme.value);
  return (
    <aside
      className={`w-[60px] fixed flex flex-col justify-center  items-center px-1 `}
    >
      <i
        className={`fa-brands fa-square-facebook scale-[2]
       m-1  ml-[0.5rem] md:ml-[2rem] mt-[2rem] 
       hover:scale-[2.5] hover:shadow-lg  
         transition-all
         ${
           isDark
             ? `text-big-stone-200 hover:text-big-stone-500 `
             : `text-big-stone-900 hover:text-big-stone-800`
         }  `}
      ></i>
      <i
        className={`fa-brands fa-square-instagram scale-[2]
       m-1  ml-[0.5rem] md:ml-[2rem] mt-[2rem] 
       hover:scale-[2.5] hover:shadow-lg  
         transition-all
         ${
           isDark
             ? `text-big-stone-200 hover:text-big-stone-500 `
             : `text-big-stone-900 hover:text-big-stone-600`
         }  `}
      ></i>
      <i
        className={`fa-brands fa-square-twitter scale-[2]
       m-1  ml-[0.5rem] md:ml-[2rem] mt-[2rem] 
       hover:scale-[2.5] hover:shadow-lg  
         transition-all
         ${
           isDark
             ? `text-big-stone-200 hover:text-big-stone-500 `
             : `text-big-stone-900 hover:text-big-stone-600`
         }  `}
      ></i>
      <i
        className={`fa-brands fa-linkedin scale-[2]
       m-1  ml-[0.5rem] md:ml-[2rem] mt-[2rem] 
       hover:scale-[2.5] hover:shadow-lg  
         transition-all
         ${
           isDark
             ? `text-big-stone-200 hover:text-big-stone-500 `
             : `text-big-stone-900 hover:text-big-stone-600`
         }  `}
      ></i>
      <i
        className={`fa-brands fa-square-git scale-[2]
       m-1  ml-[0.5rem] md:ml-[2rem] mt-[2rem] 
       hover:scale-[2.5] hover:shadow-lg  
         transition-all
         ${
           isDark
             ? `text-big-stone-200 hover:text-big-stone-500 `
             : `text-big-stone-900 hover:text-big-stone-600`
         }  `}
      ></i>
      <i
        className={`fa-brands fa-square-snapchat scale-[2]
       m-1  ml-[0.5rem] md:ml-[2rem] mt-[2rem] 
       hover:scale-[2.5] hover:shadow-lg  
         transition-all
         ${
           isDark
             ? `text-big-stone-200 hover:text-big-stone-500 `
             : `text-big-stone-900 hover:text-big-stone-600`
         }  `}
      ></i>
    </aside>
  );
}

export default Aside;
