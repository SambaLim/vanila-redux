import { useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    const params = useParams();
    
    return (
      <Component
        history={history}
        params={params}
        {...props}
        />
    );
  };
  
  return Wrapper;
};
