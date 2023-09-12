import "./TheHeader.css";
const TheHeader : React.FC = () => {
  return (
    <header className="h-70 bg flex items-center">
      <div className="container mx-auto px-4 flex justify-end">
        <span className="text-white text-4xl uppercase tracking-widest">
          FastFood React
        </span>
      </div>
    </header>
  );
};
export default TheHeader;
