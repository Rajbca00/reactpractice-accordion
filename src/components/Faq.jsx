import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <div className="faq">
      <div className="bold">
        {title}
        {isCollapsed ? (
          <FontAwesomeIcon
            style={{ color: "#e718b1" }}
            icon={faPlus}
            onClick={handleCollapse}
          />
        ) : (
          <FontAwesomeIcon
            style={{ color: "#e718b1" }}
            icon={faMinus}
            onClick={handleCollapse}
          />
        )}
      </div>
      {!isCollapsed && <p>{content}</p>}
    </div>
  );
};
export default Faq;
