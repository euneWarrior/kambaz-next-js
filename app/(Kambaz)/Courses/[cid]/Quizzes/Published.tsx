import { FaCheckCircle, FaCircle } from "react-icons/fa";
export default function Published({isPublished}: {isPublished: boolean}) {
  return (
    <span className="me-1 position-relative">{isPublished && (
	<div>
	      <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
	</div>

    )}
    {!isPublished && (
	<div>
	      <FaCheckCircle style={{ top: "2px" }} className="text-grey me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
	</div>

    )}

    </span>);}