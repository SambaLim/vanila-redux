import { connect } from "react-redux";
import { withRouter } from "../util/withRouter";

function Detail({ params: { id }, toDos }) {
  const toDo = toDos.find(toDo => toDo.id === parseInt(id))
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    toDos: state
  };
}

export default connect(mapStateToProps)(withRouter(Detail));
