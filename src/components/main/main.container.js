import { connect } from "react-redux";
import Main from "./main.component";
import { setIds } from "../../state/main";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setIds
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
