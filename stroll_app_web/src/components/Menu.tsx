
interface MenuProps {
  resetMap: () => void;
}

const Menu = ({ resetMap }: MenuProps) => {
  return (
    <div 
      style={{
        position: 'absolute',
        top: '5vh',
        left: 0,
        width: '25vw',
        height: '90vh',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
        padding: '1rem',
        overflowY: 'auto'
      }}
    >
      <h2>Menu</h2>
      <button 
        onClick={resetMap} 
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "8px",
          cursor: "pointer"
        }}
      >
        Reset View
      </button>
    </div>
  );
};

export default Menu;
