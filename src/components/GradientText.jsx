import "./GradientText.css";
import PropTypes from "prop-types";

export default function GradientText({
children,
className = "",
colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
animationSpeed = 8,
showBorder = false,
}) {
const gradientStyle = {
  backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
  animationDuration: `${animationSpeed}s`,
};

return (
  <div className={`animated-gradient-text ${className}`}>
    {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
    <div className="text-content" style={gradientStyle}>{children}</div>
  </div>
);
}

GradientText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    animationSpeed: PropTypes.number,
    showBorder: PropTypes.bool,
  };