import { connect } from "react-redux";
import Main from "./main.component";
import { setId } from "../../state/main";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setId
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
