import { DateComponentProps } from "@/app/interfaces";
import { format } from "date-fns";
// import PropTypes from "prop-types";

const DateComponent: React.FC<DateComponentProps> = (props) => {
  return (
    <time dateTime={props.dateString}>
      {format(new Date(props.dateString), "LLLL	d, yyyy")}
    </time>
  );
};

// DateComponent.propTypes = {
//   dateString: PropTypes.string.isRequired,
// };

export default DateComponent;
