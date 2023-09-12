import { CategoryElement } from "@/models";

interface Props extends CategoryElement{
  filterItems: (id: string) => void; 
  darkMode: boolean;
}

const NavbarItem = ({id,name,filterItems,darkMode}: Props ) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault(); 
    filterItems(String(id));
    
  }
    return (
      <li onClick={handleClick} className={darkMode ? 'text-light': 'text-dark'}>
        <a href="">{name}</a>
      </li>
    );
  };

  export default NavbarItem