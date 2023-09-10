import { CategoryElement } from "@/models";

interface Props extends CategoryElement{
  filterItems: (id: string) => void; 
}

const NavbarItem = ({id,name,filterItems}: Props ) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault(); 
    filterItems(String(id));
    
  }
    return (
      <li onClick={handleClick}>
        <a href="">{name}</a>
      </li>
    );
  };

  export default NavbarItem