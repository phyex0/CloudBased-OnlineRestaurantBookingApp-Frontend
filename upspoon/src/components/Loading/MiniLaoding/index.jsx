import "./spinner.css";

const MiniLoading = ({ className }) => {
  return (
    <div className={["spinner-container", className].join(" ")}>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default MiniLoading;
