import './error.css'
import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div>
      <section className="page_404 text-center">
            <div className="container">
                <div className="row justify-content-md-center" style={{height: '100vh', display: 'flex',alignItems: 'center',}}>
                <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                </div>
                
                <div className="contant_box_404">
                <h3 className="h2"><b>
                Look like you're lost
                    </b></h3>
                
                <p>the page you are looking for not avaible!</p>
                
                <Link to="/" className="btn btn-danger">Go to Home</Link>
            </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  );
}