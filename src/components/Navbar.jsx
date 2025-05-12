import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
				    <div className="starWars_logo">
						<img src="" alt="" />Logo
					</div>
					
				</Link>
				<div className="ml-auto">
					
						<div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    {/* <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li> */}
  </ul>
</div>
					
				</div>
			</div>
		</nav>
	);
};